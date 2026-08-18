import type { GameState } from '../engine/types';
import type { ReplayAction, ReplayState } from './replayTypes';
export function createReplay(seed: number): ReplayState { return { seed, actions: [] }; }
export function recordReplayAction(replay: ReplayState, action: ReplayAction): ReplayState { return { ...replay, actions: [...replay.actions, action] }; }
export function replayFingerprint(replay: ReplayState): string { return JSON.stringify({ seed: replay.seed, actions: replay.actions }); }
export function gameFingerprint(state: GameState): string { return JSON.stringify({ seed: state.seed, mode: state.mode, run: state.run, player: state.player, map: state.map, combat: state.combat, reward: state.reward, event: state.event, shop: state.shop, special: state.special }); }
export function finalizeReplay(replay: ReplayState, state: GameState): ReplayState { return { ...replay, finalFingerprint: gameFingerprint(state) }; }
export function verifyReplay(state: GameState, replay: ReplayState): boolean { return !replay.finalFingerprint || replay.finalFingerprint === gameFingerprint(state); }
