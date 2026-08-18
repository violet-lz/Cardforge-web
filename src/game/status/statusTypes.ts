export type StatusKind = 'buff' | 'debuff' | 'neutral';
export type StatusStackMode = 'stack' | 'refresh' | 'replace';
export type StatusTrigger = 'combat-start' | 'turn-start' | 'turn-end' | 'damage-dealt' | 'damage-taken';
export type StatusExpiry = 'never' | StatusTrigger;

export interface StatusDefinition {
  id: string;
  name: string;
  kind: StatusKind;
  stackMode: StatusStackMode;
  defaultDuration?: number;
  expiry?: StatusExpiry;
  maxStacks?: number;
}

export interface StatusState {
  id: string;
  stacks: number;
  duration?: number;
  expiry: StatusExpiry;
}
