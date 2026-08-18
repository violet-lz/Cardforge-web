import type { GameState } from '../engine/types';

export interface DebugSnapshot {
  mode: GameState['mode'];
  seed: number | null;
  runStatus: GameState['run'] extends infer Run ? Run extends { status: infer Status } ? Status : null : null;
  combatPhase: GameState['combat'] extends infer Combat ? Combat extends { phase: infer Phase } ? Phase : null : null;
  combatLog: string[];
}

export function createDebugSnapshot(state: GameState): DebugSnapshot {
  return { mode: state.mode, seed: state.seed, runStatus: state.run?.status ?? null, combatPhase: state.combat?.phase ?? null, combatLog: state.combat?.log ?? [] };
}
