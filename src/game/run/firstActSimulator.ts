import { CARD_CATALOG } from '../../data/cards/basicCards';
import { CHARACTERS } from '../../data/characters/characters';
import { selectEncounter } from '../../data/encounters/basicEncounters';
import { selectEvent } from '../../data/events/basicEvents';
import { BASIC_POTIONS } from '../../data/potions/basicPotions';
import { canPlayCard } from '../combat/cardEngine';
import { finishPlayerTurn, playCardAndResolve, resolveEnemyTurn, startCombat } from '../combat/combatEngine';
import { persistentCards } from '../combat/deckEngine';
import type { CombatState } from '../combat/combatTypes';
import type { PlayerState } from '../engine/types';
import { moveToNode } from '../map/mapGenerator';
import type { MapNode, MapNodeType } from '../map/mapTypes';
import { usePotion } from '../potion/potionEngine';
import { createRun } from './createRun';
import { nodeSeed } from './nodeSeed';

export interface FirstActReport {
  characterId: string;
  seed: number;
  survived: boolean;
  finalHp: number;
  route: string[];
  combats: number;
  deckUnchanged: boolean;
}

const NODE_COST: Record<MapNodeType, number> = { start: 0, rest: -14, shop: -8, treasure: -7, event: -5, special: -4, combat: 12, elite: 40, boss: 0 };

function routeCost(node: MapNode, byId: Map<string, MapNode>, memo: Map<string, number>): number {
  const cached = memo.get(node.id); if (cached !== undefined) return cached;
  const next = node.connections.length ? Math.min(...node.connections.map((id) => routeCost(byId.get(id)!, byId, memo))) : 0;
  const cost = NODE_COST[node.type] + next; memo.set(node.id, cost); return cost;
}
function chooseNext(node: MapNode, byId: Map<string, MapNode>): MapNode {
  const memo = new Map<string, number>();
  return node.connections.map((id) => byId.get(id)!).sort((a, b) => routeCost(a, byId, memo) - routeCost(b, byId, memo) || a.id.localeCompare(b.id))[0];
}
function livingTarget(combat: CombatState): string | undefined { return [...combat.enemies].filter((enemy) => enemy.hp > 0).sort((a, b) => a.hp - b.hp || a.uid.localeCompare(b.uid))[0]?.uid; }
function cardPriority(combat: CombatState, cardUid: string): number {
  const instance = combat.deck.hand.find((card) => card.uid === cardUid)!; const card = CARD_CATALOG[instance.definitionId];
  const damage = card.effects.filter((effect) => effect.type === 'damage').reduce((sum, effect) => sum + effect.amount * (effect.hits ?? 1), 0);
  const block = card.effects.filter((effect) => effect.type === 'block').reduce((sum, effect) => sum + effect.amount, 0);
  const status = card.effects.some((effect) => effect.type === 'status');
  const incoming = combat.enemies.some((enemy) => enemy.hp > 0 && enemy.intent.type === 'attack');
  if (damage > 0) return 100 + damage * 4;
  if (card.type === 'power') return 88;
  if (status && card.target !== 'self') return 78;
  if (block > 0) return (incoming ? 70 : 38) + block;
  if (status) return 62;
  return 30;
}
function incomingDamage(combat: CombatState): number { return combat.enemies.filter((enemy) => enemy.hp > 0 && enemy.intent.type === 'attack').reduce((sum, enemy) => sum + (enemy.intent.amount ?? 0) * (enemy.intent.hits ?? 1), 0); }
function selectCard(combat: CombatState, playable: CombatState['deck']['hand']) {
  const incoming = incomingDamage(combat);
  const blockers = playable.filter((instance) => CARD_CATALOG[instance.definitionId].effects.some((effect) => effect.type === 'block'));
  if (incoming > combat.player.block && blockers.length && combat.player.hp <= combat.player.maxHp * .9) return [...blockers].sort((a, b) => cardPriority(combat, b.uid) - cardPriority(combat, a.uid) || a.uid.localeCompare(b.uid))[0];
  return [...playable].sort((a, b) => cardPriority(combat, b.uid) - cardPriority(combat, a.uid) || a.uid.localeCompare(b.uid))[0];
}

function resolveCombat(player: PlayerState, node: MapNode, seed: number): { player: PlayerState; won: boolean } {
  const tier = node.type === 'boss' ? 'boss' : node.type === 'elite' ? 'elite' : 'combat';
  let combat = startCombat(player, nodeSeed(seed, node), selectEncounter(nodeSeed(seed, node), tier, node.row));
  let guard = 0;
  while (combat.phase === 'player-turn' || combat.phase === 'enemy-turn') {
    guard += 1; if (guard > 160) return { player: { ...player, hp: 0 }, won: false };
    if (combat.phase === 'player-turn') {
      if (combat.player.hp <= combat.player.maxHp * .42) {
        const potionId = combat.potionIds.find((id) => BASIC_POTIONS[id]?.effect.type === 'heal');
        if (potionId) combat = usePotion(combat, BASIC_POTIONS[potionId]);
      }
      while (combat.phase === 'player-turn') {
        const playable = combat.deck.hand.filter((instance) => { const definition = CARD_CATALOG[instance.definitionId]; return Boolean(definition) && canPlayCard(combat, definition); });
        if (!playable.length) break;
        const selected = selectCard(combat, playable); const definition = CARD_CATALOG[selected.definitionId];
        combat = playCardAndResolve(combat, selected.uid, definition, definition.target === 'single-enemy' ? livingTarget(combat) : undefined);
      }
      if (combat.phase === 'player-turn') combat = resolveEnemyTurn(finishPlayerTurn(combat));
    } else combat = resolveEnemyTurn(combat);
  }
  return { player: { ...player, hp: combat.player.hp, potions: combat.potionIds, deck: persistentCards(combat.deck) }, won: combat.phase === 'victory' };
}

function resolveNonCombat(player: PlayerState, node: MapNode, seed: number): PlayerState {
  if (node.type === 'rest') return { ...player, hp: Math.min(player.maxHp, player.hp + 18) };
  if (node.type !== 'event') return player;
  const event = selectEvent(nodeSeed(seed, node), node.row);
  const choice = event.choices.filter((candidate) => !candidate.addCardId && !candidate.removeFirstCard && !candidate.upgradeFirstCard && !candidate.relicId).sort((a, b) => b.hpDelta - a.hpDelta || a.id.localeCompare(b.id))[0];
  return choice ? { ...player, hp: Math.max(1, Math.min(player.maxHp, player.hp + choice.hpDelta)), gold: Math.max(0, player.gold + choice.goldDelta), potions: choice.potionId ? [...player.potions, choice.potionId] : player.potions } : player;
}

/** Deterministic first-act policy: no reward claim, shop purchase, card removal, upgrade, or card addition. */
export function simulateFirstAct(seed: number, characterId: string): FirstActReport {
  const character = CHARACTERS[characterId]; if (!character) throw new Error(`Unknown character ${characterId}`);
  const initial = createRun(seed, 0, character); let map = initial.map!; let player = initial.player!; const originalDeck = player.deck.map((card) => card.definitionId).sort(); const byId = new Map(map.nodes.map((node) => [node.id, node]));
  const route: string[] = [map.currentNodeId!]; let combats = 0; let alive = true;
  while (alive && map.currentNodeId !== map.bossNodeId) {
    const current = byId.get(map.currentNodeId!)!; const next = chooseNext(current, byId); map = moveToNode(map, next.id); route.push(next.id);
    if (next.type === 'combat' || next.type === 'elite' || next.type === 'boss') { combats += 1; const result = resolveCombat(player, next, seed); player = result.player; alive = result.won && player.hp >= 1; } else player = resolveNonCombat(player, next, seed);
  }
  return { characterId, seed, survived: alive && map.currentNodeId === map.bossNodeId && player.hp >= 1, finalHp: player.hp, route, combats, deckUnchanged: originalDeck.join('|') === player.deck.map((card) => card.definitionId).sort().join('|') };
}
