export interface EventChoice { id: string; label: string; description: string; hpDelta: number; goldDelta: number; addCardId?: string; relicId?: string; potionId?: string; removeFirstCard?: boolean; upgradeFirstCard?: boolean; }
export interface EventState { id: string; title: string; description: string; choices: EventChoice[]; }
