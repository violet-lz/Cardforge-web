export type RelicTrigger = 'on-combat-start' | 'on-turn-start' | 'on-combat-end';
export type DamageEffectTarget = 'front-enemy' | 'all-enemies';

/** A single, safe and JSON-serializable combat item effect. */
export type ItemEffect =
  | { type: 'strength' | 'block' | 'gold' | 'heal' | 'max-hp'; amount: number }
  | { type: 'energy'; amount: number }
  | { type: 'damage'; amount: number; target: DamageEffectTarget; hits?: number }
  /** Draws cards immediately (relics on turn start, potions on use). */
  | { type: 'draw'; amount: number }
  /** Applies a status by id to the player or to every living enemy. */
  | { type: 'apply-status'; statusId: string; amount: number; duration?: number; target: 'self' | 'all-enemies' }
  /** Removes the listed debuff statuses from the player (an answer to DoT / erosion pressure). */
  | { type: 'cleanse'; statusIds: string[] };

export interface RelicDefinition {
  id: string;
  name: string;
  description: string;
  trigger: RelicTrigger;
  rarity?: ItemRarity;
  /** Combat-start energy increases the combat energy maximum; other energy effects change current energy. */
  effect: ItemEffect;
}

/** Shared quality tier that drives weighted drop rates (common 40 / uncommon 30 / rare 20 / epic 10). */
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic';
export const RARITY_WEIGHT: Record<ItemRarity, number> = { common: 40, uncommon: 30, rare: 20, epic: 10 };
export const RARITY_LABEL: Record<ItemRarity, string> = { common: '普通', uncommon: '罕见', rare: '稀有', epic: '史诗' };
