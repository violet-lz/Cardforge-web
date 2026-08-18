import type { MapNodeType, NodeScore } from './mapTypes';

const SCORES: Record<MapNodeType, NodeScore> = {
  start: { risk: 0, reward: 0, resource: 0, difficulty: 0 },
  combat: { risk: 2, reward: 2, resource: 1, difficulty: 2 },
  elite: { risk: 5, reward: 5, resource: 2, difficulty: 5 },
  shop: { risk: 0, reward: 4, resource: 4, difficulty: 0 },
  event: { risk: 3, reward: 3, resource: 2, difficulty: 2 },
  rest: { risk: 0, reward: 1, resource: 3, difficulty: 0 },
  treasure: { risk: 1, reward: 5, resource: 5, difficulty: 1 },
  special: { risk: 1, reward: 2, resource: 2, difficulty: 1 },
  boss: { risk: 9, reward: 9, resource: 5, difficulty: 9 },
};

export function scoreFor(type: MapNodeType): NodeScore {
  return { ...SCORES[type] };
}
