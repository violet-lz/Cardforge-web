import type { BiomeId } from '../biomes/biomes';
import type { EventState } from '../../game/run/eventTypes';

export type RegionEvent = EventState & { biomeIds?: readonly BiomeId[] };

/**
 * One signature event per campaign region, so each world explains itself through a choice
 * rather than sharing a generic pool. Every option stays inside the existing event schema
 * (hp / gold / card / relic / potion), so no new engine behaviour is required.
 */
const ev = (id: string, biome: BiomeId, title: string, description: string, choices: EventState['choices']): RegionEvent => ({ id, title, description, biomeIds: [biome], choices });

export const REGION_EVENTS: RegionEvent[] = [
  ev('scarecrow-vigil', 'ruined-village', '稻草人的守夜', '田垄尽头的稻草人穿着你认识的外衣。它的口袋里塞着一封没有寄出的信。', [
    { id: 'read', label: '读完那封信', description: '悲伤但清醒：恢复 8 点生命。', hpDelta: 8, goldDelta: 0 },
    { id: 'strip', label: '取下外衣变卖', description: '获得 28 金币，代价是心里更冷。', hpDelta: -4, goldDelta: 28 },
    { id: 'burn', label: '连稻草人一起烧掉', description: '灰烬中留下一枚余烬印记。', hpDelta: -6, goldDelta: 0, relicId: 'ember-seal' },
  ]),
  ev('grove-spring', 'verdant-forest', '林心泉眼', '树根之间涌出清澈泉水，水面漂着还未凋谢的荧叶。', [
    { id: 'drink', label: '饮下泉水', description: '恢复 14 点生命。', hpDelta: 14, goldDelta: 0 },
    { id: 'bottle', label: '装入水囊', description: '获得一瓶余烬药剂。', hpDelta: 0, goldDelta: 0, potionId: 'ember-tonic' },
    { id: 'dig', label: '掘开泉底', description: '泉眼干涸，但泥中有 30 金币。', hpDelta: -5, goldDelta: 30 },
  ]),
  ev('sunken-boat', 'moss-marsh', '沉在沼里的小船', '半沉的木船里坐着一具还握着桨的骸骨，桨柄上刻着一行歪斜的字。', [
    { id: 'salvage', label: '翻找船舱', description: '获得 26 金币，泥水呛入喉咙。', hpDelta: -5, goldDelta: 26 },
    { id: 'bury', label: '替他掩埋', description: '心安：恢复 10 点生命。', hpDelta: 10, goldDelta: 0 },
    { id: 'take-oar', label: '带走那支桨', description: '将一张尘卷加入牌组。', hpDelta: 0, goldDelta: 0, addCardId: 'dust-script' },
  ]),
  ev('grate-of-coins', 'fetid-sewers', '铁栅下的钱', '污水在铁栅前打转，栅栏底下沉着一层被冲进来的硬币。', [
    { id: 'reach', label: '伸手去捞', description: '获得 34 金币，伤口浸进污水。', hpDelta: -8, goldDelta: 34 },
    { id: 'pry', label: '撬开铁栅', description: '花 15 金币借来撬棍，安全取出。', hpDelta: 0, goldDelta: 15 },
    { id: 'leave', label: '不值得', description: '洗净双手离开。', hpDelta: 4, goldDelta: 0 },
  ]),
  ev('census-of-light', 'radiant-capital', '辉金长街的名册', '白塔书记要为你登记身份。他的笔悬在纸上，等一个可以写下的名字。', [
    { id: 'true-name', label: '写下真名', description: '获得皇都通行费 32 金币。', hpDelta: 0, goldDelta: 32 },
    { id: 'false-name', label: '写下假名', description: '得到一张空罗盘。', hpDelta: 0, goldDelta: 0, addCardId: 'hollow-compass' },
    { id: 'refuse', label: '拒绝登记', description: '卫兵推搡而过。', hpDelta: -7, goldDelta: 10 },
  ]),
  ev('abandoned-tollhouse', 'capital-outskirts', '废弃税关', '税关的账本还摊在桌上，最后一行写着一笔从未收上来的款。', [
    { id: 'claim', label: '自己收下这笔款', description: '获得 40 金币。', hpDelta: 0, goldDelta: 40 },
    { id: 'rest', label: '在关房里睡一晚', description: '恢复 16 点生命。', hpDelta: 16, goldDelta: 0 },
    { id: 'burn-ledger', label: '烧掉账本', description: '移除牌组中的第一张卡。', hpDelta: 0, goldDelta: 0, removeFirstCard: true },
  ]),
  ev('crimson-windmill', 'bloodlands', '猩红风车', '风车的叶片浸透了血，转动时会把红色的雨甩向四周。', [
    { id: 'stand', label: '站进血雨', description: '失去 10 点生命，锻出 40 金币的战利品。', hpDelta: -10, goldDelta: 40 },
    { id: 'stop', label: '卡住叶片', description: '风车停转，你得以喘息：恢复 12 点生命。', hpDelta: 12, goldDelta: 0 },
    { id: 'sharpen', label: '在叶刃上磨卡', description: '升级牌组中第一张未升级的卡。', hpDelta: -4, goldDelta: 0, upgradeFirstCard: true },
  ]),
  ev('sand-well', 'desert', '被埋没的井', '半埋的井口只剩一圈石沿。绳子还在，但你不知道下面是水还是别的东西。', [
    { id: 'draw-water', label: '打水', description: '恢复 15 点生命。', hpDelta: 15, goldDelta: 0 },
    { id: 'descend', label: '顺绳而下', description: '井底有 38 金币与旧日商队的遗物。', hpDelta: -9, goldDelta: 38 },
    { id: 'mirage', label: '追逐远处的蜃景', description: '徒劳跋涉，但捡到一瓶药剂。', hpDelta: -5, goldDelta: 0, potionId: 'ember-tonic' },
  ]),
  ev('candle-library', 'arcane-march', '烛浮图书馆', '悬浮的烛火照着一本自行翻页的书。它停在写有你名字的一页。', [
    { id: 'read-on', label: '继续读下去', description: '洞悉一角：将一张尘卷加入牌组。', hpDelta: 0, goldDelta: 0, addCardId: 'dust-script' },
    { id: 'close', label: '合上书', description: '烛火退散，留下 30 金币的谢礼。', hpDelta: 0, goldDelta: 30 },
    { id: 'tear', label: '撕下那一页', description: '代价惨重，但换来一次锻造。', hpDelta: -11, goldDelta: 0, upgradeFirstCard: true },
  ]),
  ev('neon-black-market', 'techno-city', '霓虹黑市', '巷子深处的机械贩子只接受两种付款方式：金币，或者一段记忆。', [
    { id: 'pay-gold', label: '付出金币', description: '花 25 金币换取一次强化。', hpDelta: 0, goldDelta: -25, upgradeFirstCard: true },
    { id: 'pay-memory', label: '交出一段记忆', description: '移除牌组中的第一张卡并获得 22 金币。', hpDelta: 0, goldDelta: 22, removeFirstCard: true },
    { id: 'walk', label: '直接走开', description: '什么也没发生。', hpDelta: 0, goldDelta: 6 },
  ]),
  ev('cloud-garden', 'sky-island', '白翼花园', '浮岛边缘的花园无人照料，花却开得极好。风一直把你往悬崖推。', [
    { id: 'rest', label: '在花间躺一会', description: '恢复 18 点生命。', hpDelta: 18, goldDelta: 0 },
    { id: 'harvest', label: '采下云花', description: '获得一瓶余烬药剂。', hpDelta: 0, goldDelta: 0, potionId: 'ember-tonic' },
    { id: 'lean', label: '探身看向云下', description: '看清了航路，也差点坠落。', hpDelta: -8, goldDelta: 28 },
  ]),
  ev('family-portrait', 'noble-castle', '长宴厅的画像', '厅堂尽头挂着一幅家族画像。画中有一个位置被人刻意刮去了。', [
    { id: 'restore', label: '试着修补画像', description: '你认出了自己：恢复 14 点生命。', hpDelta: 14, goldDelta: 0 },
    { id: 'crest', label: '取下家徽', description: '获得金币轨道遗物。', hpDelta: -6, goldDelta: 0, relicId: 'coin-orbit' },
    { id: 'silver', label: '取走餐厅银器', description: '获得 36 金币。', hpDelta: 0, goldDelta: 36 },
  ]),
  ev('unnamed-slab', 'castle-catacombs', '无名石板', '墓道墙上有一块空白石板，旁边放着一把还能刻字的凿子。', [
    { id: 'carve-own', label: '刻上自己的名字', description: '与旧王同列：恢复 12 点生命。', hpDelta: 12, goldDelta: 0 },
    { id: 'carve-lost', label: '刻上失踪者的名字', description: '陪葬品作为答谢：34 金币。', hpDelta: 0, goldDelta: 34 },
    { id: 'blank', label: '留它空白', description: '安静离开。', hpDelta: 5, goldDelta: 5 },
  ]),
  ev('market-of-the-dead', 'underworld', '亡者集市', '摊位上摆着活人不该拥有的东西。掌柜说，价钱可以用别的方式支付。', [
    { id: 'buy-warmth', label: '买回一点温度', description: '恢复 16 点生命，花去 12 金币。', hpDelta: 16, goldDelta: -12 },
    { id: 'sell-name', label: '卖掉一个名字', description: '获得 38 金币。', hpDelta: -6, goldDelta: 38 },
    { id: 'barter-card', label: '以牌换牌', description: '移除牌组中的第一张卡。', hpDelta: 0, goldDelta: 0, removeFirstCard: true },
  ]),
  ev('lantern-toll', 'ghost-ferry', '纸灯船资', '船夫伸出手。他不要金币，他要你手里那盏还亮着的灯。', [
    { id: 'give-lantern', label: '交出灯', description: '黑暗中前行：失去 7 点生命，省下船资并得 20 金币。', hpDelta: -7, goldDelta: 20 },
    { id: 'pay-coins', label: '坚持付钱', description: '花 20 金币保住灯火，安然渡河。', hpDelta: 6, goldDelta: -20 },
    { id: 'swim', label: '自己游过去', description: '忘川刺骨，但一枚沉钱落进手中。', hpDelta: -12, goldDelta: 30 },
  ]),
  ev('whalebone-garden', 'ocean-depths', '鲸骨花园', '巨大的鲸骨间长满发光的海草，气泡从骨缝里缓慢升起。', [
    { id: 'breathe', label: '吸入气泡', description: '恢复 17 点生命。', hpDelta: 17, goldDelta: 0 },
    { id: 'pry-pearl', label: '撬开骨缝取珠', description: '获得 40 金币，水压压得肋骨作响。', hpDelta: -10, goldDelta: 40 },
    { id: 'listen', label: '听骨中的回声', description: '获得一张护符墨。', hpDelta: 0, goldDelta: 0, addCardId: 'warding-ink' },
  ]),
  ev('white-marble-bath', 'atlantis', '白石浴场', '浴池里的水依然温热，池底铺满沉星议院的旧徽章。', [
    { id: 'bathe', label: '入池', description: '恢复 20 点生命。', hpDelta: 20, goldDelta: 0 },
    { id: 'collect', label: '拾取徽章', description: '获得 44 金币。', hpDelta: 0, goldDelta: 44 },
    { id: 'inscribe', label: '按古法重刻一张牌', description: '升级牌组中第一张未升级的卡。', hpDelta: -6, goldDelta: 0, upgradeFirstCard: true },
  ]),
  ev('crater-echo', 'meteor-ruins', '陨坑回响', '陨坑中央悬着一块尚未落地的碎片。靠近时，它开始重复你的心跳。', [
    { id: 'touch', label: '触碰碎片', description: '陨能灌入体内：失去 12 点生命，获得 50 金币。', hpDelta: -12, goldDelta: 50 },
    { id: 'attune', label: '与之同频', description: '恢复 15 点生命。', hpDelta: 15, goldDelta: 0 },
    { id: 'shatter', label: '击碎它', description: '获得余烬印记。', hpDelta: -8, goldDelta: 0, relicId: 'ember-seal' },
  ]),
  // ── 新增地域 ──
  ev('silent-pendulum', 'bell-tower', '停摆的钟', '巨大的钟摆卡在半空，钟舌上缠着一缕不属于风的低语。推它一把，或许会响。', [
    { id: 'push', label: '推动钟摆', description: '钟声震落梁上积尘：受伤 6 点，获得 30 金币。', hpDelta: -6, goldDelta: 30 },
    { id: 'listen', label: '贴耳倾听', description: '你听清了猎物的走向：获得一张钟痕。', hpDelta: 0, goldDelta: 0, addCardId: 'bell-mark' },
    { id: 'oil', label: '为轴上油', description: '让它安静地摆动，你也安心：恢复 12 点生命。', hpDelta: 12, goldDelta: 0 },
  ]),
  ev('memory-terminal', 'neon-court', '记忆终端', '一台仍在运行的终端要求你输入一段记忆作为通行凭证。屏幕映出你不愿回想的画面。', [
    { id: 'upload', label: '上传一段记忆', description: '删去负担：移除牌组中的第一张卡并获得 26 金币。', hpDelta: 0, goldDelta: 26, removeFirstCard: true },
    { id: 'overclock', label: '超频破解', description: '强行取用数据：失去 8 点生命，升级第一张未升级的卡。', hpDelta: -8, goldDelta: 0, upgradeFirstCard: true },
    { id: 'logout', label: '直接登出', description: '不留痕迹地离开，顺走一点零钱。', hpDelta: 0, goldDelta: 10 },
  ]),
  ev('blood-contract', 'demon-nest', '血色契约', '祭坛上摊开一份只需一滴血就能签署的契约，条款用你看不懂的文字写成。', [
    { id: 'sign', label: '签下契约', description: '力量涌入血脉：失去 14 点生命，获得恶魔血。', hpDelta: -14, goldDelta: 0, potionId: 'demon-ichor' },
    { id: 'burn', label: '烧掉契约', description: '拒绝交易，火光中掉出 42 金币。', hpDelta: 0, goldDelta: 42 },
    { id: 'flee', label: '转身逃离', description: '爪影擦身而过：受伤 6 点。', hpDelta: -6, goldDelta: 8 },
  ]),
  ev('last-watchpost', 'world-rampart', '最后的哨台', '世界尽头的哨台空无一人，火盆却仍燃着。墙上刻着历代守望者的名字，最后一格是空的。', [
    { id: 'stand', label: '接过守望', description: '整备身心，直面终局：恢复 20 点生命。', hpDelta: 20, goldDelta: 0 },
    { id: 'engrave', label: '刻下己名', description: '以觉悟换取力量：升级第一张未升级的卡。', hpDelta: -5, goldDelta: 0, upgradeFirstCard: true },
    { id: 'supply', label: '搜刮补给', description: '哨台仓库里还有 40 金币与一枚余烬印记。', hpDelta: 0, goldDelta: 40, relicId: 'ember-seal' },
  ]),
  // ── 现有地域第二批偶遇（更多奖励/惩罚组合） ──
  ev('forest-ranger-cache', 'verdant-forest', '游侠的储藏', '一截空心古树里藏着游侠留下的储物袋，袋口系着提醒陌生人小心陷阱的红绳。', [
    { id: 'take', label: '解开红绳取物', description: '躲过绊索：获得 32 金币。', hpDelta: -4, goldDelta: 32 },
    { id: 'kit', label: '取走急救包', description: '恢复 13 点生命。', hpDelta: 13, goldDelta: 0 },
    { id: 'trap', label: '拆下陷阱零件', description: '获得一张余烬长矛。', hpDelta: -6, goldDelta: 0, addCardId: 'ember-lance' },
  ]),
  ev('capital-gala', 'radiant-capital', '皇都夜宴', '一场无人邀请你却无人阻拦的夜宴。银盘上的酒杯映着你褴褛的倒影。', [
    { id: 'toast', label: '举杯痛饮', description: '恢复 10 点生命，趁乱摸走 12 金币。', hpDelta: 10, goldDelta: 12 },
    { id: 'pocket', label: '顺走银器', description: '获得 34 金币，被侍卫瞪了一眼。', hpDelta: -3, goldDelta: 34 },
    { id: 'leave', label: '悄然退席', description: '不惹是非，得到一点赏钱。', hpDelta: 0, goldDelta: 8 },
  ]),
  ev('bloodmoon-duel', 'bloodlands', '血月决斗', '一名蒙面战士拦住去路，用刀尖指向地上画好的决斗圈。这里的规矩是血债血偿。', [
    { id: 'duel', label: '应战', description: '你赢了，但也挂了彩：失去 12 点生命，获得 46 金币。', hpDelta: -12, goldDelta: 46 },
    { id: 'salute', label: '以礼相待', description: '对方收刀让路，赠你一句忠告：升级第一张未升级的卡。', hpDelta: 0, goldDelta: 0, upgradeFirstCard: true },
    { id: 'refuse', label: '拒绝决斗', description: '绕开决斗圈，损失一点颜面。', hpDelta: 0, goldDelta: 6 },
  ]),
  ev('deep-vent', 'ocean-depths', '深海热泉', '海床裂缝喷出温热的气泡，围绕着一片罕见的发光贝类，也引来了潜伏的猎食者。', [
    { id: 'harvest', label: '采集发光贝', description: '获得 38 金币，被暗流拽伤。', hpDelta: -9, goldDelta: 38 },
    { id: 'soak', label: '浸入热泉', description: '暖流抚平伤口：恢复 18 点生命。', hpDelta: 18, goldDelta: 0 },
    { id: 'bottle', label: '收集气泡', description: '获得一瓶亚特兰蒂斯之雾。', hpDelta: 0, goldDelta: 0, potionId: 'atlantean-mist' },
  ]),
];
