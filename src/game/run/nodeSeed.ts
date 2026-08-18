import type { MapNode } from '../map/mapTypes';

/** Shared deterministic content seed for a location; independent of UI layout RNG. */
export function nodeSeed(seed: number, node: MapNode): number {
  return (seed + node.row * 97 + node.column * 31) >>> 0;
}
