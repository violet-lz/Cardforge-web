export type RelicTrigger = 'on-combat-start' | 'on-turn-start' | 'on-combat-end';
export type DamageEffectTarget = 'front-enemy' | 'all-enemies';

/** A single, safe and JSON-serializable combat item effect. */
export type ItemEffect =
  | { type: 'strength' | 'block' | 'gold' | 'heal' | 'max-hp'; amount: number }
  | { type: 'energy'; amount: number }
  | { type: 'damage'; amount: number; target: DamageEffectTarget; hits?: number };

export interface RelicDefinition {
  id: string;
  name: string;
  description: string;
  trigger: RelicTrigger;
  /** Combat-start energy increases the combat energy maximum; other energy effects change current energy. */
  effect: ItemEffect;
}
