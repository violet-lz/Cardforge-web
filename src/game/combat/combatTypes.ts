import type { CardInstance } from './cardTypes';
import type { DeckState } from './deckEngine';
import type { EnergyState } from './energyEngine';
import type { EnemyState } from './enemyTypes';
import type { StatusState } from '../status/statusTypes';

export type CombatPhase = 'player-turn' | 'enemy-turn' | 'victory' | 'defeat';

export interface CombatantState {
  hp: number;
  maxHp: number;
  block: number;
  /** Remaining future player turns during which this block will not be cleared. */
  blockRetainTurns: number;
  strength: number;
  weak: number;
  vulnerable: number;
  statuses?: StatusState[];
}

export interface CombatState {
  phase: CombatPhase;
  turn: number;
  rngState: number;
  ascensionLevel: number;
  relicIds: string[];
  potionIds: string[];
  /** Persistent values gained during this combat, applied to the run on combat exit. */
  persistentGoldDelta: number;
  persistentMaxHpDelta: number;
  player: CombatantState;
  enemies: EnemyState[];
  energy: EnergyState;
  deck: DeckState;
  log: string[];
  lastDrawnCardUids: CardInstance['uid'][];
}
