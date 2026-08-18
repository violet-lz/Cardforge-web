import type { StatusState } from '../status/statusTypes';
import { getStatusStacks, hasStatus } from '../status/statusEngine';

export interface DamageInput {
  base: number;
  strength?: number;
  weak?: boolean;
  vulnerable?: boolean;
  statuses?: StatusState[];
  hits?: number;
}

export interface DamageResult {
  attempted: number;
  afterModifiers: number;
  blocked: number;
  hpLoss: number;
  remainingBlock: number;
}

export function calculateModifiedDamage(input: DamageInput): number {
  if (!Number.isFinite(input.base) || input.base < 0) throw new Error('Base damage must be non-negative');
  const strength = input.strength ?? getStatusStacks(input.statuses, 'strength');
  const weak = input.weak ?? hasStatus(input.statuses, 'weak');
  const vulnerable = input.vulnerable ?? hasStatus(input.statuses, 'vulnerable');
  const raw = Math.max(0, input.base + strength);
  const weakened = weak ? Math.floor(raw * 0.75) : raw;
  return Math.max(0, Math.floor(vulnerable ? weakened * 1.5 : weakened));
}

export function resolveDamage(input: DamageInput, block: number): DamageResult {
  if (!Number.isFinite(block) || block < 0) throw new Error('Block must be non-negative');
  const hits = input.hits ?? 1;
  if (!Number.isInteger(hits) || hits < 1) throw new Error('Hits must be a positive integer');
  const afterModifiers = calculateModifiedDamage(input) * hits;
  const blocked = Math.min(block, afterModifiers);
  return {
    attempted: input.base * hits,
    afterModifiers,
    blocked,
    hpLoss: afterModifiers - blocked,
    remainingBlock: block - blocked,
  };
}
