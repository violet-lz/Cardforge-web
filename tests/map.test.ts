import { describe, expect, it } from 'vitest';
import { BIOMES } from '../src/data/biomes/biomes';
import { attemptMove, generateMap, moveToNode, routeLengths, validateMap } from '../src/game/map/mapGenerator';

describe('map generator (terrain DAG)', () => {
  it('produces an identical topology, terrain layout, and curves for the same seed', () => {
    expect(generateMap(123)).toEqual(generateMap(123));
  });

  it('exposes at least three initial routes right after Start', () => {
    const map = generateMap(42); const start = map.nodes.find((node) => node.type === 'start')!;
    expect(start.connections.length).toBeGreaterThanOrEqual(3); expect(map.nodes.filter((node) => node.row === 1)).toHaveLength(3);
  });

  it('derives each act biome and its guaranteed content from data-driven config', () => {
    BIOMES.forEach((biome, index) => {
      const map = generateMap(42, undefined, index + 1);
      expect(map.biomeId).toBe(biome.id);
      biome.mapConfig.guaranteedNodeTypes?.forEach((type) => expect(map.nodes.some((node) => node.type === type)).toBe(true));
    });
  });

  it('keeps the requested 9-to-12 location route contract', () => {
    for (let seed = 0; seed < 30; seed += 1) { const lengths = routeLengths(generateMap(seed))!; expect(lengths.shortest).toBeGreaterThanOrEqual(9); expect(lengths.longest).toBeGreaterThanOrEqual(12); }
  });

  it('creates 40/40/20-style branch choices on ordinary adjacent-layer exits', () => {
    const counts = { 1: 0, 2: 0, 3: 0 } as Record<number, number>;
    for (let seed = 0; seed < 400; seed += 1) { const map = generateMap(seed); for (const node of map.nodes) {
      const adjacent = node.connections.filter((id) => map.nodes.find((target) => target.id === id)!.row === node.row + 1).length;
      if (node.row > 0 && node.type !== 'boss' && adjacent >= 1 && adjacent <= 3) counts[adjacent] += 1;
    } }
    const total = counts[1] + counts[2] + counts[3]; expect(counts[1] / total).toBeGreaterThan(.25); expect(counts[2] / total).toBeGreaterThan(.25); expect(counts[3]).toBeGreaterThan(0);
  });

  it('keeps every generated road between adjacent floors', () => {
    const map = generateMap(9);
    expect(map.edges.every((edge) => { const from = map.nodes.find((node) => node.id === edge.from)!; const to = map.nodes.find((node) => node.id === edge.to)!; return to.row - from.row === 1; })).toBe(true);
  });

  it('uses irregular but safely bounded terrain locations with non-overlapping same-row lanes', () => {
    for (let seed = 0; seed < 50; seed += 1) {
      const map = generateMap(seed); expect(map.nodes.every((node) => node.x >= .08 && node.x <= .92 && node.y >= .04 && node.y <= .96 && Boolean(node.locationName))).toBe(true);
      const middle = map.nodes.filter((node) => node.row > 1 && node.row < 11); expect(new Set(middle.map((node) => node.x.toFixed(3))).size).toBeGreaterThan(4);
      for (let row = 1; row < 11; row += 1) { const layer = map.nodes.filter((node) => node.row === row).sort((a, b) => a.x - b.x); for (let index = 1; index < layer.length; index += 1) expect(layer[index].x - layer[index - 1].x).toBeGreaterThan(.23); }
    }
  });

  it('supports route merges and never creates a backward connection', () => {
    const map = generateMap(9); expect(map.nodes.some((node) => node.parents.length >= 2)).toBe(true);
    for (const node of map.nodes) for (const targetId of node.connections) expect(map.nodes.find((target) => target.id === targetId)!.row).toBeGreaterThan(node.row);
  });

  it('contains no cycles, dead ends, or unreachable locations for many seeds', () => {
    for (let seed = 0; seed < 50; seed += 1) expect(validateMap(generateMap(seed))).toBe(true);
  });

  it('guarantees every initial route reaches the boss', () => {
    const map = generateMap(13); const byId = new Map(map.nodes.map((node) => [node.id, node]));
    for (const route of map.nodes.filter((node) => node.row === 1)) { const seen = new Set<string>(); const queue = [route.id]; while (queue.length) { const id = queue.shift()!; if (!seen.has(id)) { seen.add(id); queue.push(...byId.get(id)!.connections); } } expect(seen.has(map.bossNodeId)).toBe(true); }
  });

  it('produces identical route outcomes for the same seed and action sequence', () => {
    let left = generateMap(21); let right = generateMap(21);
    for (let step = 0; step < 3; step += 1) { const id = left.availableNodeIds[0]; left = moveToNode(left, id); right = moveToNode(right, id); }
    expect(left).toEqual(right);
  });

  it('rejects inaccessible, revisited, and missing locations', () => {
    const map = generateMap(1); const inaccessible = map.nodes.find((node) => node.row === 2 && !map.availableNodeIds.includes(node.id))!;
    expect(attemptMove(map, inaccessible.id)).toEqual({ ok: false, reason: 'NOT_CONNECTED' }); expect(() => moveToNode(map, inaccessible.id)).toThrow('Node is not reachable');
    const first = moveToNode(map, map.availableNodeIds[0]); expect(attemptMove(first, map.currentNodeId!)).toEqual({ ok: false, reason: 'ALREADY_VISITED' }); expect(attemptMove(map, 'missing')).toEqual({ ok: false, reason: 'INVALID_NODE' });
  });

  it('persists route depth, terrain locations, and route edges through JSON', () => {
    const map = generateMap(55); const restored = JSON.parse(JSON.stringify(map)); expect(restored).toEqual(map);
  });
});
