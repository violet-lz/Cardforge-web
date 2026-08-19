import { useState } from 'react';
import { useLocale } from '../app/locale';
import { useContentLocale } from '../app/useContentLocale';
import { cardPresentation, resolveCard, resolvePotion, resolveRelic } from '../app/presentation';
import { DeckChoicePanel } from '../components/DeckChoicePanel';
import type { CardInstance } from '../game/combat/cardTypes';
import type { ShopItem, ShopState } from '../game/run/shopTypes';
function itemInfo(item: ShopItem, t: (key: string, values?: Record<string, string | number>) => string, cl: ReturnType<typeof import('../app/useContentLocale').useContentLocale>) {
 if (item.kind === 'card') { const card = resolveCard(item.id); return { name: card ? cl.cardName(card) : item.id, kind: t('shop.card'), detail: card ? `${cardPresentation(card).type} · ${cardPresentation(card).rarity} · ${t('shop.cost', { cost: card.cost })}` : t('shop.unknown'), description: card ? cl.cardDesc(card) : undefined }; }
 if (item.kind === 'potion') { const potion = resolvePotion(item.id); return { name: potion ? cl.potionName(item.id) : item.id, kind: t('shop.potion'), detail: t('shop.inCombat'), description: potion ? cl.potionDesc(item.id) : undefined }; }
 if (item.kind === 'remove') return { name: t('shop.remove'), kind: t('shop.service'), detail: t('shop.removeDetail'), description: t('shop.removeCopy') };
 if (item.kind === 'upgrade') return { name: t('shop.upgrade'), kind: t('shop.service'), detail: t('shop.upgradeDetail'), description: t('shop.upgradeCopy') };
 const relic = resolveRelic(item.id); return { name: relic ? cl.relicName(item.id) : item.id, kind: t('shop.relic'), detail: t('shop.relicDetail'), description: relic ? cl.relicDesc(item.id) : undefined };
}
export function ShopPage({ shop, deck, gold, onBuy, onLeave }: { shop: ShopState; deck: CardInstance[]; gold: number; onBuy: (id: string, price: number, cardUid?: string) => void; onLeave: () => void }) {
 const { t } = useLocale(); const cl = useContentLocale(); const [pendingItemId, setPendingItemId] = useState<string>(); const pendingItem = shop.items.find((item) => item.id === pendingItemId); const isDeckService = pendingItem?.kind === 'remove' || pendingItem?.kind === 'upgrade';
 return <main className="run-shell shop-shell"><section className="panel special-panel shop-panel"><p className="eyebrow">{t('shop.eyebrow', { gold })}</p><h1>{t('shop.title')}</h1><p>{t('shop.copy')}</p>{pendingItem && isDeckService ? <DeckChoicePanel deck={deck} operation={pendingItem.kind === 'remove' ? 'remove' : 'upgrade'} onChoose={(cardUid) => onBuy(pendingItem.id, pendingItem.price, cardUid)} onCancel={() => setPendingItemId(undefined)} /> : <div className="shop-list">{shop.items.length ? shop.items.map((item) => { const info = itemInfo(item, t, cl); const shortfall = Math.max(0, item.price - gold); const service = item.kind === 'remove' || item.kind === 'upgrade'; return <button className={`shop-item shop-${item.kind}`} key={`${item.kind}-${item.id}`} disabled={gold < item.price} onClick={() => { if (service) setPendingItemId(item.id); else onBuy(item.id, item.price); }}><span className="shop-card"><small className="shop-kind">{info.kind}</small><strong>{info.name}</strong><small>{info.detail}</small><em>{info.description}</em></span><span className="price-tag">{item.price} {t('event.gold')}{shortfall > 0 && <small>{t('shop.shortfall', { gold: shortfall })}</small>}</span></button>; }) : <p className="empty-state">{t('shop.empty')}</p>}</div>}<button className="text-button" onClick={onLeave}>{t('shop.leave')}</button></section></main>;
}
