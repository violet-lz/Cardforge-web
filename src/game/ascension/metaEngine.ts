import { emptyCollectionProgress } from './collectionEngine';
import type { MetaProgressState } from '../engine/types';

export function createMetaProgress(): MetaProgressState {
  return { schemaVersion: 3, ascensionLevel: 0, unlockedCharacterIds: ['wanderer', 'archivist', 'ash-priest', 'bell-hunter'], unlockedCardIds: ['strike', 'defend', 'insight', 'ember-lance', 'split-spark', 'ashen-ward', 'read-the-ruin', 'blood-vow', 'bell-mark', 'cinder-rain', 'last-ember', 'moth-veil', 'ash-call', 'funeral-bell', 'echoing-step'], unlockedRelicIds: ['ember-seal', 'coin-orbit'], achievements: [], ...emptyCollectionProgress() };
}

export function recordVictory(meta: MetaProgressState): MetaProgressState {
  return { ...meta, achievements: meta.achievements.includes('first-victory') ? meta.achievements : [...meta.achievements, 'first-victory'] };
}
