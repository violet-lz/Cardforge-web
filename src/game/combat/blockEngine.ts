export function addBlock(current: number, amount: number): number {
  assertNonNegative(current, 'Current block');
  assertNonNegative(amount, 'Block amount');
  return current + amount;
}

export function clearBlock(): number {
  return 0;
}

export function retainBlock(current: number, retain: boolean): number {
  assertNonNegative(current, 'Current block');
  return retain ? current : 0;
}

function assertNonNegative(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${label} must be non-negative`);
}
