import type { BiomeId } from '../../data/biomes/biomes';

export interface BiomeTaggedContent {
  biomeIds?: readonly BiomeId[];
}

/**
 * Selects content legal for a biome without consuming RNG. Untagged entries
 * are shared content. If no tagged/shared entry exists, shared content is the
 * deterministic fallback so an incomplete content table never creates a dead node.
 */
export function eligibleForBiome<T extends BiomeTaggedContent>(entries: readonly T[], biomeId: BiomeId): T[] {
  const eligible = entries.filter((entry) => !entry.biomeIds?.length || entry.biomeIds.includes(biomeId));
  if (eligible.length) return eligible;
  return entries.filter((entry) => !entry.biomeIds?.length);
}
