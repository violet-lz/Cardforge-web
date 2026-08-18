import type { PotionDefinition } from '../../game/potion/potionTypes';

export const BASIC_POTIONS: Record<string, PotionDefinition> = {
  'ember-tonic': { id: 'ember-tonic', name: '余烬药剂', description: '恢复 12 点生命。', effect: { type: 'heal', amount: 12 } },
};
