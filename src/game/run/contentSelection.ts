import type { BiomeId } from '../../data/biomes/biomes';
import { CARD_CATALOG } from '../../data/cards/basicCards';
import { LEGACY_REWARD_CARD_IDS } from '../../data/cards/legacyCards';
import { SeededRng } from '../rng/SeededRng';
import type { RewardState } from './rewardTypes';
import { eligibleForBiome } from './contentPools';

interface RewardCardEntry { id: string; biomeIds?: readonly BiomeId[]; }

const REWARD_CARDS: RewardCardEntry[] = [
  { id: 'insight' }, { id: 'blood-vow' }, { id: 'bell-mark' }, { id: 'last-ember' },
  { id: 'ember-lance', biomeIds: ['cinder-fields'] }, { id: 'coal-hook', biomeIds: ['cinder-fields'] }, { id: 'furnace-breath', biomeIds: ['cinder-fields'] }, { id: 'ash-call', biomeIds: ['cinder-fields'] },
  { id: 'moth-veil', biomeIds: ['bonebind-hamlet'] }, { id: 'grave-lantern', biomeIds: ['bonebind-hamlet'] }, { id: 'riven-choir', biomeIds: ['bonebind-hamlet'] }, { id: 'warding-ink', biomeIds: ['bonebind-hamlet'] },
  { id: 'night-cartography', biomeIds: ['obsidian-capital'] }, { id: 'oathbreaker', biomeIds: ['obsidian-capital'] }, { id: 'sunken-key', biomeIds: ['obsidian-capital'] }, { id: 'ashen-mirror', biomeIds: ['obsidian-capital'] },
];

const LEGACY_REWARD_CARDS: RewardCardEntry[] = LEGACY_REWARD_CARD_IDS.map((id) => ({ id }));
export type RewardProfile = 'native' | 'legacy';

export function rewardCardCatalog(profile: RewardProfile = 'native'): RewardCardEntry[] {
  const cards = profile === 'legacy' ? LEGACY_REWARD_CARDS : REWARD_CARDS;
  return cards.map((card) => ({ ...card, biomeIds: card.biomeIds ? [...card.biomeIds] : undefined }));
}

export function createReward(seed: number, row: number, elite: boolean, biomeId: BiomeId = 'cinder-fields', profile: RewardProfile = 'native'): RewardState {
  const entries = profile === 'legacy' ? LEGACY_REWARD_CARDS : eligibleForBiome(REWARD_CARDS, biomeId);
  const ids = entries.map((entry) => entry.id).filter((id) => CARD_CATALOG[id]?.rarity !== 'basic');
  const rng = new SeededRng((seed + row * 307 + (elite ? 17 : 0)) >>> 0);
  const pool = [...ids];
  const cardChoices: string[] = [];
  const count = Math.min(3, pool.length);
  while (cardChoices.length < count) cardChoices.push(pool.splice(rng.nextInt(0, pool.length - 1), 1)[0]);
  return { gold: profile === 'legacy' ? 0 : elite ? 40 : 20, cardChoices, claimed: false };
}
