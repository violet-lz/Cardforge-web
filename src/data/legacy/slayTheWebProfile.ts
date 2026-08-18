export const SLAY_THE_WEB_MAP_PROFILE = {
  width: 6,
  contentFloors: 10,
  totalFloors: 12,
  minRoomsPerFloor: 3,
  maxRoomsPerFloor: 4,
  customPathColumns: [0, 2, 3, 5] as const,
  defaultRoomWeights: { combat: 60, rest: 20, elite: 20 },
  floorRules: {
    firstTwo: ['combat'] as const,
    third: ['combat', 'rest'] as const,
    higher: ['combat', 'combat', 'elite', 'elite', 'rest'] as const,
  },
} as const;

export const SLAY_THE_WEB_COMBAT_PROFILE = {
  playerMaxHp: 72,
  maximumEnergy: 3,
  energyPerTurn: 3,
  drawPerTurn: 5,
  weakMultiplier: 0.75,
  vulnerableMultiplier: 1.5,
  rewardCardCount: 3,
  rewardGold: 0,
} as const;

export const SLAY_THE_WEB_AVAILABLE_SYSTEMS = {
  events: false,
  equipmentOrRelics: false,
  potions: false,
  shopOrGoldEconomy: false,
  campfireChoicesImplemented: false,
} as const;