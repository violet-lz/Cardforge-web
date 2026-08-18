import type { EnemyDefinition, IntentAction, IntentDefinition, NumericRange } from '../../game/combat/enemyTypes';

const attack = (amount: number | NumericRange, label: string): IntentDefinition => Array.isArray(amount) ? { type: 'attack', amountRange: amount as NumericRange, label } : { type: 'attack', amount: amount as number, label };
const defend = (amount: number, label = `格挡 ${amount}`): IntentDefinition => ({ type: 'defend', amount, label });
const status = (statusId: string, amount: number, label: string): IntentDefinition => ({ type: 'status', statusId, amount, label });
const idle = (label = '待机'): IntentDefinition => ({ type: 'idle', label });
const combo = (label: string, actions: IntentAction[]): IntentDefinition => ({ type: actions.some((action) => action.type === 'attack') ? 'attack' : actions[0]?.type ?? 'idle', label, actions });
const hit = (amount: number | NumericRange): IntentAction => Array.isArray(amount) ? { type: 'attack', amountRange: amount as NumericRange } : { type: 'attack', amount: amount as number };
const guard = (amount: number): IntentAction => ({ type: 'defend', amount });
const debuff = (statusId: string, amount: number): IntentAction => ({ type: 'status', statusId, amount });
const enemy = (id: string, name: string, maxHp: number, intents: IntentDefinition[], extra: Partial<EnemyDefinition> = {}): EnemyDefinition => ({ id: `legacy-${id}`, name, maxHp, behavior: { type: 'cycle', intents }, ...extra });

export const LEGACY_ENEMIES: Record<string, EnemyDefinition> = {
  'legacy-lone-orc-scout': enemy('lone-orc-scout', '兽人斥候', 8, [attack([5, 9], '斩击 5–9'), attack([9, 13], '重斩 9–13'), attack([5, 9], '斩击 5–9'), defend(9)], { maxHpRange: [8, 14] }),
  'legacy-patrol-orc-archer': enemy('patrol-orc-archer', '兽人弓手', 8, [attack([5, 9], '射击 5–9'), attack([9, 13], '强力射击 9–13'), attack([5, 9], '射击 5–9'), defend(9)], { maxHpRange: [8, 14] }),
  'legacy-patrol-orc-scout': enemy('patrol-orc-scout', '兽人斥候', 8, [attack([5, 9], '斩击 5–9'), attack([10, 14], '重斩 10–14'), attack([4, 8], '斩击 4–8'), defend(5)], { maxHpRange: [8, 14] }),
  'legacy-orc-warrior': enemy('orc-warrior', '兽人战士', 18, [attack([3, 7], '斩击 3–7'), attack([7, 11], '重斩 7–11'), attack([3, 7], '斩击 3–7'), defend(9)], { maxHpRange: [18, 20] }),
  'legacy-skeleton-warrior': enemy('skeleton-warrior', '骷髅战士', 33, [status('vulnerable', 1, '易伤 1'), attack([8, 12], '劈砍 8–12'), attack([4, 8], '劈砍 4–8'), idle(), status('weak', 1, '虚弱 1')], { maxHpRange: [33, 37] }),
  'legacy-jaw-worm': enemy('jaw-worm', '颚虫', 40, [attack(11, '啃咬 11'), combo('受护啃咬 7 + 格挡 5', [guard(5), hit(7)]), defend(6)], { maxHpRange: [40, 44] }),
  'legacy-small-slime': enemy('small-slime', '小型史莱姆', 13, [attack([5, 9], '撞击 5–9'), combo('受护撞击 6–10 + 格挡 4', [guard(4), hit([6, 10])]), attack([4, 8], '撞击 4–8'), idle(), defend(6)], { maxHpRange: [13, 17] }),
  'legacy-orc-shaman': enemy('orc-shaman', '兽人萨满', 29, [attack([7, 11], '闪电箭 7–11'), attack([6, 10], '闪电箭 6–10'), status('weak', 1, '虚弱 1'), attack([4, 8], '闪电箭 4–8'), idle()]),
  'legacy-ghost': enemy('ghost', '幽魂', 28, [status('weak', 1, '虚弱 1'), attack([7, 11], '缠身 7–11'), attack([4, 8], '缠身 4–8'), idle(), status('weak', 1, '虚弱 1')], { maxHpRange: [28, 32] }),
  'legacy-orc-berserker': enemy('orc-berserker', '兽人狂战士', 50, [status('vulnerable', 1, '易伤 1'), attack([4, 8], '斩击 4–8'), attack([7, 11], '重斩 7–11'), defend(10)], { maxHpRange: [50, 54] }),
  'legacy-rat-pack-a': enemy('rat-pack-a', '巨鼠', 12, [attack([4, 8], '啃咬 4–8')], { maxHpRange: [12, 15] }),
  'legacy-rat-pack-b': enemy('rat-pack-b', '巨鼠', 12, [attack([4, 8], '啃咬 4–8')], { maxHpRange: [12, 15] }),
  'legacy-rat-pack-c': enemy('rat-pack-c', '巨鼠', 10, [attack([3, 7], '啃咬 3–7')], { maxHpRange: [10, 16] }),
  'legacy-troll': enemy('troll', '巨魔', 28, [status('weak', 1, '虚弱 1'), combo('碾压 10 + 格挡 10', [guard(10), hit(10)]), attack(21, '猛砸 21')]),
  'legacy-death-knight': enemy('death-knight', '死亡骑士', 46, [attack(12, '斩击 12'), combo('受护斩击 11 + 格挡 6', [guard(6), hit(11)]), combo('受护斩击 16 + 格挡 5', [guard(5), hit(16)]), idle(), defend(6)]),
  'legacy-orc-warchief': enemy('orc-warchief', '兽人酋长', 60, [attack([6, 10], '斩击 6–10'), combo('斩击 5–9 + 虚弱 1', [hit([5, 9]), debuff('weak', 1)]), combo('狂野挥击 -2–2 + 格挡 6', [guard(6), hit([-2, 2])])]),
  'legacy-ettin': enemy('ettin', '双头巨人', 70, [defend(5), attack(16, '斩击 16')], { initialBlock: 12 }),
  'legacy-ghost-cultist': enemy('ghost-cultist', '幽魂邪教徒', 39, [status('weak', 1, '虚弱 1'), attack(10, '缠身 10')], { maxHpRange: [39, 46] }),
  'legacy-hag': enemy('hag', '老巫婆', 39, [attack(10, '咒术 10'), status('weak', 1, '虚弱 1'), attack(4, '咒术 4')], { maxHpRange: [39, 46] }),
  'legacy-wraith': enemy('wraith', '怨灵', 39, [attack(2, '缠身 2'), attack(10, '缠身 10'), attack(8, '缠身 8')], { maxHpRange: [39, 46] }),
  'legacy-ancient-dragon': enemy('ancient-dragon', '远古巨龙', 100, [attack([11, 15], '爪击 11–15'), defend(6), attack([11, 15], '爪击 11–15'), attack([2, 6], '灰烬吐息 2–6'), status('weak', 2, '虚弱 2')], { maxHpRange: [100, 140] }),
  'legacy-slime-king': enemy('slime-king', '史莱姆之王', 62, [5, 8, 12, 17, 23, 30, 38, 45].map((amount) => attack(amount, `碾压 ${amount}`))),
};