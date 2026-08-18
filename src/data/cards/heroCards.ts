import type { CardDefinition } from '../../game/combat/cardTypes';

/**
 * Class-defining cards for the six heroes. Each hero has a resource axis expressed through
 * neutral statuses (ember / pack / insight / bell-mark / stance / disorder) plus payoff cards
 * that read those resources through resource-scaled-damage / target-scaled-damage.
 *
 * A few source designs referenced subsystems the deterministic engine does not model (scry,
 * discover, cost reduction, intent peeking, per-turn triggers). Those are adapted to the closest
 * engine-supported behaviour while preserving the card's role; adaptations are noted inline.
 */
const c = (id: string, name: string, type: CardDefinition['type'], rarity: CardDefinition['rarity'], cost: number, target: CardDefinition['target'], description: string, effects: CardDefinition['effects'], extra: Partial<CardDefinition> = {}): CardDefinition => ({ id, name, type, rarity, cost, target, description, effects, ...extra });

export const HERO_CARDS: Record<string, CardDefinition> = {
  // 灰烬祭司 — 生命 → 余烬 → 爆发
  'ashen-offering': c('ashen-offering', '灰烬献礼', 'skill', 'common', 0, 'self', '失去 3 点生命，获得 2 点余烬。', [{ type: 'self-damage', amount: 3 }, { type: 'status', statusId: 'ember', stacks: 2, target: 'self' }], { upgrade: { description: '失去 2 点生命，获得 3 点余烬。', effects: [{ type: 'self-damage', amount: 2 }, { type: 'status', statusId: 'ember', stacks: 3, target: 'self' }] } }),
  'burning-litany': c('burning-litany', '燃尽祷文', 'skill', 'uncommon', 1, 'self', '获得 1 点余烬与 1 层力量（火焰凝于下一击）。', [{ type: 'status', statusId: 'ember', stacks: 1, target: 'self' }, { type: 'status', statusId: 'strength', stacks: 1, target: 'self' }], { upgrade: { description: '获得 1 点余烬与 2 层力量。', effects: [{ type: 'status', statusId: 'ember', stacks: 1, target: 'self' }, { type: 'status', statusId: 'strength', stacks: 2, target: 'self' }] } }),
  'ash-revival': c('ash-revival', '灰烬复生', 'power', 'rare', 2, 'self', '汲取伤口：立即获得 4 点余烬并恢复 8 点生命。', [{ type: 'status', statusId: 'ember', stacks: 4, target: 'self' }, { type: 'heal', amount: 8 }], { upgrade: { description: '立即获得 4 点余烬并恢复 11 点生命。', effects: [{ type: 'status', statusId: 'ember', stacks: 4, target: 'self' }, { type: 'heal', amount: 11 }] } }),
  'final-cinder': c('final-cinder', '终烬', 'attack', 'rare', 2, 'single-enemy', '造成 12 + 余烬 × 2 点伤害，然后消耗所有余烬。', [{ type: 'resource-scaled-damage', amount: 12, statusId: 'ember', perStack: 2, consume: true }], { upgrade: { description: '造成 15 + 余烬 × 2 点伤害，然后消耗所有余烬。', effects: [{ type: 'resource-scaled-damage', amount: 15, statusId: 'ember', perStack: 2, consume: true }] } }),

  // 远行者 — 探索 → 行囊 → 稳定获益
  'make-camp': c('make-camp', '扎营', 'skill', 'common', 1, 'self', '获得 8 点格挡并获得 1 点行囊。', [{ type: 'block', amount: 8 }, { type: 'status', statusId: 'pack', stacks: 1, target: 'self' }], { upgrade: { description: '获得 10 点格挡并获得 1 点行囊。', effects: [{ type: 'block', amount: 10 }, { type: 'status', statusId: 'pack', stacks: 1, target: 'self' }] } }),
  'travel-supplies': c('travel-supplies', '临行补给', 'skill', 'uncommon', 0, 'self', '获得 1 点行囊与 4 点格挡（整备补给）。', [{ type: 'status', statusId: 'pack', stacks: 1, target: 'self' }, { type: 'block', amount: 4 }], { upgrade: { description: '获得 2 点行囊与 4 点格挡。', effects: [{ type: 'status', statusId: 'pack', stacks: 2, target: 'self' }, { type: 'block', amount: 4 }] } }),
  'cross-the-mountains': c('cross-the-mountains', '翻山越岭', 'attack', 'uncommon', 1, 'single-enemy', '造成 9 点伤害并抽 1 张牌。', [{ type: 'damage', amount: 9 }, { type: 'draw', amount: 1 }], { upgrade: { description: '造成 12 点伤害并抽 1 张牌。', effects: [{ type: 'damage', amount: 12 }, { type: 'draw', amount: 1 }] } }),
  'traveler-instinct': c('traveler-instinct', '旅者的直觉', 'skill', 'rare', 1, 'self', '抽 2 张牌并获得 1 点行囊。', [{ type: 'draw', amount: 2 }, { type: 'status', statusId: 'pack', stacks: 1, target: 'self' }], { upgrade: { description: '抽 3 张牌并获得 1 点行囊。', effects: [{ type: 'draw', amount: 3 }, { type: 'status', statusId: 'pack', stacks: 1, target: 'self' }] } }),

  // 档案师 — 观测 → 洞见 → 精确爆发
  index: c('index', '索引', 'skill', 'common', 0, 'self', '获得 1 点洞见并抽 1 张牌。', [{ type: 'status', statusId: 'insight', stacks: 1, target: 'self' }, { type: 'draw', amount: 1 }], { upgrade: { description: '获得 2 点洞见并抽 1 张牌。', effects: [{ type: 'status', statusId: 'insight', stacks: 2, target: 'self' }, { type: 'draw', amount: 1 }] } }),
  archive: c('archive', '归档', 'skill', 'uncommon', 1, 'self', '抽 2 张牌并获得 1 点洞见。', [{ type: 'draw', amount: 2 }, { type: 'status', statusId: 'insight', stacks: 1, target: 'self' }], { upgrade: { description: '抽 2 张牌并获得 2 点洞见。', effects: [{ type: 'draw', amount: 2 }, { type: 'status', statusId: 'insight', stacks: 2, target: 'self' }] } }),
  premonition: c('premonition', '预读', 'power', 'rare', 1, 'self', '立即获得 3 点洞见。', [{ type: 'status', statusId: 'insight', stacks: 3, target: 'self' }], { upgrade: { description: '立即获得 4 点洞见。', effects: [{ type: 'status', statusId: 'insight', stacks: 4, target: 'self' }] } }),
  'forbidden-excerpt': c('forbidden-excerpt', '禁书摘录', 'attack', 'rare', 2, 'single-enemy', '造成 16 + 洞见 × 2 点伤害。', [{ type: 'resource-scaled-damage', amount: 16, statusId: 'insight', perStack: 2 }], { upgrade: { description: '造成 20 + 洞见 × 2 点伤害。', effects: [{ type: 'resource-scaled-damage', amount: 20, statusId: 'insight', perStack: 2 }] } }),

  // 钟楼猎手 — 标记 → 钟痕 → 猎杀
  'ring-the-bell': c('ring-the-bell', '敲钟', 'skill', 'common', 1, 'single-enemy', '对目标施加 2 层钟痕。', [{ type: 'status', statusId: 'bell-mark', stacks: 2, target: 'target' }], { upgrade: { description: '对目标施加 3 层钟痕。', effects: [{ type: 'status', statusId: 'bell-mark', stacks: 3, target: 'target' }] } }),
  'hunting-hour': c('hunting-hour', '猎杀时刻', 'attack', 'uncommon', 1, 'single-enemy', '造成 8 点伤害；目标每有 1 层钟痕额外 +2 伤害。', [{ type: 'target-scaled-damage', amount: 8, statusId: 'bell-mark', perStack: 2 }], { upgrade: { description: '造成 10 点伤害；每层钟痕额外 +2。', effects: [{ type: 'target-scaled-damage', amount: 10, statusId: 'bell-mark', perStack: 2 }] } }),
  'evening-bell': c('evening-bell', '暮钟', 'attack', 'rare', 2, 'all-enemies', '对所有敌人造成 7 点伤害，随后再造成 3 点钟震伤害。', [{ type: 'damage', amount: 7 }, { type: 'damage', amount: 3 }], { upgrade: { description: '对所有敌人造成 10 点伤害，随后再造成 3 点钟震伤害。', effects: [{ type: 'damage', amount: 10 }, { type: 'damage', amount: 3 }] } }),
  'the-final-bell': c('the-final-bell', '最后一声', 'attack', 'rare', 2, 'single-enemy', '造成 22 点伤害，每层钟痕额外 +2 并引爆全部钟痕。', [{ type: 'target-scaled-damage', amount: 22, statusId: 'bell-mark', perStack: 2, consume: true }], { upgrade: { description: '造成 27 点伤害，每层钟痕额外 +2 并引爆全部钟痕。', effects: [{ type: 'target-scaled-damage', amount: 27, statusId: 'bell-mark', perStack: 2, consume: true }] } }),

  // 旧世战士 — 架势 → 战势 → 反击
  'battle-line': c('battle-line', '战线', 'skill', 'common', 1, 'self', '获得 9 点格挡并获得 2 点战势。', [{ type: 'block', amount: 9 }, { type: 'status', statusId: 'stance', stacks: 2, target: 'self' }], { upgrade: { description: '获得 11 点格挡并获得 2 点战势。', effects: [{ type: 'block', amount: 11 }, { type: 'status', statusId: 'stance', stacks: 2, target: 'self' }] } }),
  'shield-strike': c('shield-strike', '盾击', 'attack', 'common', 1, 'single-enemy', '造成 8 点伤害并获得 2 点战势。', [{ type: 'damage', amount: 8 }, { type: 'status', statusId: 'stance', stacks: 2, target: 'self' }], { upgrade: { description: '造成 10 点伤害并获得 2 点战势。', effects: [{ type: 'damage', amount: 10 }, { type: 'status', statusId: 'stance', stacks: 2, target: 'self' }] } }),
  counterstroke: c('counterstroke', '反戈', 'attack', 'uncommon', 1, 'single-enemy', '造成 10 点伤害并获得 4 点格挡。', [{ type: 'damage', amount: 10 }, { type: 'block', amount: 4 }], { upgrade: { description: '造成 13 点伤害并获得 5 点格挡。', effects: [{ type: 'damage', amount: 13 }, { type: 'block', amount: 5 }] } }),
  'ancient-war-formation': c('ancient-war-formation', '旧世战阵', 'power', 'rare', 2, 'self', '结成战阵：立即获得 3 点战势与 1 层力量。', [{ type: 'status', statusId: 'stance', stacks: 3, target: 'self' }, { type: 'status', statusId: 'strength', stacks: 1, target: 'self' }], { upgrade: { description: '立即获得 3 点战势与 2 层力量。', effects: [{ type: 'status', statusId: 'stance', stacks: 3, target: 'self' }, { type: 'status', statusId: 'strength', stacks: 2, target: 'self' }] } }),

  // 旧世卡牌 — 弃置 → 失序 → 改写爆发
  'old-shuffle': c('old-shuffle', '洗牌', 'skill', 'common', 0, 'self', '抽 2 张牌并获得 1 点失序。', [{ type: 'draw', amount: 2 }, { type: 'status', statusId: 'disorder', stacks: 1, target: 'self' }], { upgrade: { description: '抽 3 张牌并获得 1 点失序。', effects: [{ type: 'draw', amount: 3 }, { type: 'status', statusId: 'disorder', stacks: 1, target: 'self' }] } }),
  rewrite: c('rewrite', '改写', 'skill', 'uncommon', 1, 'self', '获得 1 点能量与 1 点失序。', [{ type: 'gain-energy', amount: 1 }, { type: 'status', statusId: 'disorder', stacks: 1, target: 'self' }], { upgrade: { description: '获得 1 点能量、抽 1 张牌并获得 1 点失序。', effects: [{ type: 'gain-energy', amount: 1 }, { type: 'draw', amount: 1 }, { type: 'status', statusId: 'disorder', stacks: 1, target: 'self' }] } }),
  'shard-contract': c('shard-contract', '残牌契约', 'power', 'rare', 1, 'self', '缔结契约：立即获得 3 点失序并抽 1 张牌。', [{ type: 'status', statusId: 'disorder', stacks: 3, target: 'self' }, { type: 'draw', amount: 1 }], { upgrade: { description: '立即获得 4 点失序并抽 1 张牌。', effects: [{ type: 'status', statusId: 'disorder', stacks: 4, target: 'self' }, { type: 'draw', amount: 1 }] } }),
  'old-world-ending': c('old-world-ending', '旧世终局', 'attack', 'rare', 3, 'single-enemy', '造成 18 + 失序 × 2 点伤害，然后消耗所有失序。', [{ type: 'resource-scaled-damage', amount: 18, statusId: 'disorder', perStack: 2, consume: true }], { upgrade: { description: '造成 22 + 失序 × 2 点伤害，然后消耗所有失序。', effects: [{ type: 'resource-scaled-damage', amount: 22, statusId: 'disorder', perStack: 2, consume: true }] } }),
};
