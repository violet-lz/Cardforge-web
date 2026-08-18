import { emptyCollectionProgress } from './collectionEngine';
import { clampDifficulty } from './ascensionTypes';
import type { MetaProgressState } from '../engine/types';

export function createMetaProgress(): MetaProgressState {
  return { schemaVersion: 4, ascensionLevel: 1, maxUnlockedAscensionLevel: 3, unlockedCharacterIds: ['wanderer', 'archivist', 'ash-priest', 'bell-hunter'], unlockedCardIds: ['strike', 'defend', 'insight', 'ember-lance', 'split-spark', 'ashen-ward', 'read-the-ruin', 'blood-vow', 'bell-mark', 'cinder-rain', 'last-ember', 'moth-veil', 'ash-call', 'funeral-bell', 'echoing-step'], unlockedRelicIds: ['ember-seal', 'coin-orbit'], achievements: [], ...emptyCollectionProgress() };
}

export function recordVictory(meta: MetaProgressState, completedLevel = meta.ascensionLevel): MetaProgressState {
  const level = clampDifficulty(completedLevel);
  const maxUnlockedAscensionLevel = level === 3 ? Math.max(meta.maxUnlockedAscensionLevel, 4) : level === 4 ? 5 : meta.maxUnlockedAscensionLevel;
  // Clearing difficulty 3 unlocks 旧世战士; clearing difficulty 4 unlocks 旧世卡牌.
  const characterUnlock = level >= 4 ? 'legacy-one-of-each' : level >= 3 ? 'legacy-classic' : null;
  const unlockedCharacterIds = characterUnlock && !meta.unlockedCharacterIds.includes(characterUnlock) ? [...meta.unlockedCharacterIds, characterUnlock] : meta.unlockedCharacterIds;
  return { ...meta, maxUnlockedAscensionLevel, unlockedCharacterIds, achievements: meta.achievements.includes('first-victory') ? meta.achievements : [...meta.achievements, 'first-victory'] };
}
