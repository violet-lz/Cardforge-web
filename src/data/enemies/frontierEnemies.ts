import type { EnemyDefinition } from '../../game/combat/enemyTypes';

const cycle = (id: string, name: string, maxHp: number, intents: EnemyDefinition['behavior']['intents'], extra: Partial<EnemyDefinition> = {}): EnemyDefinition => ({ id, name, maxHp, behavior: { type: 'cycle', intents }, ...extra });

/**
 * Desert (荒漠) and Meteor Ruins (陨石遗迹) enemies. Each has a distinct combat identity:
 * desert leans on 灼热 (scorch DoT) pressure and burst-from-ambush; the meteor endgame leans on
 * 宇蚀 (cosmic-erosion) escalation, charged bursts, and a multi-phase final boss.
 */
export const FRONTIER_ENEMIES: Record<string, EnemyDefinition> = {
  // 荒漠 —— 潜伏爆发、灼热压制、资源掠夺
  'sand-worm': cycle('sand-worm', '沙虫', 96, [{ type: 'idle', label: '潜伏蓄势' }, { type: 'attack', amount: 24, label: '露头巨咬 24' }, { type: 'defend', amount: 10, label: '钻沙 10' }]),
  'desert-raider': cycle('desert-raider', '荒漠掠夺者', 74, [{ type: 'attack', amount: 9, label: '掠袭 9' }, { type: 'status', statusId: 'weak', amount: 1, duration: 2, label: '扬沙致盲' }, { type: 'attack', amount: 13, label: '抢夺劈砍 13' }]),
  'sandstone-golem': cycle('sandstone-golem', '沙岩巨人', 104, [{ type: 'defend', amount: 13, label: '岩甲 13' }, { type: 'attack', amount: 17, label: '碾压 17' }, { type: 'buff', amount: 2, label: '硬化 +2' }]),
  'mummified-priest': cycle('mummified-priest', '干尸祭司', 78, [{ type: 'status', statusId: 'scorch', amount: 3, label: '焚咒 · 灼热 3' }, { type: 'summon', summonIds: ['sand-scorpion'], label: '召唤沙尸' }, { type: 'attack', amount: 11, label: '枯手 11' }]),
  'sand-scorpion': cycle('sand-scorpion', '沙蝎', 62, [{ type: 'status', statusId: 'venom', amount: 2, label: '毒尾 · 毒素 2' }, { type: 'buff', amount: 2, label: '蓄力 +2' }, { type: 'attack', amount: 15, label: '钳击 15' }]),
  'sandstorm-wraith': cycle('sandstorm-wraith', '沙暴亡灵', 74, [{ type: 'status', statusId: 'scorch', amount: 2, label: '卷沙 · 灼热 2' }, { type: 'attack', amount: 8, hits: 2, label: '砾风 8×2' }, { type: 'status', statusId: 'vulnerable', amount: 1, duration: 2, label: '磨蚀护甲' }]),
  'dune-tyrant': cycle('dune-tyrant', '沙丘暴君', 146, [{ type: 'buff', amount: 3, label: '沙怒 +3' }, { type: 'attack', amount: 14, hits: 2, label: '双弯刀 14×2' }, { type: 'status', statusId: 'scorch', amount: 3, label: '烈日灼身 3' }], { initialBlock: 8 }),
  'sand-sovereign': { id: 'sand-sovereign', name: '沙王', maxHp: 268, initialBlock: 10, behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 16, label: '沙戟 16' }], phases: [
    { id: 'reign', label: '统御', startsAtHpRatio: 1, intents: [{ type: 'status', statusId: 'scorch', amount: 3, label: '焦土 · 灼热 3' }, { type: 'attack', amount: 16, label: '沙戟 16' }, { type: 'defend', amount: 18, label: '流沙屏障 18' }] },
    { id: 'sandstorm', label: '沙暴降临', startsAtHpRatio: .5, intents: [{ type: 'summon', summonIds: ['sandstorm-wraith'], label: '唤起沙暴亡灵' }, { type: 'status', statusId: 'scorch', amount: 4, label: '沙暴灼烧 4' }, { type: 'attack', amount: 12, hits: 3, label: '碎沙风暴 12×3' }] },
  ] } },

  // 陨石遗迹 —— 陨能充能、宇蚀积累、终局多阶段
  'meteor-acolyte': cycle('meteor-acolyte', '陨星侍从', 96, [{ type: 'buff', amount: 3, label: '陨能充能 +3' }, { type: 'attack', amount: 19, label: '陨能爆发 19' }, { type: 'defend', amount: 11, label: '星壳 11' }]),
  'void-hound': cycle('void-hound', '虚空猎犬', 82, [{ type: 'attack', amount: 8, hits: 2, label: '瞬袭 8×2' }, { type: 'buff', amount: 2, label: '相位追踪 +2' }, { type: 'attack', amount: 15, label: '扑杀 15' }]),
  'starbone-knight': cycle('starbone-knight', '星骸骑士', 118, [{ type: 'defend', amount: 16, label: '星铠 16' }, { type: 'buff', amount: 2, label: '吸收陨能 +2' }, { type: 'attack', amount: 18, label: '星刃 18' }], { initialBlock: 10 }),
  'riftweaver': cycle('riftweaver', '裂界术士', 100, [{ type: 'status', statusId: 'cosmic-erosion', amount: 2, label: '裂界 · 宇蚀 2' }, { type: 'status', statusId: 'scorch', amount: 2, label: '能量灼烧 2' }, { type: 'attack', amount: 13, label: '裂隙冲击 13' }]),
  'cosmic-behemoth': { id: 'cosmic-behemoth', name: '宇蚀巨兽', maxHp: 182, behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 17, label: '碾轧 17' }], phases: [
    { id: 'gather', label: '汇聚', startsAtHpRatio: 1, intents: [{ type: 'buff', amount: 2, label: '宇能汇聚 +2' }, { type: 'attack', amount: 17, label: '碾轧 17' }, { type: 'defend', amount: 13, label: '陨壳 13' }] },
    { id: 'erupt', label: '爆发', startsAtHpRatio: .5, intents: [{ type: 'status', statusId: 'cosmic-erosion', amount: 3, label: '宇蚀扩散 3' }, { type: 'attack', amount: 15, hits: 2, label: '星裂 15×2' }] },
  ] } },
  'terminus-warden': { id: 'terminus-warden', name: '终焉守门者', maxHp: 196, initialBlock: 10, behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 18, label: '终焉重击 18' }], phases: [
    { id: 'gate', label: '守门', startsAtHpRatio: 1, intents: [{ type: 'defend', amount: 15, label: '终焉之门 15' }, { type: 'attack', amount: 18, label: '终焉重击 18' }, { type: 'status', statusId: 'cosmic-erosion', amount: 2, label: '门缝宇蚀 2' }] },
    { id: 'collapse', label: '崩解', startsAtHpRatio: .45, intents: [{ type: 'summon', summonIds: ['void-hound'], label: '唤出虚空猎犬' }, { type: 'attack', amount: 13, hits: 3, label: '裂界连击 13×3' }] },
  ] } },
  // 最终 Boss —— 四阶段：控能 → 撕裂 → 裂隙 → 终形
  'world-ender': { id: 'world-ender', name: '终焉', maxHp: 820, initialBlock: 16, behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 20, label: '陨拳 20' }], phases: [
    { id: 'control', label: '一阶 · 控能', startsAtHpRatio: 1, intents: [{ type: 'buff', amount: 3, label: '掌控陨能 +3' }, { type: 'attack', amount: 20, label: '陨拳 20' }, { type: 'defend', amount: 20, label: '陨能护盾 20' }] },
    { id: 'rend', label: '二阶 · 撕裂战场', startsAtHpRatio: .75, intents: [{ type: 'status', statusId: 'cosmic-erosion', amount: 3, label: '撕裂 · 宇蚀 3' }, { type: 'attack', amount: 14, hits: 2, label: '战场撕裂 14×2' }, { type: 'status', statusId: 'scorch', amount: 4, label: '星火灼烧 4' }] },
    { id: 'rift', label: '三阶 · 裂隙开启', startsAtHpRatio: .5, intents: [{ type: 'summon', summonIds: ['void-hound', 'meteor-acolyte'], label: '召来裂隙之物' }, { type: 'status', statusId: 'cosmic-erosion', amount: 4, label: '宇宙裂隙 4' }, { type: 'attack', amount: 18, hits: 2, label: '裂隙轰击 18×2' }] },
    { id: 'finality', label: '四阶 · 终形', startsAtHpRatio: .25, intents: [{ type: 'buff', amount: 4, label: '终形觉醒 +4' }, { type: 'attack', amount: 33, label: '星陨坠击 33' }, { type: 'attack', amount: 11, hits: 4, label: '终焉风暴 11×4' }] },
  ] } },
};
