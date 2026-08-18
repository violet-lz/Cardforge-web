export type ShopItemKind = 'card' | 'potion' | 'relic' | 'remove' | 'upgrade';
export interface ShopItem { id: string; kind: ShopItemKind; price: number; }
export interface ShopState { items: ShopItem[]; }
