import { CARD_CATALOG } from '../../data/cards/basicCards';
import type { CardCondition, CardDefinition, CardEffect, CardInstance, CardModifier } from './cardTypes';
import type { CombatState } from './combatTypes';
import { spendEnergy } from './energyEngine';
import { moveCardFromHand } from './deckEngine';

export interface PlayedCard { card: CardInstance; definition: CardDefinition; effects: CardEffect[]; }

export function cardConditionIsMet(state: CombatState, condition: CardCondition): boolean {
  if (condition.type === 'hp-below') return state.player.hp < state.player.maxHp * condition.percentage / 100;
  if (condition.type === 'hp-above') return state.player.hp > state.player.maxHp * condition.percentage / 100;
  return state.deck.hand.every((card) => CARD_CATALOG[card.definitionId]?.type === condition.cardType);
}

export function cardConditionsAreMet(state: CombatState, definition: CardDefinition): boolean {
  return (definition.conditions ?? []).every((condition) => cardConditionIsMet(state, condition));
}

export function canPlayCard(state: CombatState, definition: CardDefinition): boolean {
  return state.phase === 'player-turn' && state.energy.current >= definition.cost && cardConditionsAreMet(state, definition);
}

export function resolveCardDefinition(definition: CardDefinition, instance: CardInstance): CardDefinition {
  const level = instance.upgradeLevel ?? (instance.upgraded ? 1 : 0);
  let resolved = level >= 1 && definition.upgrade ? applyUpgrade(definition) : definition;
  if (level >= 2) resolved = applySecondUpgrade(resolved);
  return (instance.modifiers ?? []).reduce((current, modifier) => applyModifier(current, modifier), resolved);
}

export function playCard(state: CombatState, cardUid: string, definition: CardDefinition): { state: CombatState; played: PlayedCard } {
  if (state.phase !== 'player-turn') throw new Error('Cards can only be played during the player turn');
  const card = state.deck.hand.find((candidate) => candidate.uid === cardUid);
  if (!card || card.definitionId !== definition.id) throw new Error('Card is not available in hand');
  const resolved = resolveCardDefinition(definition, card);
  if (!cardConditionsAreMet(state, resolved)) throw new Error('Card conditions are not met');
  const destination = resolved.type === 'power' ? 'power' : resolved.keywords?.includes('exhaust') ? 'exhaust' : 'discard';
  const nextDeck = moveCardFromHand(state.deck, cardUid, destination);
  return { state: { ...state, energy: spendEnergy(state.energy, resolved.cost), deck: nextDeck, log: [...state.log, `Played ${resolved.name}`] }, played: { card, definition: resolved, effects: resolved.effects } };
}

function applyUpgrade(definition: CardDefinition): CardDefinition {
  const upgrade = definition.upgrade!;
  return { ...definition, ...upgrade, name: upgrade.name ?? `${definition.name}+`, effects: upgrade.effects ?? definition.effects, keywords: upgrade.keywords ?? definition.keywords, conditions: upgrade.conditions ?? definition.conditions, upgrade: definition.upgrade };
}

/**
 * Auto-computed second upgrade: boosts the second distinct numeric value in the effect list
 * (or the first again if only one exists). Bonus amounts are effect-type-aware so they feel
 * meaningful rather than a flat +1.
 */
const SECOND_UPGRADE_BONUS: Record<string, number> = { damage: 3, block: 3, draw: 1, 'gain-energy': 1, heal: 3, 'self-damage': 0, status: 1, 'resource-scaled-damage': 2, 'target-scaled-damage': 2, 'regen-per-living-enemy': 1 };
function applySecondUpgrade(definition: CardDefinition): CardDefinition {
  const effects = definition.effects.map((e) => ({ ...e }));
  // Find all effects that carry a primary numeric value.
  const numericIndices = effects.reduce<number[]>((acc, e, i) => {
    if ('amount' in e || 'stacks' in (e as Record<string, unknown>)) acc.push(i);
    return acc;
  }, []);
  // Second upgrade targets the second numeric effect, or the first if only one exists.
  const targetIndex = numericIndices.length >= 2 ? numericIndices[1] : numericIndices[0];
  if (targetIndex !== undefined) {
    const effect = effects[targetIndex] as Record<string, unknown>;
    const bonus = SECOND_UPGRADE_BONUS[effect.type as string] ?? 2;
    if (bonus > 0) {
      if (typeof effect.amount === 'number') effect.amount = effect.amount + bonus;
      else if (typeof effect.stacks === 'number') effect.stacks = effect.stacks + Math.max(1, Math.floor(bonus / 2));
    }
  }
  const suffix = definition.name.endsWith('+') ? '+' : '++';
  return { ...definition, name: `${definition.name}${suffix}`, effects: effects as CardEffect[] };
}

function applyModifier(definition: CardDefinition, modifier: CardModifier): CardDefinition {
  return { ...definition, cost: Math.max(0, definition.cost + (modifier.costDelta ?? 0)), effects: definition.effects.map((effect) => modifyEffect(effect, modifier)) };
}

function modifyEffect(effect: CardEffect, modifier: CardModifier): CardEffect {
  if (effect.type === 'damage') return { ...effect, amount: Math.max(0, effect.amount + (modifier.damageDelta ?? 0)) };
  if (effect.type === 'block') return { ...effect, amount: Math.max(0, effect.amount + (modifier.blockDelta ?? 0)) };
  if (effect.type === 'draw') return { ...effect, amount: Math.max(0, effect.amount + (modifier.drawDelta ?? 0)) };
  if (effect.type === 'gain-energy' || effect.type === 'lose-energy') return { ...effect, amount: Math.max(0, effect.amount + (modifier.energyDelta ?? 0)) };
  if (effect.type === 'status') return { ...effect, stacks: Math.max(1, effect.stacks + (modifier.statusStacksDelta ?? 0)) };
  return effect;
}