import type { Locale } from './translations';
import type { BiomeId } from '../data/biomes/biomes';

export type ContentEN = { name: string; description?: string; signature?: string };

export type BiomeEN = { name: string; tagline: string; locations: string[]; bossLocation: string };

export const BIOME_EN: Record<BiomeId, BiomeEN> = {
  'ruined-village': { name: 'Ruined Village', tagline: 'Cold ash presses on rooftops; a home without bells still awaits the traveler.', locations: ['Toppled Belfry', 'Charred Lane', 'Hollow Granary'], bossLocation: 'Fireless Gate' },
  'capital-outskirts': { name: 'Capital Outskirts', tagline: 'A brass key opens the old waterway; wayfire beyond the walls points toward crimson wastes.', locations: ['Toll Checkpoint', 'Ruined Waystation', 'Wall Culvert'], bossLocation: 'Broken Seal Gate' },
  'castle-catacombs': { name: 'Castle Catacombs', tagline: 'Royal star-charts carved on tomb-brick backs; damp stairs lead all the way to the underworld.', locations: ['Royal Stair', 'Wax-Sealed Ossuary', 'Nameless Gallery'], bossLocation: 'Subterranean Gate' },
  'verdant-forest': { name: 'Verdant Forest', tagline: 'The last greenery beyond the village swallows the road; luminous leaves guide the expedition.', locations: ['Antler Trail', 'Glowleaf Creek', 'Ancient Tree Court'], bossLocation: 'Rootcrown Watcher' },
  'moss-marsh': { name: 'Moss Marsh', tagline: 'Forest waters merge into mire; moss-shells and crocodile shadows guard the downstream sluice.', locations: ['Crocodile Shallows', 'Sunken-Log Wharf', 'Mosslight Path'], bossLocation: 'Great Croc Sluice' },
  'fetid-sewers': { name: 'Fetid Sewers', tagline: 'Behind rusted floodgates the current flows underground toward the capital.', locations: ['Rot Canal', 'Sporecap Pump Hall', 'Rat-King Junction'], bossLocation: 'Brass-Key Watergate' },
  'radiant-capital': { name: 'Radiant Capital', tagline: 'Gold-white domes illuminate feasts and the names the temple chose to bury.', locations: ['Gilded Boulevard', 'White Tower Plaza', 'Hundred-Lamp Bazaar'], bossLocation: 'Solar-Crown Gate' },
  'bloodlands': { name: 'Bloodlands', tagline: 'The gatekeeper\'s blood crosses the border, pointing toward land that never clots.', locations: ['Scarlet Bone Mound', 'Blood-Rain Trench', 'Crimson Windmill'], bossLocation: 'Coagulation Altar' },
  'desert': { name: 'Desert', tagline: 'The bloodlands dry into blistering sand; half-buried pillars and caravans point to a lost city.', locations: ['Quicksand Dune', 'Wind-Worn Pillar', 'Half-Buried Caravan'], bossLocation: 'Sand King Tomb' },
  'bell-tower': { name: 'Bell Tower', tagline: 'A black-iron tower tolls ceaselessly at the edge of the wastes; each strike marks a quarry.', locations: ['Echo Stairway', 'Suspended Bell Hall', 'Pendulum Chamber'], bossLocation: 'Silent King' },
  'neon-court': { name: 'Neon Court', tagline: 'An underground tribunal deep within the techno city; neon tubes carry the memory of the judged.', locations: ['Data Corridor', 'Neon Tribunal', 'Memory Engine Room'], bossLocation: 'Neon Adjudicator' },
  'demon-nest': { name: 'Demon Nest', tagline: 'A crimson abyss splits open beneath Atlantean marble; pacts and claws fester here.', locations: ['Rift Passage', 'Pact Altar', 'Hatchling Blood Pool'], bossLocation: 'Broodmother' },
  'world-rampart': { name: 'World Rampart', tagline: 'The last bastion at the world\'s edge; beyond it lies the point where falling stars tear reality.', locations: ['Astral Battlement', 'Crumbling Sky-Ladder', 'Final Watchtower'], bossLocation: 'Heart of the Rampart' },
  'arcane-march': { name: 'Arcane March', tagline: 'Academy beacons still flash beyond the bloodlands; ancient spells preserve celestial coordinates.', locations: ['Candle-Float Academy', 'Rune Arcade', 'Astrolabe Court'], bossLocation: 'Archmage Clocktower' },
  'techno-city': { name: 'Techno City', tagline: 'A neon metropolis unveiled behind arcane veils; mechanical star-charts plot routes above the clouds.', locations: ['Neon Alley', 'Violet Nexus', 'Gear Skybridge'], bossLocation: 'Launch Well Zero' },
  'sky-island': { name: 'Sky Island', tagline: 'The launch well pierces the cloud sea; white isles carry the old skybridge to the noble castle.', locations: ['Cloud-Whale Route', 'White-Wing Garden', 'Floating Stone Harbor'], bossLocation: 'Skylock Bridge' },
  'noble-castle': { name: 'Noble Castle', tagline: 'The heraldry at the skybridge\'s end belongs to a missing family; answers lie beneath the feast hall.', locations: ['Heraldic Court', 'Long Banquet Hall', 'Silver-Armor Gallery'], bossLocation: 'Throneless Seat' },
  'underworld': { name: 'Underworld', tagline: 'The catacombs extinguish the last flame; pale-blue ghosts point you toward the River of Forgetting.', locations: ['Ghostfire Path', 'Dead Market', 'Lament Stone Forest'], bossLocation: 'Death-King Steps' },
  'ghost-ferry': { name: 'Ghost Ferry', tagline: 'You pay passage with the royal key; the black vessel follows underground tides to the ocean.', locations: ['Lethe Dock', 'Paper-Lantern Boat', 'Tide-Song Stele'], bossLocation: 'Ferryman\'s Gate' },
  'ocean-depths': { name: 'Ocean Depths', tagline: 'The black vessel breaks through the underworld river; bubbles and deep-blue ruins surround the lost white city.', locations: ['Bubble Canyon', 'Whalebone Garden', 'Shipwreck Lighthouse'], bossLocation: 'Abyssal Maelstrom' },
  'atlantis': { name: 'Atlantis', tagline: 'The final difficulty parts the tides; the crumbling marble city sees starlight once more.', locations: ['Broken Column Avenue', 'White Stone Baths', 'Sunken Star Senate'], bossLocation: 'Atlantean Throne' },
  'meteor-ruins': { name: 'Meteor Ruins', tagline: 'The sky torn by a meteor; rogue energy and cosmic rifts hover above obsidian plains.', locations: ['Meteor Rift', 'Obsidian Plain', 'Suspended Debris'], bossLocation: 'Court of Finality' },
  // Legacy aliases resolve to their region; provide fallback entries
  'cinder-fields': { name: 'Ruined Village', tagline: 'Cold ash presses on rooftops.', locations: ['Toppled Belfry', 'Charred Lane', 'Hollow Granary'], bossLocation: 'Fireless Gate' },
  'bonebind-hamlet': { name: 'Capital Outskirts', tagline: 'A brass key opens the old waterway.', locations: ['Toll Checkpoint', 'Ruined Waystation', 'Wall Culvert'], bossLocation: 'Broken Seal Gate' },
  'obsidian-capital': { name: 'Castle Catacombs', tagline: 'Royal star-charts carved on tomb-brick backs.', locations: ['Royal Stair', 'Wax-Sealed Ossuary', 'Nameless Gallery'], bossLocation: 'Subterranean Gate' },
};

export function localizedBiome(id: BiomeId | undefined, locale: Locale): { name: string; tagline: string } {
  if (locale !== 'en' || !id) return { name: '', tagline: '' };
  const entry = BIOME_EN[id];
  return entry ? { name: entry.name, tagline: entry.tagline } : { name: '', tagline: '' };
}

export function localizedLocation(id: BiomeId | undefined, locationZh: string, locale: Locale): string {
  if (locale !== 'en' || !id) return locationZh;
  const entry = BIOME_EN[id];
  if (!entry) return locationZh;
  return _translateLocation(id, locationZh, entry);
}

function _translateLocation(id: BiomeId, locationZh: string, entry: BiomeEN): string {
  const zhLocations = BIOME_ZH_LOCATIONS[id];
  if (!zhLocations) return locationZh;
  const index = zhLocations.indexOf(locationZh);
  if (index >= 0 && index < entry.locations.length) return entry.locations[index];
  // Check boss location
  if (locationZh === zhLocations[zhLocations.length - 1]) return entry.bossLocation;
  return locationZh;
}

/** Chinese location names per biome — mirrors biomes.ts data for index-based translation */
const BIOME_ZH_LOCATIONS: Record<string, string[]> = {
  'ruined-village': ['倾倒钟楼', '焦木巷', '空谷仓', '无火村门'],
  'capital-outskirts': ['税吏关', '废弃驿站', '城墙水道', '断印边门'],
  'castle-catacombs': ['王墓阶梯', '封蜡骨室', '失名回廊', '地下王门'],
  'verdant-forest': ['鹿角林径', '荧叶溪', '古树庭', '根冠守望者'],
  'moss-marsh': ['鳄影浅滩', '沉木埠', '苔灯泥径', '巨鳄闸口'],
  'fetid-sewers': ['腐水渠', '菌灯泵房', '鼠王岔管', '铜钥水门'],
  'radiant-capital': ['辉金长街', '白塔广场', '百灯市集', '日冕宫门'],
  'bloodlands': ['赤骨丘', '血雨壕沟', '猩红风车', '凝血祭坛'],
  'desert': ['流沙丘', '风蚀石柱', '半埋商队', '沙王遗冢'],
  'bell-tower': ['回音阶梯', '悬钟回廊', '钟摆之室', '不鸣之王'],
  'neon-court': ['数据回廊', '霓虹审庭', '记忆机房', '霓虹裁决者'],
  'demon-nest': ['裂口甬道', '契约祭坛', '孵化血池', '巢穴母体'],
  'world-rampart': ['星界垛墙', '崩裂天梯', '终末哨台', '世界地垒之心'],
  'arcane-march': ['烛浮学院', '咒文拱廊', '星盘庭院', '大法师钟塔'],
  'techno-city': ['霓虹机巷', '紫电枢纽', '齿轮天桥', '零号升空井'],
  'sky-island': ['云鲸航道', '白翼花园', '浮石港', '天穹锁桥'],
  'noble-castle': ['纹章庭', '长宴厅', '银甲回廊', '无主王座'],
  'underworld': ['幽火荒径', '亡者集市', '哀歌石林', '冥王断阶'],
  'ghost-ferry': ['忘川码头', '纸灯黑舟', '潮声碑', '摆渡者之门'],
  'ocean-depths': ['气泡峡谷', '鲸骨花园', '沉船灯塔', '深潮漩门'],
  'atlantis': ['断柱大道', '白石浴场', '沉星议院', '亚特兰蒂斯王庭'],
  'meteor-ruins': ['陨星裂谷', '黑曜石原', '悬浮碎石', '终焉之庭'],
};

export const CONTENT_EN: Record<string, ContentEN> = {
  // ─── Characters ───
  wanderer: { name: 'Wanderer', description: 'Forges blocks into counters, advancing steadily while enduring the perils of the road.', signature: 'Defensive Conversion · Stability' },
  archivist: { name: 'Archivist', description: 'Seeks the precise window between draw and energy, sustaining rhythm through cycles.', signature: 'Draw Cycle · Low HP' },
  'ash-priest': { name: 'Ash Priest', description: 'Trades life for power, turning wounds into ritual at the edge of ruin.', signature: 'High Risk · Strength Stacking' },
  'bell-hunter': { name: 'Bell Hunter', description: 'Dismantles elites with marks and multi-strikes, but cannot endure prolonged attrition.', signature: 'Mark Burst · Multi-hit' },
  'legacy-classic': { name: 'Old-World Warrior', description: '72 HP of sheer bulk paired with a legacy deck.', signature: 'Max Defense · Tenacity' },
  'legacy-one-of-each': { name: 'Old-World Cards', description: 'Begins the expedition with one copy each of 21 cards.', signature: 'High Variance · Random Assembly' },

  // ─── Cards ───
  strike: { name: 'Starfire Slash', description: 'Deal 6 damage.' },
  defend: { name: 'Refracting Shield', description: 'Gain 5 block.' },
  insight: { name: 'Stargazing', description: 'Draw 2 cards.' },
  'ember-lance': { name: 'Ember Lance', description: 'Deal 9 damage.' },
  'split-spark': { name: 'Split Spark', description: 'Deal 4 damage twice.' },
  'ashen-ward': { name: 'Ashen Ward', description: 'Gain 8 block.' },
  'lasting-bulwark': { name: 'Lasting Bulwark', description: 'Gain 10 block. Block persists for 2 turns.' },
  'read-the-ruin': { name: 'Read the Ruin', description: 'Draw 1 card and gain 1 energy.' },
  'blood-vow': { name: 'Blood Vow', description: 'Gain 2 Strength.' },
  'bell-mark': { name: 'Bell Mark', description: 'Apply 2 Vulnerable.' },
  'cinder-rain': { name: 'Cinder Rain', description: 'Deal 5 damage to ALL enemies.' },
  'last-ember': { name: 'Last Ember', description: 'Deal 16 damage. Exhaust.' },
  'moth-veil': { name: 'Moth Veil', description: 'Gain 7 block and draw 1 card.' },
  'ash-call': { name: 'Ash Call', description: 'Gain 1 Strength and draw 2 cards.' },
  'funeral-bell': { name: 'Funeral Bell', description: 'Deal 7 damage to ALL enemies.' },
  'echoing-step': { name: 'Echoing Step', description: 'Gain 1 energy and draw 1 card. Exhaust.' },
  'coal-hook': { name: 'Coal Hook', description: 'Deal 8 damage and gain 3 block.' },
  'pilgrim-guard': { name: 'Pilgrim Guard', description: 'Gain 11 block.' },
  'star-sunder': { name: 'Star Sunder', description: 'Deal 26 damage.' },
  'rune-sieve': { name: 'Rune Sieve', description: 'Draw 3 cards. Exhaust.' },
  'furnace-breath': { name: 'Furnace Breath', description: 'Deal 8 damage to ALL enemies.' },
  'dust-script': { name: 'Dust Script', description: 'Gain 4 block and draw 1 card.' },
  'black-candle': { name: 'Black Candle', description: 'Gain 2 Strength.' },
  'glass-rebuke': { name: 'Glass Rebuke', description: 'Deal 4 damage; gain 4 block.' },
  'severed-thread': { name: 'Severed Thread', description: 'Deal 11 damage. Exhaust.' },
  'sable-liturgy': { name: 'Sable Liturgy', description: 'Lose 3 HP, gain 3 Strength.' },
  'lunar-tithe': { name: 'Lunar Tithe', description: 'Restore 5 HP. Exhaust.' },
  'iron-prayer': { name: 'Iron Prayer', description: 'Gain 16 block.' },
  'twin-echo': { name: 'Twin Echo', description: 'Deal 3 damage four times.' },
  'hollow-compass': { name: 'Hollow Compass', description: 'Draw 1 card and gain 1 energy. Retain.' },
  'quiet-flame': { name: 'Quiet Flame', description: 'Gain 3 Strength.' },
  'riven-choir': { name: 'Riven Choir', description: 'Deal 4 damage to ALL enemies and apply 1 Weak.' },
  'grave-lantern': { name: 'Grave Lantern', description: 'Gain 6 block and restore 2 HP.' },
  'vaulting-arc': { name: 'Vaulting Arc', description: 'Deal 13 damage.' },
  'pale-accord': { name: 'Pale Accord', description: 'Lose 6 HP, draw 3 cards and gain 1 energy.' },
  'warding-ink': { name: 'Warding Ink', description: 'Gain 5 block. Retain.' },
  'brass-harrier': { name: 'Brass Harrier', description: 'Deal 18 damage.' },
  'night-cartography': { name: 'Night Cartography', description: 'Draw 4 cards. Exhaust.' },
  oathbreaker: { name: 'Oathbreaker', description: 'Deal 10 damage and apply 2 Vulnerable.' },
  'first-watch': { name: 'First Watch', description: 'Gain 9 block. Innate.' },
  'ember-choir': { name: 'Ember Choir', description: 'Draw 1 card and gain 1 Strength.' },
  'ashen-mirror': { name: 'Ashen Mirror', description: 'Gain 12 block. Retain.' },
  'sunken-key': { name: 'Sunken Key', description: 'Deal 5 damage and draw 1 card.' },
  'ember-scar': { name: 'Ember Scar', description: 'Curse: Clogs your hand while held; playing it costs 4 HP.' },
  'fading-script': { name: 'Fading Script', description: 'Curse: No effect; exhausts at end of turn if unplayed.' },
  'iron-mire': { name: 'Iron Mire', description: 'Curse: Costs 1 energy for only 1 block.' },
  'rattling-burden': { name: 'Rattling Burden', description: 'Curse: Playing it costs 7 HP.' },
  'black-seal': { name: 'Black Seal', description: 'Curse: Gain 2 Weak.' },
  'thunder-psalm': { name: 'Thunder Psalm', description: 'Deal 6 damage to ALL enemies three times.' },
  'votive-ash': { name: 'Votive Ash', description: 'Restore 7 HP and gain 5 block.' },
  'sealed-horizon': { name: 'Sealed Horizon', description: 'Take 1 Vulnerable to gain 2 Strength.' },
  antitoxin: { name: 'Antitoxin', description: 'Gain 6 block and remove all Poison and Burn from yourself.' },
  'purging-flame': { name: 'Purging Flame', description: 'Deal 9 damage and remove all Poison from yourself.' },

  // ─── Hero Cards ───
  'ashen-offering': { name: 'Ashen Offering', description: 'Lose 3 HP, gain 2 Ember.' },
  'burning-litany': { name: 'Burning Litany', description: 'Gain 1 Ember and 1 Strength.' },
  'ash-revival': { name: 'Ash Revival', description: 'Gain 4 Ember and restore 8 HP.' },
  'final-cinder': { name: 'Final Cinder', description: 'Deal 12 + Ember×2 damage, consume all Ember.' },
  'make-camp': { name: 'Make Camp', description: 'Gain 8 block and 1 Pack.' },
  'travel-supplies': { name: 'Travel Supplies', description: 'Gain 1 Pack and 4 block.' },
  'cross-the-mountains': { name: 'Cross the Mountains', description: 'Deal 9 damage, draw 1.' },
  'traveler-instinct': { name: "Traveler's Instinct", description: 'Draw 2, gain 1 Pack.' },
  index: { name: 'Index', description: 'Gain 1 Insight, draw 1.' },
  archive: { name: 'Archive', description: 'Draw 2, gain 1 Insight.' },
  premonition: { name: 'Premonition', description: 'Gain 3 Insight.' },
  'forbidden-excerpt': { name: 'Forbidden Excerpt', description: 'Deal 16 + Insight×2 damage.' },
  'ring-the-bell': { name: 'Ring the Bell', description: 'Apply 2 Bell Mark.' },
  'hunting-hour': { name: 'Hunting Hour', description: 'Deal 8 damage; +2 per Bell Mark on target.' },
  'evening-bell': { name: 'Evening Bell', description: 'Deal 7 to ALL enemies, then 3 bell-shock.' },
  'the-final-bell': { name: 'The Final Bell', description: 'Deal 22 damage, +2 per Bell Mark; detonate all marks.' },
  'battle-line': { name: 'Battle Line', description: 'Gain 9 block, gain 2 Stance.' },
  'shield-strike': { name: 'Shield Strike', description: 'Deal 8 damage, gain 2 Stance.' },
  counterstroke: { name: 'Counterstroke', description: 'Deal 10 damage, gain 4 block.' },
  'ancient-war-formation': { name: 'Ancient Formation', description: 'Gain 3 Stance and 1 Strength.' },
  'old-shuffle': { name: 'Old Shuffle', description: 'Draw 2, gain 1 Disorder.' },
  rewrite: { name: 'Rewrite', description: 'Gain 1 energy and 1 Disorder.' },
  'shard-contract': { name: 'Shard Contract', description: 'Gain 3 Disorder, draw 1.' },
  'old-world-ending': { name: 'Old-World Ending', description: 'Deal 18 + Disorder×2 damage, consume all Disorder.' },

  // ─── Legacy Cards ───
  'legacy-adrenaline': { name: 'Adrenaline', description: 'Gain 1 energy. Draw 2. Exhaust.' },
  'legacy-bash': { name: 'Bash', description: 'Deal 8 damage. Apply 2 Vulnerable.' },
  'legacy-bludgeon': { name: 'Bludgeon', description: 'Deal 24 damage.' },
  'legacy-body-slam': { name: 'Body Slam', description: 'Deal damage equal to your block.' },
  'legacy-clash': { name: 'Clash', description: 'Playable only if all cards in hand are attacks. Deal 14.' },
  'legacy-cleave': { name: 'Cleave', description: 'Deal 8 damage to ALL enemies.' },
  'legacy-defend': { name: 'Defend', description: 'Gain 5 block.' },
  'legacy-flourish': { name: 'Flourish', description: 'Gain 5 Regeneration. Playable only below 50% HP.' },
  'legacy-intimidate': { name: 'Intimidate', description: 'Apply 1 Weak to ALL enemies. Exhaust.' },
  'legacy-iron-wave': { name: 'Iron Wave', description: 'Deal 5 damage. Gain 5 block.' },
  'legacy-mask-of-the-faceless': { name: 'Mask of the Faceless', description: 'Gain 1 energy.' },
  'legacy-pommel-strike': { name: 'Pommel Strike', description: 'Deal 9 damage. Draw 1.' },
  'legacy-ritual-rain': { name: 'Ritual Rain', description: 'Remove all Weak and Vulnerable from yourself.' },
  'legacy-soul-drain': { name: 'Soul Drain', description: 'Apply 3 Weak and 3 Vulnerable to ALL. Lose 3 HP.' },
  'legacy-strike': { name: 'Strike', description: 'Deal 6 damage.' },
  'legacy-succube': { name: 'Succubus', description: 'Deal 2 damage to ALL, drain as HP.' },
  'legacy-sucker-punch': { name: 'Sucker Punch', description: 'Deal 7 damage. Apply 1 Weak.' },
  'legacy-summer-of-sam': { name: 'Summer of Sam', description: 'Restore 1 HP. If below 50%, draw 2.' },
  'legacy-terror': { name: 'Terror', description: 'Apply 99 Vulnerable. Exhaust.' },
  'legacy-thunderclap': { name: 'Thunderclap', description: 'Deal 4 to ALL, apply 1 Vulnerable.' },
  'legacy-voodoo-gift': { name: 'Voodoo Gift', description: 'Deal damage equal to target\'s Vulnerable + Weak stacks, remove them.' },

  // ─── Enemies ───
  ashling: { name: 'Ashling' },
  'cinder-sprite': { name: 'Cinder Sprite' },
  'rust-hound': { name: 'Rust Hound' },
  'glass-moth': { name: 'Glass Moth' },
  'veil-monger': { name: 'Veil Monger' },
  'bell-tender': { name: 'Bell Tender' },
  'kiln-brute': { name: 'Kiln Brute' },
  'ink-leech': { name: 'Ink Leech' },
  'bone-scrivener': { name: 'Bone Scrivener' },
  'ashen-warden': { name: 'Ashen Warden' },
  'crownless-furnace': { name: 'Crownless Furnace' },

  // ─── Region Enemies ───
  // Ruined Village
  'straw-effigy': { name: 'Straw Effigy' },
  'village-scavenger': { name: 'Village Scavenger' },
  'crow-swarm': { name: 'Crow Swarm' },
  'harvest-hound': { name: 'Harvest Hound' },
  'scythe-warden': { name: 'Scythe Warden' },
  'famine-effigy': { name: 'Famine Effigy' },
  'the-last-harvest': { name: 'The Last Harvest' },
  // Verdant Forest
  'forest-wolf': { name: 'Forest Wolf' },
  'bramble-crawler': { name: 'Bramble Crawler' },
  'glowmoth-cluster': { name: 'Glowmoth Cluster' },
  'root-stalker': { name: 'Root Stalker' },
  'alpha-wolf': { name: 'Alpha Wolf' },
  'ancient-treant': { name: 'Ancient Treant' },
  'heart-of-the-grove': { name: 'Heart of the Grove' },
  // Moss Marsh
  'mire-crocodile': { name: 'Mire Crocodile' },
  'moss-lurker': { name: 'Moss Lurker' },
  'reed-stalker': { name: 'Reed Stalker' },
  'bog-witchling': { name: 'Bog Witchling' },
  'swamp-hag': { name: 'Swamp Hag' },
  'ancient-croc': { name: 'Ancient Croc' },
  'mother-of-the-mire': { name: 'Mother of the Mire' },
  // Fetid Sewers
  'sewer-rat-king': { name: 'Sewer Rat King' },
  'plague-rat': { name: 'Plague Rat' },
  'filth-slime': { name: 'Filth Slime' },
  'gutter-roach': { name: 'Gutter Roach' },
  'pipe-warden': { name: 'Pipe Warden' },
  'the-bloated-sovereign': { name: 'The Bloated Sovereign' },
  // Radiant Capital
  'royal-halberdier': { name: 'Royal Halberdier' },
  'white-tower-adept': { name: 'White Tower Adept' },
  'gilded-inquisitor': { name: 'Gilded Inquisitor' },
  'plaza-crier': { name: 'Plaza Crier' },
  'royal-champion': { name: 'Royal Champion' },
  'lord-inquisitor': { name: 'Lord Inquisitor' },
  'sun-crown-warden': { name: 'Sun-Crown Warden' },
  // Capital Outskirts
  'toll-enforcer': { name: 'Toll Enforcer' },
  'road-bandit': { name: 'Road Bandit' },
  'caravan-deserter': { name: 'Caravan Deserter' },
  'wall-sentinel': { name: 'Wall Sentinel' },
  'border-marshal': { name: 'Border Marshal' },
  'broken-seal-gatekeeper': { name: 'Broken-Seal Gatekeeper' },
  // Bloodlands
  'blood-cultist': { name: 'Blood Cultist' },
  'crimson-berserker': { name: 'Crimson Berserker' },
  'bone-hill-lurker': { name: 'Bone Hill Lurker' },
  'gore-windmill': { name: 'Gore Windmill' },
  'blood-marshal': { name: 'Blood Marshal' },
  'clotted-altar': { name: 'Clotted Altar' },
  // Arcane March
  'candle-apprentice': { name: 'Candle Apprentice' },
  'rune-construct': { name: 'Rune Construct' },
  'grimoire-swarm': { name: 'Grimoire Swarm' },
  'astrolabe-keeper': { name: 'Astrolabe Keeper' },
  'archmage-tutor': { name: 'Archmage Tutor' },
  'bell-tower-of-spells': { name: 'Bell Tower of Spells' },
  // Techno City
  'neon-enforcer': { name: 'Neon Enforcer' },
  'drone-swarm': { name: 'Drone Swarm' },
  'circuit-leech': { name: 'Circuit Leech' },
  'chrome-brute': { name: 'Chrome Brute' },
  'firewall-sentinel': { name: 'Firewall Sentinel' },
  'zero-shaft-core': { name: 'Zero-Shaft Core' },
  // Sky Island
  'cloud-whale-calf': { name: 'Cloud Whale Calf' },
  'gale-harrier': { name: 'Gale Harrier' },
  'skystone-sentry': { name: 'Skystone Sentry' },
  'white-wing-warden': { name: 'White-Wing Warden' },
  'storm-shepherd': { name: 'Storm Shepherd' },
  'sky-lock-bridge': { name: 'Sky-Lock Bridge Guardian' },
  // Noble Castle
  'silver-guard': { name: 'Silver Guard' },
  'feast-hound': { name: 'Feast Hound' },
  'court-poisoner': { name: 'Court Poisoner' },
  'heraldic-knight': { name: 'Heraldic Knight' },
  castellan: { name: 'Castellan' },
  'throneless-heir': { name: 'Throneless Heir' },
  // Castle Catacombs
  'crypt-ossuary': { name: 'Crypt Ossuary' },
  'wax-sealed-corpse': { name: 'Wax-Sealed Corpse' },
  'nameless-echo': { name: 'Nameless Echo' },
  'tomb-stair-guard': { name: 'Tomb Stair Guard' },
  'first-interred': { name: 'First Interred' },
  'underground-king-gate': { name: 'Underground King Gate' },
  // Underworld
  'pale-flame-wisp': { name: 'Pale Flame Wisp' },
  'market-of-the-dead-broker': { name: 'Dead Market Broker' },
  'dirge-stone': { name: 'Dirge Stone' },
  'soul-shackler': { name: 'Soul Shackler' },
  'lord-of-cold-hearth': { name: 'Lord of Cold Hearth' },
  'broken-stair-of-hades': { name: 'Broken Stair of Hades' },
  // Ghost Ferry
  'lethe-boatman': { name: 'Lethe Boatman' },
  'paper-lantern-shade': { name: 'Paper Lantern Shade' },
  'tide-chanter': { name: 'Tide Chanter' },
  'coin-drowned': { name: 'Coin-Drowned' },
  'ferryman-of-names': { name: 'Ferryman of Names' },
  'ferrymans-gate': { name: "Ferryman's Gate" },
  // Ocean Depths
  'bubble-eel': { name: 'Bubble Eel' },
  'whalebone-drifter': { name: 'Whalebone Drifter' },
  'reef-stalker': { name: 'Reef Stalker' },
  'sunken-lamp-keeper': { name: 'Sunken Lamp Keeper' },
  'deep-current-warden': { name: 'Deep Current Warden' },
  'abyss-maelstrom-gate': { name: 'Abyss Maelstrom Gate' },
  // Atlantis
  'marble-sentinel': { name: 'Marble Sentinel' },
  'broken-column-shade': { name: 'Broken Column Shade' },
  'bath-house-siren': { name: 'Bathhouse Siren' },
  'star-senate-scribe': { name: 'Star Senate Scribe' },
  'white-stone-archon': { name: 'White Stone Archon' },
  'atlantean-court': { name: 'Atlantean Court' },
  // Bell Tower
  'bell-acolyte': { name: 'Bell Acolyte' },
  'echo-wraith': { name: 'Echo Wraith' },
  'pendulum-blade': { name: 'Pendulum Blade' },
  'bell-warden': { name: 'Bell Warden' },
  'silent-king': { name: 'Silent King' },
  // Neon Court
  'data-bailiff': { name: 'Data Bailiff' },
  'memory-leech': { name: 'Memory Leech' },
  'verdict-drone': { name: 'Verdict Drone' },
  'neon-executioner': { name: 'Neon Executioner' },
  'neon-arbiter': { name: 'Neon Arbiter' },
  // Demon Nest
  'brood-spawn': { name: 'Brood Spawn' },
  'pact-cultist': { name: 'Pact Cultist' },
  'gore-fiend': { name: 'Gore Fiend' },
  'nest-broodmother': { name: 'Nest Broodmother' },
  'demon-progenitor': { name: 'Demon Progenitor' },
  // World Rampart
  'rampart-sentinel': { name: 'Rampart Sentinel' },
  'starfall-archer': { name: 'Starfall Archer' },
  'void-templar': { name: 'Void Templar' },
  'rampart-warden': { name: 'Rampart Warden' },
  'rampart-heart': { name: 'Rampart Heart' },

  // ─── Legacy Enemies ───
  'legacy-lone-orc-scout': { name: 'Orc Scout' },
  'legacy-patrol-orc-archer': { name: 'Orc Archer' },
  'legacy-patrol-orc-scout': { name: 'Orc Scout' },
  'legacy-orc-warrior': { name: 'Orc Warrior' },
  'legacy-skeleton-warrior': { name: 'Skeleton Warrior' },
  'legacy-jaw-worm': { name: 'Jaw Worm' },
  'legacy-small-slime': { name: 'Small Slime' },
  'legacy-orc-shaman': { name: 'Orc Shaman' },
  'legacy-ghost': { name: 'Ghost' },
  'legacy-orc-berserker': { name: 'Orc Berserker' },
  'legacy-rat-pack-a': { name: 'Giant Rat' },
  'legacy-rat-pack-b': { name: 'Giant Rat' },
  'legacy-rat-pack-c': { name: 'Giant Rat' },
  'legacy-troll': { name: 'Troll' },
  'legacy-death-knight': { name: 'Death Knight' },
  'legacy-orc-warchief': { name: 'Orc Warchief' },
  'legacy-ettin': { name: 'Ettin' },
  'legacy-ghost-cultist': { name: 'Ghost Cultist' },
  'legacy-hag': { name: 'Hag' },
  'legacy-wraith': { name: 'Wraith' },
  'legacy-ancient-dragon': { name: 'Ancient Dragon' },
  'legacy-slime-king': { name: 'Slime King' },

  // ─── Frontier Enemies ───
  // Desert
  'sand-worm': { name: 'Sand Worm' },
  'desert-raider': { name: 'Desert Raider' },
  'sandstone-golem': { name: 'Sandstone Golem' },
  'mummified-priest': { name: 'Mummified Priest' },
  'sand-scorpion': { name: 'Sand Scorpion' },
  'sandstorm-wraith': { name: 'Sandstorm Wraith' },
  'dune-tyrant': { name: 'Dune Tyrant' },
  'sand-sovereign': { name: 'Sand Sovereign' },
  // Meteor Ruins
  'meteor-acolyte': { name: 'Meteor Acolyte' },
  'void-hound': { name: 'Void Hound' },
  'starbone-knight': { name: 'Starbone Knight' },
  riftweaver: { name: 'Riftweaver' },
  'cosmic-behemoth': { name: 'Cosmic Behemoth' },
  'terminus-warden': { name: 'Terminus Warden' },
  'world-ender': { name: 'World Ender' },

  // ─── Relics ───
  'ember-seal': { name: 'Ember Seal', description: 'Gain 1 Strength at the start of combat.' },
  'coin-orbit': { name: 'Coin Orbit', description: 'Gain 10 gold at the end of combat.' },
  'straw-charm': { name: 'Straw Charm', description: 'Gain 5 block at the start of combat, warding off opening strikes.' },
  'wolf-fang-totem': { name: 'Wolf Fang Totem', description: 'Gain 1 Strength at the start of combat.' },
  'harvest-sickle': { name: 'Harvest Sickle', description: 'Restore 4 HP at the end of combat, reaping residual warmth.' },
  'antitoxin-charm': { name: 'Antitoxin Charm', description: 'Remove all Poison from yourself at the start of each turn.' },
  'sewer-filter-mask': { name: 'Filtration Mask', description: 'Remove all Poison and Burn from yourself at the start of each turn.' },
  'croc-scale-guard': { name: 'Crocodile Scale Guard', description: 'Gain 3 block at the start of each turn.' },
  'royal-warrant': { name: 'Royal Warrant', description: '+1 max energy at the start of combat.' },
  'border-toll-coin': { name: 'Border Toll Coin', description: 'Gain 18 gold at the end of combat.' },
  'gilded-aegis': { name: 'Gilded Aegis', description: 'Gain 9 block at the start of combat.' },
  'blood-oath-band': { name: 'Blood Oath Band', description: 'Gain 2 Strength at the start of combat.' },
  'gore-censer': { name: 'Gore Censer', description: 'Apply 2 Burn to ALL enemies at the start of combat.' },
  'desert-waterskin': { name: 'Desert Waterskin', description: 'Restore 2 HP at the start of each turn, staving off the heat.' },
  'sunfire-idol': { name: 'Sunfire Idol', description: 'Gain 3 Strength at the start of combat.' },
  'arcane-lens': { name: 'Arcane Lens', description: 'Draw 2 cards at the start of combat.' },
  'bell-resonator': { name: 'Bell Resonator', description: 'Apply 1 Vulnerable to ALL enemies at the start of combat.' },
  'sworn-bell': { name: 'Sworn Bell', description: 'Gain 1 block at the start of each turn… only 1, but the bell never ceases.' },
  'chrome-capacitor': { name: 'Chrome Capacitor', description: '+1 max energy at the start of combat.' },
  'neon-coolant': { name: 'Neon Coolant', description: 'Remove all Burn from yourself at the start of each turn.' },
  'sky-anchor': { name: 'Sky Anchor', description: 'Gain 8 block at the start of combat, steadying a weightless opening.' },
  'heraldic-sigil': { name: 'Heraldic Sigil', description: 'Gain 2 Strength at the start of combat.' },
  'grave-lantern-relic': { name: 'Grave Lantern', description: 'Restore 3 HP at the start of each turn.' },
  'soul-ledger': { name: 'Soul Ledger', description: 'Gain 25 gold at the end of combat.' },
  'ferry-toll-coin': { name: 'Ferry Toll Coin', description: 'Draw 1 card at the start of combat.' },
  'pearl-of-pressure': { name: 'Pearl of Pressure', description: 'Gain 6 block at the start of combat.' },
  'marble-heart': { name: 'Marble Heart', description: 'Gain 10 block at the start of combat.' },
  'meteor-core': { name: 'Meteor Core', description: 'Gain 3 Strength at the start of combat.' },
  'demon-pact-seal': { name: 'Demon Pact Seal', description: 'Gain 1 energy at the start of each turn—the price unknown.' },
  'world-rampart-stone': { name: 'World Rampart Stone', description: 'Gain 4 block at the start of each turn.' },

  // ─── Potions ───
  'ember-tonic': { name: 'Ember Tonic', description: 'Restore 12 HP.' },
  'iron-draught': { name: 'Iron Draught', description: 'Gain 12 block.' },
  'rage-philtre': { name: 'Rage Philtre', description: 'Gain 2 Strength.' },
  'energy-elixir': { name: 'Energy Elixir', description: 'Immediately gain 2 energy.' },
  'draw-draught': { name: 'Draw Draught', description: 'Draw 3 cards.' },
  'antivenom-flask': { name: 'Antivenom Flask', description: 'Remove all Poison from yourself.' },
  'holy-water': { name: 'Holy Water', description: 'Remove all Poison and Burn from yourself.' },
  'cleansing-tears': { name: 'Cleansing Tears', description: 'Remove all Poison, Burn, Weak, and Vulnerable from yourself.' },
  'weakening-gas': { name: 'Weakening Gas', description: 'Apply 2 Weak to ALL enemies.' },
  'acid-flask': { name: 'Acid Flask', description: 'Apply 2 Brittle to ALL enemies.' },
  'venom-vial': { name: 'Venom Vial', description: 'Apply 3 Poison to ALL enemies.' },
  'scorch-oil': { name: 'Scorch Oil', description: 'Apply 3 Burn to ALL enemies.' },
  'exposing-toll': { name: 'Exposing Toll', description: 'Apply 3 Vulnerable to ALL enemies.' },
  'fire-bomb': { name: 'Fire Bomb', description: 'Deal 10 damage to ALL enemies.' },
  'star-shard-bomb': { name: 'Star Shard Bomb', description: 'Deal 8 damage to ALL enemies twice.' },
  'siege-charge': { name: 'Siege Charge', description: 'Deal 24 damage to the front enemy.' },
  'blood-transfusion': { name: 'Blood Transfusion', description: 'Restore 20 HP.' },
  'giant-brew': { name: 'Giant Brew', description: '+8 max HP and restore the same amount this combat.' },
  'atlantean-mist': { name: 'Atlantean Mist', description: 'Gain 4 Regeneration (heal gradually at end of turn).' },
  'sky-tonic': { name: 'Sky Tonic', description: 'Gain 16 block.' },
  'demon-ichor': { name: 'Demon Ichor', description: 'Gain 3 Strength.' },
  'bell-toll-potion': { name: 'Bell Toll Potion', description: 'Apply 3 Vulnerable to ALL enemies and deal 4 damage.' },
};

/** Kept separate because some status IDs intentionally overlap with card IDs. */
export const STATUS_EN: Record<string, string> = {
  strength: 'Strength', weak: 'Weak', vulnerable: 'Vulnerable', regen: 'Regeneration', scorch: 'Burn', venom: 'Poison', brittle: 'Brittle', sap: 'Sap', ember: 'Ember', pack: 'Pack', insight: 'Insight', 'bell-mark': 'Bell Mark', stance: 'Stance', disorder: 'Disorder', 'meteor-energy': 'Meteor Energy', 'cosmic-erosion': 'Cosmic Erosion',
};

export function localizedName(id: string, zhName: string, locale: Locale): string {
  return locale === 'en' ? (CONTENT_EN[id]?.name ?? zhName) : zhName;
}

export function localizedDescription(id: string, zhDesc: string | undefined, locale: Locale): string | undefined {
  if (!zhDesc) return undefined;
  return locale === 'en' ? (CONTENT_EN[id]?.description ?? zhDesc) : zhDesc;
}
