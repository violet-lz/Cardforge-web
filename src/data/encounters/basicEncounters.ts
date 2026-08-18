import type { BiomeId } from '../biomes/biomes';
import { difficultyFor } from '../ascension/modifiers';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import type { EnemyDefinition } from '../../game/combat/enemyTypes';
import { BASIC_ENEMIES } from '../enemies/basicEnemies';
import { REGION_ENCOUNTERS } from './regionEncounters';
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

const BASE_ENCOUNTERS: EncounterDefinition[] = [
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
  // 荒漠 (act 2, difficulty >= 3)
  { id: 'dust-ambush', tier: 'combat', minRow: 0, minAct: 2, biomeIds: ['desert'], enemyIds: ['sand-worm'] },
  { id: 'raider-band', tier: 'combat', minRow: 1, minAct: 2, biomeIds: ['desert'], enemyIds: ['desert-raider', 'sand-scorpion'] },
  { id: 'scorching-march', tier: 'combat', minRow: 2, minAct: 2, biomeIds: ['desert'], enemyIds: ['sandstorm-wraith', 'sand-scorpion'] },
  { id: 'stone-and-priest', tier: 'elite', minRow: 3, minAct: 2, biomeIds: ['desert'], enemyIds: ['sandstone-golem'] },
  { id: 'priest-and-scorpion', tier: 'elite', minRow: 3, minAct: 2, biomeIds: ['desert'], enemyIds: ['mummified-priest', 'sand-scorpion'] },
  { id: 'dune-tyrant-duel', tier: 'elite', minRow: 3, minAct: 2, biomeIds: ['desert'], enemyIds: ['dune-tyrant'] },
  { id: 'sand-sovereign-tomb', tier: 'boss', minRow: 0, minAct: 2, biomeIds: ['desert'], enemyIds: ['sand-sovereign'] },
  // 陨石遗迹 (act 3, difficulty 5 endgame)
  { id: 'fallen-acolytes', tier: 'combat', minRow: 0, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['meteor-acolyte'] },
  { id: 'void-pack', tier: 'combat', minRow: 1, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['void-hound', 'riftweaver'] },
  { id: 'starbone-vanguard', tier: 'combat', minRow: 2, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['starbone-knight'] },
  { id: 'cosmic-behemoth-fight', tier: 'elite', minRow: 3, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['cosmic-behemoth'] },
  { id: 'terminus-gate', tier: 'elite', minRow: 3, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['terminus-warden'] },
  { id: 'rift-pair', tier: 'elite', minRow: 3, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['riftweaver', 'void-hound'] },
  { id: 'the-finality', tier: 'boss', minRow: 0, minAct: 3, biomeIds: ['meteor-ruins'], enemyIds: ['world-ender'] },
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

export const ENCOUNTERS: EncounterDefinition[] = [...BASE_ENCOUNTERS, ...REGION_ENCOUNTERS];

export function encounterCatalog(): EncounterDefinition[] {
  return ENCOUNTERS.map((encounter) => ({ ...encounter, biomeIds: encounter.biomeIds ? [...encounter.biomeIds] : undefined, enemyIds: [...encounter.enemyIds] }));
}

function encounterPollutes(encounter: EncounterDefinition): boolean {
  return encounter.enemyIds.some((id) => { const behavior = BASIC_ENEMIES[id]?.behavior; return Boolean(behavior && [...behavior.intents, ...(behavior.phases?.flatMap((phase) => phase.intents) ?? [])].some((intent) => intent.type === 'pollute')); });
}
function weightedEncounter(pool: EncounterDefinition[], seed: number, row: number, difficulty: number): EncounterDefinition {
  const multiplier = difficultyFor(difficulty).pollutionEncounterMultiplier;
  const weighted = pool.map((encounter) => ({ encounter, weight: encounterPollutes(encounter) ? Math.max(1, Math.round(100 * multiplier)) : 100 }));
  let roll = new SeededRng((seed + row * 131) >>> 0).nextInt(1, weighted.reduce((total, entry) => total + entry.weight, 0));
  for (const entry of weighted) { if (roll <= entry.weight) return entry.encounter; roll -= entry.weight; }
  return weighted[weighted.length - 1].encounter;
}

export function selectEncounter(seed: number, tier: EncounterTier, row: number, act = 1, biomeId: BiomeId = 'cinder-fields', profile: EncounterProfile = 'native', difficulty = 1): EnemyDefinition[] {
  const customEncounters: EncounterDefinition[] = profile === 'native' && tier === 'combat' ? Object.keys(getCustomContentPack().enemies).sort().map((id) => ({ id: `custom-${id}`, tier: 'combat', minRow: 0, enemyIds: [id] })) : [];
  const tierPool = eligibleForBiome([...ENCOUNTERS, ...customEncounters].filter((encounter) => encounter.tier === tier && (encounter.minAct ?? 1) <= act && (profile === 'legacy' || !encounter.legacyOnly)), biomeId);
  const candidates = tierPool.filter((encounter) => encounter.minRow <= row);
  const pool = candidates.length ? candidates : tierPool;
  if (!pool.length) throw new Error(`No ${tier} encounter available for biome ${biomeId} in act ${act}`);
  const selected = weightedEncounter(pool, seed, row, difficulty);
  return selected.enemyIds.map((id) => {
    const enemy = BASIC_ENEMIES[id];
    if (!enemy) throw new Error(`Encounter ${selected.id} references unknown enemy ${id}`);
    return enemy;
  });
}
