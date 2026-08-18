import type { CardInstance } from '../combat/cardTypes';
import type { CombatState } from '../combat/combatTypes';
import type { MapState } from '../map/mapTypes';
import type { RewardState } from '../run/rewardTypes';
import type { EventState } from '../run/eventTypes';
import type { ShopState } from '../run/shopTypes';
import type { ReplayState } from '../replay/replayTypes';
export type GameMode = 'home' | 'compendium' | 'custom-content' | 'character-select' | 'map' | 'combat' | 'reward' | 'event' | 'shop' | 'special' | 'run-summary';
export type RunStatus = 'active' | 'victory' | 'defeat';
export interface RunState { id: string; seed: number; status: RunStatus; startedAt: number; currentAct: number; currentNodeId: string | null; visitedNodeIds: string[]; ascensionLevel: number; }
export interface CharacterDefinition { id: string; name: string; maxHp: number; baseEnergy?: number; description?: string; signature?: string; startingGold?: number; startingDeck: string[]; startingRelics: string[]; startingPotions: string[]; }
export interface PlayerState { characterId: string; hp: number; maxHp: number; baseEnergy?: number; gold: number; deck: CardInstance[]; relics: string[]; potions: string[]; }
export interface CharacterUpgrades { hpUpgrades: number; starterCardUpgradeIndexes: number[]; energyUpgrades: number; goldUpgrades: number; }
export interface MetaProgressState { schemaVersion: number; ascensionLevel: number; maxUnlockedAscensionLevel: number; unlockedCharacterIds: string[]; unlockedCardIds: string[]; unlockedRelicIds: string[]; achievements: string[]; discoveredCharacterIds: string[]; discoveredCardIds: string[]; discoveredEnemyIds: string[]; discoveredRelicIds: string[]; discoveredPotionIds: string[]; upgradePoints: number; characterUpgrades: Record<string, CharacterUpgrades>; }
export interface SpecialChoice { id: string; label: string; description: string; kind: 'heal' | 'upgrade' | 'gold' | 'relic' | 'skip'; amount?: number; relicId?: string; }
export interface SpecialNodeState { nodeType: 'rest' | 'treasure' | 'intermission'; title: string; description: string; choices: SpecialChoice[]; }
export interface GameState { schemaVersion: number; mode: GameMode; seed: number | null; run: RunState | null; player: PlayerState | null; map?: MapState; combat?: CombatState; reward?: RewardState; event?: EventState; shop?: ShopState; special?: SpecialNodeState; replay?: ReplayState; metaProgress: MetaProgressState; }
export const GAME_SCHEMA_VERSION = 7;
