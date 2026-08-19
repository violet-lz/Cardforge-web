/**
 * English translations for all game entities (cards, characters, enemies, relics, potions, statuses).
 * Used by presentation.ts to display English labels when locale is 'en'.
 */

const ENTITY_EN: Record<string, { name: string; desc?: string }> = {
  // ═══════════════════════════════════════════════════════════════
  // BASIC CARDS
  // ═══════════════════════════════════════════════════════════════
  strike: { name: 'Starfire Slash', desc: 'Deal 6 damage.' },
  defend: { name: 'Refraction Shield', desc: 'Gain 5 block.' },
  insight: { name: 'Stargazing', desc: 'Draw 2 cards.' },
  'ember-lance': { name: 'Ember Lance', desc: 'Deal 9 damage.' },
  'split-spark': { name: 'Split Spark', desc: 'Deal 4 damage twice.' },
  'ashen-ward': { name: 'Ashen Ward', desc: 'Gain 8 block.' },
  'lasting-bulwark': { name: 'Lasting Bulwark', desc: 'Gain 10 block. Block persists for 2 turns.' },
  'read-the-ruin': { name: 'Read the Ruin', desc: 'Draw 1 card and gain 1 energy.' },
  'blood-vow': { name: 'Blood Vow', desc: 'Gain 2 Strength.' },
  'bell-mark': { name: 'Bell Mark', desc: 'Apply 2 Vulnerable.' },
  'cinder-rain': { name: 'Cinder Rain', desc: 'Deal 5 damage to all enemies.' },
  'last-ember': { name: 'Last Ember', desc: 'Deal 16 damage. Exhaust.' },
  'moth-veil': { name: 'Moth Veil', desc: 'Gain 7 block and draw 1 card.' },
  'ash-call': { name: 'Ash Call', desc: 'Gain 1 Strength and draw 2 cards.' },
  'funeral-bell': { name: 'Funeral Bell', desc: 'Deal 7 damage to all enemies.' },
  'echoing-step': { name: 'Echoing Step', desc: 'Gain 1 energy and draw 1 card. Exhaust.' },
  'coal-hook': { name: 'Coal Hook', desc: 'Deal 8 damage and gain 3 block.' },
  'pilgrim-guard': { name: 'Pilgrim Guard', desc: 'Gain 11 block.' },
  'star-sunder': { name: 'Star Sunder', desc: 'Deal 26 damage.' },
  'rune-sieve': { name: 'Rune Sieve', desc: 'Draw 3 cards. Exhaust.' },
  'furnace-breath': { name: 'Furnace Breath', desc: 'Deal 8 damage to all enemies.' },
  'dust-script': { name: 'Dust Script', desc: 'Gain 4 block and draw 1 card.' },
  'black-candle': { name: 'Black Candle', desc: 'Gain 2 Strength.' },
  'glass-rebuke': { name: 'Glass Rebuke', desc: 'Deal 4 damage; gain 4 block.' },
  'severed-thread': { name: 'Severed Thread', desc: 'Deal 11 damage. Exhaust.' },
  'sable-liturgy': { name: 'Sable Liturgy', desc: 'Lose 3 HP, gain 3 Strength.' },
  'lunar-tithe': { name: 'Lunar Tithe', desc: 'Heal 5 HP. Exhaust.' },
  'iron-prayer': { name: 'Iron Prayer', desc: 'Gain 16 block.' },
  'twin-echo': { name: 'Twin Echo', desc: 'Deal 3 damage four times.' },
  'hollow-compass': { name: 'Hollow Compass', desc: 'Draw 1 card and gain 1 energy. Retain.' },
  'quiet-flame': { name: 'Quiet Flame', desc: 'Gain 3 Strength.' },
  'riven-choir': { name: 'Riven Choir', desc: 'Deal 4 damage to all enemies and apply 1 Weak.' },
  'grave-lantern': { name: 'Grave Lantern', desc: 'Gain 6 block and heal 2 HP.' },
  'vaulting-arc': { name: 'Vaulting Arc', desc: 'Deal 13 damage.' },
  'pale-accord': { name: 'Pale Accord', desc: 'Lose 6 HP, draw 3 cards and gain 1 energy.' },
  'warding-ink': { name: 'Warding Ink', desc: 'Gain 5 block. Retain.' },
  'brass-harrier': { name: 'Brass Harrier', desc: 'Deal 18 damage.' },
  'night-cartography': { name: 'Night Cartography', desc: 'Draw 4 cards. Exhaust.' },
  oathbreaker: { name: 'Oathbreaker', desc: 'Deal 10 damage and apply 2 Vulnerable.' },
  'first-watch': { name: 'First Watch', desc: 'Gain 9 block. Innate.' },
  'ember-choir': { name: 'Ember Choir', desc: 'Draw 1 card and gain 1 Strength.' },
  'ashen-mirror': { name: 'Ashen Mirror', desc: 'Gain 12 block. Retain.' },
  'sunken-key': { name: 'Sunken Key', desc: 'Deal 5 damage and draw 1 card.' },
  'ember-scar': { name: 'Ember Scar', desc: 'Pollution: Clogs hand; playing it costs 4 HP.' },
  'fading-script': { name: 'Fading Script', desc: 'Pollution: No effect; vanishes if unplayed.' },
  'iron-mire': { name: 'Iron Mire', desc: 'Pollution: Costs 1 energy for only 1 block.' },
  'rattling-burden': { name: 'Rattling Burden', desc: 'Pollution: Playing it costs 7 HP.' },
  'black-seal': { name: 'Black Seal', desc: 'Pollution: Gain 2 Weak.' },
  'thunder-psalm': { name: 'Thunder Psalm', desc: 'Deal 6 damage three times to all enemies.' },
  'votive-ash': { name: 'Votive Ash', desc: 'Heal 7 HP and gain 5 block.' },
  'sealed-horizon': { name: 'Sealed Horizon', desc: 'Gain 1 Vulnerable on self for 2 Strength.' },
  antitoxin: { name: 'Antitoxin', desc: 'Gain 6 block and cleanse all Venom and Scorch.' },
  'purging-flame': { name: 'Purging Flame', desc: 'Deal 9 damage and cleanse all Venom.' },

  // ═══════════════════════════════════════════════════════════════
  // HERO CARDS
  // ═══════════════════════════════════════════════════════════════
  'ashen-offering': { name: 'Ashen Offering', desc: 'Lose 3 HP, gain 2 Ember.' },
  'burning-litany': { name: 'Burning Litany', desc: 'Gain 1 Ember and 1 Strength.' },
  'ash-revival': { name: 'Ash Revival', desc: 'Gain 4 Ember and heal 8 HP.' },
  'final-cinder': { name: 'Final Cinder', desc: 'Deal 12 + Ember×2 damage, consume all Ember.' },
  'make-camp': { name: 'Make Camp', desc: 'Gain 8 block and 1 Pack.' },
  'travel-supplies': { name: 'Travel Supplies', desc: 'Gain 1 Pack and 4 block.' },
  'cross-the-mountains': { name: 'Cross the Mountains', desc: 'Deal 9 damage and draw 1 card.' },
  'traveler-instinct': { name: "Traveler's Instinct", desc: 'Draw 2 cards and gain 1 Pack.' },
  index: { name: 'Index', desc: 'Gain 1 Insight and draw 1 card.' },
  archive: { name: 'Archive', desc: 'Draw 2 cards and gain 1 Insight.' },
  premonition: { name: 'Premonition', desc: 'Gain 3 Insight.' },
  'forbidden-excerpt': { name: 'Forbidden Excerpt', desc: 'Deal 16 + Insight×2 damage.' },
  'ring-the-bell': { name: 'Ring the Bell', desc: 'Apply 2 Bell Mark to target.' },
  'hunting-hour': { name: 'Hunting Hour', desc: 'Deal 8 damage; +2 per Bell Mark on target.' },
  'evening-bell': { name: 'Evening Bell', desc: 'Deal 7 + 3 damage to all enemies.' },
  'the-final-bell': { name: 'The Final Bell', desc: 'Deal 22 damage; +2 per Bell Mark, consume marks.' },
  'battle-line': { name: 'Battle Line', desc: 'Gain 9 block and 2 Stance.' },
  'shield-strike': { name: 'Shield Strike', desc: 'Deal 8 damage and gain 2 Stance.' },
  counterstroke: { name: 'Counterstroke', desc: 'Deal 10 damage and gain 4 block.' },
  'ancient-war-formation': { name: 'Ancient War Formation', desc: 'Gain 3 Stance and 1 Strength.' },
  'old-shuffle': { name: 'Old Shuffle', desc: 'Draw 2 cards and gain 1 Disorder.' },
  rewrite: { name: 'Rewrite', desc: 'Gain 1 energy and 1 Disorder.' },
  'shard-contract': { name: 'Shard Contract', desc: 'Gain 3 Disorder and draw 1 card.' },
  'old-world-ending': { name: 'Old World Ending', desc: 'Deal 18 + Disorder×2 damage, consume all Disorder.' },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY CARDS
  // ═══════════════════════════════════════════════════════════════
  'legacy-adrenaline': { name: 'Adrenaline', desc: 'Gain 1 energy. Draw 2 cards. Exhaust.' },
  'legacy-bash': { name: 'Bash', desc: 'Deal 8 damage. Apply 2 Vulnerable.' },
  'legacy-bludgeon': { name: 'Bludgeon', desc: 'Deal 24 damage.' },
  'legacy-body-slam': { name: 'Body Slam', desc: 'Deal damage equal to your block.' },
  'legacy-clash': { name: 'Clash', desc: 'Playable only if all hand cards are attacks. Deal 14 damage.' },
  'legacy-cleave': { name: 'Cleave', desc: 'Deal 8 damage to all enemies.' },
  'legacy-defend': { name: 'Defend', desc: 'Gain 5 block.' },
  'legacy-flourish': { name: 'Flourish', desc: 'Gain 5 Regen. Playable only below 50% HP.' },
  'legacy-intimidate': { name: 'Intimidate', desc: 'Apply 1 Weak to all enemies. Exhaust.' },
  'legacy-iron-wave': { name: 'Iron Wave', desc: 'Deal 5 damage. Gain 5 block.' },
  'legacy-mask-of-the-faceless': { name: 'Mask of the Faceless', desc: 'Gain 1 energy.' },
  'legacy-pommel-strike': { name: 'Pommel Strike', desc: 'Deal 9 damage. Draw 1 card.' },
  'legacy-ritual-rain': { name: 'Ritual Rain', desc: 'Cleanse Weak and Vulnerable from self.' },
  'legacy-soul-drain': { name: 'Soul Drain', desc: 'Apply 3 Weak and Vulnerable to all enemies. Lose 3 HP.' },
  'legacy-strike': { name: 'Strike', desc: 'Deal 6 damage.' },
  'legacy-succube': { name: 'Succubus', desc: 'Deal 2 damage to all enemies and drain as HP.' },
  'legacy-sucker-punch': { name: 'Sucker Punch', desc: 'Deal 7 damage. Apply 1 Weak.' },
  'legacy-summer-of-sam': { name: 'Summer of Sam', desc: 'Heal 1 HP. If below 50% HP, draw 2 cards.' },
  'legacy-terror': { name: 'Terror', desc: 'Apply 99 Vulnerable. Exhaust.' },
  'legacy-thunderclap': { name: 'Thunderclap', desc: 'Deal 4 damage to all enemies. Apply 1 Vulnerable.' },
  'legacy-voodoo-gift': { name: 'Voodoo Gift', desc: 'Deal damage equal to target Vulnerable + Weak, remove them.' },

  // ═══════════════════════════════════════════════════════════════
  // CHARACTERS
  // ═══════════════════════════════════════════════════════════════
  wanderer: { name: 'Wanderer', desc: 'Forges block into counters; steady advance through peril.' },
  archivist: { name: 'Archivist', desc: 'Finds precise windows between draws and energy; rhythm through cycling.' },
  'ash-priest': { name: 'Ash Priest', desc: 'Trades life for power, turning wounds into ritual.' },
  'bell-hunter': { name: 'Bell Hunter', desc: 'Dismantles foes with marks and multi-strikes, frail under attrition.' },
  'legacy-classic': { name: 'Old World Warrior', desc: '72 HP bruiser with a classic defensive loadout.' },
  'legacy-one-of-each': { name: 'Old World Cards', desc: 'Starts with 21 unique legacy cards.' },

  // ═══════════════════════════════════════════════════════════════
  // BASIC ENEMIES
  // ═══════════════════════════════════════════════════════════════
  ashling: { name: 'Ashling', desc: 'A feral ember-spawn that claws and pounces.' },
  'cinder-sprite': { name: 'Cinder Sprite', desc: 'A flickering flame elemental that grows hotter.' },
  'rust-hound': { name: 'Rust Hound', desc: 'A corroded beast that tears twice and pounces.' },
  'glass-moth': { name: 'Glass Moth', desc: 'Fragile insect that weakens and slashes with wing-blades.' },
  'veil-monger': { name: 'Veil Monger', desc: 'A cloaked dealer that exposes wounds before striking.' },
  'bell-tender': { name: 'Bell Tender', desc: 'A devotee whose bell tolls herald crushing blows.' },
  'kiln-brute': { name: 'Kiln Brute', desc: 'A hulking furnace-born that accumulates scorching heat.' },
  'ink-leech': { name: 'Ink Leech', desc: 'A parasitic creature that pollutes your deck.' },
  'bone-scrivener': { name: 'Bone Scrivener', desc: 'A skeletal scribe that transcribes curses into your hand.' },
  'ashen-warden': { name: 'Ashen Warden', desc: 'Gatekeeper of the embers, summons ashlings in judgment phase.' },
  'crownless-furnace': { name: 'Crownless Furnace', desc: 'A headless forge colossus that erupts at half health.' },

  // ═══════════════════════════════════════════════════════════════
  // REGION ENEMIES — Ruined Village
  // ═══════════════════════════════════════════════════════════════
  'straw-effigy': { name: 'Straw Effigy', desc: 'A hollow scarecrow that weakens with its gaze.' },
  'village-scavenger': { name: 'Village Scavenger', desc: 'A desperate villager scrounging with crude weapons.' },
  'crow-swarm': { name: 'Crow Swarm', desc: 'A flock of carrion birds that expose wounds.' },
  'harvest-hound': { name: 'Harvest Hound', desc: 'A feral farm dog that scents blood and tears flesh.' },
  'scythe-warden': { name: 'Scythe Warden', desc: 'A field guardian wielding a massive reaping blade.' },
  'famine-effigy': { name: 'Famine Effigy', desc: 'An idol of hunger that summons crows upon wounding.' },
  'the-last-harvest': { name: 'The Last Harvest', desc: 'Boss of the ruined village — reaps all who linger.' },

  // Verdant Forest
  'forest-wolf': { name: 'Forest Wolf', desc: 'A pack predator that tears and rallies kin.' },
  'bramble-crawler': { name: 'Bramble Crawler', desc: 'A thorned creeper that poisons through its barbs.' },
  'glowmoth-cluster': { name: 'Glowmoth Cluster', desc: 'Luminescent moths whose scales disorient.' },
  'root-stalker': { name: 'Root Stalker', desc: 'A burrowing terror that drains through entangling roots.' },
  'alpha-wolf': { name: 'Alpha Wolf', desc: 'The pack leader whose howl summons the pack.' },
  'ancient-treant': { name: 'Ancient Treant', desc: 'A petrified tree guardian that blooms venomous pollen.' },
  'heart-of-the-grove': { name: 'Heart of the Grove', desc: 'Boss of the verdant forest — the living heart of nature.' },

  // Moss Marsh
  'mire-crocodile': { name: 'Mire Crocodile', desc: 'A swamp predator that death-rolls and drags prey under.' },
  'moss-lurker': { name: 'Moss Lurker', desc: 'A camouflaged ambusher that exudes toxic spores.' },
  'reed-stalker': { name: 'Reed Stalker', desc: 'A swift hunter that strikes from the reeds.' },
  'bog-witchling': { name: 'Bog Witchling', desc: 'A marsh conjurer that hurls mud and poison.' },
  'swamp-hag': { name: 'Swamp Hag', desc: 'A vile crone who brews potent toxins.' },
  'ancient-croc': { name: 'Ancient Crocodile', desc: 'A massive prehistoric reptile of the deep marsh.' },
  'mother-of-the-mire': { name: 'Mother of the Mire', desc: 'Boss of the moss marsh — the swamp incarnate.' },

  // Fetid Sewers
  'sewer-rat-king': { name: 'Sewer Rat King', desc: 'A bloated sovereign of vermin that commands plague rats.' },
  'plague-rat': { name: 'Plague Rat', desc: 'A disease-ridden rodent that gnaws relentlessly.' },
  'filth-slime': { name: 'Filth Slime', desc: 'A living mass of refuse that corrodes armor.' },
  'gutter-roach': { name: 'Gutter Roach', desc: 'An armored insect that secretes toxin.' },
  'pipe-warden': { name: 'Pipe Warden', desc: 'A sewer gate-keeper dumping waste into your deck.' },
  'the-bloated-sovereign': { name: 'The Bloated Sovereign', desc: 'Boss of the sewers — a festering lord of filth.' },

  // Radiant Capital
  'royal-halberdier': { name: 'Royal Halberdier', desc: 'A disciplined guard who shatters armor.' },
  'white-tower-adept': { name: 'White Tower Adept', desc: 'A mage-in-training who binds with wards.' },
  'gilded-inquisitor': { name: 'Gilded Inquisitor', desc: 'A zealous judge who pronounces sentence.' },
  'plaza-crier': { name: 'Plaza Crier', desc: 'A herald whose decrees sap resources.' },
  'royal-champion': { name: 'Royal Champion', desc: 'An elite knight whose lance shatters shields.' },
  'lord-inquisitor': { name: 'Lord Inquisitor', desc: 'A senior judge who condemns with twin hammers.' },
  'sun-crown-warden': { name: 'Sun Crown Warden', desc: 'Boss of the capital — guardian of the solar throne.' },

  // Capital Outskirts
  'toll-enforcer': { name: 'Toll Enforcer', desc: 'A border agent that confiscates and clubs.' },
  'road-bandit': { name: 'Road Bandit', desc: 'A greedy highwayman striking from ambush.' },
  'caravan-deserter': { name: 'Caravan Deserter', desc: 'A rogue courier hiding behind cargo.' },
  'wall-sentinel': { name: 'Wall Sentinel', desc: 'A fortified border guard with armor-piercing strikes.' },
  'border-marshal': { name: 'Border Marshal', desc: 'The commanding officer of the outskirts garrison.' },
  'broken-seal-gatekeeper': { name: 'Broken Seal Gatekeeper', desc: 'Boss of the outskirts — seals the border with iron.' },

  // Bloodlands
  'blood-cultist': { name: 'Blood Cultist', desc: 'A fanatic who draws power from self-scarification.' },
  'crimson-berserker': { name: 'Crimson Berserker', desc: 'A frenzied warrior fueled by rage.' },
  'bone-hill-lurker': { name: 'Bone Hill Lurker', desc: 'A skeletal ambusher from the charnel mounds.' },
  'gore-windmill': { name: 'Gore Windmill', desc: 'A rotating blade construct spraying blood-rain.' },
  'blood-marshal': { name: 'Blood Marshal', desc: 'The oath-bound commander of the blood host.' },
  'clotted-altar': { name: 'Clotted Altar', desc: 'Boss of the bloodlands — a living sacrificial shrine.' },

  // Arcane March
  'candle-apprentice': { name: 'Candle Apprentice', desc: 'A young mage channeling flame sigils.' },
  'rune-construct': { name: 'Rune Construct', desc: 'An animated golem inscribed with wards.' },
  'grimoire-swarm': { name: 'Grimoire Swarm', desc: 'A flock of animated spellbooks that corrupt your deck.' },
  'astrolabe-keeper': { name: 'Astrolabe Keeper', desc: 'A celestial scholar wielding astronomical force.' },
  'archmage-tutor': { name: 'Archmage Tutor', desc: 'A grand sorcerer whose forbidden spells defile.' },
  'bell-tower-of-spells': { name: 'Bell Tower of Spells', desc: 'Boss of the arcane march — a sentient spire of magic.' },

  // Techno City
  'neon-enforcer': { name: 'Neon Enforcer', desc: 'A mechanized law-bot with energy shields.' },
  'drone-swarm': { name: 'Drone Swarm', desc: 'A cloud of autonomous gunships.' },
  'circuit-leech': { name: 'Circuit Leech', desc: 'A parasite that drains energy and overloads circuits.' },
  'chrome-brute': { name: 'Chrome Brute', desc: 'A hydraulic-powered enforcer of chrome.' },
  'firewall-sentinel': { name: 'Firewall Sentinel', desc: 'A digital fortress made manifest.' },
  'zero-shaft-core': { name: 'Zero Shaft Core', desc: 'Boss of the techno city — the reactor heart.' },

  // Sky Island
  'cloud-whale-calf': { name: 'Cloud Whale Calf', desc: 'A juvenile sky leviathan buffeted by winds.' },
  'gale-harrier': { name: 'Gale Harrier', desc: 'A swift raptor that dives and circles.' },
  'skystone-sentry': { name: 'Skystone Sentry', desc: 'A floating boulder guardian enforcing weightlessness.' },
  'white-wing-warden': { name: 'White Wing Warden', desc: 'An aerial knight that locks targets for the kill.' },
  'storm-shepherd': { name: 'Storm Shepherd', desc: 'A wind-caller that gathers gales and lashes with lightning.' },
  'sky-lock-bridge': { name: 'Sky Lock Bridge', desc: 'Boss of the sky island — an anchored war-bridge.' },

  // Noble Castle
  'silver-guard': { name: 'Silver Guard', desc: 'An elite household knight in gleaming plate.' },
  'feast-hound': { name: 'Feast Hound', desc: 'A noble hunting dog loosed in the great hall.' },
  'court-poisoner': { name: 'Court Poisoner', desc: 'A scheming noble with venom in every cup.' },
  'heraldic-knight': { name: 'Heraldic Knight', desc: 'A sworn champion bearing the house sigil.' },
  castellan: { name: 'Castellan', desc: 'The castle steward who enforces the old ways.' },
  'throneless-heir': { name: 'Throneless Heir', desc: 'Boss of the castle — a pretender who betrays.' },

  // Castle Catacombs
  'crypt-ossuary': { name: 'Crypt Ossuary', desc: 'A bone-keeper guarding the interred remains.' },
  'wax-sealed-corpse': { name: 'Wax-Sealed Corpse', desc: 'A preserved cadaver leaking toxin.' },
  'nameless-echo': { name: 'Nameless Echo', desc: 'A forgotten spirit that erases identity.' },
  'tomb-stair-guard': { name: 'Tomb Stair Guard', desc: 'A sentinel blocking the descent.' },
  'first-interred': { name: 'First Interred', desc: 'The oldest burial, awakened with kingly wrath.' },
  'underground-king-gate': { name: 'Underground King Gate', desc: 'Boss of the catacombs — the sealed royal passage.' },

  // Underworld
  'pale-flame-wisp': { name: 'Pale Flame Wisp', desc: 'A ghostly ember drifting through the abyss.' },
  'market-of-the-dead-broker': { name: 'Dead Market Broker', desc: 'A spectral merchant extracting tolls from the living.' },
  'dirge-stone': { name: 'Dirge Stone', desc: 'A mourning idol that suppresses all resistance.' },
  'soul-shackler': { name: 'Soul Shackler', desc: 'A chain-warden binding souls in iron.' },
  'lord-of-cold-hearth': { name: 'Lord of Cold Hearth', desc: 'A frozen flame-lord of the underworld.' },
  'broken-stair-of-hades': { name: 'Broken Stair of Hades', desc: 'Boss of the underworld — the shattered descent.' },

  // Ghost Ferry
  'lethe-boatman': { name: 'Lethe Boatman', desc: 'A ferryman whose waters erase memory.' },
  'paper-lantern-shade': { name: 'Paper Lantern Shade', desc: 'A spectral light that scorches and saps.' },
  'tide-chanter': { name: 'Tide Chanter', desc: 'A singer whose waves grow with each verse.' },
  'coin-drowned': { name: 'Coin Drowned', desc: 'A waterlogged spirit pulling victims below.' },
  'ferryman-of-names': { name: 'Ferryman of Names', desc: 'A collector of identities on the dark river.' },
  'ferrymans-gate': { name: "Ferryman's Gate", desc: 'Boss of the ghost ferry — the passage between worlds.' },

  // Ocean Depths
  'bubble-eel': { name: 'Bubble Eel', desc: 'An electric deep-sea serpent.' },
  'whalebone-drifter': { name: 'Whalebone Drifter', desc: 'A calcified deep-ocean wanderer.' },
  'reef-stalker': { name: 'Reef Stalker', desc: 'A camouflaged predator that locks prey for the kill.' },
  'sunken-lamp-keeper': { name: 'Sunken Lamp Keeper', desc: 'A drowned sailor guarding forgotten depths.' },
  'deep-current-warden': { name: 'Deep Current Warden', desc: 'A colossal crustacean enforcing the ocean law.' },
  'abyss-maelstrom-gate': { name: 'Abyss Maelstrom Gate', desc: 'Boss of the ocean — a crushing vortex sentinel.' },

  // Atlantis
  'marble-sentinel': { name: 'Marble Sentinel', desc: 'A white stone guardian of the sunken city.' },
  'broken-column-shade': { name: 'Broken Column Shade', desc: 'A ghost lingering among fallen pillars.' },
  'bath-house-siren': { name: 'Bathhouse Siren', desc: 'A songstress whose melody drains will.' },
  'star-senate-scribe': { name: 'Star Senate Scribe', desc: 'A sunken legislator issuing cosmic decrees.' },
  'white-stone-archon': { name: 'White Stone Archon', desc: 'The ruling magistrate of the drowned court.' },
  'atlantean-court': { name: 'Atlantean Court', desc: 'Boss of Atlantis — the sunken throne in judgment.' },

  // Bell Tower
  'bell-acolyte': { name: 'Bell Acolyte', desc: 'A ringer-servant whose chimes herald doom.' },
  'echo-wraith': { name: 'Echo Wraith', desc: 'A resonant phantom born of tolling.' },
  'pendulum-blade': { name: 'Pendulum Blade', desc: 'A swinging razor suspended from the belfry.' },
  'bell-warden': { name: 'Bell Warden', desc: 'The chief keeper whose bells summon the dead.' },
  'silent-king': { name: 'Silent King', desc: 'Boss of the bell tower — the one who will not ring.' },

  // Neon Court
  'data-bailiff': { name: 'Data Bailiff', desc: 'A digital enforcer of algorithmic law.' },
  'memory-leech': { name: 'Memory Leech', desc: 'A parasite that siphons cognition and energy.' },
  'verdict-drone': { name: 'Verdict Drone', desc: 'A floating turret that marks targets for judgment.' },
  'neon-executioner': { name: 'Neon Executioner', desc: 'A high-frequency blade-arm dealing final verdicts.' },
  'neon-arbiter': { name: 'Neon Arbiter', desc: 'Boss of the neon court — supreme digital judge.' },

  // Demon Nest
  'brood-spawn': { name: 'Brood Spawn', desc: 'A larval horror that bites and multiplies.' },
  'pact-cultist': { name: 'Pact Cultist', desc: 'A devoted worshipper offering blood to the nest.' },
  'gore-fiend': { name: 'Gore Fiend', desc: 'A blood-mad demon that tears and corrodes.' },
  'nest-broodmother': { name: 'Nest Broodmother', desc: 'The egg-layer commanding the swarm.' },
  'demon-progenitor': { name: 'Demon Progenitor', desc: 'Boss of the demon nest — the origin of all spawn.' },

  // World Rampart
  'rampart-sentinel': { name: 'Rampart Sentinel', desc: 'A cosmic guardian of the final wall.' },
  'starfall-archer': { name: 'Starfall Archer', desc: 'A sniper raining meteoric arrows.' },
  'void-templar': { name: 'Void Templar', desc: 'A knight channeling the void between stars.' },
  'rampart-warden': { name: 'Rampart Warden', desc: 'The commanding officer of the world wall.' },
  'rampart-heart': { name: 'Rampart Heart', desc: 'Boss of the world rampart — the core of all barriers.' },

  // ═══════════════════════════════════════════════════════════════
  // FRONTIER ENEMIES — Desert
  // ═══════════════════════════════════════════════════════════════
  'sand-worm': { name: 'Sand Worm', desc: 'A burrowing leviathan that ambushes from below.' },
  'desert-raider': { name: 'Desert Raider', desc: 'A swift marauder blinding victims with sandstorms.' },
  'sandstone-golem': { name: 'Sandstone Golem', desc: 'A massive construct of hardened desert rock.' },
  'mummified-priest': { name: 'Mummified Priest', desc: 'An undead cleric invoking scorching curses.' },
  'sand-scorpion': { name: 'Sand Scorpion', desc: 'A venomous arachnid with crushing pincers.' },
  'sandstorm-wraith': { name: 'Sandstorm Wraith', desc: 'A wind-ghost that grinds with abrasive gales.' },
  'dune-tyrant': { name: 'Dune Tyrant', desc: 'A desert warlord wielding twin scimitars.' },
  'sand-sovereign': { name: 'Sand Sovereign', desc: 'Boss of the desert — the immortal ruler of sand.' },

  // Frontier Enemies — Meteor Ruins
  'meteor-acolyte': { name: 'Meteor Acolyte', desc: 'A zealot channeling cosmic energy.' },
  'void-hound': { name: 'Void Hound', desc: 'A phase-shifting predator from between dimensions.' },
  'starbone-knight': { name: 'Starbone Knight', desc: 'A knight armored in meteorite alloy.' },
  riftweaver: { name: 'Riftweaver', desc: 'A sorcerer tearing holes in reality.' },
  'cosmic-behemoth': { name: 'Cosmic Behemoth', desc: 'A titanic beast charged with stellar power.' },
  'terminus-warden': { name: 'Terminus Warden', desc: 'The gatekeeper of the final passage.' },
  'world-ender': { name: 'World Ender', desc: 'The final boss — harbinger of cosmic annihilation.' },

  // ═══════════════════════════════════════════════════════════════
  // LEGACY ENEMIES
  // ═══════════════════════════════════════════════════════════════
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

  // ═══════════════════════════════════════════════════════════════
  // RELICS
  // ═══════════════════════════════════════════════════════════════
  'ember-seal': { name: 'Ember Seal', desc: 'Gain 1 Strength at combat start.' },
  'coin-orbit': { name: 'Coin Orbit', desc: 'Gain 10 gold at combat end.' },
  'straw-charm': { name: 'Straw Charm', desc: 'Gain 5 block at combat start.' },
  'wolf-fang-totem': { name: 'Wolf Fang Totem', desc: 'Gain 1 Strength at combat start.' },
  'harvest-sickle': { name: 'Harvest Sickle', desc: 'Heal 4 HP at combat end.' },
  'antitoxin-charm': { name: 'Antitoxin Charm', desc: 'Cleanse all Venom at turn start.' },
  'sewer-filter-mask': { name: 'Sewer Filter Mask', desc: 'Cleanse Venom and Scorch at turn start.' },
  'croc-scale-guard': { name: 'Croc Scale Guard', desc: 'Gain 3 block at turn start.' },
  'royal-warrant': { name: 'Royal Warrant', desc: 'Energy cap +1 at combat start.' },
  'border-toll-coin': { name: 'Border Toll Coin', desc: 'Gain 18 gold at combat end.' },
  'gilded-aegis': { name: 'Gilded Aegis', desc: 'Gain 9 block at combat start.' },
  'blood-oath-band': { name: 'Blood Oath Band', desc: 'Gain 2 Strength at combat start.' },
  'gore-censer': { name: 'Gore Censer', desc: 'Apply 2 Scorch to all enemies at combat start.' },
  'desert-waterskin': { name: 'Desert Waterskin', desc: 'Heal 2 HP at turn start.' },
  'sunfire-idol': { name: 'Sunfire Idol', desc: 'Gain 3 Strength at combat start.' },
  'arcane-lens': { name: 'Arcane Lens', desc: 'Draw 2 cards at combat start.' },
  'bell-resonator': { name: 'Bell Resonator', desc: 'Apply 1 Vulnerable to all enemies at combat start.' },
  'sworn-bell': { name: 'Sworn Bell', desc: 'Gain 2 block at turn start.' },
  'chrome-capacitor': { name: 'Chrome Capacitor', desc: 'Energy cap +1 at combat start.' },
  'neon-coolant': { name: 'Neon Coolant', desc: 'Cleanse Scorch at turn start.' },
  'sky-anchor': { name: 'Sky Anchor', desc: 'Gain 8 block at combat start.' },
  'heraldic-sigil': { name: 'Heraldic Sigil', desc: 'Gain 2 Strength at combat start.' },
  'grave-lantern-relic': { name: 'Grave Lantern', desc: 'Heal 3 HP at turn start.' },
  'soul-ledger': { name: 'Soul Ledger', desc: 'Gain 25 gold at combat end.' },
  'ferry-toll-coin': { name: 'Ferry Toll Coin', desc: 'Draw 1 card at combat start.' },
  'pearl-of-pressure': { name: 'Pearl of Pressure', desc: 'Gain 6 block at combat start.' },
  'marble-heart': { name: 'Marble Heart', desc: 'Gain 10 block at combat start.' },
  'meteor-core': { name: 'Meteor Core', desc: 'Gain 3 Strength at combat start.' },
  'demon-pact-seal': { name: 'Demon Pact Seal', desc: 'Gain 1 energy at turn start.' },
  'world-rampart-stone': { name: 'World Rampart Stone', desc: 'Gain 4 block at turn start.' },

  // ═══════════════════════════════════════════════════════════════
  // POTIONS
  // ═══════════════════════════════════════════════════════════════
  'ember-tonic': { name: 'Ember Tonic', desc: 'Heal 12 HP.' },
  'iron-draught': { name: 'Iron Draught', desc: 'Gain 12 block.' },
  'rage-philtre': { name: 'Rage Philtre', desc: 'Gain 2 Strength.' },
  'energy-elixir': { name: 'Energy Elixir', desc: 'Gain 2 energy immediately.' },
  'draw-draught': { name: 'Draw Draught', desc: 'Draw 3 cards.' },
  'antivenom-flask': { name: 'Antivenom Flask', desc: 'Cleanse all Venom.' },
  'holy-water': { name: 'Holy Water', desc: 'Cleanse Venom and Scorch.' },
  'cleansing-tears': { name: 'Cleansing Tears', desc: 'Cleanse Venom, Scorch, Weak, and Vulnerable.' },
  'weakening-gas': { name: 'Weakening Gas', desc: 'Apply 2 Weak to all enemies.' },
  'acid-flask': { name: 'Acid Flask', desc: 'Apply 2 Brittle to all enemies.' },
  'venom-vial': { name: 'Venom Vial', desc: 'Apply 3 Venom to all enemies.' },
  'scorch-oil': { name: 'Scorch Oil', desc: 'Apply 3 Scorch to all enemies.' },
  'exposing-toll': { name: 'Exposing Toll', desc: 'Apply 3 Vulnerable to all enemies.' },
  'fire-bomb': { name: 'Fire Bomb', desc: 'Deal 10 damage to all enemies.' },
  'star-shard-bomb': { name: 'Star Shard Bomb', desc: 'Deal 8 damage twice to all enemies.' },
  'siege-charge': { name: 'Siege Charge', desc: 'Deal 24 damage to the front enemy.' },
  'blood-transfusion': { name: 'Blood Transfusion', desc: 'Heal 20 HP.' },
  'giant-brew': { name: 'Giant Brew', desc: 'Max HP +8 and heal 8 HP this combat.' },
  'atlantean-mist': { name: 'Atlantean Mist', desc: 'Gain 4 Regen.' },
  'sky-tonic': { name: 'Sky Tonic', desc: 'Gain 16 block.' },
  'demon-ichor': { name: 'Demon Ichor', desc: 'Gain 3 Strength.' },
  'bell-toll-potion': { name: 'Bell Toll Potion', desc: 'Apply 3 Vulnerable and deal 4 damage to all enemies.' },

  // ═══════════════════════════════════════════════════════════════
  // STATUSES
  // ═══════════════════════════════════════════════════════════════
  strength: { name: 'Strength' },
  weak: { name: 'Weak' },
  vulnerable: { name: 'Vulnerable' },
  regen: { name: 'Regen' },
  scorch: { name: 'Scorch' },
  venom: { name: 'Venom' },
  brittle: { name: 'Brittle' },
  sap: { name: 'Sap' },
  ember: { name: 'Ember' },
  pack: { name: 'Pack' },
  'bell-mark-status': { name: 'Bell Mark' },
  stance: { name: 'Stance' },
  disorder: { name: 'Disorder' },
  'meteor-energy': { name: 'Meteor Energy' },
  'cosmic-erosion': { name: 'Cosmic Erosion' },
};

export function entityEn(id: string): { name: string; desc?: string } | undefined {
  return ENTITY_EN[id];
}
