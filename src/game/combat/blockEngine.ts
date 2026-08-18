export interface RetainedBlock {
  block: number;
  blockRetainTurns: number;
}

export function addBlock(current: number, amount: number): number {
  assertNonNegative(current, 'Current block');
  assertNonNegative(amount, 'Block amount');
  return current + amount;
}

/** Adds block and keeps the longer active retention window. */
export function addRetainedBlock(current: RetainedBlock, amount: number, retainTurns = 0): RetainedBlock {
  assertNonNegative(current.block, 'Current block');
  assertNonNegativeInteger(current.blockRetainTurns, 'Current block retention');
  assertNonNegative(amount, 'Block amount');
  assertNonNegativeInteger(retainTurns, 'Block retention');
  return { block: current.block + amount, blockRetainTurns: Math.max(current.blockRetainTurns, retainTurns) };
}

/** Consumes one future-player-turn retention charge, or clears ordinary expired block. */
export function advanceRetainedBlock(current: RetainedBlock): RetainedBlock {
  assertNonNegative(current.block, 'Current block');
  assertNonNegativeInteger(current.blockRetainTurns, 'Current block retention');
  return current.blockRetainTurns > 0 ? { block: current.block, blockRetainTurns: current.blockRetainTurns - 1 } : { block: 0, blockRetainTurns: 0 };
}

export function clearRetainedBlock(): RetainedBlock { return { block: 0, blockRetainTurns: 0 }; }

function assertNonNegative(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${label} must be non-negative`);
}

function assertNonNegativeInteger(value: number, label: string): void {
  if (!Number.isInteger(value) || value < 0) throw new Error(`${label} must be a non-negative integer`);
}
