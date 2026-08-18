import type { CombatState } from './combatTypes';
import { advanceRetainedBlock } from './blockEngine';
import { discardHand, drawCards } from './deckEngine';
import { refreshEnergy } from './energyEngine';
import { SeededRng } from '../rng/SeededRng';
import { expireStatuses, getStatusStacks, consumeStatus, syncLegacyStatusFields } from '../status/statusEngine';
import { CARD_CATALOG } from '../../data/cards/basicCards';

export function beginPlayerTurn(state: CombatState, rng: SeededRng, drawCount = 5): CombatState {
  if (state.phase !== 'player-turn' && state.phase !== 'enemy-turn') throw new Error('Cannot begin a turn after combat ends');
  const retainedBlock = advanceRetainedBlock(state.player);
  const prepared = { ...state, player: syncLegacyStatusFields({ ...state.player, ...retainedBlock, statuses: expireStatuses(state.player.statuses, 'turn-start') }), enemies: state.enemies.map((enemy) => syncLegacyStatusFields({ ...enemy, statuses: expireStatuses(enemy.statuses, 'turn-start') })), energy: refreshEnergy(state.energy) };
  const result = drawCards(prepared.deck, drawCount, rng);
  return { ...prepared, turn: prepared.turn + 1, phase: 'player-turn', deck: result.deck, lastDrawnCardUids: result.drawn.map((card) => card.uid), log: [...prepared.log, `Turn ${prepared.turn + 1} start`, `Drew ${result.drawn.length} card(s)`] };
}

export function endPlayerTurn(state: CombatState): CombatState {
  if (state.phase !== 'player-turn') throw new Error('Only the player can end a player turn');
  const regen = getStatusStacks(state.player.statuses, 'regen');
  const player = regen > 0 ? syncLegacyStatusFields({ ...state.player, hp: Math.min(state.player.maxHp, state.player.hp + regen), statuses: consumeStatus(state.player.statuses, 'regen') }) : state.player;
  return { ...state, player, phase: 'enemy-turn', deck: discardHand(state.deck, (card) => CARD_CATALOG[card.definitionId]), log: [...state.log, ...(regen > 0 ? [`Regen restored ${regen} HP`] : []), `Turn ${state.turn} end`] };
}
