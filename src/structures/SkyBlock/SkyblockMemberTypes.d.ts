import SkyblockInventoryItem from './SkyblockInventoryItem';

export interface Equipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

export interface Armor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

export interface MemberStatsCandyCollected {
  green: number;
  purple: number;
  total: number;
}

export interface MemberStatsFestival {
  year: number;
  collected: MemberStatsCandyCollected;
}

export interface MemberStatsCandy extends MemberStatsCandyCollected {
  festivals: MemberStatsFestival[];
}

export interface MemberStatsPetMilestones {
  oresMinned: number;
  seaCreaturesKilled: number;
}

export interface MemberStatsAuctionsStats {
  uncommon: number;
  common: number;
  rare: number;
  epic: number;
  legendary: number;
  special: number;
  mythic: number;
  total: number;
}

export interface MemberStatsAuctions {
  bids: number;
  highestBid: number;
  goldSpent: number;
  goldEarnt: number;
  auctionsWon: number;
  auctionsCompleted: number;
  auctionsCreated: number;
  auctionFees: number;
  auctionsWithOutBids: number;
  sold: MemberStatsAuctionsStats;
  bought: MemberStatsAuctionsStats;
}

export interface MemberStatsGifts {
  given: number;
  received: number;
}

export interface MemberStatsFishing {
  total: number;
  normal: number;
  tresure: number;
  largeTresure: number;
}

export interface MemberStatsBurrow {
  total: number;
  common: number;
}

export interface MemberStatsMythos {
  kills: number;
  burrowsDugNext: MemberStatsBurrow;
  burrowsDugCombat: MemberStatsBurrow;
  burrowsDugTreasure: MemberStatsBurrow;
  burrowsDugComplate: MemberStatsBurrow;
}

export type Rarity =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'DIVINE'
  | 'SPECIAL'
  | 'VERY_SPECIAL';

export interface JacobDataMedals {
  gold: number;
  silver: number;
  bronze: number;
}

export interface JacobDataPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
}

export interface JacobData {
  medals: JacobDataMedals;
  perks: JacobDataPerks;
  contests: Record<string, any>;
}

export interface ChocolateFactoryDataEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
}

export interface ChocolateFactoryDataChocolate {
  current: number;
  total: number;
  sincePrestige: number;
}

export interface ChocolateFactoryDataTimeTower {
  charges: number;
  level: number;
}

export interface ChocolateFactoryDataUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
}

export interface ChocolateFactoryDataGoldenClick {
  amount: number;
  year: number;
}

export interface ChocolateFactoryData {
  employees: ChocolateFactoryDataEmployees;
  chocolate: ChocolateFactoryDataChocolate;
  timeTower: ChocolateFactoryDataTimeTower;
  upgrades: ChocolateFactoryDataUpgrades;
  goldenClick: ChocolateFactoryDataGoldenClick;
  barnCapacity: number;
  prestige: number;
}

export interface SlayerLevel {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}

export interface Slayer {
  zombie: SlayerLevel;
  spider: SlayerLevel;
  wolf: SlayerLevel;
  enderman: SlayerLevel;
  blaze: SlayerLevel;
  vampire: SlayerLevel;
}
export type TrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
export interface SkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}

export interface Skills {
  combat: SkillLevel;
  farming: SkillLevel;
  fishing: SkillLevel;
  mining: SkillLevel;
  foraging: SkillLevel;
  enchanting: SkillLevel;
  alchemy: SkillLevel;
  carpentry: SkillLevel;
  runecrafting: SkillLevel;
  taming: SkillLevel;
  social: SkillLevel;
  average: number;
}

export interface DungeonsTypes {
  catacombs: SkillLevel;
}

export interface DungeonsClasses {
  healer: SkillLevel;
  mage: SkillLevel;
  berserk: SkillLevel;
  archer: SkillLevel;
  tank: SkillLevel;
}

export interface Dungeons {
  types: DungeonsTypes;
  classes: DungeonsClasses;
}
