import { biomeById, type BiomeId } from '../../data/biomes/biomes';
import { CHARACTERS } from '../../data/characters/characters';
import { ENCOUNTERS } from '../../data/encounters/basicEncounters';
import { RELIC_DROPS } from '../../data/relics/basicRelics';
import { POTION_DROPS } from '../../data/potions/basicPotions';
import { rewardCardCatalog } from './contentSelection';
import { shopCatalog } from '../../data/shops/basicShops';
import { BIOME_EN } from '../../app/contentLocale';
import type { Locale } from '../../app/translations';

/**
 * Computes, for every piece of content, which map regions it can actually appear in, by scanning
 * the same deterministic tables the run uses (encounters / rewards / shops / drop pools). This is
 * what powers the "出处" line in the compendium so players learn where to farm each thing.
 */
type Category = 'characters' | 'cards' | 'enemies' | 'relics' | 'potions';

function names(ids: Set<BiomeId>, locale: Locale = 'zh-CN'): string[] {
  return [...new Set([...ids].map((id) => locale === 'en' ? (BIOME_EN[id]?.name ?? biomeById(id).name) : biomeById(id).name))];
}

const enemySources = new Map<string, Set<BiomeId>>();
const bossEnemies = new Set<string>();
const eliteEnemies = new Set<string>();
for (const encounter of ENCOUNTERS) {
  for (const enemyId of encounter.enemyIds) {
    if (encounter.biomeIds?.length) {
      const set = enemySources.get(enemyId) ?? new Set<BiomeId>();
      encounter.biomeIds.forEach((biome) => set.add(biome));
      enemySources.set(enemyId, set);
    }
    if (encounter.tier === 'boss') bossEnemies.add(enemyId);
    else if (encounter.tier === 'elite') eliteEnemies.add(enemyId);
  }
}

const cardSources = new Map<string, Set<BiomeId>>();
const cardShared = new Set<string>();
for (const entry of [...rewardCardCatalog(), ...shopCatalog().filter((item) => item.kind === 'card')]) {
  const biomeIds = (entry as { biomeIds?: readonly BiomeId[] }).biomeIds;
  if (biomeIds?.length) { const set = cardSources.get(entry.id) ?? new Set<BiomeId>(); biomeIds.forEach((b) => set.add(b)); cardSources.set(entry.id, set); }
  else cardShared.add(entry.id);
}
const starterCards = new Set<string>();
for (const character of Object.values(CHARACTERS)) character.startingDeck.forEach((id) => starterCards.add(id));

function itemSourceMap(drops: { id: string; biomeIds?: readonly BiomeId[] }[]) {
  const map = new Map<string, Set<BiomeId>>(); const shared = new Set<string>();
  for (const drop of drops) { if (drop.biomeIds?.length) { const set = map.get(drop.id) ?? new Set<BiomeId>(); drop.biomeIds.forEach((b) => set.add(b)); map.set(drop.id, set); } else shared.add(drop.id); }
  return { map, shared };
}
const relicSources = itemSourceMap(RELIC_DROPS);
const potionSources = itemSourceMap(POTION_DROPS);

export function sourceText(category: Category, id: string, locale: Locale = 'zh-CN'): string {
  if (category === 'characters') return locale === 'en' ? 'Character select' : '角色选择界面';
  if (category === 'enemies') {
    const regions = names(enemySources.get(id) ?? new Set(), locale);
    const kind = locale === 'en'
      ? (bossEnemies.has(id) ? 'Boss' : eliteEnemies.has(id) ? 'Elite' : 'Normal')
      : (bossEnemies.has(id) ? '首领' : eliteEnemies.has(id) ? '精英' : '普通');
    if (!regions.length) return id.startsWith('legacy-')
      ? (locale === 'en' ? 'Legacy Echo (legacy-character exclusive)' : '旧世残响（旧世角色专属）')
      : (locale === 'en' ? 'Summoned / special' : '召唤 / 特殊出现');
    return `${kind} · ${regions.join(locale === 'en' ? ', ' : '、')}`;
  }
  if (category === 'cards') {
    const parts: string[] = [];
    if (starterCards.has(id)) parts.push(locale === 'en' ? 'Starting deck' : '起始牌组');
    const regions = names(cardSources.get(id) ?? new Set(), locale);
    if (regions.length) parts.push(regions.join(locale === 'en' ? ', ' : '、'));
    if (cardShared.has(id) && !regions.length) parts.push(locale === 'en' ? 'Regional rewards / shops' : '各地奖励 / 商店');
    return parts.length ? parts.join(' · ') : (locale === 'en' ? 'Event / special' : '事件 / 特殊获取');
  }
  const src = category === 'relics' ? relicSources : potionSources;
  const regions = names(src.map.get(id) ?? new Set(), locale);
  if (regions.length) return regions.join(locale === 'en' ? ', ' : '、');
  return src.shared.has(id)
    ? (locale === 'en' ? 'Regional chests / shops' : '各地宝箱 / 商店')
    : (locale === 'en' ? 'Starting carry / event' : '起始携带 / 事件');
}
