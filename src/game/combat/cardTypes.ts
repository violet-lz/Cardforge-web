export type CardType = 'attack' | 'skill' | 'power' | 'status' | 'curse';
export type TargetType = 'self' | 'single-enemy' | 'all-enemies' | 'none';
export type CardKeyword = 'exhaust' | 'retain' | 'ethereal' | 'innate';

export type CardCondition =
  | { type: 'only-card-type'; cardType: CardType }
  | { type: 'hp-below'; percentage: number }
  | { type: 'hp-above'; percentage: number };

type ConditionalEffect = { condition?: CardCondition };
export type CardEffect = ConditionalEffect & (
  | { type: 'damage'; amount: number; hits?: number }
  | { type: 'block'; amount: number; retainTurns?: number }
  | { type: 'draw'; amount: number }
  | { type: 'gain-energy'; amount: number }
  | { type: 'lose-energy'; amount: number }
  | { type: 'heal'; amount: number }
  | { type: 'self-damage'; amount: number }
  | { type: 'status'; statusId: string; stacks: number; duration?: number; target?: 'self' | 'target' | 'all-enemies' }
  | { type: 'clear-statuses'; statusIds: string[]; target: 'self' | 'target' }
  | { type: 'damage-equal-block' }
  | { type: 'damage-equal-statuses'; statusIds: string[]; clearAfter?: boolean }
  | { type: 'regen-per-living-enemy'; amount: number }
  /** Deals base + perStack × (self resource stacks), optionally consuming that resource afterwards. */
  | { type: 'resource-scaled-damage'; amount: number; statusId: string; perStack: number; hits?: number; consume?: boolean }
  /** Deals base + perStack × (target's status stacks), optionally detonating that status on the target. */
  | { type: 'target-scaled-damage'; amount: number; statusId: string; perStack: number; consume?: boolean }
);

export interface CardUpgradeDefinition {
  name?: string; cost?: number; target?: TargetType; description?: string;
  effects?: CardEffect[]; keywords?: CardKeyword[]; conditions?: CardCondition[];
}
export interface CardDefinition {
  id: string; name: string; type: CardType; rarity: 'basic' | 'common' | 'uncommon' | 'rare' | 'special';
  cost: number; target: TargetType; description: string; effects: CardEffect[]; keywords?: CardKeyword[];
  onDraw?: CardEffect[]; conditions?: CardCondition[]; upgrade?: CardUpgradeDefinition;
}
export interface CardModifier { costDelta?: number; damageDelta?: number; blockDelta?: number; drawDelta?: number; energyDelta?: number; statusStacksDelta?: number; }
export interface CardInstance { uid: string; definitionId: string; upgraded: boolean; modifiers?: CardModifier[]; temporary?: boolean; polluted?: boolean; }