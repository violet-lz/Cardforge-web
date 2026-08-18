import type { StatusState } from '../status/statusTypes';
export type IntentType = 'attack' | 'defend' | 'buff' | 'status' | 'pollute' | 'summon' | 'energy' | 'idle';
export type NumericRange = readonly [number, number];
export type IntentAction =
  | { type: 'attack'; amount?: number; amountRange?: NumericRange; hits?: number }
  | { type: 'defend'; amount: number }
  | { type: 'status'; statusId: string; amount: number; duration?: number }
  /** A positive value gives the player energy; a negative value drains it. */
  | { type: 'energy'; amount: number };
export interface IntentDefinition {
  type: IntentType; amount?: number; amountRange?: NumericRange; hits?: number; label: string;
  statusId?: string; duration?: number; cardIds?: string[]; summonIds?: string[]; actions?: IntentAction[]; pollutionChance?: number;
}
export interface EnemyPhaseDefinition { id: string; label: string; startsAtHpRatio: number; intents: IntentDefinition[]; }
export interface EnemyBehavior { type: 'cycle'; intents: IntentDefinition[]; phases?: EnemyPhaseDefinition[]; }
export interface EnemyDefinition {
  id: string; name: string; maxHp: number; maxHpRange?: NumericRange; initialBlock?: number; behavior: EnemyBehavior;
}
export interface EnemyState {
  uid: string; definitionId: string; hp: number; maxHp: number; block: number; strength: number;
  statuses?: StatusState[]; intent: IntentDefinition; behavior: EnemyBehavior; phaseIndex: number; intentIndex: number;
  lastAction?: IntentType; hasSummoned?: boolean;
}