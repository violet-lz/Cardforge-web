import { BASIC_CARDS, CARD_CATALOG } from '../../data/cards/basicCards';
import { LEGACY_CARDS } from '../../data/cards/legacyCards';
import { CHARACTERS } from '../../data/characters/characters';
import { BASIC_ENEMIES } from '../../data/enemies/basicEnemies';
import { BASIC_RELICS } from '../../data/relics/basicRelics';
import { BASIC_POTIONS } from '../../data/potions/basicPotions';

/** Browser storage key for the user-authored content overlay. */
export const CUSTOM_CONTENT_STORAGE_KEY = 'roguelike-card-game.custom-content.v1';

export type CustomContentCategory = 'cards' | 'characters' | 'enemies' | 'relics' | 'potions';
type JsonRecord = Record<string, unknown>;
type CustomEntry = JsonRecord & { id: string };

export interface CustomContentPackV1 {
  version: 1;
  cards: Record<string, CustomEntry>;
  characters: Record<string, CustomEntry>;
  enemies: Record<string, CustomEntry>;
  relics: Record<string, CustomEntry>;
  potions: Record<string, CustomEntry>;
}

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const ID_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const CATEGORIES: readonly CustomContentCategory[] = ['cards', 'characters', 'enemies', 'relics', 'potions'];
const CARD_TYPES = new Set(['attack', 'skill', 'power', 'status', 'curse']);
const CARD_RARITIES = new Set(['basic', 'common', 'uncommon', 'rare', 'special']);
const CARD_TARGETS = new Set(['self', 'single-enemy', 'all-enemies', 'none']);
const CARD_KEYWORDS = new Set(['exhaust', 'retain', 'ethereal', 'innate']);
const CARD_EFFECT_TYPES = new Set(['damage', 'block', 'draw', 'gain-energy', 'lose-energy', 'heal', 'self-damage', 'status', 'clear-statuses', 'damage-equal-block', 'damage-equal-statuses', 'regen-per-living-enemy']);
const INTENT_TYPES = new Set(['attack', 'defend', 'buff', 'status', 'pollute', 'summon', 'idle', 'energy']);
const RELIC_TRIGGERS = new Set(['on-combat-start', 'on-turn-start', 'on-combat-end']);
const RELIC_EFFECT_TYPES = new Set(['strength', 'block', 'gold', 'energy', 'heal', 'max-hp', 'damage']);
const POTION_EFFECT_TYPES = new Set(['strength', 'block', 'gold', 'energy', 'heal', 'max-hp', 'damage']);
const DAMAGE_EFFECT_TARGETS = new Set(['front-enemy', 'all-enemies']);

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;
const emptyPack = (): CustomContentPackV1 => ({ version: 1, cards: {}, characters: {}, enemies: {}, relics: {}, potions: {} });

/* Definitions are JSON-shaped data, so a deep JSON snapshot is deliberate and safe here. */
const BASELINE = {
  cards: clone(BASIC_CARDS),
  legacyCards: clone(LEGACY_CARDS),
  cardCatalog: clone(CARD_CATALOG),
  characters: clone(CHARACTERS),
  enemies: clone(BASIC_ENEMIES),
  relics: clone(BASIC_RELICS),
  potions: clone(BASIC_POTIONS),
};

let currentPack: CustomContentPackV1 = emptyPack();

function fail(path: string, message: string): never {
  throw new Error(`Invalid custom content at ${path}: ${message}`);
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requireRecord(value: unknown, path: string): JsonRecord {
  if (!isRecord(value)) fail(path, 'must be an object');
  return value;
}

function requireString(value: unknown, path: string): string {
  if (typeof value !== 'string' || value.trim() === '') fail(path, 'must be a nonempty string');
  return value;
}

function requireId(value: unknown, path: string): string {
  const id = requireString(value, path);
  if (!ID_PATTERN.test(id)) fail(path, 'must match /^[a-z0-9][a-z0-9-]*$/');
  return id;
}

function requireFiniteInteger(value: unknown, path: string, minimum = 0): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value) || value < minimum) {
    fail(path, `must be a finite integer${minimum > 0 ? ` >= ${minimum}` : ' >= 0'}`);
  }
  return value;
}

function requireSignedInteger(value: unknown, path: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value)) fail(path, 'must be a finite integer');
  return value;
}

function requireFiniteNumber(value: unknown, path: string, minimum?: number, maximum?: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || (minimum !== undefined && value < minimum) || (maximum !== undefined && value > maximum)) {
    fail(path, 'must be a finite number in the allowed range');
  }
  return value;
}

function requireEnum(value: unknown, allowed: Set<string>, path: string): string {
  const result = requireString(value, path);
  if (!allowed.has(result)) fail(path, `has unknown value "${result}"`);
  return result;
}

function requireStringArray(value: unknown, path: string, idValues = false, nonempty = false): string[] {
  if (!Array.isArray(value) || (nonempty && value.length === 0)) fail(path, `must be ${nonempty ? 'a nonempty' : 'an'} array`);
  return value.map((item, index) => idValues ? requireId(item, `${path}[${index}]`) : requireString(item, `${path}[${index}]`));
}

function validateCondition(value: unknown, path: string): void {
  const condition = requireRecord(value, path);
  const type = requireEnum(condition.type, new Set(['only-card-type', 'hp-below', 'hp-above']), `${path}.type`);
  if (type === 'only-card-type') requireEnum(condition.cardType, CARD_TYPES, `${path}.cardType`);
  else requireFiniteNumber(condition.percentage, `${path}.percentage`, 0, 100);
}

function validateConditions(value: unknown, path: string): void {
  if (!Array.isArray(value)) fail(path, 'must be an array');
  value.forEach((condition, index) => validateCondition(condition, `${path}[${index}]`));
}

function validateEffect(value: unknown, path: string): void {
  const effect = requireRecord(value, path);
  const type = requireEnum(effect.type, CARD_EFFECT_TYPES, `${path}.type`);
  if (effect.condition !== undefined) validateCondition(effect.condition, `${path}.condition`);

  switch (type) {
    case 'damage':
      requireFiniteInteger(effect.amount, `${path}.amount`);
      if (effect.hits !== undefined) requireFiniteInteger(effect.hits, `${path}.hits`, 1);
      break;
    case 'block': case 'draw': case 'gain-energy': case 'lose-energy': case 'heal': case 'self-damage': case 'regen-per-living-enemy':
      requireFiniteInteger(effect.amount, `${path}.amount`);
      break;
    case 'status':
      requireId(effect.statusId, `${path}.statusId`);
      requireFiniteInteger(effect.stacks, `${path}.stacks`);
      if (effect.duration !== undefined) requireFiniteInteger(effect.duration, `${path}.duration`);
      if (effect.target !== undefined) requireEnum(effect.target, new Set(['self', 'target', 'all-enemies']), `${path}.target`);
      break;
    case 'clear-statuses':
      requireStringArray(effect.statusIds, `${path}.statusIds`, true, true);
      requireEnum(effect.target, new Set(['self', 'target']), `${path}.target`);
      break;
    case 'damage-equal-statuses':
      requireStringArray(effect.statusIds, `${path}.statusIds`, true, true);
      if (effect.clearAfter !== undefined && typeof effect.clearAfter !== 'boolean') fail(`${path}.clearAfter`, 'must be a boolean');
      break;
    case 'damage-equal-block':
      break;
  }
}

function validateEffects(value: unknown, path: string): void {
  if (!Array.isArray(value)) fail(path, 'must be an array');
  value.forEach((effect, index) => validateEffect(effect, `${path}[${index}]`));
}

function validateKeywords(value: unknown, path: string): void {
  if (!Array.isArray(value)) fail(path, 'must be an array');
  value.forEach((keyword, index) => requireEnum(keyword, CARD_KEYWORDS, `${path}[${index}]`));
}

function validateCardUpgrade(value: unknown, path: string): void {
  const upgrade = requireRecord(value, path);
  if (upgrade.name !== undefined) requireString(upgrade.name, `${path}.name`);
  if (upgrade.cost !== undefined) requireFiniteInteger(upgrade.cost, `${path}.cost`);
  if (upgrade.target !== undefined) requireEnum(upgrade.target, CARD_TARGETS, `${path}.target`);
  if (upgrade.description !== undefined) requireString(upgrade.description, `${path}.description`);
  if (upgrade.effects !== undefined) validateEffects(upgrade.effects, `${path}.effects`);
  if (upgrade.keywords !== undefined) validateKeywords(upgrade.keywords, `${path}.keywords`);
  if (upgrade.conditions !== undefined) validateConditions(upgrade.conditions, `${path}.conditions`);
}

function validateCard(value: unknown, path: string): void {
  const card = requireRecord(value, path);
  requireId(card.id, `${path}.id`);
  requireString(card.name, `${path}.name`);
  requireEnum(card.type, CARD_TYPES, `${path}.type`);
  requireEnum(card.rarity, CARD_RARITIES, `${path}.rarity`);
  requireFiniteInteger(card.cost, `${path}.cost`);
  requireEnum(card.target, CARD_TARGETS, `${path}.target`);
  requireString(card.description, `${path}.description`);
  validateEffects(card.effects, `${path}.effects`);
  if (card.keywords !== undefined) validateKeywords(card.keywords, `${path}.keywords`);
  if (card.onDraw !== undefined) validateEffects(card.onDraw, `${path}.onDraw`);
  if (card.conditions !== undefined) validateConditions(card.conditions, `${path}.conditions`);
  if (card.upgrade !== undefined) validateCardUpgrade(card.upgrade, `${path}.upgrade`);
}

function validateIntentAction(value: unknown, path: string): void {
  const action = requireRecord(value, path);
  const type = requireEnum(action.type, new Set(['attack', 'defend', 'status', 'energy']), `${path}.type`);
  if (type === 'attack') {
    const hasAmount = action.amount !== undefined;
    const hasRange = action.amountRange !== undefined;
    if (!hasAmount && !hasRange) fail(path, 'attack action requires amount or amountRange');
    if (hasAmount) requireFiniteInteger(action.amount, `${path}.amount`);
    if (hasRange) validateRange(action.amountRange, `${path}.amountRange`);
    if (action.hits !== undefined) requireFiniteInteger(action.hits, `${path}.hits`, 1);
  } else if (type === 'status') {
    requireId(action.statusId, `${path}.statusId`);
    requireFiniteInteger(action.amount, `${path}.amount`);
    if (action.duration !== undefined) requireFiniteInteger(action.duration, `${path}.duration`);
  } else if (type === 'energy') {
    requireSignedInteger(action.amount, `${path}.amount`);
  } else {
    requireFiniteInteger(action.amount, `${path}.amount`);
  }
}

function validateRange(value: unknown, path: string): void {
  if (!Array.isArray(value) || value.length !== 2) fail(path, 'must be a two-item numeric range');
  const lower = requireFiniteInteger(value[0], `${path}[0]`);
  const upper = requireFiniteInteger(value[1], `${path}[1]`);
  if (lower > upper) fail(path, 'must have a lower bound no greater than its upper bound');
}

function validateIntent(value: unknown, path: string): void {
  const intent = requireRecord(value, path);
  const type = requireEnum(intent.type, INTENT_TYPES, `${path}.type`);
  requireString(intent.label, `${path}.label`);
  if (intent.amount !== undefined) (type === 'energy' ? requireSignedInteger(intent.amount, `${path}.amount`) : requireFiniteInteger(intent.amount, `${path}.amount`));
  if (intent.amountRange !== undefined) validateRange(intent.amountRange, `${path}.amountRange`);
  if (intent.hits !== undefined) requireFiniteInteger(intent.hits, `${path}.hits`, 1);
  if (intent.duration !== undefined) requireFiniteInteger(intent.duration, `${path}.duration`);

  if (type === 'attack' && intent.amount === undefined && intent.amountRange === undefined && intent.actions === undefined) {
    fail(path, 'attack intent requires amount, amountRange, or actions');
  }
  if ((type === 'defend' || type === 'buff' || type === 'energy') && intent.amount === undefined && intent.actions === undefined) {
    fail(path, `${type} intent requires amount or actions`);
  }
  if (type === 'status') {
    requireId(intent.statusId, `${path}.statusId`);
    requireFiniteInteger(intent.amount, `${path}.amount`);
  }
  if (type === 'pollute') requireStringArray(intent.cardIds, `${path}.cardIds`, true, true);
  if (type === 'summon') requireStringArray(intent.summonIds, `${path}.summonIds`, true, true);
  if (intent.actions !== undefined) {
    if (!Array.isArray(intent.actions) || intent.actions.length === 0) fail(`${path}.actions`, 'must be a nonempty array');
    intent.actions.forEach((action, index) => validateIntentAction(action, `${path}.actions[${index}]`));
  }
}

function validateIntents(value: unknown, path: string): void {
  if (!Array.isArray(value) || value.length === 0) fail(path, 'must be a nonempty array');
  value.forEach((intent, index) => validateIntent(intent, `${path}[${index}]`));
}

function validateEnemy(value: unknown, path: string): void {
  const enemy = requireRecord(value, path);
  requireId(enemy.id, `${path}.id`);
  requireString(enemy.name, `${path}.name`);
  requireFiniteInteger(enemy.maxHp, `${path}.maxHp`, 1);
  if (enemy.maxHpRange !== undefined) validateRange(enemy.maxHpRange, `${path}.maxHpRange`);
  if (enemy.initialBlock !== undefined) requireFiniteInteger(enemy.initialBlock, `${path}.initialBlock`);
  const behavior = requireRecord(enemy.behavior, `${path}.behavior`);
  requireEnum(behavior.type, new Set(['cycle']), `${path}.behavior.type`);
  validateIntents(behavior.intents, `${path}.behavior.intents`);
  if (behavior.phases !== undefined) {
    if (!Array.isArray(behavior.phases) || behavior.phases.length === 0) fail(`${path}.behavior.phases`, 'must be a nonempty array');
    behavior.phases.forEach((phaseValue, index) => {
      const phasePath = `${path}.behavior.phases[${index}]`;
      const phase = requireRecord(phaseValue, phasePath);
      requireId(phase.id, `${phasePath}.id`);
      requireString(phase.label, `${phasePath}.label`);
      requireFiniteNumber(phase.startsAtHpRatio, `${phasePath}.startsAtHpRatio`, 0, 1);
      validateIntents(phase.intents, `${phasePath}.intents`);
    });
  }
}

function validateItemEffect(value: unknown, path: string, allowed: Set<string>): void {
  const effect = requireRecord(value, path);
  const type = requireEnum(effect.type, allowed, `${path}.type`);
  if (type === 'energy') {
    requireSignedInteger(effect.amount, `${path}.amount`);
    return;
  }
  requireFiniteInteger(effect.amount, `${path}.amount`);
  if (type === 'damage') {
    requireEnum(effect.target, DAMAGE_EFFECT_TARGETS, `${path}.target`);
    if (effect.hits !== undefined) requireFiniteInteger(effect.hits, `${path}.hits`, 1);
  }
}

function validateRelic(value: unknown, path: string): void {
  const relic = requireRecord(value, path);
  requireId(relic.id, `${path}.id`);
  requireString(relic.name, `${path}.name`);
  requireString(relic.description, `${path}.description`);
  requireEnum(relic.trigger, RELIC_TRIGGERS, `${path}.trigger`);
  validateItemEffect(relic.effect, `${path}.effect`, RELIC_EFFECT_TYPES);
}

function validatePotion(value: unknown, path: string): void {
  const potion = requireRecord(value, path);
  requireId(potion.id, `${path}.id`);
  requireString(potion.name, `${path}.name`);
  requireString(potion.description, `${path}.description`);
  validateItemEffect(potion.effect, `${path}.effect`, POTION_EFFECT_TYPES);
}

function validateCharacterShape(value: unknown, path: string): void {
  const character = requireRecord(value, path);
  requireId(character.id, `${path}.id`);
  requireString(character.name, `${path}.name`);
  requireFiniteInteger(character.maxHp, `${path}.maxHp`, 1);
  if (character.baseEnergy !== undefined) requireFiniteInteger(character.baseEnergy, `${path}.baseEnergy`);
  if (character.description !== undefined) requireString(character.description, `${path}.description`);
  if (character.signature !== undefined) requireString(character.signature, `${path}.signature`);
  if (character.startingGold !== undefined) requireFiniteInteger(character.startingGold, `${path}.startingGold`);
  requireStringArray(character.startingDeck, `${path}.startingDeck`, true);
  requireStringArray(character.startingRelics, `${path}.startingRelics`, true);
  requireStringArray(character.startingPotions, `${path}.startingPotions`, true);
}

function validateEntry(category: CustomContentCategory, value: unknown, path: string): void {
  switch (category) {
    case 'cards': validateCard(value, path); break;
    case 'characters': validateCharacterShape(value, path); break;
    case 'enemies': validateEnemy(value, path); break;
    case 'relics': validateRelic(value, path); break;
    case 'potions': validatePotion(value, path); break;
  }
}

function validatePack(value: unknown): CustomContentPackV1 {
  const source = requireRecord(value, 'pack');
  const keys = Object.keys(source);
  const allowed = new Set(['version', ...CATEGORIES]);
  keys.forEach((key) => { if (!allowed.has(key)) fail(`pack.${key}`, 'is not a supported field'); });
  if (source.version !== 1) fail('pack.version', 'must be 1');

  const pack = emptyPack();
  for (const category of CATEGORIES) {
    const entries = requireRecord(source[category], `pack.${category}`);
    for (const [key, entry] of Object.entries(entries)) {
      requireId(key, `pack.${category}.${key}`);
      const object = requireRecord(entry, `pack.${category}.${key}`);
      const id = requireId(object.id, `pack.${category}.${key}.id`);
      if (id !== key) fail(`pack.${category}.${key}.id`, 'must match its entry key');
      validateEntry(category, object, `pack.${category}.${key}`);
      pack[category][key] = clone(object) as CustomEntry;
    }
  }
  validateCharacterReferences(pack);
  return pack;
}

function validateCharacterReferences(pack: CustomContentPackV1): void {
  const cards = { ...BASELINE.cards, ...BASELINE.legacyCards, ...pack.cards };
  const relics = { ...BASELINE.relics, ...pack.relics };
  const potions = { ...BASELINE.potions, ...pack.potions };
  const characters = { ...BASELINE.characters, ...pack.characters };
  for (const [id, characterValue] of Object.entries(characters)) {
    const character = characterValue as JsonRecord;
    const checkReferences = (field: 'startingDeck' | 'startingRelics' | 'startingPotions', registry: JsonRecord): void => {
      const values = character[field];
      if (!Array.isArray(values)) return;
      values.forEach((entry, index) => {
        const reference = requireId(entry, `characters.${id}.${field}[${index}]`);
        if (!(reference in registry)) fail(`characters.${id}.${field}[${index}]`, `references unknown ${field === 'startingDeck' ? 'card' : field === 'startingRelics' ? 'relic' : 'potion'} "${reference}"`);
      });
    };
    checkReferences('startingDeck', cards);
    checkReferences('startingRelics', relics);
    checkReferences('startingPotions', potions);
  }
}

function replaceRecord(target: object, source: object): void {
  const writable = target as Record<string, unknown>;
  Object.keys(writable).forEach((key) => delete writable[key]);
  Object.assign(writable, clone(source) as Record<string, unknown>);
}

function resetRegistriesToBaseline(): void {
  replaceRecord(BASIC_CARDS, BASELINE.cards);
  replaceRecord(LEGACY_CARDS, BASELINE.legacyCards);
  replaceRecord(CARD_CATALOG, BASELINE.cardCatalog);
  replaceRecord(CHARACTERS, BASELINE.characters);
  replaceRecord(BASIC_ENEMIES, BASELINE.enemies);
  replaceRecord(BASIC_RELICS, BASELINE.relics);
  replaceRecord(BASIC_POTIONS, BASELINE.potions);
}

function applyPackToRegistries(pack: CustomContentPackV1): void {
  resetRegistriesToBaseline();
  const basicCards = BASIC_CARDS as unknown as Record<string, unknown>;
  const legacyCards = LEGACY_CARDS as unknown as Record<string, unknown>;
  for (const [id, entry] of Object.entries(pack.cards)) {
    (Object.prototype.hasOwnProperty.call(BASELINE.legacyCards, id) ? legacyCards : basicCards)[id] = clone(entry);
  }
  const catalog = CARD_CATALOG as unknown as Record<string, unknown>;
  Object.keys(catalog).forEach((key) => delete catalog[key]);
  Object.assign(catalog, basicCards, legacyCards);
  Object.assign(CHARACTERS as unknown as Record<string, unknown>, clone(pack.characters));
  Object.assign(BASIC_ENEMIES as unknown as Record<string, unknown>, clone(pack.enemies));
  Object.assign(BASIC_RELICS as unknown as Record<string, unknown>, clone(pack.relics));
  Object.assign(BASIC_POTIONS as unknown as Record<string, unknown>, clone(pack.potions));
}

/** Restores every imported registry to its immutable module-load snapshot. */
export function resetCustomContent(): void {
  currentPack = emptyPack();
  resetRegistriesToBaseline();
}

function resolveStorage(storage?: StorageLike): StorageLike | undefined {
  if (storage !== undefined) return storage;
  return typeof localStorage === 'undefined' ? undefined : localStorage;
}

function writePack(pack: CustomContentPackV1, storage?: StorageLike): void {
  const target = resolveStorage(storage);
  if (!target) return;
  try {
    target.setItem(CUSTOM_CONTENT_STORAGE_KEY, JSON.stringify(pack));
  } catch (error) {
    throw new Error(`Unable to save custom content: ${error instanceof Error ? error.message : 'storage failed'}`);
  }
}

function commit(value: unknown, storage?: StorageLike, persist = true): CustomContentPackV1 {
  const pack = validatePack(value);
  if (persist) writePack(pack, storage);
  currentPack = clone(pack);
  applyPackToRegistries(currentPack);
  return getCustomContentPack();
}

/** Returns a defensive copy of the active user-authored overlay, never registry data. */
export function getCustomContentPack(): CustomContentPackV1 {
  return clone(currentPack);
}

/** Validates, atomically applies, and (when available) persists an entire overlay. */
export function replaceCustomContent(pack: CustomContentPackV1, storage?: StorageLike): CustomContentPackV1 {
  return commit(pack, storage);
}

/** Loads and applies persisted content. A missing storage value restores the baseline. */
export function loadCustomContent(storage?: StorageLike): CustomContentPackV1 {
  const target = resolveStorage(storage);
  if (!target) {
    resetCustomContent();
    return getCustomContentPack();
  }
  let text: string | null;
  try {
    text = target.getItem(CUSTOM_CONTENT_STORAGE_KEY);
  } catch (error) {
    throw new Error(`Unable to load custom content: ${error instanceof Error ? error.message : 'storage failed'}`);
  }
  if (text === null) {
    resetCustomContent();
    return getCustomContentPack();
  }
  return importCustomContent(text, undefined, false);
}

/** Persists the active overlay without changing any in-memory registry. */
export function saveCustomContent(storage?: StorageLike): void {
  writePack(currentPack, storage);
}

/** Validates and upserts a category entry without accepting partial registry mutation. */
export function updateCustomContentEntry(category: CustomContentCategory, value: unknown, storage?: StorageLike): CustomContentPackV1 {
  if (!CATEGORIES.includes(category)) fail('category', 'is not supported');
  const entry = requireRecord(value, `${category} entry`);
  const id = requireId(entry.id, `${category} entry.id`);
  const next = getCustomContentPack();
  next[category][id] = clone(entry) as CustomEntry;
  return commit(next, storage);
}

/** Removes one overlay entry; the static definition, if any, becomes visible again. */
export function removeCustomContentEntry(category: CustomContentCategory, id: string, storage?: StorageLike): CustomContentPackV1 {
  if (!CATEGORIES.includes(category)) fail('category', 'is not supported');
  requireId(id, 'id');
  const next = getCustomContentPack();
  delete next[category][id];
  return commit(next, storage);
}

export function exportCustomContentJson(): string {
  return JSON.stringify(getCustomContentPack(), null, 2);
}

export function exportCustomContentTypeScript(): string {
  return `export const contentPack = ${exportCustomContentJson()} as const;`;
}

function parseImport(text: string): unknown {
  if (typeof text !== 'string') throw new Error('Custom content import must be text.');
  try {
    return JSON.parse(text);
  } catch {
    const match = /^\s*export const contentPack = ([\s\S]+) as const;\s*$/.exec(text);
    if (!match) throw new Error('Custom content import must be pure JSON or `export const contentPack = <JSON> as const;`.');
    try {
      return JSON.parse(match[1]);
    } catch {
      throw new Error('The TypeScript-like content wrapper must contain valid JSON.');
    }
  }
}

/** Imports only JSON or the documented non-executable TypeScript-like JSON wrapper. */
export function importCustomContent(text: string, storage?: StorageLike, persist = true): CustomContentPackV1 {
  return commit(parseImport(text), storage, persist);
}

/** Returns one ready-to-validate entry for the requested category. */
export function createCustomContentTemplate(category: CustomContentCategory): CustomEntry {
  switch (category) {
    case 'cards': return { id: 'custom-card', name: '自定义卡牌', type: 'attack', rarity: 'common', cost: 1, target: 'single-enemy', description: '造成 6 点伤害。', effects: [{ type: 'damage', amount: 6 }] };
    case 'characters': return { id: 'custom-character', name: '自定义角色', description: '自定义起始配置。', maxHp: 60, baseEnergy: 3, startingDeck: ['strike', 'defend'], startingRelics: ['ember-seal'], startingPotions: ['ember-tonic'] };
    case 'enemies': return { id: 'custom-enemy', name: '自定义敌人', maxHp: 30, behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 6, label: '攻击 6' }] } };
    case 'relics': return { id: 'custom-relic', name: '自定义遗物', description: '战斗开始时获得 8 点格挡。', trigger: 'on-combat-start', effect: { type: 'block', amount: 8 } };
    case 'potions': return { id: 'custom-potion', name: '自定义药水', description: '对最前方敌人造成 12 点伤害。', effect: { type: 'damage', amount: 12, target: 'front-enemy' } };
  }
}
