import type { ItemEffect } from '../relics/relicTypes';

export interface PotionDefinition {
  id: string;
  name: string;
  description: string;
  effect: ItemEffect;
}
