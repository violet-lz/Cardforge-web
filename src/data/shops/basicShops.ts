import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import type { ShopItem, ShopState } from '../../game/run/shopTypes';

type BiomeShopItem = ShopItem & { biomeIds?: readonly BiomeId[] };

const card = (id: string, price: number, biome?: BiomeId): BiomeShopItem => ({ id, kind: 'card', price, ...(biome ? { biomeIds: [biome] } : {}) });

/**
 * One trading engine, per-region stock. Each region stocks cards that match its world, while
 * the shared potion / relic / service rows keep every shop functional. Region visuals are
 * themed separately through the `--region-*` CSS variables.
 */
const SHOP_CATALOG: BiomeShopItem[] = [
  // Legacy content-biome stock (kept for legacy profiles and old saves).
  card('ember-lance', 48, 'cinder-fields'), card('ashen-ward', 52, 'cinder-fields'), card('cinder-rain', 92, 'cinder-fields'),
  card('moth-veil', 62, 'bonebind-hamlet'), card('grave-lantern', 58, 'bonebind-hamlet'), card('riven-choir', 74, 'bonebind-hamlet'),
  card('night-cartography', 108, 'obsidian-capital'), card('oathbreaker', 96, 'obsidian-capital'), card('sunken-key', 68, 'obsidian-capital'),
  // 第一幕 —— 生存与基础构筑
  card('coal-hook', 46, 'ruined-village'), card('pilgrim-guard', 50, 'ruined-village'), card('make-camp', 58, 'ruined-village'),
  card('votive-ash', 62, 'verdant-forest'), card('grave-lantern', 56, 'verdant-forest'), card('cross-the-mountains', 66, 'verdant-forest'),
  card('riven-choir', 70, 'moss-marsh'), card('antitoxin', 46, 'moss-marsh'), card('purging-flame', 58, 'moss-marsh'),
  card('antitoxin', 46, 'fetid-sewers'), card('glass-rebuke', 42, 'fetid-sewers'), card('travel-supplies', 46, 'fetid-sewers'),
  card('brass-harrier', 84, 'radiant-capital'), card('first-watch', 66, 'radiant-capital'), card('ring-the-bell', 52, 'radiant-capital'),
  // 第二幕 —— 强度与专精
  card('vaulting-arc', 72, 'capital-outskirts'), card('battle-line', 58, 'capital-outskirts'), card('shield-strike', 54, 'capital-outskirts'),
  card('sable-liturgy', 90, 'bloodlands'), card('ashen-offering', 44, 'bloodlands'), card('burning-litany', 62, 'bloodlands'),
  card('rune-sieve', 78, 'arcane-march'), card('archive', 60, 'arcane-march'), card('premonition', 104, 'arcane-march'),
  card('twin-echo', 74, 'techno-city'), card('rewrite', 58, 'techno-city'), card('old-shuffle', 40, 'techno-city'),
  card('hollow-compass', 56, 'sky-island'), card('traveler-instinct', 96, 'sky-island'), card('moth-veil', 60, 'sky-island'),
  card('quiet-flame', 108, 'noble-castle'), card('counterstroke', 62, 'noble-castle'), card('black-candle', 66, 'noble-castle'),
  // 荒漠 —— 流动商队
  card('iron-prayer', 58, 'desert'), card('lunar-tithe', 48, 'desert'), card('cross-the-mountains', 68, 'desert'),
  // 第三幕 —— 终局构筑
  card('ashen-mirror', 96, 'castle-catacombs'), card('severed-thread', 50, 'castle-catacombs'), card('hunting-hour', 64, 'castle-catacombs'),
  card('pale-accord', 104, 'underworld'), card('funeral-bell', 68, 'underworld'), card('evening-bell', 98, 'underworld'),
  card('sunken-key', 62, 'ghost-ferry'), card('echoing-step', 50, 'ghost-ferry'), card('the-final-bell', 112, 'ghost-ferry'),
  card('thunder-psalm', 116, 'ocean-depths'), card('star-sunder', 122, 'ocean-depths'), card('forbidden-excerpt', 108, 'ocean-depths'),
  card('ancient-war-formation', 118, 'atlantis'), card('shard-contract', 106, 'atlantis'), card('ash-revival', 120, 'atlantis'),
  card('final-cinder', 126, 'meteor-ruins'), card('old-world-ending', 132, 'meteor-ruins'), card('star-sunder', 124, 'meteor-ruins'),
  // 新增地域库存
  card('ring-the-bell', 50, 'bell-tower'), card('the-final-bell', 110, 'bell-tower'), card('bell-mark', 44, 'bell-tower'),
  card('twin-echo', 74, 'neon-court'), card('rewrite', 58, 'neon-court'), card('shard-contract', 106, 'neon-court'),
  card('sable-liturgy', 92, 'demon-nest'), card('blood-vow', 40, 'demon-nest'), card('final-cinder', 128, 'demon-nest'),
  card('star-sunder', 126, 'world-rampart'), card('thunder-psalm', 120, 'world-rampart'), card('ancient-war-formation', 120, 'world-rampart'),
  // Shared rows: always available in every region.
  { id: 'ember-tonic', kind: 'potion', price: 38 },
  { id: 'coin-orbit', kind: 'relic', price: 105 },
  { id: 'ember-seal', kind: 'relic', price: 98 },
];

const SERVICES: ShopItem[] = [
  { id: 'remove-service', kind: 'remove', price: 60 },
  { id: 'upgrade-service', kind: 'upgrade', price: 75 },
];

export function shopCatalog(): BiomeShopItem[] { return [...SHOP_CATALOG.map((item) => ({ ...item, biomeIds: item.biomeIds ? [...item.biomeIds] : undefined })), ...SERVICES.map((item) => ({ ...item }))]; }

/** A shop always offers at least one deck service, then fills the remaining slots from region stock. */
export function createShop(seed: number, row: number, biomeId: BiomeId = 'cinder-fields'): ShopState {
  const rng = new SeededRng((seed + row * 211) >>> 0);
  const service = SERVICES[rng.nextInt(0, SERVICES.length - 1)];
  const other = SERVICES.find((item) => item.id !== service.id)!;
  const pool = [...eligibleForBiome(SHOP_CATALOG, biomeId)];
  const items: ShopItem[] = [service];
  const count = Math.min(4, pool.length);
  while (items.length < count + 1) {
    const picked = pool.splice(rng.nextInt(0, pool.length - 1), 1)[0];
    if (!items.some((item) => item.id === picked.id && item.kind === picked.kind)) items.push(picked);
    if (!pool.length) break;
  }
  if (items.length < 5) items.push(other);
  return { items };
}
