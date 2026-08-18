import type { ItemEffect, ItemRarity } from '../relics/relicTypes';

export interface PotionDefinition {
  id: string;
  name: string;
  description: string;
  rarity?: ItemRarity;
  effect: ItemEffect;
}
