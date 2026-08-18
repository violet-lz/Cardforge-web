import type { RelicDefinition, RelicTrigger } from './relicTypes';

/** Returns trigger-matching relics in the player's stored order for deterministic resolution. */
export function relicsForTrigger(relicIds: string[], definitions: Record<string, RelicDefinition>, trigger: RelicTrigger): RelicDefinition[] {
  return relicIds.flatMap((id) => {
    const relic = definitions[id];
    return relic?.trigger === trigger ? [relic] : [];
  });
}
