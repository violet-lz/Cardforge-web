import type { MapGenerationConfig } from '../../game/map/mapGenerator';

export type BiomeId = 'cinder-fields' | 'bonebind-hamlet' | 'obsidian-capital';

export interface BiomeDefinition {
  id: BiomeId;
  name: string;
  tagline: string;
  accentClass: string;
  enemyTierMultiplier: number;
  mapConfig: Pick<MapGenerationConfig, 'nodeWeights' | 'guaranteedNodeTypes'>;
}

const BASE_WEIGHTS: NonNullable<MapGenerationConfig['nodeWeights']> = [
  ['combat', 42], ['event', 18], ['rest', 12], ['shop', 12], ['treasure', 8], ['elite', 8],
];

export const BIOMES: BiomeDefinition[] = [
  {
    id: 'cinder-fields', name: '灰烬荒原', tagline: '风裹残焰，脚下的路仍在闷烧。', accentClass: 'biome-cinder', enemyTierMultiplier: 1,
    mapConfig: { nodeWeights: BASE_WEIGHTS, guaranteedNodeTypes: ['shop', 'event', 'elite'] },
  },
  {
    id: 'bonebind-hamlet', name: '绞骨村落', tagline: '钟绳缠着白骨，村口的灯从不熄灭。', accentClass: 'biome-bonebind', enemyTierMultiplier: 1.15,
    mapConfig: { nodeWeights: [['combat', 38], ['event', 24], ['rest', 10], ['shop', 14], ['treasure', 6], ['elite', 8]], guaranteedNodeTypes: ['event', 'shop', 'elite'] },
  },
  {
    id: 'obsidian-capital', name: '黑曜皇都', tagline: '黑色宫墙映着无数张脸，没有一张相同。', accentClass: 'biome-capital', enemyTierMultiplier: 1.3,
    mapConfig: { nodeWeights: [['combat', 36], ['event', 16], ['rest', 8], ['shop', 12], ['treasure', 10], ['elite', 18]], guaranteedNodeTypes: ['shop', 'treasure', 'elite'] },
  },
];

export function biomeForAct(act: number): BiomeDefinition {
  return BIOMES[(Math.max(1, act) - 1) % BIOMES.length];
}
