import { CARD_CATALOG } from '../../data/cards/basicCards';
import { BASIC_ENEMIES } from '../../data/enemies/basicEnemies';
import { BASIC_RELICS } from '../../data/relics/basicRelics';
import { BASIC_STATUSES } from '../../data/statuses/basicStatuses';
import type { PlayerState } from '../engine/types';
import { SeededRng } from '../rng/SeededRng';
import { relicsForTrigger } from '../relics/relicEngine';
import type { DamageEffectTarget, ItemEffect, RelicTrigger } from '../relics/relicTypes';
import { applyStatus, getStatusStacks, hasStatus, syncLegacyStatusFields } from '../status/statusEngine';
import { addTemporaryCard, createCardInstance, createDeck, drawCards } from './deckEngine';
import { adjustEnergy, createEnergy, gainEnergy } from './energyEngine';
import type { CardDefinition, CardEffect } from './cardTypes';
import { cardConditionIsMet, playCard } from './cardEngine';
import type { CombatState } from './combatTypes';
import { resolveDamage } from './damageEngine';
import type { EnemyBehavior, EnemyDefinition, EnemyState, IntentAction, IntentDefinition, NumericRange } from './enemyTypes';
import { beginPlayerTurn, endPlayerTurn } from './turnEngine';

export function startCombat(player: PlayerState, seed: number, enemyDefinitions: EnemyDefinition[], ascensionLevel = 0): CombatState {
  const rng = new SeededRng(seed);
  const enemies = enemyDefinitions.map((definition, index) => createEnemy(definition, index, rng, ascensionLevel));
  const innate = player.deck.filter((card) => CARD_CATALOG[card.definitionId]?.keywords?.includes('innate'));
  const regularCards = player.deck.filter((card) => !innate.includes(card));
  const regular = player.characterId.startsWith('legacy-') ? rng.shuffle(regularCards) : regularCards;
  const baseEnergy = player.baseEnergy ?? 3;
  const relicEnergy = relicsForTrigger(player.relics, BASIC_RELICS, 'on-combat-start').reduce((total, relic) => total + (relic.effect.type === 'energy' ? relic.effect.amount : 0), 0);
  const base: CombatState = {
    phase: 'enemy-turn', turn: 0, rngState: rng.getState(), relicIds: player.relics, potionIds: player.potions,
    persistentGoldDelta: 0, persistentMaxHpDelta: 0, enemies,
    player: { hp: player.hp, maxHp: player.maxHp, block: 0, strength: 0, weak: 0, vulnerable: 0, statuses: [] },
    energy: createEnergy(Math.max(0, baseEnergy + relicEnergy)), deck: createDeck([...innate, ...regular]), log: ['Combat started'], lastDrawnCardUids: [],
  };
  return beginTurnWithRng(applyRelicEffects(base, 'on-combat-start', true), rng);
}

export function playCardAndResolve(state: CombatState, cardUid: string, definition: CardDefinition, targetUid?: string): CombatState {
  const result = playCard(state, cardUid, definition);
  let next = resolveCombatPhases(applyEffects(result.state, result.played.effects, result.played.definition, targetUid));
  if (!next.enemies.every((enemy) => enemy.hp <= 0)) return next;
  next = { ...next, phase: 'victory', log: [...next.log, 'Victory'] };
  return applyCombatEndRelics(next);
}

export function finishPlayerTurn(state: CombatState): CombatState { return endPlayerTurn(state); }

export function resolveEnemyTurn(state: CombatState): CombatState {
  if (state.phase !== 'enemy-turn') throw new Error('Enemy turn is not active');
  const rng = new SeededRng(state.rngState); let next = state;
  const actingUids = state.enemies.filter((enemy) => enemy.hp > 0).map((enemy) => enemy.uid);
  for (const enemyUid of actingUids) {
    const enemy = next.enemies.find((candidate) => candidate.uid === enemyUid); if (!enemy || enemy.hp <= 0) continue;
    const intent = enemy.intent;
    next = { ...next, enemies: next.enemies.map((candidate) => candidate.uid === enemyUid ? { ...candidate, block: candidate.definitionId.startsWith('legacy-') ? 0 : candidate.block, lastAction: intent.type } : candidate) };
    const actions = normalizedActions(intent);
    for (const action of actions) next = applyEnemyAction(next, enemyUid, action);
    if (!actions.length) next = applyNativeIntent(next, enemyUid, intent, rng);
    if (next.player.hp <= 0) return { ...next, rngState: rng.getState(), phase: 'defeat', log: [...next.log, 'Defeat'] };
  }
  const acting = new Set(actingUids);
  return beginTurnWithRng({ ...next, rngState: rng.getState(), enemies: next.enemies.map((enemy) => acting.has(enemy.uid) ? advanceIntent(enemy) : enemy) }, rng);
}

function normalizedActions(intent: IntentDefinition): IntentAction[] {
  if (intent.actions) return intent.actions;
  if (intent.type === 'attack') return [{ type: 'attack', amount: intent.amount, hits: intent.hits }];
  if (intent.type === 'defend') return [{ type: 'defend', amount: intent.amount ?? 0 }];
  if (intent.type === 'status' && intent.statusId) return [{ type: 'status', statusId: intent.statusId, amount: intent.amount ?? 1, duration: intent.duration }];
  if (intent.type === 'energy') return [{ type: 'energy', amount: intent.amount ?? 0 }];
  return [];
}

function applyEnemyAction(state: CombatState, enemyUid: string, action: IntentAction): CombatState {
  const enemy = state.enemies.find((candidate) => candidate.uid === enemyUid); if (!enemy) return state;
  if (action.type === 'defend') return { ...state, enemies: state.enemies.map((candidate) => candidate.uid === enemyUid ? { ...candidate, block: candidate.block + action.amount } : candidate) };
  if (action.type === 'status') {
    const status = BASIC_STATUSES[action.statusId]; if (!status) throw new Error(`Unknown status: ${action.statusId}`);
    return { ...state, player: syncLegacyStatusFields({ ...state.player, statuses: applyStatus(state.player.statuses, status, action.amount, action.duration) }) };
  }
  if (action.type === 'energy') return { ...state, energy: adjustEnergy(state.energy, action.amount), log: [...state.log, `${enemy.uid} changed energy by ${action.amount}`] };
  const result = resolveDamage({ base: Math.max(0, action.amount ?? 0), strength: enemy.strength, weak: hasStatus(enemy.statuses, 'weak'), vulnerable: hasStatus(state.player.statuses, 'vulnerable'), hits: action.hits ?? 1 }, state.player.block);
  return { ...state, player: { ...state.player, hp: Math.max(0, state.player.hp - result.hpLoss), block: result.remainingBlock }, log: [...state.log, `${enemy.uid} dealt ${result.hpLoss} damage`] };
}

function applyNativeIntent(state: CombatState, enemyUid: string, intent: IntentDefinition, rng: SeededRng): CombatState {
  if (intent.type === 'buff') {
    const amount = intent.amount ?? 0; if (amount <= 0) return state;
    return { ...state, enemies: state.enemies.map((enemy) => enemy.uid === enemyUid ? syncLegacyStatusFields({ ...enemy, statuses: applyStatus(enemy.statuses, BASIC_STATUSES.strength, amount) }) : enemy) };
  }
  if (intent.type === 'pollute') {
    const id = intent.cardIds?.[Math.max(0, (state.turn - 1) % (intent.cardIds?.length ?? 1))];
    return id ? { ...state, deck: addTemporaryCard(state.deck, { ...createCardInstance(id, `pollution-${state.turn}-${enemyUid}-${state.deck.discardPile.length}`, true), polluted: true }), log: [...state.log, `${enemyUid} polluted the discard pile`] } : state;
  }
  if (intent.type !== 'summon') return state;
  const summoner = state.enemies.find((enemy) => enemy.uid === enemyUid); const available = Math.max(0, 4 - state.enemies.filter((enemy) => enemy.hp > 0).length);
  const summoned = !summoner?.hasSummoned ? (intent.summonIds ?? []).slice(0, available).map((id) => {
    const definition = BASIC_ENEMIES[id]; if (!definition) throw new Error(`Unknown summoned enemy: ${id}`); return definition;
  }).map((definition, index) => createEnemy(definition, state.enemies.length + index, rng)) : [];
  const summonerIndex = state.enemies.findIndex((enemy) => enemy.uid === enemyUid);
  return summonerIndex >= 0 && summoned.length > 0 ? { ...state, enemies: [...state.enemies.slice(0, summonerIndex), ...summoned, { ...state.enemies[summonerIndex], hasSummoned: true }, ...state.enemies.slice(summonerIndex + 1)], log: [...state.log, `${enemyUid} summoned ${summoned.length} foe(s)`] } : state;
}

function applyEffects(state: CombatState, effects: CardEffect[], definition: CardDefinition, targetUid?: string): CombatState {
  let next = state; const conditionState = state; const rng = new SeededRng(state.rngState);
  for (const effect of effects) {
    if (effect.condition && !cardConditionIsMet(conditionState, effect.condition)) continue;
    if (effect.type === 'damage') next = damageTargets(next, definition, effect.amount, effect.hits ?? 1, targetUid);
    else if (effect.type === 'block') next = { ...next, player: { ...next.player, block: next.player.block + effect.amount } };
    else if (effect.type === 'draw') { const drawn = drawCards(next.deck, effect.amount, rng); next = { ...next, deck: drawn.deck, lastDrawnCardUids: drawn.drawn.map((card) => card.uid) }; }
    else if (effect.type === 'gain-energy') next = { ...next, energy: gainEnergy(next.energy, effect.amount) };
    else if (effect.type === 'lose-energy') next = { ...next, energy: { ...next.energy, current: Math.max(0, next.energy.current - effect.amount) } };
    else if (effect.type === 'heal') next = { ...next, player: { ...next.player, hp: Math.min(next.player.maxHp, next.player.hp + effect.amount) } };
    else if (effect.type === 'self-damage') next = { ...next, player: { ...next.player, hp: Math.max(0, next.player.hp - effect.amount) } };
    else if (effect.type === 'status') next = applyStatusEffect(next, effect, definition, targetUid);
    else if (effect.type === 'clear-statuses') next = clearStatuses(next, effect.target, effect.statusIds, targetUid);
    else if (effect.type === 'damage-equal-block') next = damageTargets(next, definition, next.player.block, 1, targetUid);
    else if (effect.type === 'damage-equal-statuses') next = damageEqualStatuses(next, definition, effect, targetUid);
    else if (effect.type === 'regen-per-living-enemy') {
      const stacks = next.enemies.filter((enemy) => enemy.hp > 0).length * effect.amount;
      if (stacks > 0) next = { ...next, player: syncLegacyStatusFields({ ...next.player, statuses: applyStatus(next.player.statuses, BASIC_STATUSES.regen, stacks) }) };
    }
  }
  return { ...next, rngState: rng.getState() };
}

function damageTargets(state: CombatState, definition: CardDefinition, amount: number, hits: number, targetUid?: string): CombatState {
  const targets = definition.target === 'all-enemies' ? state.enemies.filter((enemy) => enemy.hp > 0) : [findTarget(state.enemies, targetUid)];
  const ids = new Set(targets.map((target) => target.uid));
  const usesLegacyRules = state.enemies.some((enemy) => enemy.definitionId.startsWith('legacy-'));
  const weak = usesLegacyRules && hasStatus(state.player.statuses, 'weak');
  return { ...state, enemies: state.enemies.map((enemy) => ids.has(enemy.uid) ? damageEnemy(enemy, amount, hits, state.player.strength, weak) : enemy) };
}

function damageEqualStatuses(state: CombatState, definition: CardDefinition, effect: Extract<CardEffect, { type: 'damage-equal-statuses' }>, targetUid?: string): CombatState {
  const target = findTarget(state.enemies, targetUid); const amount = effect.statusIds.reduce((sum, id) => sum + getStatusStacks(target.statuses, id), 0);
  let next = damageTargets(state, definition, amount, 1, targetUid);
  if (effect.clearAfter) next = { ...next, enemies: next.enemies.map((enemy) => enemy.uid === target.uid ? syncLegacyStatusFields({ ...enemy, statuses: (enemy.statuses ?? []).filter((status) => !effect.statusIds.includes(status.id)) }) : enemy) };
  return next;
}

function clearStatuses(state: CombatState, target: 'self' | 'target', statusIds: string[], targetUid?: string): CombatState {
  if (target === 'self') return { ...state, player: syncLegacyStatusFields({ ...state.player, statuses: (state.player.statuses ?? []).filter((status) => !statusIds.includes(status.id)) }) };
  const enemy = findTarget(state.enemies, targetUid);
  return { ...state, enemies: state.enemies.map((candidate) => candidate.uid === enemy.uid ? syncLegacyStatusFields({ ...candidate, statuses: (candidate.statuses ?? []).filter((status) => !statusIds.includes(status.id)) }) : candidate) };
}

function applyStatusEffect(state: CombatState, effect: Extract<CardEffect, { type: 'status' }>, definition: CardDefinition, targetUid?: string): CombatState {
  const status = BASIC_STATUSES[effect.statusId]; if (!status) throw new Error(`Unknown status: ${effect.statusId}`);
  const target = effect.target ?? (definition.target === 'self' ? 'self' : definition.target === 'all-enemies' ? 'all-enemies' : 'target');
  if (target === 'self') return { ...state, player: syncLegacyStatusFields({ ...state.player, statuses: applyStatus(state.player.statuses, status, effect.stacks, effect.duration) }) };
  if (target === 'all-enemies') return { ...state, enemies: state.enemies.map((enemy) => enemy.hp > 0 ? syncLegacyStatusFields({ ...enemy, statuses: applyStatus(enemy.statuses, status, effect.stacks, effect.duration) }) : enemy) };
  const enemy = state.enemies.find((candidate) => candidate.uid === targetUid && candidate.hp > 0) ?? state.enemies.find((candidate) => candidate.hp > 0);
  if (!enemy) return state;
  return { ...state, enemies: state.enemies.map((candidate) => candidate.uid === enemy.uid ? syncLegacyStatusFields({ ...candidate, statuses: applyStatus(candidate.statuses, status, effect.stacks, effect.duration) }) : candidate) };
}

function sampleRange(range: NumericRange, rng: SeededRng): number { return rng.nextInt(range[0], range[1]); }
function materializeIntent(intent: IntentDefinition, rng: SeededRng): IntentDefinition {
  return { ...intent, amount: intent.amountRange ? sampleRange(intent.amountRange, rng) : intent.amount, actions: intent.actions?.map((action) => action.type === 'attack' ? { ...action, amount: action.amountRange ? sampleRange(action.amountRange, rng) : action.amount } : { ...action }) };
}
function materializeBehavior(behavior: EnemyBehavior, rng: SeededRng): EnemyBehavior {
  return { ...behavior, intents: behavior.intents.map((intent) => materializeIntent(intent, rng)), phases: behavior.phases?.map((phase) => ({ ...phase, intents: phase.intents.map((intent) => materializeIntent(intent, rng)) })) };
}
function createEnemy(definition: EnemyDefinition, index: number, rng: SeededRng, ascensionLevel = 0): EnemyState {
  const rolledHp = definition.maxHpRange ? sampleRange(definition.maxHpRange, rng) : definition.maxHp;
  const maxHp = ascensionLevel > 0 ? Math.ceil(rolledHp * 1.1) : rolledHp; const behavior = materializeBehavior(definition.behavior, rng);
  const intents = behavior.phases?.[0]?.intents ?? behavior.intents;
  return { uid: `${definition.id}-${index}`, definitionId: definition.id, hp: maxHp, maxHp, block: definition.initialBlock ?? 0, strength: 0, statuses: [], intent: intents[0], behavior, phaseIndex: 0, intentIndex: 0 };
}
function advanceIntent(enemy: EnemyState): EnemyState {
  if (enemy.hp <= 0) return enemy; const intents = enemy.behavior.phases?.[enemy.phaseIndex]?.intents ?? enemy.behavior.intents; const index = (enemy.intentIndex + 1) % intents.length;
  return { ...enemy, intentIndex: index, intent: intents[index] };
}
export function resolveCombatPhases(state: CombatState): CombatState {
  let transitioned = false; const enemies = state.enemies.map((enemy) => { const phases = enemy.behavior.phases; if (!phases || enemy.hp <= 0) return enemy; const nextIndex = phases.reduce((current, phase, index) => enemy.hp / enemy.maxHp <= phase.startsAtHpRatio ? index : current, 0); if (nextIndex <= enemy.phaseIndex) return enemy; transitioned = true; return { ...enemy, phaseIndex: nextIndex, intentIndex: 0, intent: phases[nextIndex].intents[0] }; });
  return transitioned ? { ...state, enemies, log: [...state.log, 'A foe entered a new phase'] } : state;
}
function damageEnemy(enemy: EnemyState, amount: number, hits: number, strength: number, weak: boolean): EnemyState {
  const result = resolveDamage({ base: Math.max(0, amount), hits, strength, weak, vulnerable: hasStatus(enemy.statuses, 'vulnerable') }, enemy.block);
  return { ...enemy, hp: Math.max(0, enemy.hp - result.hpLoss), block: result.remainingBlock };
}
export function resolveSingleEnemyTarget(enemies: EnemyState[], _requestedUid?: string): EnemyState { const target = enemies.find((enemy) => enemy.hp > 0); if (!target) throw new Error('No valid enemy target'); return target; }
function findTarget(enemies: EnemyState[], uid?: string): EnemyState { return resolveSingleEnemyTarget(enemies, uid); }
function beginTurnWithRng(state: CombatState, rng: SeededRng): CombatState {
  const prepared = beginPlayerTurn(state, rng);
  const next = applyRelicEffects(prepared, 'on-turn-start');
  return { ...next, rngState: rng.getState() };
}


/** Applies an item effect through normal combat rules; custom data never mutates player state directly. */
export function applyCombatItemEffect(state: CombatState, effect: ItemEffect, sourceName: string): CombatState {
  switch (effect.type) {
    case 'strength':
      return { ...state, player: syncLegacyStatusFields({ ...state.player, strength: state.player.strength + effect.amount, statuses: applyStatus(state.player.statuses, BASIC_STATUSES.strength, effect.amount) }), log: [...state.log, `${sourceName}: +${effect.amount} strength`] };
    case 'block':
      return { ...state, player: { ...state.player, block: state.player.block + effect.amount }, log: [...state.log, `${sourceName}: +${effect.amount} block`] };
    case 'heal':
      return { ...state, player: { ...state.player, hp: Math.min(state.player.maxHp, state.player.hp + effect.amount) }, log: [...state.log, `${sourceName}: restored ${effect.amount} HP`] };
    case 'max-hp':
      return { ...state, player: { ...state.player, maxHp: state.player.maxHp + effect.amount }, persistentMaxHpDelta: state.persistentMaxHpDelta + effect.amount, log: [...state.log, `${sourceName}: +${effect.amount} max HP`] };
    case 'gold':
      return { ...state, persistentGoldDelta: state.persistentGoldDelta + effect.amount, log: [...state.log, `${sourceName}: +${effect.amount} gold`] };
    case 'energy':
      return { ...state, energy: adjustEnergy(state.energy, effect.amount), log: [...state.log, `${sourceName}: ${effect.amount >= 0 ? '+' : ''}${effect.amount} energy`] };
    case 'damage':
      return applyPlayerDamageEffect(state, effect.amount, effect.target, effect.hits ?? 1, sourceName);
  }
}

/** Resolves custom damage exactly like a player card: strength, Weak, Vulnerable, block, and hits all apply. */
export function applyPlayerDamageEffect(state: CombatState, amount: number, target: DamageEffectTarget, hits = 1, sourceName = 'Effect'): CombatState {
  const targets = target === 'all-enemies' ? state.enemies.filter((enemy) => enemy.hp > 0) : state.enemies.filter((enemy) => enemy.hp > 0).slice(0, 1);
  const ids = new Set(targets.map((enemy) => enemy.uid));
  const usesLegacyRules = state.enemies.some((enemy) => enemy.definitionId.startsWith('legacy-'));
  const weak = usesLegacyRules && hasStatus(state.player.statuses, 'weak');
  const enemies = state.enemies.map((enemy) => ids.has(enemy.uid) ? damageEnemy(enemy, amount, hits, state.player.strength, weak) : enemy);
  return { ...state, enemies, log: [...state.log, `${sourceName}: dealt ${amount}${hits > 1 ? ` ×${hits}` : ''} damage`] };
}

export function applyCombatEndRelics(state: CombatState): CombatState {
  return state.phase === 'victory' ? applyRelicEffects(state, 'on-combat-end') : state;
}

function applyRelicEffects(state: CombatState, trigger: RelicTrigger, skipEnergy = false): CombatState {
  return relicsForTrigger(state.relicIds, BASIC_RELICS, trigger).reduce(
    (next, relic) => skipEnergy && relic.effect.type === 'energy' ? next : applyCombatItemEffect(next, relic.effect, relic.name),
    state,
  );
}
