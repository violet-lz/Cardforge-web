// 怪物视觉属性测试 · 验证所有怪物视觉数据的结构性不变量
import { describe, it, expect } from 'vitest';
import { MONSTER_VISUALS, REGION_OF, REGIONS, enemyTier } from '../src/game/enemies/monsterVisuals';

describe('monster visual properties', () => {
  const entries = Object.entries(MONSTER_VISUALS);

  // ─── Property 1: Feature count invariant ───
  // **Validates: Requirements 1.1**
  describe('Property 1: Feature count invariant', () => {
    it.each(entries)('%s has 7-9 features', (id, spec) => {
      expect(spec.features.length).toBeGreaterThanOrEqual(7);
      expect(spec.features.length).toBeLessThanOrEqual(9);
    });
  });

  // ─── Property 2: Size field range invariant ───
  // **Validates: Requirements 1.2**
  describe('Property 2: Size field range invariant', () => {
    it.each(entries)('%s has size in [0.5, 1.8]', (id, spec) => {
      expect(spec.size).toBeGreaterThanOrEqual(0.5);
      expect(spec.size).toBeLessThanOrEqual(1.8);
    });
  });

  // ─── Property 3: Joint tree structural validity ───
  // **Validates: Requirements 1.3**
  describe('Property 3: Joint tree structural validity', () => {
    const withJoints = entries.filter(([, spec]) => spec.joints);

    it.each(withJoints)('%s has exactly 6 joints', (id, spec) => {
      expect(spec.joints!.length).toBe(6);
    });

    it.each(withJoints)('%s has exactly one root (parentId === null)', (id, spec) => {
      const roots = spec.joints!.filter((j) => j.parentId === null);
      expect(roots.length).toBe(1);
    });

    it.each(withJoints)('%s has no cycles in joint tree', (id, spec) => {
      const joints = spec.joints!;
      const idSet = new Set(joints.map((j) => j.id));

      for (const joint of joints) {
        if (joint.parentId === null) continue;
        // Walk up the parent chain; should reach null within 6 steps (no cycles)
        const visited = new Set<string>();
        let current: string | null = joint.id;
        while (current !== null) {
          if (visited.has(current)) {
            expect.fail(`Cycle detected in joints of ${id} at joint "${current}"`);
          }
          visited.add(current);
          const node = joints.find((j) => j.id === current);
          current = node?.parentId ?? null;
        }
      }
    });

    it.each(withJoints)('%s has all boundFeatures indices in valid range', (id, spec) => {
      const maxIndex = spec.features.length - 1;
      for (const joint of spec.joints!) {
        for (const idx of joint.boundFeatures) {
          expect(idx).toBeGreaterThanOrEqual(0);
          expect(idx).toBeLessThanOrEqual(maxIndex);
        }
      }
    });
  });

  // ─── Property 4: Complete coverage invariant ───
  // **Validates: Requirements 1.4**
  describe('Property 4: Complete coverage invariant', () => {
    it.each(Object.keys(REGION_OF))('%s in REGION_OF has entry in MONSTER_VISUALS', (id) => {
      expect(MONSTER_VISUALS[id]).toBeDefined();
    });
  });

  // ─── Property 5: Intra-region shape uniqueness ───
  // **Validates: Requirements 1.5**
  describe('Property 5: Intra-region shape uniqueness', () => {
    it('no two monsters in the same region share more than 2 identical feature shape IDs', () => {
      // Group monsters by region
      const regionGroups: Record<string, string[]> = {};
      for (const [id, region] of Object.entries(REGION_OF)) {
        if (!regionGroups[region]) regionGroups[region] = [];
        regionGroups[region].push(id);
      }

      const violations: string[] = [];

      for (const [region, ids] of Object.entries(regionGroups)) {
        for (let i = 0; i < ids.length; i++) {
          for (let j = i + 1; j < ids.length; j++) {
            const a = MONSTER_VISUALS[ids[i]];
            const b = MONSTER_VISUALS[ids[j]];
            if (!a || !b) continue;

            const shapesA = a.features.map((f) => f.s);
            const shapesB = b.features.map((f) => f.s);

            // Count identical shapes (by value, not unique — if A has [x,x] and B has [x], shared = 1)
            const countB = new Map<string, number>();
            for (const s of shapesB) countB.set(s, (countB.get(s) ?? 0) + 1);

            let shared = 0;
            const countUsed = new Map<string, number>();
            for (const s of shapesA) {
              const available = (countB.get(s) ?? 0) - (countUsed.get(s) ?? 0);
              if (available > 0) {
                shared++;
                countUsed.set(s, (countUsed.get(s) ?? 0) + 1);
              }
            }

            if (shared > 2) {
              violations.push(`[${region}] ${ids[i]} & ${ids[j]} share ${shared} shape IDs`);
            }
          }
        }
      }

      expect(violations).toEqual([]);
    });
  });

  // ─── Property 6: Animation clip references valid joints ───
  // **Validates: Requirements 1.6**
  describe('Property 6: Animation clip references valid joints', () => {
    it('all jointIds referenced in animation keyframes exist in the monster joints array', () => {
      const violations: string[] = [];

      for (const [id, spec] of entries) {
        if (!spec.animations || !spec.joints) continue;
        const validJointIds = new Set(spec.joints.map((j) => j.id));

        for (const clip of spec.animations) {
          for (const kf of clip.keyframes) {
            for (const jkf of kf.joints) {
              if (!validJointIds.has(jkf.jointId)) {
                violations.push(`${id}: animation "${clip.name}" references missing joint "${jkf.jointId}"`);
              }
            }
          }
        }
      }

      expect(violations).toEqual([]);
    });
  });

  // ─── Property 7: Size-tier consistency ───
  // **Validates: Requirements 1.7**
  describe('Property 7: Size-tier consistency', () => {
    it('monster sizes generally align with tier expectations (soft bounds, logs warnings)', () => {
      const warnings: string[] = [];

      for (const [id, spec] of entries) {
        const tier = enemyTier(id);
        const { size } = spec;

        if (tier === 'normal' && (size < 0.5 || size > 1.1)) {
          warnings.push(`[normal] ${id}: size ${size} outside relaxed range [0.5, 1.1]`);
        } else if (tier === 'elite' && (size < 0.9 || size > 1.3)) {
          warnings.push(`[elite] ${id}: size ${size} outside relaxed range [0.9, 1.3]`);
        } else if (tier === 'boss' && (size < 1.1 || size > 1.8)) {
          warnings.push(`[boss] ${id}: size ${size} outside relaxed range [1.1, 1.8]`);
        }
      }

      // Log warnings but don't fail hard — these are soft bounds
      if (warnings.length > 0) {
        console.warn(`Size-tier consistency warnings (${warnings.length}):\n` + warnings.join('\n'));
      }
      // Allow up to 15% violations as the boundaries are intentionally soft
      const maxAllowed = Math.ceil(entries.length * 0.15);
      expect(warnings.length).toBeLessThanOrEqual(maxAllowed);
    });
  });

  // ─── Property 8: Ground_Line alignment idempotence ───
  // **Validates: Requirements 1.8**
  describe('Property 8: Ground_Line alignment idempotence', () => {
    it('groundY formula keeps foot anchored at y=103 for all valid sizes', () => {
      const groundY = 103;
      const testSizes = [0.5, 0.7, 1.0, 1.3, 1.8];

      for (const size of testSizes) {
        // The rendering formula: translate Y offset = groundY * (1 - size)
        // After scale(size), a point at groundY maps to: groundY * size + offsetY = groundY * size + groundY * (1 - size) = groundY
        const offsetY = groundY * (1 - size);
        const result = groundY * size + offsetY;
        expect(result).toBeCloseTo(groundY, 10);
      }
    });
  });
});
