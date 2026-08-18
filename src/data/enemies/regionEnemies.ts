import type { EnemyDefinition, IntentDefinition } from '../../game/combat/enemyTypes';

/**
 * Per-region rosters for the fixed campaign chain. Every region gets 3–5 normal foes,
 * 1–2 elites, and one boss, each with a distinct intent cycle and a region-flavoured
 * mechanic drawn from the status vocabulary (scorch / venom / brittle / sap / pollute / summon).
 *
 * Numbers were calibrated against a cross-region auto-battle sweep so that, with an
 * act-appropriate deck, normal fights stay winnable, elites stay genuinely threatening,
 * and bosses land in their bands:
 *   act 1 normal 25–45 HP, hit 5–10   · act 1 elite 55–80 HP, threat 8–14 · act 1 boss 150–220
 *   later normal 62–96 HP, hit 12–20  · later elite 130–215 HP            · map boss 250–450
 *
 * Existing 灰烬荒原 foes (ashling / cinder-sprite / rust-hound / glass-moth / veil-monger /
 * bell-tender / kiln-brute / ink-leech / bone-scrivener) keep their original stats and are
 * re-homed into fitting regions through the encounter tables instead of being restatted.
 */
const cycle = (id: string, name: string, maxHp: number, intents: IntentDefinition[], extra: Partial<EnemyDefinition> = {}): EnemyDefinition => ({ id, name, maxHp, behavior: { type: 'cycle', intents }, ...extra });
const phased = (id: string, name: string, maxHp: number, phases: NonNullable<EnemyDefinition['behavior']['phases']>, extra: Partial<EnemyDefinition> = {}): EnemyDefinition => ({ id, name, maxHp, behavior: { type: 'cycle', intents: phases[0].intents, phases }, ...extra });

const atk = (amount: number, label: string, hits?: number): IntentDefinition => ({ type: 'attack', amount, label, ...(hits ? { hits } : {}) });
const def = (amount: number, label: string): IntentDefinition => ({ type: 'defend', amount, label });
const buff = (amount: number, label: string): IntentDefinition => ({ type: 'buff', amount, label });
const dot = (statusId: 'scorch' | 'venom', amount: number, label: string): IntentDefinition => ({ type: 'status', statusId, amount, label });
const hex = (statusId: 'weak' | 'vulnerable' | 'brittle' | 'sap', amount: number, label: string, duration?: number): IntentDefinition => ({ type: 'status', statusId, amount, label, ...(duration ? { duration } : {}) });
const pollute = (cardIds: string[], label: string): IntentDefinition => ({ type: 'pollute', cardIds, label });
const summon = (summonIds: string[], label: string): IntentDefinition => ({ type: 'summon', summonIds, label });

export const REGION_ENEMIES: Record<string, EnemyDefinition> = {
  /* ── 落败村庄 · 收割与恐惧 ───────────────────────────── */
  'straw-effigy': cycle('straw-effigy', '稻草人', 34, [def(6, '静立 6'), hex('weak', 1, '空洞凝视', 2), atk(8, '镰刃 8')]),
  'village-scavenger': cycle('village-scavenger', '拾荒村民', 30, [atk(6, '锄击 6'), atk(5, '慌乱刺击 5', 2), def(5, '缩身 5')]),
  'crow-swarm': cycle('crow-swarm', '鸦群', 26, [atk(4, '啄击 4', 2), hex('vulnerable', 1, '撕开伤口', 2), atk(7, '扑翼 7')]),
  'harvest-hound': cycle('harvest-hound', '田垄野犬', 38, [atk(9, '撕咬 9'), buff(1, '嗅血 +1'), atk(6, '连咬 6', 2)]),
  'scythe-warden': cycle('scythe-warden', '守田人', 66, [buff(2, '扬镰 +2'), atk(12, '收割 12'), def(9, '草垛 9')]),
  'famine-effigy': phased('famine-effigy', '饥荒之像', 72, [
    { id: 'still', label: '静立', startsAtHpRatio: 1, intents: [def(9, '禾秆护体 9'), atk(11, '镰斩 11')] },
    { id: 'reap', label: '收割', startsAtHpRatio: .5, intents: [summon(['crow-swarm'], '唤来鸦群'), atk(9, '连镰 9', 2)] },
  ]),
  'the-last-harvest': phased('the-last-harvest', '最后的收成', 176, [
    { id: 'sowing', label: '播种', startsAtHpRatio: 1, intents: [buff(2, '丰歉 +2'), atk(13, '巨镰 13'), def(13, '禾墙 13')] },
    { id: 'reaping', label: '收割', startsAtHpRatio: .55, intents: [summon(['straw-effigy'], '立起稻草人'), atk(10, '双镰 10', 2), hex('weak', 2, '饥荒之息', 2)] },
  ], { initialBlock: 6 }),

  /* ── 生机森林 · 群猎与再生 ───────────────────────────── */
  'forest-wolf': cycle('forest-wolf', '森林狼', 36, [atk(7, '扑咬 7'), buff(1, '狼群 +1'), atk(5, '撕咬 5', 2)]),
  'bramble-crawler': cycle('bramble-crawler', '荆棘爬行者', 32, [dot('venom', 2, '棘刺 · 毒素 2'), def(6, '缩入荆棘 6'), atk(8, '藤鞭 8')]),
  'glowmoth-cluster': cycle('glowmoth-cluster', '荧蛾群', 28, [hex('weak', 1, '鳞粉迷障', 2), atk(6, '鳞翼 6'), buff(1, '荧光 +1')]),
  'root-stalker': cycle('root-stalker', '游根潜行者', 40, [def(8, '入土 8'), atk(10, '穿根 10'), hex('sap', 2, '缠绕 · 涸竭 2')]),
  'alpha-wolf': cycle('alpha-wolf', '狼群首领', 70, [buff(2, '嚎令 +2'), summon(['forest-wolf'], '召集狼群'), atk(13, '首领撕咬 13')]),
  'ancient-treant': phased('ancient-treant', '古树守望者', 76, [
    { id: 'bark', label: '木甲', startsAtHpRatio: 1, intents: [def(12, '树皮 12'), atk(12, '巨枝 12')] },
    { id: 'bloom', label: '暴长', startsAtHpRatio: .5, intents: [dot('venom', 2, '花粉 · 毒素 2'), atk(9, '枝鞭 9', 2)] },
  ]),
  'heart-of-the-grove': phased('heart-of-the-grove', '林心', 188, [
    { id: 'growth', label: '生长', startsAtHpRatio: 1, intents: [def(15, '年轮 15'), atk(14, '根击 14'), buff(2, '生机 +2')] },
    { id: 'wither', label: '凋零', startsAtHpRatio: .5, intents: [summon(['forest-wolf', 'bramble-crawler'], '林地回应'), dot('venom', 2, '腐叶 · 毒素 2'), atk(11, '双根 11', 2)] },
  ]),

  /* ── 苔藓沼泽 · 泥沼与毒 ─────────────────────────────── */
  'mire-crocodile': cycle('mire-crocodile', '泥沼鳄', 44, [def(7, '沉入泥中 7'), atk(14, '死亡翻滚 14'), hex('sap', 2, '拖入淤泥 · 涸竭 2')]),
  'moss-lurker': cycle('moss-lurker', '苔影潜伏者', 34, [dot('venom', 2, '孢子 · 毒素 2'), atk(8, '苔爪 8'), def(6, '苔甲 6')]),
  'reed-stalker': cycle('reed-stalker', '芦苇猎手', 30, [hex('vulnerable', 1, '拨开芦苇', 2), atk(9, '芦刺 9'), atk(5, '连刺 5', 2)]),
  'bog-witchling': cycle('bog-witchling', '沼泽小巫', 38, [pollute(['iron-mire'], '泥浆污染'), dot('venom', 2, '沼气 · 毒素 2'), atk(7, '泥弹 7')]),
  'swamp-hag': cycle('swamp-hag', '沼泽巫婆', 72, [dot('venom', 3, '毒釜 · 毒素 3'), pollute(['iron-mire', 'black-seal'], '诅咒污染'), atk(12, '骨杖 12')]),
  'ancient-croc': cycle('ancient-croc', '古沼巨鳄', 76, [def(10, '鳞甲 10'), atk(16, '巨颚 16'), buff(2, '暴怒 +2')]),
  'mother-of-the-mire': phased('mother-of-the-mire', '淤泥之母', 196, [
    { id: 'sink', label: '沉降', startsAtHpRatio: 1, intents: [dot('venom', 3, '沼毒 3'), atk(13, '泥爪 13'), def(14, '泥壳 14')] },
    { id: 'surge', label: '涌起', startsAtHpRatio: .5, intents: [summon(['mire-crocodile'], '唤起沼鳄'), hex('sap', 3, '深陷 · 涸竭 3'), atk(11, '双爪 11', 2)] },
  ]),

  /* ── 恶臭下水道 · 疫病与污染 ─────────────────────────── */
  'sewer-rat-king': cycle('sewer-rat-king', '鼠王', 64, [summon(['plague-rat'], '鼠群涌出'), atk(11, '啮咬 11'), dot('venom', 2, '疫齿 · 毒素 2')]),
  'plague-rat': cycle('plague-rat', '疫鼠', 24, [atk(5, '啮咬 5'), atk(4, '连咬 4', 2), def(4, '缩身 4')]),
  'filth-slime': cycle('filth-slime', '污泥怪', 44, [def(8, '黏膜 8'), hex('sap', 2, '腐蚀护甲 · 涸竭 2'), atk(10, '泼溅 10')]),
  'gutter-roach': cycle('gutter-roach', '沟渠巨蟑', 30, [atk(6, '钳击 6', 2), def(6, '甲壳 6'), dot('venom', 2, '腐液 · 毒素 2')]),
  'pipe-warden': cycle('pipe-warden', '闸门看守', 72, [def(11, '铁闸 11'), pollute(['iron-mire', 'ember-scar'], '倾倒污水'), atk(13, '扳手 13')]),
  'the-bloated-sovereign': phased('the-bloated-sovereign', '肿胀之主', 206, [
    { id: 'fester', label: '溃烂', startsAtHpRatio: 1, intents: [dot('venom', 3, '疫潮 3'), atk(14, '巨躯压制 14'), def(14, '脂膜 14')] },
    { id: 'burst', label: '爆裂', startsAtHpRatio: .5, intents: [summon(['plague-rat', 'gutter-roach'], '倾巢而出'), pollute(['black-seal'], '疫毒污染'), atk(10, '污爆 10', 2)] },
  ]),

  /* ── 繁华皇都 · 秩序与审判（第一幕终点） ─────────────── */
  'royal-halberdier': cycle('royal-halberdier', '皇家戟兵', 40, [def(8, '列阵 8'), atk(10, '长戟 10'), hex('brittle', 1, '破甲刺 · 脆化 1')]),
  'white-tower-adept': cycle('white-tower-adept', '白塔学徒', 32, [hex('weak', 1, '缚言', 2), atk(8, '符光 8'), buff(1, '咏唱 +1')]),
  'gilded-inquisitor': cycle('gilded-inquisitor', '镀金审判官', 44, [hex('vulnerable', 2, '宣读罪状', 2), atk(11, '审判锤 11'), def(8, '教典 8')]),
  'plaza-crier': cycle('plaza-crier', '广场传令官', 28, [buff(2, '鼓令 +2'), atk(7, '权杖 7'), hex('sap', 1, '征税 · 涸竭 1')]),
  'royal-champion': cycle('royal-champion', '皇家骑士长', 76, [def(12, '塔盾 12'), atk(14, '骑枪 14'), hex('brittle', 2, '碎甲冲锋 · 脆化 2')]),
  'lord-inquisitor': cycle('lord-inquisitor', '大审判官', 70, [hex('vulnerable', 2, '定罪', 2), atk(9, '连锤 9', 2), def(10, '判词 10')]),
  'sun-crown-warden': phased('sun-crown-warden', '日冕守门者', 204, [
    { id: 'decree', label: '宣判', startsAtHpRatio: 1, intents: [def(15, '日冕壁 15'), atk(14, '权杖击 14'), hex('brittle', 2, '碎律 · 脆化 2')] },
    { id: 'judgment', label: '终审', startsAtHpRatio: .5, intents: [summon(['royal-halberdier'], '召来卫队'), atk(11, '双锤 11', 2), hex('vulnerable', 2, '公开处刑', 2)] },
  ], { initialBlock: 8 }),

  /* ── 皇都外环 · 边境与关税（第二幕开端） ─────────────── */
  'toll-enforcer': cycle('toll-enforcer', '税关执法者', 70, [hex('sap', 2, '扣押装备 · 涸竭 2'), atk(14, '铁棍 14'), def(11, '关门 11')]),
  'road-bandit': cycle('road-bandit', '边道匪徒', 66, [atk(13, '劫刀 13'), atk(7, '连劫 7', 2), buff(2, '贪欲 +2')]),
  'caravan-deserter': cycle('caravan-deserter', '逃亡驿卒', 62, [def(10, '货箱掩体 10'), atk(13, '短弩 13'), hex('weak', 1, '扬尘', 2)]),
  'wall-sentinel': cycle('wall-sentinel', '城墙哨兵', 76, [def(13, '垛口 13'), atk(15, '长枪 15'), hex('brittle', 2, '穿甲 · 脆化 2')]),
  'border-marshal': cycle('border-marshal', '边境执法长', 142, [buff(3, '整备 +3'), atk(17, '重锤 17'), def(15, '铁阵 15')]),
  'broken-seal-gatekeeper': phased('broken-seal-gatekeeper', '断印边门守卫', 268, [
    { id: 'toll', label: '征收', startsAtHpRatio: 1, intents: [hex('sap', 3, '没收 · 涸竭 3'), atk(17, '闸锤 17'), def(17, '铁门 17')] },
    { id: 'lockdown', label: '封锁', startsAtHpRatio: .5, intents: [summon(['wall-sentinel'], '呼叫哨兵'), atk(12, '连锤 12', 2), hex('brittle', 3, '碎门 · 脆化 3')] },
  ], { initialBlock: 10 }),

  /* ── 血色之地 · 流血与狂怒 ───────────────────────────── */
  'blood-cultist': cycle('blood-cultist', '血教徒', 74, [dot('scorch', 3, '割礼 · 灼热 3'), atk(13, '仪刀 13'), buff(2, '献血 +2')]),
  'crimson-berserker': cycle('crimson-berserker', '猩红狂战士', 86, [buff(3, '狂怒 +3'), atk(17, '狂斩 17'), atk(9, '连斩 9', 2)]),
  'bone-hill-lurker': cycle('bone-hill-lurker', '赤骨潜伏者', 70, [def(10, '骨堆 10'), atk(14, '骨刺 14'), hex('vulnerable', 2, '撕裂伤口', 2)]),
  'gore-windmill': cycle('gore-windmill', '血磨守卫', 80, [dot('scorch', 2, '血雨 · 灼热 2'), atk(8, '轮刃 8', 2), def(12, '磨盘 12')]),
  'blood-marshal': cycle('blood-marshal', '血誓统领', 152, [buff(3, '血誓 +3'), atk(18, '重刃 18'), dot('scorch', 4, '烙印 · 灼热 4')]),
  'clotted-altar': phased('clotted-altar', '凝血祭坛', 288, [
    { id: 'offer', label: '献祭', startsAtHpRatio: 1, intents: [dot('scorch', 4, '血焰 4'), atk(18, '祭刃 18'), def(16, '血壳 16')] },
    { id: 'flood', label: '血涌', startsAtHpRatio: .5, intents: [summon(['blood-cultist'], '召来血教徒'), atk(13, '双刃 13', 2), hex('brittle', 3, '剥皮 · 脆化 3')] },
  ]),

  /* ── 魔法之地 · 咒文与失序 ───────────────────────────── */
  'candle-apprentice': cycle('candle-apprentice', '烛浮学徒', 68, [buff(2, '咏唱 +2'), atk(13, '火符 13'), hex('weak', 1, '缚咒', 2)]),
  'rune-construct': cycle('rune-construct', '符文构造体', 88, [def(14, '符盾 14'), atk(15, '符锤 15'), hex('brittle', 2, '刻痕 · 脆化 2')]),
  'grimoire-swarm': cycle('grimoire-swarm', '飞书群', 64, [pollute(['fading-script'], '错页污染'), atk(7, '纸刃 7', 2), hex('sap', 2, '抽取法力 · 涸竭 2')]),
  'astrolabe-keeper': cycle('astrolabe-keeper', '星盘看守', 78, [def(11, '星环 11'), atk(16, '天权击 16'), buff(2, '演算 +2')]),
  'archmage-tutor': cycle('archmage-tutor', '大法师导师', 158, [pollute(['fading-script', 'black-seal'], '禁咒污染'), atk(18, '奥术轰击 18'), def(15, '奥盾 15')]),
  'bell-tower-of-spells': phased('bell-tower-of-spells', '大法师钟塔', 296, [
    { id: 'chant', label: '咏唱', startsAtHpRatio: 1, intents: [buff(3, '积蓄咒力 +3'), atk(17, '咒击 17'), def(17, '结界 17')] },
    { id: 'unravel', label: '失控', startsAtHpRatio: .5, intents: [pollute(['fading-script', 'iron-mire'], '咒文崩解'), atk(12, '双咒 12', 2), hex('sap', 3, '汲取 · 涸竭 3')] },
  ]),

  /* ── 科技之城 · 过载与护盾 ───────────────────────────── */
  'neon-enforcer': cycle('neon-enforcer', '霓虹执法机', 80, [def(12, '能量盾 12'), atk(16, '电棍 16'), hex('brittle', 2, '穿甲弹 · 脆化 2')]),
  'drone-swarm': cycle('drone-swarm', '无人机群', 66, [atk(6, '扫射 6', 3), hex('weak', 1, '干扰', 2), def(9, '编队 9')]),
  'circuit-leech': cycle('circuit-leech', '电路吸虫', 70, [hex('sap', 2, '窃电 · 涸竭 2'), atk(13, '电击 13'), dot('scorch', 2, '过载 · 灼热 2')]),
  'chrome-brute': cycle('chrome-brute', '铬合暴徒', 92, [buff(3, '增压 +3'), atk(18, '液压拳 18'), def(13, '装甲 13')]),
  'firewall-sentinel': cycle('firewall-sentinel', '防火墙哨卫', 166, [def(17, '防火墙 17'), atk(19, '离子束 19'), hex('brittle', 3, '解构 · 脆化 3')]),
  'zero-shaft-core': phased('zero-shaft-core', '零号升空井核心', 312, [
    { id: 'boot', label: '启动', startsAtHpRatio: 1, intents: [def(18, '磁封 18'), atk(18, '推进冲击 18'), buff(3, '增压 +3')] },
    { id: 'overload', label: '过载', startsAtHpRatio: .5, intents: [summon(['drone-swarm'], '释放无人机'), dot('scorch', 4, '熔线 · 灼热 4'), atk(13, '双束 13', 2)] },
  ], { initialBlock: 12 }),

  /* ── 天空岛 · 风压与坠落 ─────────────────────────────── */
  'cloud-whale-calf': cycle('cloud-whale-calf', '云鲸幼崽', 74, [def(7, '气囊 7'), atk(13, '尾击 13'), hex('weak', 1, '气流', 2)]),
  // Fast, fragile flier. It circles between dives instead of stacking Strength, so a pair applies
  // burst pressure without compounding into an unwinnable grind on high difficulties.
  'gale-harrier': cycle('gale-harrier', '疾风隼', 56, [atk(6, '俯冲 6', 2), { type: 'idle', label: '盘旋待机' }, atk(11, '撕击 11')]),
  // Sky pressure reads as weightlessness (block loss), not another damage amplifier.
  'skystone-sentry': cycle('skystone-sentry', '浮石哨卫', 78, [def(9, '石壳 9'), atk(15, '砸击 15'), hex('sap', 2, '失重 · 涸竭 2')]),
  'white-wing-warden': cycle('white-wing-warden', '白翼守卫', 68, [hex('vulnerable', 1, '锁定', 2), atk(13, '长矛 13'), def(7, '羽盾 7')]),
  'storm-shepherd': cycle('storm-shepherd', '风暴牧者', 150, [buff(2, '聚风 +2'), atk(10, '雷鞭 10', 2), def(13, '风墙 13')]),
  'sky-lock-bridge': phased('sky-lock-bridge', '天穹锁桥守卫', 304, [
    { id: 'anchor', label: '锚定', startsAtHpRatio: 1, intents: [def(18, '锁链 18'), atk(18, '巨锚 18'), hex('brittle', 2, '断链 · 脆化 2')] },
    { id: 'freefall', label: '失重', startsAtHpRatio: .5, intents: [summon(['gale-harrier'], '召来隼群'), hex('sap', 3, '失重 · 涸竭 3'), atk(13, '双锚 13', 2)] },
  ], { initialBlock: 10 }),

  /* ── 贵族城堡 · 家徽与背叛（第二幕终点） ─────────────── */
  'silver-guard': cycle('silver-guard', '银甲卫士', 76, [def(12, '银盾 12'), atk(16, '长剑 16'), hex('brittle', 2, '刺甲 · 脆化 2')]),
  'feast-hound': cycle('feast-hound', '宴厅猎犬', 66, [atk(8, '撕咬 8', 2), buff(2, '嗅猎 +2'), atk(15, '扑杀 15')]),
  'court-poisoner': cycle('court-poisoner', '宫廷毒师', 64, [dot('venom', 3, '杯中之物 · 毒素 3'), hex('weak', 1, '迷香', 2), atk(12, '匕首 12')]),
  'heraldic-knight': cycle('heraldic-knight', '纹章骑士', 84, [def(14, '家徽盾 14'), atk(17, '骑枪 17'), buff(2, '誓约 +2')]),
  'castellan': cycle('castellan', '城堡总管', 168, [def(16, '城规 16'), atk(19, '权杖 19'), hex('sap', 3, '收缴 · 涸竭 3')]),
  'throneless-heir': phased('throneless-heir', '无主王座', 336, [
    { id: 'court', label: '临朝', startsAtHpRatio: 1, intents: [def(18, '王座壁 18'), atk(19, '家传剑 19'), buff(3, '血统 +3')] },
    { id: 'betrayal', label: '背叛', startsAtHpRatio: .5, intents: [summon(['silver-guard'], '召来银甲卫'), dot('venom', 3, '毒酒 3'), atk(14, '双剑 14', 2)] },
  ], { initialBlock: 12 }),

  /* ── 城堡地下墓道 · 骨与静默（第三幕开端） ───────────── */
  'crypt-ossuary': cycle('crypt-ossuary', '骨室看守', 72, [def(12, '骨堆 12'), atk(15, '股骨锤 15'), hex('brittle', 2, '碎骨 · 脆化 2')]),
  'wax-sealed-corpse': cycle('wax-sealed-corpse', '封蜡尸', 68, [dot('venom', 2, '蜡毒 · 毒素 2'), atk(14, '僵手 14'), def(10, '蜡壳 10')]),
  'nameless-echo': cycle('nameless-echo', '失名回响', 64, [hex('weak', 2, '遗忘之语', 2), atk(13, '低语 13'), pollute(['fading-script'], '抹名污染')]),
  'tomb-stair-guard': cycle('tomb-stair-guard', '墓阶卫士', 78, [def(13, '阶石 13'), atk(16, '长戟 16'), hex('sap', 2, '压制 · 涸竭 2')]),
  'first-interred': cycle('first-interred', '初葬者', 148, [buff(2, '王血 +2'), atk(17, '陪葬剑 17'), summon(['wax-sealed-corpse'], '唤起封蜡尸')]),
  'underground-king-gate': phased('underground-king-gate', '地下王门', 296, [
    { id: 'seal', label: '封印', startsAtHpRatio: 1, intents: [def(18, '墓门 18'), atk(18, '门锤 18'), hex('brittle', 2, '裂石 · 脆化 2')] },
    { id: 'descend', label: '下沉', startsAtHpRatio: .5, intents: [summon(['crypt-ossuary'], '骨室回应'), dot('venom', 3, '墓气 3'), atk(13, '双锤 13', 2)] },
  ], { initialBlock: 10 }),

  /* ── 冥界 · 幽火与消磨 ───────────────────────────────── */
  'pale-flame-wisp': cycle('pale-flame-wisp', '幽火鬼火', 68, [dot('scorch', 3, '幽焰 · 灼热 3'), atk(12, '灼触 12'), def(9, '虚影 9')]),
  'market-of-the-dead-broker': cycle('market-of-the-dead-broker', '亡者掌柜', 74, [hex('sap', 2, '收取通行费 · 涸竭 2'), atk(14, '铜秤 14'), buff(2, '交易 +2')]),
  'dirge-stone': cycle('dirge-stone', '哀歌石像', 84, [def(14, '石缄 14'), atk(16, '石掌 16'), hex('weak', 2, '哀歌', 2)]),
  'soul-shackler': cycle('soul-shackler', '锁魂者', 76, [hex('brittle', 2, '锁链 · 脆化 2'), atk(15, '链击 15'), pollute(['black-seal'], '契印污染')]),
  'lord-of-cold-hearth': cycle('lord-of-cold-hearth', '冷炉之主', 170, [dot('scorch', 4, '寒焰 4'), atk(19, '断阶锤 19'), def(16, '幽壁 16')]),
  'broken-stair-of-hades': phased('broken-stair-of-hades', '冥王断阶', 342, [
    { id: 'descent', label: '下降', startsAtHpRatio: 1, intents: [def(18, '亡者之壁 18'), atk(19, '幽锤 19'), dot('scorch', 3, '幽焰 3')] },
    { id: 'judgement', label: '裁定', startsAtHpRatio: .5, intents: [summon(['pale-flame-wisp'], '点起幽火'), hex('brittle', 3, '剥离 · 脆化 3'), atk(14, '双锤 14', 2)] },
  ], { initialBlock: 12 }),

  /* ── 幽冥渡口 · 潮汐与交易 ───────────────────────────── */
  'lethe-boatman': cycle('lethe-boatman', '忘川船夫', 78, [hex('weak', 2, '忘川之水', 2), atk(16, '长桨 16'), def(11, '黑舟 11')]),
  'paper-lantern-shade': cycle('paper-lantern-shade', '纸灯亡影', 66, [dot('scorch', 3, '灯焰 · 灼热 3'), atk(13, '灯杖 13'), hex('sap', 2, '吹熄 · 涸竭 2')]),
  'tide-chanter': cycle('tide-chanter', '潮声吟者', 70, [buff(2, '涨潮 +2'), atk(9, '浪击 9', 2), def(10, '碑影 10')]),
  'coin-drowned': cycle('coin-drowned', '沉钱溺者', 76, [hex('brittle', 2, '拽入水中 · 脆化 2'), atk(15, '锈钩 15'), pollute(['iron-mire'], '浊水污染')]),
  'ferryman-of-names': cycle('ferryman-of-names', '收名摆渡人', 164, [hex('weak', 2, '收走旧名', 2), atk(18, '铁桨 18'), def(16, '雾舟 16')]),
  'ferrymans-gate': phased('ferrymans-gate', '摆渡者之门', 318, [
    { id: 'toll', label: '船资', startsAtHpRatio: 1, intents: [def(17, '门帘 17'), atk(18, '桨击 18'), hex('sap', 3, '索取 · 涸竭 3')] },
    { id: 'crossing', label: '渡河', startsAtHpRatio: .5, intents: [summon(['paper-lantern-shade'], '点亮纸灯'), atk(13, '双桨 13', 2), hex('weak', 2, '忘川涌流', 2)] },
  ], { initialBlock: 10 }),

  /* ── 海洋 · 水压与气泡（第三幕常规终点） ─────────────── */
  'bubble-eel': cycle('bubble-eel', '气泡电鳗', 72, [dot('scorch', 3, '放电 · 灼热 3'), atk(14, '缠击 14'), def(9, '气泡 9')]),
  'whalebone-drifter': cycle('whalebone-drifter', '鲸骨漂游者', 82, [def(13, '骨壳 13'), atk(16, '骨刺 16'), hex('brittle', 2, '压裂 · 脆化 2')]),
  'reef-stalker': cycle('reef-stalker', '暗礁猎手', 76, [hex('vulnerable', 2, '锁定猎物', 2), atk(9, '连咬 9', 2), buff(2, '潜行 +2')]),
  'sunken-lamp-keeper': cycle('sunken-lamp-keeper', '沉船灯守', 70, [hex('sap', 2, '压强 · 涸竭 2'), atk(15, '锚击 15'), def(11, '船板 11')]),
  'deep-current-warden': cycle('deep-current-warden', '深流守卫', 172, [def(16, '洋流壁 16'), atk(19, '巨螯 19'), hex('brittle', 3, '深压 · 脆化 3')]),
  'abyss-maelstrom-gate': phased('abyss-maelstrom-gate', '深潮漩门', 368, [
    { id: 'current', label: '洋流', startsAtHpRatio: 1, intents: [def(18, '涡壁 18'), atk(20, '潮击 20'), hex('sap', 3, '深压 · 涸竭 3')] },
    { id: 'maelstrom', label: '漩涡', startsAtHpRatio: .55, intents: [summon(['bubble-eel'], '卷来电鳗'), atk(14, '双漩 14', 2), hex('brittle', 3, '碾压 · 脆化 3')] },
    { id: 'crush', label: '碾碎', startsAtHpRatio: .25, intents: [atk(24, '深渊碾压 24'), dot('scorch', 4, '压裂灼痛 4'), atk(11, '连漩 11', 3)] },
  ], { initialBlock: 14 }),

  /* ── 亚特兰蒂斯 · 白石与残响（难度 5） ───────────────── */
  'marble-sentinel': cycle('marble-sentinel', '白石哨卫', 88, [def(15, '大理石壳 15'), atk(18, '石拳 18'), hex('brittle', 2, '碎石 · 脆化 2')]),
  'broken-column-shade': cycle('broken-column-shade', '断柱残影', 76, [hex('weak', 2, '古语', 2), atk(16, '柱影 16'), pollute(['fading-script'], '碑文污染')]),
  'bath-house-siren': cycle('bath-house-siren', '浴场歌者', 78, [hex('sap', 2, '歌声 · 涸竭 2'), atk(15, '水刃 15'), buff(2, '回响 +2')]),
  'star-senate-scribe': cycle('star-senate-scribe', '沉星议员', 82, [buff(3, '议决 +3'), atk(17, '星笔 17'), def(13, '议典 13')]),
  'white-stone-archon': cycle('white-stone-archon', '白石执政官', 176, [def(17, '执政壁 17'), atk(20, '权杖 20'), hex('brittle', 3, '裂纹 · 脆化 3')]),
  'atlantean-court': phased('atlantean-court', '亚特兰蒂斯王庭', 402, [
    { id: 'session', label: '开庭', startsAtHpRatio: 1, intents: [def(18, '白石壁 18'), atk(20, '王庭锤 20'), buff(3, '沉星 +3')] },
    { id: 'flood', label: '倒灌', startsAtHpRatio: .55, intents: [summon(['marble-sentinel'], '唤起白石哨卫'), hex('sap', 3, '水压 · 涸竭 3'), atk(15, '双锤 15', 2)] },
    { id: 'silence', label: '静默', startsAtHpRatio: .25, intents: [atk(26, '沉城裁决 26'), hex('brittle', 4, '全面崩裂 · 脆化 4'), atk(12, '连击 12', 3)] },
  ], { initialBlock: 14 }),

  /* ── 钟楼 · 标记与召唤（第三幕终点） ─────────────────── */
  'bell-acolyte': cycle('bell-acolyte', '司钟侍者', 64, [buff(2, '摇铃 +2'), atk(12, '钟槌 12'), hex('vulnerable', 1, '钟痕标记', 2)]),
  'echo-wraith': cycle('echo-wraith', '回音亡魂', 58, [atk(6, '回响 6', 2), hex('weak', 1, '钟鸣震荡', 2), atk(11, '余音斩 11')]),
  'pendulum-blade': cycle('pendulum-blade', '钟摆之刃', 72, [def(11, '钟壁 11'), atk(15, '摆斩 15'), hex('brittle', 2, '裂钟 · 脆化 2')]),
  'bell-warden': cycle('bell-warden', '守钟卫长', 150, [buff(2, '齐鸣 +2'), summon(['echo-wraith'], '唤起回音'), atk(17, '落钟 17')]),
  'silent-king': phased('silent-king', '不鸣之王', 244, [
    { id: 'toll', label: '鸣钟', startsAtHpRatio: 1, intents: [def(16, '青铜之壁 16'), atk(18, '王之钟槌 18'), hex('vulnerable', 2, '死亡钟痕', 2)] },
    { id: 'silence', label: '寂灭', startsAtHpRatio: .5, intents: [summon(['bell-acolyte'], '召来司钟者'), atk(12, '连钟 12', 2), hex('brittle', 3, '碎钟 · 脆化 3')] },
  ], { initialBlock: 8 }),

  /* ── 霓虹院 · 数据与审判（第六幕） ───────────────────── */
  'data-bailiff': cycle('data-bailiff', '数据执庭', 88, [def(13, '数据盾 13'), atk(16, '判决电击 16'), hex('sap', 2, '扣押 · 涸竭 2')]),
  'memory-leech': cycle('memory-leech', '记忆吸虫', 78, [hex('sap', 3, '抽取记忆 · 涸竭 3'), atk(13, '侵蚀 13'), { type: 'energy', amount: -1, label: '过载扰能' }]),
  'verdict-drone': cycle('verdict-drone', '裁决浮游炮', 74, [atk(7, '定罪射线 7', 2), hex('vulnerable', 2, '标定罪证', 2), def(10, '悬停 10')]),
  'neon-executioner': cycle('neon-executioner', '霓虹行刑官', 176, [buff(3, '超频 +3'), atk(19, '离子断头 19'), hex('brittle', 2, '解构 · 脆化 2')]),
  'neon-arbiter': phased('neon-arbiter', '霓虹裁决者', 330, [
    { id: 'trial', label: '审理', startsAtHpRatio: 1, intents: [def(18, '数据壁垒 18'), atk(19, '判词电弧 19'), hex('sap', 3, '证据封存 · 涸竭 3')] },
    { id: 'sentence', label: '宣判', startsAtHpRatio: .5, intents: [summon(['verdict-drone'], '部署浮游炮'), atk(13, '连锁审判 13', 2), hex('brittle', 3, '强制解构 · 脆化 3')] },
  ], { initialBlock: 12 }),

  /* ── 恶魔巢穴 · 契约与增殖（第七幕） ─────────────────── */
  'brood-spawn': cycle('brood-spawn', '巢穴孵体', 78, [atk(7, '撕咬 7', 2), { type: 'idle', label: '蠕动增殖' }, atk(14, '猛扑 14')]),
  'pact-cultist': cycle('pact-cultist', '契约信徒', 84, [dot('scorch', 3, '血契 · 灼热 3'), atk(13, '献祭刃 13'), def(9, '低语护盾 9')]),
  'gore-fiend': cycle('gore-fiend', '噬血魔', 88, [atk(14, '巨爪 14'), dot('venom', 2, '腐蚀之爪 · 毒素 2'), atk(17, '撕裂 17')]),
  'nest-broodmother': cycle('nest-broodmother', '孵母', 204, [summon(['brood-spawn'], '产下孵体'), atk(17, '尾刺 17'), def(15, '甲壳 15')]),
  'demon-progenitor': phased('demon-progenitor', '巢穴母体', 372, [
    { id: 'spawn', label: '增殖', startsAtHpRatio: 1, intents: [summon(['brood-spawn'], '孵化血池'), atk(19, '巨颚 19'), def(17, '血膜 17')] },
    { id: 'devour', label: '吞噬', startsAtHpRatio: .55, intents: [dot('venom', 4, '腐蚀吐息 · 毒素 4'), atk(15, '双爪 15', 2), buff(3, '狂噬 +3')] },
    { id: 'apocalypse', label: '崩解', startsAtHpRatio: .25, intents: [atk(28, '母体崩坏 28'), dot('scorch', 4, '血焰喷发 4'), summon(['gore-fiend'], '喷出噬血魔')] },
  ], { initialBlock: 12 }),

  /* ── 世界地垒 · 终末城垒（第七幕终点，Boss 为「终焉」world-ender） ── */
  'rampart-sentinel': cycle('rampart-sentinel', '地垒哨卫', 104, [def(18, '星界石壁 18'), atk(19, '崩落重锤 19'), hex('brittle', 2, '碎垒 · 脆化 2')]),
  'starfall-archer': cycle('starfall-archer', '坠星射手', 90, [atk(8, '星矢 8', 2), hex('vulnerable', 2, '锁定坐标', 2), atk(16, '陨矢 16')]),
  'void-templar': cycle('void-templar', '虚空圣堂武士', 112, [def(16, '虚空甲 16'), buff(2, '汲取宇能 +2'), atk(18, '裂界剑 18')]),
  'rampart-warden': cycle('rampart-warden', '地垒守将', 214, [buff(3, '终末号令 +3'), atk(11, '连锤 11', 2), hex('brittle', 3, '穿垒 · 脆化 3')]),
};
