import type { RelicDefinition } from '../../game/relics/relicTypes';

export const BASIC_RELICS: Record<string, RelicDefinition> = {
  'ember-seal': { id: 'ember-seal', name: '余烬印记', description: '战斗开始时获得 1 点力量。', trigger: 'on-combat-start', effect: { type: 'strength', amount: 1 } },
  'coin-orbit': { id: 'coin-orbit', name: '金币轨道', description: '战斗结束时获得 10 金币。', trigger: 'on-combat-end', effect: { type: 'gold', amount: 10 } },
};
