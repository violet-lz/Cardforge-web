import { BASIC_STATUSES } from '../data/statuses/basicStatuses';
import type { CardKeyword } from '../game/combat/cardTypes';
import type { IntentType } from '../game/combat/enemyTypes';

/** Player-facing rule text. Every mechanic the game can apply must be explainable here. */
const STATUS_RULES: Record<string, string> = {
  strength: '每层使你的攻击伤害 +1。',
  weak: '持续期间造成的伤害降低 25%。',
  vulnerable: '持续期间受到的伤害提高 50%。',
  regen: '你的回合结束时按层数恢复生命，然后减少 1 层。',
  scorch: '灼热：该单位回合开始时按层数受到伤害，然后减少 1 层（会自行烧尽）。',
  venom: '毒素：该单位回合开始时按层数受到伤害，不会自行减少，最多叠加 5 层；需要用清毒手段解除。',
  brittle: '脆化：每层使该单位受到的伤害提高 10%，不会自行消退，最多叠加 5 层。',
  sap: '涸竭：每层使你从卡牌获得的格挡减少 1 点，最多叠加 5 层。',
  ember: '余烬：灰烬祭司的资源，可被爆发牌按层数转化为伤害。',
  pack: '行囊：远行者的资源，代表已备妥的补给。',
  insight: '洞见：档案师的资源，可被精确牌按层数转化为伤害。',
  'bell-mark': '钟痕：猎手在目标身上留下的印记，可被猎杀牌按层数引爆。',
  stance: '战势：旧世战士的架势层数。',
  disorder: '失序：旧世卡牌的资源，越混乱爆发越强。',
  'meteor-energy': '陨能：陨石遗迹的失控能量，可被双方积累。',
  'cosmic-erosion': '宇蚀：随战斗推移积累，层数越高战场越危险。',
};

const KEYWORD_RULES: Record<CardKeyword, string> = {
  exhaust: '消耗：打出后本场战斗不再回到牌库。',
  retain: '保留：回合结束时不会被弃掉。',
  ethereal: '虚无：若回合结束时仍在手中则被消耗。',
  innate: '固有：战斗开始时必定在起手牌中。',
};

const INTENT_RULES: Record<IntentType, string> = {
  attack: '这个敌人将发动攻击。',
  defend: '这个敌人将获得格挡。',
  buff: '这个敌人将强化自身。',
  status: '这个敌人将施加负面状态。',
  pollute: '这个敌人将把废牌塞入你的牌组。',
  summon: '这个敌人将召唤援军。',
  energy: '这个敌人将扰乱你的能量。',
  idle: '这个敌人本回合不行动，通常在蓄势。',
};

export function statusTooltip(id: string, stacks: number, duration?: number): string {
  const name = BASIC_STATUSES[id]?.name ?? id;
  const rule = STATUS_RULES[id] ?? '未知状态。';
  const timer = duration === undefined ? '' : ` · 剩余 ${duration} 回合`;
  return `${name} ${stacks} 层${timer}\n${rule}`;
}

export function keywordTooltip(keyword: CardKeyword): string { return KEYWORD_RULES[keyword]; }
export function intentTooltip(type: IntentType): string { return INTENT_RULES[type]; }
