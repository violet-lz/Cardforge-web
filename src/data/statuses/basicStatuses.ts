import type { StatusDefinition } from '../../game/status/statusTypes';

export const BASIC_STATUSES: Record<string, StatusDefinition> = {
  strength: { id: 'strength', name: '力量', kind: 'buff', stackMode: 'stack' },
  weak: { id: 'weak', name: '虚弱', kind: 'debuff', stackMode: 'stack', defaultDuration: 2, expiry: 'turn-start' },
  vulnerable: { id: 'vulnerable', name: '易伤', kind: 'debuff', stackMode: 'stack', defaultDuration: 2, expiry: 'turn-start' },
  regen: { id: 'regen', name: '再生', kind: 'buff', stackMode: 'stack' },
  // Damage-over-time: at the affected combatant's turn start it loses HP equal to stacks, then loses 1 stack.
  scorch: { id: 'scorch', name: '灼热', kind: 'debuff', stackMode: 'stack' },
  // Damage-over-time that never decays on its own: pressure that must be cleansed, not waited out.
  // Capped so stacked appliers create real pressure instead of an unanswerable death spiral.
  venom: { id: 'venom', name: '毒素', kind: 'debuff', stackMode: 'stack', maxStacks: 5 },
  // Each stack increases incoming damage by 10%, permanently (distinct from Vulnerable's timed 1.5x).
  // Capped: an uncapped permanent multiplier spirals out of control in long fights.
  brittle: { id: 'brittle', name: '脆化', kind: 'debuff', stackMode: 'stack', maxStacks: 5 },
  // Each stack reduces block gained from cards by 1. Capped for the same reason as Brittle.
  sap: { id: 'sap', name: '涸竭', kind: 'debuff', stackMode: 'stack', maxStacks: 5 },
  // Character resources — neutral, accumulate for build payoffs, no forced expiry.
  ember: { id: 'ember', name: '余烬', kind: 'neutral', stackMode: 'stack', maxStacks: 12 },
  pack: { id: 'pack', name: '行囊', kind: 'neutral', stackMode: 'stack', maxStacks: 6 },
  insight: { id: 'insight', name: '洞见', kind: 'neutral', stackMode: 'stack', maxStacks: 9 },
  'bell-mark': { id: 'bell-mark', name: '钟痕', kind: 'debuff', stackMode: 'stack', maxStacks: 9 },
  stance: { id: 'stance', name: '战势', kind: 'buff', stackMode: 'stack', maxStacks: 10 },
  disorder: { id: 'disorder', name: '失序', kind: 'neutral', stackMode: 'stack', maxStacks: 12 },
  // Meteor-ruins endgame resources.
  'meteor-energy': { id: 'meteor-energy', name: '陨能', kind: 'neutral', stackMode: 'stack', maxStacks: 12 },
  'cosmic-erosion': { id: 'cosmic-erosion', name: '宇蚀', kind: 'debuff', stackMode: 'stack' },
};
