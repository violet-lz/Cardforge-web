import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import { RARITY_WEIGHT } from '../../game/relics/relicTypes';
import type { PotionDefinition } from '../../game/potion/potionTypes';
import type { ItemDrop } from '../relics/basicRelics';

/**
 * All potions live in this one file. Single-use answers: cleanse potions counter the venom /
 * scorch DoT family, debuff bombs (weak / venom / scorch / brittle) turn a region's own mechanic
 * back on its monsters, and burst/heal potions cover emergencies. Rarity drives weighted drops.
 */
export const BASIC_POTIONS: Record<string, PotionDefinition> = {
  'ember-tonic': { id: 'ember-tonic', name: '余烬药剂', description: '恢复 12 点生命。', rarity: 'common', effect: { type: 'heal', amount: 12 } },
  'iron-draught': { id: 'iron-draught', name: '铁汁药剂', description: '获得 12 点格挡。', rarity: 'common', effect: { type: 'block', amount: 12 } },
  'rage-philtre': { id: 'rage-philtre', name: '狂怒药', description: '获得 2 点力量。', rarity: 'uncommon', effect: { type: 'strength', amount: 2 } },
  'energy-elixir': { id: 'energy-elixir', name: '能量药剂', description: '立即获得 2 点能量。', rarity: 'uncommon', effect: { type: 'energy', amount: 2 } },
  'draw-draught': { id: 'draw-draught', name: '灵光药', description: '抽 3 张牌。', rarity: 'uncommon', effect: { type: 'draw', amount: 3 } },
  // 中毒 / DoT 对策
  'antivenom-flask': { id: 'antivenom-flask', name: '抗毒药剂', description: '清除自身全部毒素。', rarity: 'common', effect: { type: 'cleanse', statusIds: ['venom'] } },
  'holy-water': { id: 'holy-water', name: '圣水', description: '清除自身的毒素与灼热。', rarity: 'common', effect: { type: 'cleanse', statusIds: ['venom', 'scorch'] } },
  'cleansing-tears': { id: 'cleansing-tears', name: '净化之泪', description: '清除自身的毒素、灼热、虚弱与易伤。', rarity: 'rare', effect: { type: 'cleanse', statusIds: ['venom', 'scorch', 'weak', 'vulnerable'] } },
  // 群体 debuff 炸弹 —— 用地图机制反制怪物
  'weakening-gas': { id: 'weakening-gas', name: '致弱瓦斯', description: '对所有敌人施加 2 层虚弱。', rarity: 'common', effect: { type: 'apply-status', statusId: 'weak', amount: 2, duration: 2, target: 'all-enemies' } },
  'acid-flask': { id: 'acid-flask', name: '酸液瓶', description: '对所有敌人施加 2 层脆化。', rarity: 'rare', effect: { type: 'apply-status', statusId: 'brittle', amount: 2, target: 'all-enemies' } },
  'venom-vial': { id: 'venom-vial', name: '剧毒瓶', description: '对所有敌人施加 3 层毒素。', rarity: 'uncommon', effect: { type: 'apply-status', statusId: 'venom', amount: 3, target: 'all-enemies' } },
  'scorch-oil': { id: 'scorch-oil', name: '灼油弹', description: '对所有敌人施加 3 层灼热。', rarity: 'uncommon', effect: { type: 'apply-status', statusId: 'scorch', amount: 3, target: 'all-enemies' } },
  'exposing-toll': { id: 'exposing-toll', name: '示弱钟药', description: '对所有敌人施加 3 层易伤。', rarity: 'uncommon', effect: { type: 'apply-status', statusId: 'vulnerable', amount: 3, duration: 2, target: 'all-enemies' } },
  // 爆发 / 伤害
  'fire-bomb': { id: 'fire-bomb', name: '火焰弹', description: '对所有敌人造成 10 点伤害。', rarity: 'uncommon', effect: { type: 'damage', amount: 10, target: 'all-enemies' } },
  'star-shard-bomb': { id: 'star-shard-bomb', name: '星屑弹', description: '对所有敌人造成 8 点伤害两次。', rarity: 'rare', effect: { type: 'damage', amount: 8, target: 'all-enemies', hits: 2 } },
  'siege-charge': { id: 'siege-charge', name: '攻城药包', description: '对最前方敌人造成 24 点伤害。', rarity: 'rare', effect: { type: 'damage', amount: 24, target: 'front-enemy' } },
  // 治疗 / 续航 / 成长
  'blood-transfusion': { id: 'blood-transfusion', name: '输血药', description: '恢复 20 点生命。', rarity: 'rare', effect: { type: 'heal', amount: 20 } },
  'giant-brew': { id: 'giant-brew', name: '巨力药', description: '本场战斗最大生命 +8 并回复等量生命。', rarity: 'rare', effect: { type: 'max-hp', amount: 8 } },
  'atlantean-mist': { id: 'atlantean-mist', name: '亚特兰蒂斯之雾', description: '获得 4 层再生（回合结束逐步回血）。', rarity: 'rare', effect: { type: 'apply-status', statusId: 'regen', amount: 4, target: 'self' } },
  'sky-tonic': { id: 'sky-tonic', name: '浮空药', description: '获得 16 点格挡。', rarity: 'epic', effect: { type: 'block', amount: 16 } },
  'demon-ichor': { id: 'demon-ichor', name: '恶魔血', description: '获得 3 点力量。', rarity: 'epic', effect: { type: 'strength', amount: 3 } },
  'bell-toll-potion': { id: 'bell-toll-potion', name: '鸣钟药', description: '对所有敌人施加 3 层易伤并造成 4 点伤害。', rarity: 'uncommon', effect: { type: 'damage', amount: 4, target: 'all-enemies' } },
};

/** Region-tagged potion drop pool. Untagged potions are shared. */
export const POTION_DROPS: ItemDrop[] = [
  { id: 'ember-tonic' }, { id: 'iron-draught' },
  { id: 'weakening-gas', biomeIds: ['ruined-village', 'radiant-capital'] },
  { id: 'rage-philtre', biomeIds: ['verdant-forest', 'bloodlands'] },
  { id: 'antivenom-flask', biomeIds: ['moss-marsh', 'fetid-sewers'] }, { id: 'holy-water', biomeIds: ['moss-marsh', 'underworld'] },
  { id: 'acid-flask', biomeIds: ['fetid-sewers'] }, { id: 'venom-vial', biomeIds: ['moss-marsh'] },
  { id: 'exposing-toll', biomeIds: ['radiant-capital', 'bell-tower'] }, { id: 'bell-toll-potion', biomeIds: ['bell-tower'] },
  { id: 'energy-elixir', biomeIds: ['capital-outskirts', 'techno-city'] },
  { id: 'fire-bomb', biomeIds: ['bloodlands'] }, { id: 'scorch-oil', biomeIds: ['bloodlands', 'desert'] },
  { id: 'blood-transfusion', biomeIds: ['bloodlands'] }, { id: 'giant-brew', biomeIds: ['desert', 'sky-island'] },
  { id: 'draw-draught', biomeIds: ['arcane-march'] },
  { id: 'sky-tonic', biomeIds: ['sky-island'] },
  { id: 'cleansing-tears', biomeIds: ['castle-catacombs', 'atlantis'] },
  { id: 'siege-charge', biomeIds: ['noble-castle', 'world-rampart'] },
  { id: 'atlantean-mist', biomeIds: ['ocean-depths', 'atlantis'] },
  { id: 'star-shard-bomb', biomeIds: ['meteor-ruins'] }, { id: 'demon-ichor', biomeIds: ['demon-nest'] },
];

export function selectPotionDrop(seed: number, biomeId: BiomeId): string {
  const pool = eligibleForBiome(POTION_DROPS, biomeId);
  const weighted = pool.map((entry) => ({ entry, weight: RARITY_WEIGHT[BASIC_POTIONS[entry.id]?.rarity ?? 'common'] }));
  const rng = new SeededRng((seed + 0x9e37) >>> 0);
  let roll = rng.nextInt(1, weighted.reduce((total, item) => total + item.weight, 0));
  for (const item of weighted) { if (roll <= item.weight) return item.entry.id; roll -= item.weight; }
  return weighted[weighted.length - 1].entry.id;
}
