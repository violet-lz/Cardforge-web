export type ReplayActionType = 'start-run' | 'enter-node' | 'play-card' | 'end-turn' | 'use-potion' | 'claim-reward' | 'event-choice' | 'shop-purchase' | 'special-choice' | 'leave-special';
export interface ReplayAction { type: ReplayActionType; payload: Record<string, string | number | undefined>; }
export interface ReplayState { seed: number; actions: ReplayAction[]; finalFingerprint?: string; }
