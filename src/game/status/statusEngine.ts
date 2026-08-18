import type { StatusDefinition, StatusExpiry, StatusState, StatusTrigger } from './statusTypes';

export function getStatusStacks(statuses: StatusState[] | undefined, id: string): number {
  return statuses?.find((status) => status.id === id)?.stacks ?? 0;
}

export function hasStatus(statuses: StatusState[] | undefined, id: string): boolean {
  return getStatusStacks(statuses, id) > 0;
}

export function applyStatus(statuses: StatusState[] | undefined, definition: StatusDefinition, stacks = 1, duration = definition.defaultDuration): StatusState[] {
  if (!Number.isInteger(stacks) || stacks <= 0) throw new Error('Status stacks must be a positive integer');
  const current = [...(statuses ?? [])];
  const index = current.findIndex((status) => status.id === definition.id);
  if (index < 0) return [...current, createStatus(definition, stacks, duration)];
  const previous = current[index];
  const nextStacks = definition.stackMode === 'replace' ? stacks : previous.stacks + stacks;
  const boundedStacks = definition.maxStacks ? Math.min(definition.maxStacks, nextStacks) : nextStacks;
  const nextDuration = definition.stackMode === 'stack' ? (duration ?? previous.duration) : duration ?? previous.duration;
  current[index] = { ...previous, stacks: boundedStacks, duration: nextDuration, expiry: definition.expiry ?? previous.expiry };
  return current;
}

export function consumeStatus(statuses: StatusState[] | undefined, id: string, stacks = 1): StatusState[] {
  if (!Number.isInteger(stacks) || stacks <= 0) throw new Error('Consumed status stacks must be a positive integer');
  return (statuses ?? []).flatMap((status) => status.id !== id ? [status] : status.stacks > stacks ? [{ ...status, stacks: status.stacks - stacks }] : []);
}

export function expireStatuses(statuses: StatusState[] | undefined, trigger: StatusTrigger): StatusState[] {
  return (statuses ?? []).flatMap((status) => {
    if (status.expiry !== trigger || status.duration === undefined) return [status];
    const duration = status.duration - 1;
    return duration > 0 ? [{ ...status, duration }] : [];
  });
}

function createStatus(definition: StatusDefinition, stacks: number, duration?: number): StatusState {
  const expiry: StatusExpiry = definition.expiry ?? 'never';
  return { id: definition.id, stacks, duration, expiry };
}

/**
 * Deterministic damage-over-time resolved at the affected combatant's turn start.
 * Scorch burns out (one stack decays per tick); Venom persists until cleansed.
 */
export function tickScorch(combatant: { statuses?: StatusState[] }): { statuses: StatusState[]; hpLoss: number } {
  const scorch = getStatusStacks(combatant.statuses, 'scorch');
  const venom = getStatusStacks(combatant.statuses, 'venom');
  if (scorch <= 0 && venom <= 0) return { statuses: combatant.statuses ?? [], hpLoss: 0 };
  const statuses = scorch > 0 ? consumeStatus(combatant.statuses, 'scorch') : (combatant.statuses ?? []);
  return { statuses, hpLoss: scorch + venom };
}

export function syncLegacyStatusFields<T extends { strength: number; weak?: number; vulnerable?: number; statuses?: StatusState[] }>(combatant: T): T {
  if (!combatant.statuses) return combatant;
  return { ...combatant, strength: getStatusStacks(combatant.statuses, 'strength'), weak: getStatusStacks(combatant.statuses, 'weak'), vulnerable: getStatusStacks(combatant.statuses, 'vulnerable') } as T;
}
