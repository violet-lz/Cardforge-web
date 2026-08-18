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

const HERO_REWARD_CARD_IDS = ['ashen-offering', 'burning-litany', 'ash-revival', 'final-cinder', 'make-camp', 'travel-supplies', 'cross-the-mountains', 'traveler-instinct', 'index', 'archive', 'premonition', 'forbidden-excerpt', 'ring-the-bell', 'hunting-hour', 'evening-bell', 'the-final-bell', 'battle-line', 'shield-strike', 'counterstroke', 'ancient-war-formation', 'old-shuffle', 'rewrite', 'shard-contract', 'old-world-ending'];
HERO_REWARD_CARD_IDS.forEach((id) => REWARD_CARDS.push({ id }));

/** Region-flavoured drops so each world contributes its own cards to a build. */
const REGION_REWARD_CARDS: RewardCardEntry[] = [
  { id: 'coal-hook', biomeIds: ['ruined-village'] }, { id: 'pilgrim-guard', biomeIds: ['ruined-village'] }, { id: 'glass-rebuke', biomeIds: ['ruined-village'] },
  { id: 'votive-ash', biomeIds: ['verdant-forest'] }, { id: 'grave-lantern', biomeIds: ['verdant-forest'] }, { id: 'ember-choir', biomeIds: ['verdant-forest'] },
  { id: 'riven-choir', biomeIds: ['moss-marsh'] }, { id: 'antitoxin', biomeIds: ['moss-marsh'] }, { id: 'purging-flame', biomeIds: ['moss-marsh'] },
  { id: 'antitoxin', biomeIds: ['fetid-sewers'] }, { id: 'severed-thread', biomeIds: ['fetid-sewers'] }, { id: 'moth-veil', biomeIds: ['fetid-sewers'] },
  { id: 'brass-harrier', biomeIds: ['radiant-capital'] }, { id: 'first-watch', biomeIds: ['radiant-capital'] }, { id: 'oathbreaker', biomeIds: ['radiant-capital'] },
  { id: 'vaulting-arc', biomeIds: ['capital-outskirts'] }, { id: 'lasting-bulwark', biomeIds: ['capital-outskirts'] }, { id: 'coal-hook', biomeIds: ['capital-outskirts'] },
  { id: 'sable-liturgy', biomeIds: ['bloodlands'] }, { id: 'blood-vow', biomeIds: ['bloodlands'] }, { id: 'black-candle', biomeIds: ['bloodlands'] },
  { id: 'lunar-tithe', biomeIds: ['desert'] }, { id: 'furnace-breath', biomeIds: ['desert'] }, { id: 'iron-prayer', biomeIds: ['desert'] },
  { id: 'rune-sieve', biomeIds: ['arcane-march'] }, { id: 'read-the-ruin', biomeIds: ['arcane-march'] }, { id: 'night-cartography', biomeIds: ['arcane-march'] },
  { id: 'twin-echo', biomeIds: ['techno-city'] }, { id: 'split-spark', biomeIds: ['techno-city'] }, { id: 'echoing-step', biomeIds: ['techno-city'] },
  { id: 'hollow-compass', biomeIds: ['sky-island'] }, { id: 'ashen-ward', biomeIds: ['sky-island'] }, { id: 'insight', biomeIds: ['sky-island'] },
  { id: 'quiet-flame', biomeIds: ['noble-castle'] }, { id: 'ashen-mirror', biomeIds: ['noble-castle'] }, { id: 'sealed-horizon', biomeIds: ['noble-castle'] },
  { id: 'funeral-bell', biomeIds: ['castle-catacombs'] }, { id: 'bell-mark', biomeIds: ['castle-catacombs'] }, { id: 'ashen-mirror', biomeIds: ['castle-catacombs'] },
  { id: 'pale-accord', biomeIds: ['underworld'] }, { id: 'last-ember', biomeIds: ['underworld'] }, { id: 'purging-flame', biomeIds: ['underworld'] },
  { id: 'sunken-key', biomeIds: ['ghost-ferry'] }, { id: 'echoing-step', biomeIds: ['ghost-ferry'] }, { id: 'grave-lantern', biomeIds: ['ghost-ferry'] },
  { id: 'thunder-psalm', biomeIds: ['ocean-depths'] }, { id: 'star-sunder', biomeIds: ['ocean-depths'] }, { id: 'ashen-ward', biomeIds: ['ocean-depths'] },
  { id: 'star-sunder', biomeIds: ['atlantis'] }, { id: 'quiet-flame', biomeIds: ['atlantis'] }, { id: 'ashen-mirror', biomeIds: ['atlantis'] },
  { id: 'final-cinder', biomeIds: ['meteor-ruins'] }, { id: 'old-world-ending', biomeIds: ['meteor-ruins'] }, { id: 'forbidden-excerpt', biomeIds: ['meteor-ruins'] },
  { id: 'ring-the-bell', biomeIds: ['bell-tower'] }, { id: 'hunting-hour', biomeIds: ['bell-tower'] }, { id: 'the-final-bell', biomeIds: ['bell-tower'] },
  { id: 'twin-echo', biomeIds: ['neon-court'] }, { id: 'rewrite', biomeIds: ['neon-court'] }, { id: 'echoing-step', biomeIds: ['neon-court'] },
  { id: 'sable-liturgy', biomeIds: ['demon-nest'] }, { id: 'final-cinder', biomeIds: ['demon-nest'] }, { id: 'blood-vow', biomeIds: ['demon-nest'] },
  { id: 'star-sunder', biomeIds: ['world-rampart'] }, { id: 'thunder-psalm', biomeIds: ['world-rampart'] }, { id: 'old-world-ending', biomeIds: ['world-rampart'] },
];
REGION_REWARD_CARDS.forEach((entry) => REWARD_CARDS.push(entry));

const LEGACY_REWARD_CARDS: RewardCardEntry[] = LEGACY_REWARD_CARD_IDS.map((id) => ({ id }));
export type RewardProfile = 'native' | 'legacy';

export function rewardCardCatalog(profile: RewardProfile = 'native'): RewardCardEntry[] {
  const cards = profile === 'legacy' ? LEGACY_REWARD_CARDS : REWARD_CARDS;
  return cards.map((card) => ({ ...card, biomeIds: card.biomeIds ? [...card.biomeIds] : undefined }));
}

/** Card quality → drop weight (common 40 / uncommon 30 / rare 20 / special 10). Basic is excluded. */
const CARD_RARITY_WEIGHT: Record<string, number> = { common: 40, uncommon: 30, rare: 20, special: 10 };

export function createReward(seed: number, row: number, elite: boolean, biomeId: BiomeId = 'cinder-fields', profile: RewardProfile = 'native'): RewardState {
  const entries = profile === 'legacy' ? LEGACY_REWARD_CARDS : eligibleForBiome(REWARD_CARDS, biomeId);
  const ids = [...new Set(entries.map((entry) => entry.id))].filter((id) => CARD_CATALOG[id] && CARD_CATALOG[id].rarity !== 'basic');
  const rng = new SeededRng((seed + row * 307 + (elite ? 17 : 0)) >>> 0);
  const pool = [...ids];
  const cardChoices: string[] = [];
  const count = Math.min(3, pool.length);
  // Weighted draw without replacement: elites tilt the roll toward higher rarities.
  while (cardChoices.length < count) {
    const weights = pool.map((id) => (CARD_RARITY_WEIGHT[CARD_CATALOG[id].rarity] ?? 20) + (elite ? (CARD_CATALOG[id].rarity === 'rare' ? 15 : CARD_CATALOG[id].rarity === 'uncommon' ? 5 : 0) : 0));
    let roll = rng.nextInt(1, weights.reduce((total, weight) => total + weight, 0));
    let index = 0;
    for (; index < pool.length; index += 1) { if (roll <= weights[index]) break; roll -= weights[index]; }
    cardChoices.push(pool.splice(Math.min(index, pool.length - 1), 1)[0]);
  }
  return { gold: profile === 'legacy' ? 0 : elite ? 40 : 20, cardChoices, claimed: false };
}
