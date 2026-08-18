import type { StatusDefinition } from '../../game/status/statusTypes';

export const BASIC_STATUSES: Record<string, StatusDefinition> = {
  strength: { id: 'strength', name: '力量', kind: 'buff', stackMode: 'stack' },
  weak: { id: 'weak', name: '虚弱', kind: 'debuff', stackMode: 'stack', defaultDuration: 2, expiry: 'turn-start' },
  vulnerable: { id: 'vulnerable', name: '易伤', kind: 'debuff', stackMode: 'stack', defaultDuration: 2, expiry: 'turn-start' },
  regen: { id: 'regen', name: '再生', kind: 'buff', stackMode: 'stack' },
};
