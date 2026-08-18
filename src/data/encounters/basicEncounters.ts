import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import type { EnemyDefinition } from '../../game/combat/enemyTypes';
import { BASIC_ENEMIES } from '../enemies/basicEnemies';
import { getCustomContentPack } from '../../game/content/customContent';

export type EncounterTier = 'combat' | 'elite' | 'boss';
export type EncounterProfile = 'native' | 'legacy';

export interface EncounterDefinition {
  id: string;
  tier: EncounterTier;
  minRow: number;
  minAct?: number;
  biomeIds?: readonly BiomeId[];
  legacyOnly?: boolean;
  enemyIds: string[];
}

export const ENCOUNTERS: EncounterDefinition[] = [
  { id: 'ember-patrol', tier: 'combat', minRow: 0, biomeIds: ['cinder-fields'], enemyIds: ['ashling', 'cinder-sprite'] },
  { id: 'iron-and-moth', tier: 'combat', minRow: 1, biomeIds: ['cinder-fields'], enemyIds: ['rust-hound', 'glass-moth'] },
  { id: 'kiln-duet', tier: 'elite', minRow: 2, biomeIds: ['cinder-fields'], enemyIds: ['kiln-brute', 'veil-monger'] },
  { id: 'warden-of-the-last-bell', tier: 'boss', minRow: 0, minAct: 1, biomeIds: ['cinder-fields'], enemyIds: ['ashen-warden'] },
  { id: 'inkfall-caravan', tier: 'combat', minRow: 1, minAct: 2, biomeIds: ['bonebind-hamlet'], enemyIds: ['ink-leech', 'bone-scrivener'] },
  { id: 'rope-bell-procession', tier: 'combat', minRow: 2, minAct: 2, biomeIds: ['bonebind-hamlet'], enemyIds: ['bone-scrivener', 'bell-tender'] },
  { id: 'hollow-choir', tier: 'elite', minRow: 3, minAct: 2, biomeIds: ['bonebind-hamlet'], enemyIds: ['bell-tender', 'glass-moth', 'ink-leech'] },
  { id: 'veil-procession', tier: 'combat', minRow: 2, minAct: 3, biomeIds: ['obsidian-capital'], enemyIds: ['veil-monger', 'cinder-sprite'] },
  { id: 'broken-gate', tier: 'combat', minRow: 3, minAct: 3, biomeIds: ['obsidian-capital'], enemyIds: ['bell-tender'] },
  { id: 'black-court-duet', tier: 'elite', minRow: 3, minAct: 3, biomeIds: ['obsidian-capital'], enemyIds: ['kiln-brute', 'bone-scrivener'] },
  { id: 'crownless-furnace', tier: 'boss', minRow: 0, minAct: 3, biomeIds: ['obsidian-capital'], enemyIds: ['crownless-furnace'] },
  { id: 'legacy-lone-orc-scout', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-lone-orc-scout'] },
  { id: 'legacy-orc-patrol', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-patrol-orc-archer', 'legacy-patrol-orc-scout'] },
  { id: 'legacy-orc-warrior', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-orc-warrior'] },
  { id: 'legacy-skeleton-warrior', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-skeleton-warrior'] },
  { id: 'legacy-jaw-worm', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-jaw-worm'] },
  { id: 'legacy-slime-and-shaman', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-small-slime', 'legacy-orc-shaman'] },
  { id: 'legacy-ghost-and-berserker', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-ghost', 'legacy-orc-berserker'] },
  { id: 'legacy-rat-pack', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-rat-pack-a', 'legacy-rat-pack-b', 'legacy-rat-pack-c'] },
  { id: 'legacy-troll-bruiser', tier: 'combat', minRow: 0, legacyOnly: true, enemyIds: ['legacy-troll'] },
  { id: 'legacy-death-knight', tier: 'elite', minRow: 0, legacyOnly: true, enemyIds: ['legacy-death-knight'] },
  { id: 'legacy-orc-warchief', tier: 'elite', minRow: 0, legacyOnly: true, enemyIds: ['legacy-orc-warchief'] },
  { id: 'legacy-two-headed-ettin', tier: 'elite', minRow: 0, legacyOnly: true, enemyIds: ['legacy-ettin'] },
  { id: 'legacy-dark-covenant', tier: 'elite', minRow: 0, legacyOnly: true, enemyIds: ['legacy-ghost-cultist', 'legacy-hag', 'legacy-wraith'] },
  { id: 'legacy-slime-king', tier: 'boss', minRow: 0, minAct: 1, biomeIds: ['cinder-fields'], legacyOnly: true, enemyIds: ['legacy-slime-king'] },
  { id: 'legacy-ancient-dragon', tier: 'boss', minRow: 0, minAct: 2, biomeIds: ['bonebind-hamlet'], enemyIds: ['legacy-ancient-dragon'] },
];

export function encounterCatalog(): EncounterDefinition[] {
  return ENCOUNTERS.map((encounter) => ({ ...encounter, biomeIds: encounter.biomeIds ? [...encounter.biomeIds] : undefined, enemyIds: [...encounter.enemyIds] }));
}

export function selectEncounter(seed: number, tier: EncounterTier, row: number, act = 1, biomeId: BiomeId = 'cinder-fields', profile: EncounterProfile = 'native'): EnemyDefinition[] {
  const customEncounters: EncounterDefinition[] = profile === 'native' && tier === 'combat' ? Object.keys(getCustomContentPack().enemies).sort().map((id) => ({ id: `custom-${id}`, tier: 'combat', minRow: 0, enemyIds: [id] })) : [];
  const tierPool = eligibleForBiome([...ENCOUNTERS, ...customEncounters].filter((encounter) => encounter.tier === tier && (encounter.minAct ?? 1) <= act && (profile === 'legacy' || !encounter.legacyOnly)), biomeId);
  const candidates = tierPool.filter((encounter) => encounter.minRow <= row);
  const pool = candidates.length ? candidates : tierPool;
  if (!pool.length) throw new Error(`No ${tier} encounter available for biome ${biomeId} in act ${act}`);
  const selected = pool[new SeededRng((seed + row * 131) >>> 0).nextInt(0, pool.length - 1)];
  return selected.enemyIds.map((id) => {
    const enemy = BASIC_ENEMIES[id];
    if (!enemy) throw new Error(`Encounter ${selected.id} references unknown enemy ${id}`);
    return enemy;
  });
}
