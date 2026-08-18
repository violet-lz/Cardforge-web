export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;
export type AscensionModifierType = 'enemy-hp' | 'enemy-damage' | 'elite-rate' | 'pollution-rate' | 'starting-gold' | 'heal-penalty';

export interface DifficultyDefinition {
  level: DifficultyLevel;
  name: string;
  description: string;
  enemyHpMultiplier: number;
  enemyDamageMultiplier: number;
  eliteWeightMultiplier: number;
  pollutionEncounterMultiplier: number;
  pollutionChance: number;
  restHealPenalty: number;
  mapUnlocks: string[];
}

export interface AscensionModifier {
  id: string;
  level: DifficultyLevel;
  type: AscensionModifierType;
  amount: number;
  description: string;
}

export function clampDifficulty(level: number): DifficultyLevel {
  return Math.max(1, Math.min(5, Math.floor(Number.isFinite(level) ? level : 1))) as DifficultyLevel;
}

export function isDifficultyLevel(level: unknown): level is DifficultyLevel {
  return Number.isInteger(level) && Number(level) >= 1 && Number(level) <= 5;
}
