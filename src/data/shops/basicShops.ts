import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import type { ShopItem, ShopState } from '../../game/run/shopTypes';

type BiomeShopItem = ShopItem & { biomeIds?: readonly BiomeId[] };

const SHOP_CATALOG: BiomeShopItem[] = [
  { id: 'ember-lance', kind: 'card', price: 48, biomeIds: ['cinder-fields'] },
  { id: 'ashen-ward', kind: 'card', price: 52, biomeIds: ['cinder-fields'] },
  { id: 'cinder-rain', kind: 'card', price: 92, biomeIds: ['cinder-fields'] },
  { id: 'moth-veil', kind: 'card', price: 62, biomeIds: ['bonebind-hamlet'] },
  { id: 'grave-lantern', kind: 'card', price: 58, biomeIds: ['bonebind-hamlet'] },
  { id: 'riven-choir', kind: 'card', price: 74, biomeIds: ['bonebind-hamlet'] },
  { id: 'night-cartography', kind: 'card', price: 108, biomeIds: ['obsidian-capital'] },
  { id: 'oathbreaker', kind: 'card', price: 96, biomeIds: ['obsidian-capital'] },
  { id: 'sunken-key', kind: 'card', price: 68, biomeIds: ['obsidian-capital'] },
  { id: 'ember-tonic', kind: 'potion', price: 38 },
  { id: 'coin-orbit', kind: 'relic', price: 105 },
  { id: 'remove-service', kind: 'remove', price: 60 },
  { id: 'upgrade-service', kind: 'upgrade', price: 75 },
];

export function shopCatalog(): BiomeShopItem[] { return SHOP_CATALOG.map((item) => ({ ...item, biomeIds: item.biomeIds ? [...item.biomeIds] : undefined })); }

export function createShop(seed: number, row: number, biomeId: BiomeId = 'cinder-fields'): ShopState {
  const rng = new SeededRng((seed + row * 211) >>> 0);
  const pool = [...eligibleForBiome(SHOP_CATALOG, biomeId)];
  const items: ShopItem[] = [];
  const count = Math.min(5, pool.length);
  while (items.length < count) items.push(pool.splice(rng.nextInt(0, pool.length - 1), 1)[0]);
  return { items };
}
