import SkyblockInventoryItem from './SkyblockInventoryItem';

type TrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
type DungeonClass = 'healer' | 'mage' | 'berserk' | 'archer' | 'tank';
type CrimsonIsleFactions = 'mages' | 'barbarians';
type CrimsonIsleBelt = 'White' | 'Yellow' | 'Green' | 'Blue' | 'Brown' | 'Black';
type CrimsonIsleDojoRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'F';

interface Equipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

interface Armor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

interface MemberStatsCandyCollected {
  green: number;
  purple: number;
  total: number;
}

interface MemberStatsFestival {
  year: number;
  collected: MemberStatsCandyCollected;
}

interface MemberStatsCandy extends MemberStatsCandyCollected {
  festivals: MemberStatsFestival[];
}

interface MemberStatsPetMilestones {
  oresMinned: number;
  seaCreaturesKilled: number;
}

interface MemberStatsAuctionsStats {
  uncommon: number;
  common: number;
  rare: number;
  epic: number;
  legendary: number;
  special: number;
  mythic: number;
  total: number;
}

interface MemberStatsAuctions {
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

interface MemberStatsGifts {
  given: number;
  received: number;
}

interface MemberStatsFishing {
  total: number;
  normal: number;
  tresure: number;
  largeTresure: number;
}

interface MemberStatsBurrow {
  total: number;
  common: number;
}

interface MemberStatsMythos {
  kills: number;
  burrowsDugNext: MemberStatsBurrow;
  burrowsDugCombat: MemberStatsBurrow;
  burrowsDugTreasure: MemberStatsBurrow;
  burrowsDugComplate: MemberStatsBurrow;
}

type Rarity = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' | 'DIVINE' | 'SPECIAL' | 'VERY_SPECIAL';

interface JacobDataMedals {
  gold: number;
  silver: number;
  bronze: number;
}

interface JacobDataPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
}

interface JacobData {
  medals: JacobDataMedals;
  perks: JacobDataPerks;
  contests: Record<string, any>;
}

interface ChocolateFactoryDataEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
}

interface ChocolateFactoryDataChocolate {
  current: number;
  total: number;
  sincePrestige: number;
}

interface ChocolateFactoryDataTimeTower {
  charges: number;
  level: number;
}

interface ChocolateFactoryDataUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
}

interface ChocolateFactoryDataGoldenClick {
  amount: number;
  year: number;
}

interface ChocolateFactoryData {
  employees: ChocolateFactoryDataEmployees;
  chocolate: ChocolateFactoryDataChocolate;
  timeTower: ChocolateFactoryDataTimeTower;
  upgrades: ChocolateFactoryDataUpgrades;
  goldenClick: ChocolateFactoryDataGoldenClick;
  barnCapacity: number;
  prestige: number;
}

interface SlayerData {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}

interface Slayer {
  zombie: SlayerData;
  spider: SlayerData;
  wolf: SlayerData;
  enderman: SlayerData;
  blaze: SlayerData;
  vampire: SlayerData;
}
interface SkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}

interface Skills {
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

interface RawDungeonRun {
  timestamp: number;
  score_exploration: number;
  score_speed: number;
  score_skill: number;
  score_bonus: number;
  dungeon_class: DungeonClass;
  teammates: string[];
  elapsed_time: number;
  damage_dealt: number;
  deaths: number;
  mobs_killed: number;
  secrets_found: number;
  damage_mitigated: number;
  ally_healing: number;
}

interface DungeonsFloorStats {
  fastestRun: RawDungeonRun;
  fastestSRun: RawDungeonRun;
  fastestSPlusRun: RawDungeonRun;
  completions: number;
}

interface DungeonsFloors {
  entrance: DungeonsFloorStats;
  floor1: DungeonsFloorStats;
  floor2: DungeonsFloorStats;
  floor3: DungeonsFloorStats;
  floor4: DungeonsFloorStats;
  floor5: DungeonsFloorStats;
  floor6: DungeonsFloorStats;
  floor7: DungeonsFloorStats;
  masterMode1: DungeonsFloorStats;
  masterMode2: DungeonsFloorStats;
  masterMode3: DungeonsFloorStats;
  masterMode4: DungeonsFloorStats;
  masterMode5: DungeonsFloorStats;
  masterMode6: DungeonsFloorStats;
  masterMode7: DungeonsFloorStats;
}

interface DungeonsClasses {
  healer: SkillLevel;
  mage: SkillLevel;
  berserk: SkillLevel;
  archer: SkillLevel;
  tank: SkillLevel;
  selected: DungeonClass;
}

interface DungeonsEssence {
  diamond: number;
  dragon: number;
  spider: number;
  wither: number;
  undead: number;
  gold: number;
  ice: number;
  crimson: number;
}
interface DungeonsCompletions {
  catacombs: Record<string, number>;
  masterMode: Record<string, number>;
}

interface Dungeons {
  experience: SkillLevel;
  secrets: number;
  completions: DungeonsCompletions;
  floors: DungeonsFloors;
  classes: DungeonsClasses;
  essence: DungeonsEssence;
}

interface CrimsonIsleKuudra {
  none: number;
  hot: number;
  burning: number;
  fiery: number;
  highestWaveHot: number;
  highestWaveFiery: number;
  infernal: number;
  highestWaveInfernal: number;
  highestWaveBurning: number;
}

interface CrimsonIsleReputation {
  mages: number;
  barbarians: number;
}

interface CrimsonIsleTrophyFishCaught {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
}

interface CrimsonIsleTrophyFish {
  rank: TrophyFishRank;
  caught: CrimsonIsleTrophyFishCaught;
}

interface CrimsonIsleDojoMinigame {
  points: number;
  rank: CrimsonIsleDojoRank;
}

interface CrimsonIsleDojo {
  belt: CrimsonIsleBelt;
  force: CrimsonIsleDojoMinigame;
  stamina: CrimsonIsleDojoMinigame;
  mastery: CrimsonIsleDojoMinigame;
  discipline: CrimsonIsleDojoMinigame;
  swiftness: CrimsonIsleDojoMinigame;
  control: CrimsonIsleDojoMinigame;
  tenacity: CrimsonIsleDojoMinigame;
}

interface CrimsonIsle {
  faction: CrimsonIsleFactions | null;
  reputation: CrimsonIsleReputation;
  trophyFish: CrimsonIsleTrophyFish;
  dojo: CrimsonIsleDojo;
  kuudra: CrimsonIsleKuudra;
}

interface HOTMPowderData {
  spent: number;
  current: number;
  total: number;
}

interface HOTMPowder {
  mithril: HOTMPowderData;
  gemstone: HOTMPowderData;
  glacite: HOTMPowderData;
}

interface HOTM {
  experience: SkillLevel;
  ability: string;
  powder: HOTMPowder;
}
