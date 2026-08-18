import { useState } from 'react';
import { cardPresentation, resolveCard, resolvePotion, resolveRelic } from '../app/presentation';
import { DeckChoicePanel } from '../components/DeckChoicePanel';
import type { CardInstance } from '../game/combat/cardTypes';
import type { ShopItem, ShopState } from '../game/run/shopTypes';
function itemInfo(item: ShopItem) {
 if (item.kind === 'card') { const card = resolveCard(item.id); return { name: card?.name ?? item.id, kind: '卡牌', detail: card ? `${cardPresentation(card).type} · ${cardPresentation(card).rarity} · 费用 ${card.cost}` : '未知卡牌', description: card?.description }; }
 if (item.kind === 'potion') { const potion = resolvePotion(item.id); return { name: potion?.name ?? item.id, kind: '药水', detail: '战斗中可使用', description: potion?.description }; }
 if (item.kind === 'remove') return { name: '剥离旧页', kind: '服务', detail: '选择移除牌组中的一张卡牌', description: '用于压缩构筑。' };
 if (item.kind === 'upgrade') return { name: '重铸符文', kind: '服务', detail: '选择升级一张未升级卡牌', description: '数值提升会永久保留。' };
 const relic = resolveRelic(item.id); return { name: relic?.name ?? item.id, kind: '遗物', detail: '持有后持续生效', description: relic?.description };
}
export function ShopPage({ shop, deck, gold, onBuy, onLeave }: { shop: ShopState; deck: CardInstance[]; gold: number; onBuy: (id: string, price: number, cardUid?: string) => void; onLeave: () => void }) {
 const [pendingItemId, setPendingItemId] = useState<string>(); const pendingItem = shop.items.find((item) => item.id === pendingItemId); const isDeckService = pendingItem?.kind === 'remove' || pendingItem?.kind === 'upgrade';
 return <main className="run-shell"><section className="panel special-panel shop-panel"><p className="eyebrow">星尘行商 · 持有 {gold} 金币</p><h1>灰市摊位</h1><p>行商只在余烬未熄时驻足。卡牌、药水和遗物每件仅能购置一次。</p>{pendingItem && isDeckService ? <DeckChoicePanel deck={deck} operation={pendingItem.kind === 'remove' ? 'remove' : 'upgrade'} onChoose={(cardUid) => onBuy(pendingItem.id, pendingItem.price, cardUid)} onCancel={() => setPendingItemId(undefined)} /> : <div className="shop-list">{shop.items.length ? shop.items.map((item) => { const info = itemInfo(item); const shortfall = Math.max(0, item.price - gold); const service = item.kind === 'remove' || item.kind === 'upgrade'; return <button className={`shop-item shop-${item.kind}`} key={`${item.kind}-${item.id}`} disabled={gold < item.price} onClick={() => { if (service) setPendingItemId(item.id); else onBuy(item.id, item.price); }}><span className="shop-card"><small className="shop-kind">{info.kind}</small><strong>{info.name}</strong><small>{info.detail}</small><em>{info.description}</em></span><span className="price-tag">{item.price} 金币{shortfall > 0 && <small>还差 {shortfall}</small>}</span></button>; }) : <p className="empty-state">货架已经空了。你可以带着新货物继续远征。</p>}</div>}<button className="text-button" onClick={onLeave}>离开商店</button></section></main>;
}
