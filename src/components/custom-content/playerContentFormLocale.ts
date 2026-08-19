import { useMemo } from 'react';
import { entityEn } from '../../app/entityTranslations';
import { useLocale } from '../../app/locale';

type CatalogItem = { name?: string; description?: string };
const EN: Record<string, string> = {
  '基本资料': 'Basic information', '标识使用小写英文、数字和短横线；名称和说明会展示给玩家。': 'Use lowercase letters, numbers, and hyphens for IDs. Names and descriptions are shown to players.', '唯一标识': 'Unique ID', '显示名称': 'Display name', '说明': 'Description', '启用': 'Enable ', '减少': 'decrease', '增加': 'increase', '项': 'items', '搜索': 'Search ', '消耗 {cost} 点能量': 'Costs {cost} energy', '移除': 'Remove ', '添加': 'Add ',
  '攻击': 'Attack', '技艺': 'Skill', '能力': 'Power', '状态': 'Status', '诅咒': 'Curse', '基础': 'Basic', '普通': 'Common', '罕见': 'Uncommon', '稀有': 'Rare', '特殊': 'Special', '自身': 'Self', '单个敌人': 'Single enemy', '所有敌人': 'All enemies', '无目标': 'No target',
  '造成伤害': 'Deal damage', '获得格挡': 'Gain block', '抽牌': 'Draw cards', '获得能量': 'Gain energy', '失去能量': 'Lose energy', '恢复生命': 'Restore HP', '自身伤害': 'Self damage', '施加状态': 'Apply status', '清除状态': 'Clear statuses', '按格挡造成伤害': 'Damage equal to block', '按状态造成伤害': 'Damage equal to statuses', '按存活敌人再生': 'Regenerate per living enemy', '按自身资源缩放伤害': 'Scale damage by own resource', '按目标状态缩放伤害': 'Scale damage by target status', '防御': 'Defend', '强化': 'Buff', '污染牌组': 'Pollute deck', '召唤': 'Summon', '能量扰动': 'Energy disruption', '待机': 'Idle', '力量': 'Strength', '格挡': 'Block', '金币': 'Gold', '能量': 'Energy', '治疗': 'Heal', '最大生命': 'Max HP', '伤害': 'Damage', '净化状态': 'Cleanse statuses',
  '生效条件': 'Condition', '条件': 'Condition type', '生命低于': 'HP below', '生命高于': 'HP above', '本回合只使用某类卡': 'Only play one card type this turn', '卡牌类型': 'Card type', '生命百分比': 'HP percentage', '+ 添加条件': '+ Add condition', '选择状态': 'Select statuses', '效果类型': 'Effect type', '数值': 'Value', '攻击次数': 'Hits', '格挡保留回合': 'Block retention turns', '目标状态': 'Target status', '自身资源': 'Own resource', '每层加成': 'Bonus per stack', '引爆并移除该状态': 'Detonate and remove this status', '消耗全部资源': 'Consume all resources', '层数': 'Stacks', '持续回合': 'Duration', '施加目标': 'Apply to', '目标敌人': 'Target enemy', '清除目标': 'Clear from', '结算后清除状态': 'Clear statuses after resolution', '为此效果添加生效条件': 'Add a condition to this effect', '上移': 'Move up', '下移': 'Move down', '按实际结算顺序排列': 'Resolved from top to bottom', '+ 添加效果': '+ Add effect',
  '角色属性': 'Character attributes', '使用 − / + 快速调整，也可以直接在方框中输入数值。': 'Use − / + for quick adjustments, or type values directly.', '角色特性': 'Character trait', '初始能量': 'Starting energy', '初始金币': 'Starting gold', '起始配置': 'Starting loadout', '直接从游戏已有内容中挑选；同一张卡可以添加多次。': 'Choose existing game content directly; cards may be added more than once.', '起始牌组': 'Starting deck', '− 移除一张，+ 添加一张': '− Remove one, + add one', '起始遗物': 'Starting relics', '选择角色进入远征时携带的遗物': 'Choose relics carried when the character begins an expedition.', '起始药水': 'Starting potions', '选择角色进入远征时携带的药水': 'Choose potions carried when the character begins an expedition.',
  '卡牌规则': 'Card rules', '稀有度': 'Rarity', '目标': 'Target', '能量费用': 'Energy cost', '卡牌关键词': 'Card keywords', '消耗': 'Exhaust', '保留': 'Retain', '虚无': 'Ethereal', '固有': 'Innate', '卡牌效果': 'Card effects', '效果会按照从上到下的顺序结算。': 'Effects resolve from top to bottom.', '打出时效果': 'On-play effects', '抽到时效果（可选）': 'On-draw effects (optional)', '整张卡牌的使用条件': 'Conditions for this card', '强化版本': 'Upgrade version', '这张卡可以强化': 'This card can be upgraded', '强化效果会': 'Upgrade effects ', '完整替换': 'fully replace', '原效果，已自动复制当前全部效果供你修改；请勿删掉仍需保留的效果（例如抽牌）。清空列表则沿用原效果。': ' the original effects. Current effects are copied for editing; do not remove effects you still need (such as draw). An empty list retains the original effects.', '强化名称': 'Upgrade name', '强化说明': 'Upgrade description', '强化后费用': 'Upgraded cost', '强化后效果（完整替换原效果）': 'Upgraded effects (fully replace originals)',
  '实际效果': 'Actual effect', '遗物和药水各支持一个主要效果。': 'Relics and potions each support one primary effect.', '效果数值': 'Effect value', '伤害目标': 'Damage target', '最前方敌人': 'Front enemy', '触发方式': 'Trigger', '触发时机': 'Trigger timing', '战斗开始': 'Combat start', '每回合开始': 'Turn start', '战斗胜利结束': 'Combat victory end',
  '复合动作': 'Composite action', '次数': 'Hits', '移除此动作': 'Remove this action', '行动类型': 'Intent type', '玩家看到的行动名称': 'Player-facing intent name', '使用随机数值范围': 'Use a random value range', '最小伤害': 'Minimum damage', '最大伤害': 'Maximum damage', '污染卡牌': 'Pollution cards', '选择要塞入玩家牌组的卡': 'Choose cards to insert into the player deck.', '召唤敌人': 'Summoned enemies', '选择本次行动召唤的单位': 'Choose units summoned by this intent.', '+ 添加动作': '+ Add action', '敌人会按顺序循环执行': 'Enemies repeat these in order.', '+ 添加行动': '+ Add intent',
  '敌人属性': 'Enemy attributes', '初始格挡': 'Initial block', '每场战斗随机生命范围': 'Random HP range each combat', '最低生命': 'Minimum HP', '最高生命': 'Maximum HP', '基础行动': 'Base intents', '行动循环': 'Intent cycle', '阶段变化': 'Phase changes', 'Boss 可以在生命降低后切换到新的行动循环。': 'Bosses can switch to a new intent cycle after losing HP.', '战斗阶段': 'Combat phases', '+ 添加阶段': '+ Add phase', '移除阶段': 'Remove phase', '阶段标识': 'Phase ID', '阶段名称': 'Phase name', '生命阈值（0–1）': 'HP threshold (0–1)', '本阶段行动': 'Phase intents',
  '虚弱': 'Weak', '易伤': 'Vulnerable', '再生': 'Regeneration', '灼热': 'Scorch', '毒素': 'Venom', '脆化': 'Brittle', '涸竭': 'Sap', '余烬': 'Ember', '行囊': 'Pack', '洞见': 'Insight', '钟痕': 'Bell Mark', '战势': 'Stance', '失序': 'Disorder', '陨能': 'Meteor Energy', '宇蚀': 'Cosmic Erosion'
};

export function usePlayerContentFormLocale() {
  const { locale } = useLocale();
  return useMemo(() => {
    const t = (value: string) => locale === 'en' ? (EN[value] ?? value) : value;
    const format = (value: string, cost: number) => t(value).replace('{cost}', String(cost));
    const catalogItem = (id: string, item: CatalogItem) => {
      const translation = locale === 'en' ? entityEn(id) : undefined;
      return { name: translation?.name ?? item.name ?? id, description: translation?.desc ?? item.description ?? id };
    };
    const statusName = (id: string, name: string) => locale === 'en' ? (EN[name] ?? id) : name;
    return { t, format, catalogItem, statusName };
  }, [locale]);
}
