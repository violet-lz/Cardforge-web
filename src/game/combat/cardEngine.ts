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
  const exact = instance.upgraded && definition.upgrade ? applyUpgrade(definition) : definition;
  return (instance.modifiers ?? []).reduce((current, modifier) => applyModifier(current, modifier), exact);
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