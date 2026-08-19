import { CARD_CATALOG } from '../data/cards/basicCards';
import { BASIC_ENEMIES } from '../data/enemies/basicEnemies';
import { BASIC_POTIONS } from '../data/potions/basicPotions';
import { BASIC_RELICS } from '../data/relics/basicRelics';
import { BASIC_STATUSES } from '../data/statuses/basicStatuses';
import type { CardDefinition } from '../game/combat/cardTypes';
import type { EnemyState, IntentType } from '../game/combat/enemyTypes';
import type { MapNode, MapNodeType } from '../game/map/mapTypes';
import type { StatusState } from '../game/status/statusTypes';
import type { Locale } from './translations';
import { STATUS_EN, CONTENT_EN } from './contentLocale';

export const cardTypeLabels: Record<CardDefinition['type'], Record<Locale, string>> = {
  attack: { 'zh-CN': '攻击', en: 'Attack' },
  skill: { 'zh-CN': '技艺', en: 'Skill' },
  power: { 'zh-CN': '能力', en: 'Power' },
  status: { 'zh-CN': '状态', en: 'Status' },
  curse: { 'zh-CN': '诅咒', en: 'Curse' },
};
export const rarityLabels: Record<CardDefinition['rarity'], Record<Locale, string>> = {
  basic: { 'zh-CN': '基础', en: 'Basic' },
  common: { 'zh-CN': '普通', en: 'Common' },
  uncommon: { 'zh-CN': '罕见', en: 'Uncommon' },
  rare: { 'zh-CN': '稀有', en: 'Rare' },
  special: { 'zh-CN': '特殊', en: 'Special' },
};

type NodeMeta = { label: string; detail: string; sigil: string };
const nodeTypeMetaZh: Record<MapNodeType, NodeMeta> = {
  start: { label: '起点', detail: '远征的第一步', sigil: '●' },
  combat: { label: '遭遇', detail: '战斗 · 获得金币与卡牌', sigil: '✦' },
  elite: { label: '精英', detail: '高危战斗 · 更丰厚报酬', sigil: '✧' },
  rest: { label: '篝火', detail: '整备与治疗', sigil: '△' },
  shop: { label: '行商', detail: '卡牌 · 药水 · 遗物', sigil: '◇' },
  event: { label: '遗闻', detail: '抉择会改变资源', sigil: '◌' },
  treasure: { label: '遗藏', detail: '封存的馈赠', sigil: '⬡' },
  special: { label: '异象', detail: '未知的分支', sigil: '◈' },
  boss: { label: '守门者', detail: '终局战斗', sigil: '☉' },
};
const nodeTypeMetaEn: Record<MapNodeType, NodeMeta> = {
  start: { label: 'Origin', detail: 'The first step of the expedition', sigil: '●' },
  combat: { label: 'Combat', detail: 'Battle · earn gold and cards', sigil: '✦' },
  elite: { label: 'Elite', detail: 'High-risk battle · richer rewards', sigil: '✧' },
  rest: { label: 'Campfire', detail: 'Rest and recover', sigil: '△' },
  shop: { label: 'Merchant', detail: 'Cards · potions · relics', sigil: '◇' },
  event: { label: 'Lore', detail: 'Choices alter resources', sigil: '◌' },
  treasure: { label: 'Hoard', detail: 'A sealed offering', sigil: '⬡' },
  special: { label: 'Anomaly', detail: 'Unknown branch', sigil: '◈' },
  boss: { label: 'Gatekeeper', detail: 'Final battle', sigil: '☉' },
};

export const nodeTypeMeta = nodeTypeMetaZh;

const intentLabelsZh: Record<IntentType, string> = { attack: '进攻', defend: '防御', buff: '蓄势', status: '诅咒', pollute: '污染', summon: '召唤', energy: '能量扰动', idle: '待机' };
const intentLabelsEn: Record<IntentType, string> = { attack: 'Attack', defend: 'Defend', buff: 'Buff', status: 'Curse', pollute: 'Pollute', summon: 'Summon', energy: 'Disrupt', idle: 'Idle' };

export function cardPresentation(card: CardDefinition, locale: Locale = 'zh-CN') {
  const targetZh = card.target === 'single-enemy' ? '选择一名敌人' : card.target === 'all-enemies' ? '全部敌人' : card.target === 'self' ? '自身' : '无需目标';
  const targetEn = card.target === 'single-enemy' ? 'Single enemy' : card.target === 'all-enemies' ? 'All enemies' : card.target === 'self' ? 'Self' : 'None';
  return {
    type: cardTypeLabels[card.type][locale],
    rarity: rarityLabels[card.rarity][locale],
    target: locale === 'en' ? targetEn : targetZh,
  };
}

export function enemyPresentation(enemy: EnemyState, locale: Locale = 'zh-CN') {
  const definition = BASIC_ENEMIES[enemy.definitionId];
  const intent = enemy.intent;
  const intentLabel = locale === 'en' ? intentLabelsEn : intentLabelsZh;
  const name = locale === 'en' ? (CONTENT_EN[enemy.definitionId]?.name ?? definition?.name ?? enemy.definitionId) : (definition?.name ?? enemy.definitionId);
  return {
    name,
    intent: `${intentLabel[intent.type]} · ${intent.label}`,
    health: Math.max(0, Math.min(100, enemy.maxHp ? enemy.hp / enemy.maxHp * 100 : 0)),
  };
}

export function statusPresentation(status: StatusState, locale: Locale = 'zh-CN') {
  const definition = BASIC_STATUSES[status.id];
  const durationZh = status.duration === undefined ? '' : ` · ${status.duration} 回合`;
  const durationEn = status.duration === undefined ? '' : ` · ${status.duration} turns`;
  const kindZh = definition?.kind === 'buff' ? '增益' : definition?.kind === 'debuff' ? '减益' : '状态';
  const kindEn = definition?.kind === 'buff' ? 'Buff' : definition?.kind === 'debuff' ? 'Debuff' : 'Status';
  const label = locale === 'en' ? (STATUS_EN[status.id] ?? definition?.name ?? status.id) : (definition?.name ?? status.id);
  const detail = locale === 'en'
    ? `${kindEn} ${status.stacks} stacks${durationEn}`
    : `${kindZh} ${status.stacks} 层${durationZh}`;
  return { label, detail };
}

export type NodeVisualStatus = 'current' | 'visited' | 'available' | 'locked';
export function nodePresentation(node: MapNode, available: boolean, visited: boolean, current: boolean, locale: Locale = 'zh-CN'): { label: string; detail: string; sigil: string; state: NodeVisualStatus; aria: string } {
  const meta = locale === 'en' ? nodeTypeMetaEn[node.type] : nodeTypeMetaZh[node.type];
  const state: NodeVisualStatus = current ? 'current' : visited ? 'visited' : available ? 'available' : 'locked';
  let statusLabel: string;
  if (locale === 'en') {
    statusLabel = current ? 'Current' : visited ? 'Explored' : available ? 'Available' : 'Locked';
  } else {
    statusLabel = current ? '当前位置' : visited ? '已探索' : available ? '可前往' : '尚未可达';
  }
  const aria = locale === 'en'
    ? `${meta.label}, tier ${node.row + 1}, ${statusLabel}`
    : `${meta.label}，第 ${node.row + 1} 层，${statusLabel}`;
  return { ...meta, state, aria };
}

export function resolveCard(id: string) { return CARD_CATALOG[id]; }
export function resolvePotion(id: string) { return BASIC_POTIONS[id]; }
export function resolveRelic(id: string) { return BASIC_RELICS[id]; }
