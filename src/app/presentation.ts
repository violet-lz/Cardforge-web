import { CARD_CATALOG } from '../data/cards/basicCards';
import { BASIC_ENEMIES } from '../data/enemies/basicEnemies';
import { BASIC_POTIONS } from '../data/potions/basicPotions';
import { BASIC_RELICS } from '../data/relics/basicRelics';
import { BASIC_STATUSES } from '../data/statuses/basicStatuses';
import type { CardDefinition } from '../game/combat/cardTypes';
import type { EnemyState, IntentType } from '../game/combat/enemyTypes';
import type { MapNode, MapNodeType } from '../game/map/mapTypes';
import type { StatusState } from '../game/status/statusTypes';

export const cardTypeLabels: Record<CardDefinition['type'], string> = { attack: '攻击', skill: '技艺', power: '能力', status: '状态', curse: '诅咒' };
export const rarityLabels: Record<CardDefinition['rarity'], string> = { basic: '基础', common: '普通', uncommon: '罕见', rare: '稀有', special: '特殊' };
export const nodeTypeMeta: Record<MapNodeType, { label: string; detail: string; sigil: string }> = {
  start: { label: '起点', detail: '远征的第一步', sigil: '●' }, combat: { label: '遭遇', detail: '战斗 · 获得金币与卡牌', sigil: '✦' }, elite: { label: '精英', detail: '高危战斗 · 更丰厚报酬', sigil: '✧' }, rest: { label: '篝火', detail: '整备与治疗', sigil: '△' }, shop: { label: '行商', detail: '卡牌 · 药水 · 遗物', sigil: '◇' }, event: { label: '遗闻', detail: '抉择会改变资源', sigil: '◌' }, treasure: { label: '遗藏', detail: '封存的馈赠', sigil: '⬡' }, special: { label: '异象', detail: '未知的分支', sigil: '◈' }, boss: { label: '守门者', detail: '终局战斗', sigil: '☉' },
};
const intentLabels: Record<IntentType, string> = { attack: '进攻', defend: '防御', buff: '蓄势', status: '诅咒', pollute: '污染', summon: '召唤', energy: '能量扰动', idle: '待机' };

export function cardPresentation(card: CardDefinition) { return { type: cardTypeLabels[card.type], rarity: rarityLabels[card.rarity], target: card.target === 'single-enemy' ? '选择一名敌人' : card.target === 'all-enemies' ? '全部敌人' : card.target === 'self' ? '自身' : '无需目标' }; }
export function enemyPresentation(enemy: EnemyState) { const definition = BASIC_ENEMIES[enemy.definitionId]; const intent = enemy.intent; return { name: definition?.name ?? enemy.definitionId, intent: `${intentLabels[intent.type]} · ${intent.label}`, health: Math.max(0, Math.min(100, enemy.maxHp ? enemy.hp / enemy.maxHp * 100 : 0)) }; }
export function statusPresentation(status: StatusState) { const definition = BASIC_STATUSES[status.id]; const duration = status.duration === undefined ? '' : ` · ${status.duration} 回合`; return { label: definition?.name ?? status.id, detail: `${definition?.kind === 'buff' ? '增益' : definition?.kind === 'debuff' ? '减益' : '状态'} ${status.stacks} 层${duration}` }; }
export type NodeVisualStatus = 'current' | 'visited' | 'available' | 'locked';
export function nodePresentation(node: MapNode, available: boolean, visited: boolean, current: boolean): { label: string; detail: string; sigil: string; state: NodeVisualStatus; aria: string } {
  const meta = nodeTypeMeta[node.type];
  const state: NodeVisualStatus = current ? 'current' : visited ? 'visited' : available ? 'available' : 'locked';
  const statusLabel = current ? '当前位置' : visited ? '已探索' : available ? '可前往' : '尚未可达';
  return { ...meta, state, aria: `${meta.label}，第 ${node.row + 1} 层，${statusLabel}` };
}
export function resolveCard(id: string) { return CARD_CATALOG[id]; }
export function resolvePotion(id: string) { return BASIC_POTIONS[id]; }
export function resolveRelic(id: string) { return BASIC_RELICS[id]; }
