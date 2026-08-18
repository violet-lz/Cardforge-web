import { CHARACTERS } from '../../data/characters/characters';
import { clampDifficulty } from '../ascension/ascensionTypes';
import { createMetaProgress } from '../ascension/metaEngine';
import { GAME_SCHEMA_VERSION, type CharacterDefinition, type GameState } from '../engine/types';
import { createCardInstance } from '../combat/deckEngine';
import { generateMap } from '../map/mapGenerator';
import { createReplay } from '../replay/replayEngine';
export function createRun(seed: number, now = Date.now(), character: CharacterDefinition = CHARACTERS.wanderer, ascensionLevel = 1, starterCardUpgradeIndexes: readonly number[] = []): GameState {
  const normalizedSeed = seed >>> 0; const difficulty = clampDifficulty(ascensionLevel); const upgraded = new Set(starterCardUpgradeIndexes); const deck = character.startingDeck.map((id, index) => ({ ...createCardInstance(id, `${character.id}-start-${index}`), upgraded: upgraded.has(index) }));
  return { schemaVersion: GAME_SCHEMA_VERSION, mode: 'map', seed: normalizedSeed, run: { id: `run-${normalizedSeed}`, seed: normalizedSeed, status: 'active', startedAt: now, currentAct: 1, currentNodeId: null, visitedNodeIds: [], ascensionLevel: difficulty }, player: { characterId: character.id, hp: character.maxHp, maxHp: character.maxHp, baseEnergy: character.baseEnergy ?? 3, gold: character.startingGold ?? 99, deck, relics: [...character.startingRelics], potions: [...character.startingPotions] }, map: generateMap(normalizedSeed, undefined, 1, difficulty), replay: createReplay(normalizedSeed), metaProgress: createMetaProgress() };
}
