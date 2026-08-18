import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import { RARITY_WEIGHT, type RelicDefinition } from '../../game/relics/relicTypes';

/**
 * All relics live in this one file. Each is themed to the map/monster it drops from and doubles
 * as an answer: cleanse relics counter the venom/scorch DoT family, block/heal relics counter
 * burst and attrition, and strength/energy/draw relics reward specific hero resource engines.
 *
 * Rarity drives weighted drops (common 40 / uncommon 30 / rare 20 / epic 10). Starting relics
 * (ember-seal / coin-orbit) stay common so old saves and character loadouts are unaffected.
 */
export const BASIC_RELICS: Record<string, RelicDefinition> = {
  'ember-seal': { id: 'ember-seal', name: '余烬印记', description: '战斗开始时获得 1 点力量。', trigger: 'on-combat-start', rarity: 'common', effect: { type: 'strength', amount: 1 } },
  'coin-orbit': { id: 'coin-orbit', name: '金币轨道', description: '战斗结束时获得 10 金币。', trigger: 'on-combat-end', rarity: 'common', effect: { type: 'gold', amount: 10 } },
  // 落败村庄 / 生机森林 —— 早期稳定
  'straw-charm': { id: 'straw-charm', name: '稻草护符', description: '战斗开始时获得 5 点格挡，抵御开场突袭。', trigger: 'on-combat-start', rarity: 'common', effect: { type: 'block', amount: 5 } },
  'wolf-fang-totem': { id: 'wolf-fang-totem', name: '狼牙图腾', description: '战斗开始时获得 1 点力量。', trigger: 'on-combat-start', rarity: 'common', effect: { type: 'strength', amount: 1 } },
  'harvest-sickle': { id: 'harvest-sickle', name: '丰收镰刃', description: '战斗结束时恢复 4 点生命，如同收割余温。', trigger: 'on-combat-end', rarity: 'common', effect: { type: 'heal', amount: 4 } },
  // 苔藓沼泽 / 恶臭下水道 —— 中毒对策
  'antitoxin-charm': { id: 'antitoxin-charm', name: '解毒护符', description: '每回合开始时清除自身全部毒素。', trigger: 'on-turn-start', rarity: 'uncommon', effect: { type: 'cleanse', statusIds: ['venom'] } },
  'sewer-filter-mask': { id: 'sewer-filter-mask', name: '滤气面罩', description: '每回合开始时清除自身的毒素与灼热。', trigger: 'on-turn-start', rarity: 'rare', effect: { type: 'cleanse', statusIds: ['venom', 'scorch'] } },
  'croc-scale-guard': { id: 'croc-scale-guard', name: '鳄鳞护甲', description: '每回合开始时获得 3 点格挡。', trigger: 'on-turn-start', rarity: 'uncommon', effect: { type: 'block', amount: 3 } },
  // 繁华皇都 / 皇都外环 —— 秩序与资源
  'royal-warrant': { id: 'royal-warrant', name: '皇家敕令', description: '战斗开始时能量上限 +1。', trigger: 'on-combat-start', rarity: 'epic', effect: { type: 'energy', amount: 1 } },
  'border-toll-coin': { id: 'border-toll-coin', name: '关税铜币', description: '战斗结束时获得 18 金币。', trigger: 'on-combat-end', rarity: 'common', effect: { type: 'gold', amount: 18 } },
  'gilded-aegis': { id: 'gilded-aegis', name: '镀金圣盾', description: '战斗开始时获得 9 点格挡。', trigger: 'on-combat-start', rarity: 'uncommon', effect: { type: 'block', amount: 9 } },
  // 血色之地 / 荒漠 —— 高风险高回报与耐旱
  'blood-oath-band': { id: 'blood-oath-band', name: '血誓腕环', description: '战斗开始时获得 2 点力量。', trigger: 'on-combat-start', rarity: 'uncommon', effect: { type: 'strength', amount: 2 } },
  'gore-censer': { id: 'gore-censer', name: '血雾香炉', description: '战斗开始时对所有敌人施加 2 层灼热。', trigger: 'on-combat-start', rarity: 'rare', effect: { type: 'apply-status', statusId: 'scorch', amount: 2, target: 'all-enemies' } },
  'desert-waterskin': { id: 'desert-waterskin', name: '沙漠水囊', description: '每回合开始时恢复 2 点生命，对抗炎热消耗。', trigger: 'on-turn-start', rarity: 'uncommon', effect: { type: 'heal', amount: 2 } },
  'sunfire-idol': { id: 'sunfire-idol', name: '烈日神像', description: '战斗开始时获得 3 点力量。', trigger: 'on-combat-start', rarity: 'epic', effect: { type: 'strength', amount: 3 } },
  // 魔法之地 / 钟楼 —— 手牌与标记
  'arcane-lens': { id: 'arcane-lens', name: '奥术透镜', description: '战斗开始时抽 2 张牌。', trigger: 'on-combat-start', rarity: 'rare', effect: { type: 'draw', amount: 2 } },
  'bell-resonator': { id: 'bell-resonator', name: '钟鸣共振器', description: '战斗开始时对所有敌人施加 1 层易伤。', trigger: 'on-combat-start', rarity: 'rare', effect: { type: 'apply-status', statusId: 'vulnerable', amount: 1, duration: 2, target: 'all-enemies' } },
  'sworn-bell': { id: 'sworn-bell', name: '誓言之钟', description: '每回合开始时获得 1 点格挡与……仅 1 点格挡，但钟声不息。', trigger: 'on-turn-start', rarity: 'common', effect: { type: 'block', amount: 2 } },
  // 科技之城 / 霓虹院 —— 能量引擎
  'chrome-capacitor': { id: 'chrome-capacitor', name: '铬合电容', description: '战斗开始时能量上限 +1。', trigger: 'on-combat-start', rarity: 'epic', effect: { type: 'energy', amount: 1 } },
  'neon-coolant': { id: 'neon-coolant', name: '霓虹冷凝剂', description: '每回合开始时清除自身灼热。', trigger: 'on-turn-start', rarity: 'uncommon', effect: { type: 'cleanse', statusIds: ['scorch'] } },
  // 天空岛 / 贵族城堡 —— 抗爆发与荣誉
  'sky-anchor': { id: 'sky-anchor', name: '天穹之锚', description: '战斗开始时获得 8 点格挡，稳住失重的开场。', trigger: 'on-combat-start', rarity: 'uncommon', effect: { type: 'block', amount: 8 } },
  'heraldic-sigil': { id: 'heraldic-sigil', name: '纹章印记', description: '战斗开始时获得 2 点力量。', trigger: 'on-combat-start', rarity: 'rare', effect: { type: 'strength', amount: 2 } },
  // 城堡地下墓道 / 冥界 / 幽冥渡口 —— 消磨对策
  'grave-lantern-relic': { id: 'grave-lantern-relic', name: '墓火提灯', description: '每回合开始时恢复 3 点生命。', trigger: 'on-turn-start', rarity: 'rare', effect: { type: 'heal', amount: 3 } },
  'soul-ledger': { id: 'soul-ledger', name: '亡者账簿', description: '战斗结束时获得 25 金币。', trigger: 'on-combat-end', rarity: 'uncommon', effect: { type: 'gold', amount: 25 } },
  'ferry-toll-coin': { id: 'ferry-toll-coin', name: '渡口铜钱', description: '战斗开始时抽 1 张牌。', trigger: 'on-combat-start', rarity: 'common', effect: { type: 'draw', amount: 1 } },
  // 海洋 / 亚特兰蒂斯 —— 深压护体
  'pearl-of-pressure': { id: 'pearl-of-pressure', name: '深压之珠', description: '战斗开始时获得 6 点格挡。', trigger: 'on-combat-start', rarity: 'uncommon', effect: { type: 'block', amount: 6 } },
  'marble-heart': { id: 'marble-heart', name: '白石之心', description: '战斗开始时获得 10 点格挡。', trigger: 'on-combat-start', rarity: 'epic', effect: { type: 'block', amount: 10 } },
  // 恶魔巢穴 / 陨石遗迹 / 世界地垒 —— 终局神器
  'meteor-core': { id: 'meteor-core', name: '陨能核心', description: '战斗开始时获得 3 点力量。', trigger: 'on-combat-start', rarity: 'epic', effect: { type: 'strength', amount: 3 } },
  'demon-pact-seal': { id: 'demon-pact-seal', name: '恶魔契印', description: '每回合开始时获得 1 点能量，代价无人知晓。', trigger: 'on-turn-start', rarity: 'epic', effect: { type: 'energy', amount: 1 } },
  'world-rampart-stone': { id: 'world-rampart-stone', name: '世界地垒之石', description: '每回合开始时获得 4 点格挡。', trigger: 'on-turn-start', rarity: 'epic', effect: { type: 'block', amount: 4 } },
};

export interface ItemDrop { id: string; biomeIds?: readonly BiomeId[]; }

/** Region-tagged relic drop pool. Untagged relics are shared. Starting relics are excluded. */
export const RELIC_DROPS: ItemDrop[] = [
  { id: 'straw-charm', biomeIds: ['ruined-village'] }, { id: 'harvest-sickle', biomeIds: ['ruined-village'] },
  { id: 'wolf-fang-totem', biomeIds: ['verdant-forest'] },
  { id: 'antitoxin-charm', biomeIds: ['moss-marsh', 'verdant-forest'] }, { id: 'croc-scale-guard', biomeIds: ['moss-marsh'] },
  { id: 'sewer-filter-mask', biomeIds: ['fetid-sewers'] },
  { id: 'royal-warrant', biomeIds: ['radiant-capital'] }, { id: 'gilded-aegis', biomeIds: ['radiant-capital'] },
  { id: 'border-toll-coin', biomeIds: ['capital-outskirts'] },
  { id: 'blood-oath-band', biomeIds: ['bloodlands'] }, { id: 'gore-censer', biomeIds: ['bloodlands'] },
  { id: 'desert-waterskin', biomeIds: ['desert'] }, { id: 'sunfire-idol', biomeIds: ['desert'] },
  { id: 'arcane-lens', biomeIds: ['arcane-march'] },
  { id: 'bell-resonator', biomeIds: ['bell-tower'] }, { id: 'sworn-bell', biomeIds: ['bell-tower'] },
  { id: 'chrome-capacitor', biomeIds: ['techno-city'] }, { id: 'neon-coolant', biomeIds: ['neon-court', 'techno-city'] },
  { id: 'sky-anchor', biomeIds: ['sky-island'] },
  { id: 'heraldic-sigil', biomeIds: ['noble-castle'] },
  { id: 'grave-lantern-relic', biomeIds: ['castle-catacombs', 'underworld'] }, { id: 'soul-ledger', biomeIds: ['underworld'] },
  { id: 'ferry-toll-coin', biomeIds: ['ghost-ferry'] },
  { id: 'pearl-of-pressure', biomeIds: ['ocean-depths'] }, { id: 'marble-heart', biomeIds: ['atlantis'] },
  { id: 'demon-pact-seal', biomeIds: ['demon-nest'] }, { id: 'meteor-core', biomeIds: ['meteor-ruins'] }, { id: 'world-rampart-stone', biomeIds: ['world-rampart'] },
  // Shared safety net so no region is ever a dead relic node.
  { id: 'coin-orbit' }, { id: 'ember-seal' },
];

export function selectRelicDrop(seed: number, biomeId: BiomeId): string {
  const pool = eligibleForBiome(RELIC_DROPS, biomeId);
  const weighted = pool.map((entry) => ({ entry, weight: RARITY_WEIGHT[BASIC_RELICS[entry.id]?.rarity ?? 'common'] }));
  const rng = new SeededRng((seed + 0x51ed) >>> 0);
  let roll = rng.nextInt(1, weighted.reduce((total, item) => total + item.weight, 0));
  for (const item of weighted) { if (roll <= item.weight) return item.entry.id; roll -= item.weight; }
  return weighted[weighted.length - 1].entry.id;
}
