import SkyblockInventoryItem from '../structures/SkyBlock/SkyblockInventoryItem';
import PitInventoryItem from '../structures/MiniGames/PitInventoryItem';
import Cache from '../Private/defaultCache';

export interface ClientOptions {
  cache?: boolean;
  hypixelCacheTime?: number;
  mojangCacheTime?: number;
  cacheHandler?: Cache;
  rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  syncWithHeaders?: boolean;
  keyLimit?: number;
  cacheSize?: number;
  silent?: boolean;
  headers?: object;
  checkForUpdates?: boolean;
  useThirdPartyAPI?: boolean | string;
}

export interface UpdateHandler {
  checkForUpdates(): void;
  compare(a: string, b: string): number;
}

export interface ExpHistory {
  day: string;
  date: Date | undefined;
  exp: number;
  totalExp: number;
}

export type GameString =
  | 'Quake Craft'
  | 'Walls'
  | 'Paintball'
  | 'Blitz Survival Games'
  | 'The TNT Games'
  | 'VampireZ'
  | 'Mega Walls'
  | 'Arcade'
  | 'Arena Brawl'
  | 'UHC Champions'
  | 'Cops and Crims'
  | 'Warlords'
  | 'Smash Heroes'
  | 'Turbo Kart Racers'
  | 'Housing'
  | 'SkyWars'
  | 'Crazy Walls'
  | 'Speed UHC'
  | 'SkyClash'
  | 'Classic Games'
  | 'Prototype'
  | 'Bed Wars'
  | 'Murder Mystery'
  | 'Build Battle'
  | 'Duels'
  | 'SkyBlock'
  | 'The Pit'
  | 'Replay'
  | 'SMP'
  | 'Wool Wars'
  | 'Limbo'
  | 'Queue'
  | 'Main Lobby'
  | 'Tournament Lobby'
  | 'Idle';

export type GameCode =
  | 'QUAKECRAFT'
  | 'WALLS'
  | 'PAINTBALL'
  | 'SURVIVAL_GAMES'
  | 'TNTGAMES'
  | 'VAMPIREZ'
  | 'WALLS3'
  | 'ARCADE'
  | 'ARENA'
  | 'UHC'
  | 'MCGO'
  | 'BATTLEGROUND'
  | 'SUPER_SMASH'
  | 'GINGERBREAD'
  | 'HOUSING'
  | 'SKYWARS'
  | 'TRUE_COMBAT'
  | 'SPEED_UHC'
  | 'SKYCLASH'
  | 'LEGACY'
  | 'PROTOTYPE'
  | 'BEDWARS'
  | 'MURDER_MYSTERY'
  | 'BUILD_BATTLE'
  | 'DUELS'
  | 'SKYBLOCK'
  | 'PIT'
  | 'REPLAY'
  | 'SMP'
  | 'WOOL_GAMES'
  | 'LIMBO'
  | 'QUEUE'
  | 'MAIN_LOBBY'
  | 'TOURNAMENT_LOBBY'
  | 'IDLE';

export type GameID =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 13
  | 14
  | 17
  | 20
  | 21
  | 23
  | 24
  | 25
  | 26
  | 51
  | 52
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 63
  | 64
  | 65
  | 67
  | 68
  | -2
  | -3
  | -4
  | -5
  | -6;

export interface LevelProgress {
  xpToNext: number;
  remainingXP: number;
  currentXP: number;
  percent: number;
  percentRemaining: number;
}

export interface PlayerSocialMedia {
  name: string;
  link: string;
  id: string;
}

export interface SkyblockSkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}
export interface SkyblockMemberSkills {
  combat: SkyblockSkillLevel;
  farming: SkyblockSkillLevel;
  fishing: SkyblockSkillLevel;
  mining: SkyblockSkillLevel;
  foraging: SkyblockSkillLevel;
  enchanting: SkyblockSkillLevel;
  alchemy: SkyblockSkillLevel;
  carpentry: SkyblockSkillLevel;
  runecrafting: SkyblockSkillLevel;
  taming: SkyblockSkillLevel;
  social: SkyblockSkillLevel;
  average: number;
}

export interface SkyblockMemberSlayerLevel {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}

export interface SkyblockMemberSlayer {
  zombie: SkyblockMemberSlayerLevel;
  spider: SkyblockMemberSlayerLevel;
  wolf: SkyblockMemberSlayerLevel;
  enderman: SkyblockMemberSlayerLevel;
  blaze: SkyblockMemberSlayerLevel;
  vampire: SkyblockMemberSlayerLevel;
}

export interface SkyblockMemberDungeonsTypes {
  catacombs: SkyblockSkillLevel;
}

export interface SkyblockMemberDungeonsClasses {
  healer: SkyblockSkillLevel;
  mage: SkyblockSkillLevel;
  berserk: SkyblockSkillLevel;
  archer: SkyblockSkillLevel;
  tank: SkyblockSkillLevel;
}

export interface SkyblockMemberDungeons {
  types: SkyblockMemberDungeonsTypes;
  classes: SkyblockMemberDungeonsClasses;
}

export interface SkyblockMemberJacobDataMedals {
  gold: number;
  silver: number;
  bronze: number;
}

export interface SkyblockMemberJacobDataPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
}

export interface SkyblockMemberJacobData {
  medals: SkyblockMemberJacobDataMedals;
  perks: SkyblockMemberJacobDataPerks;
  contests: Record<string, any>;
}

export interface SkyblockMemberChocolateFactoryDataEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
}

export interface SkyblockMemberChocolateFactoryDataChocolate {
  current: number;
  total: number;
  sincePrestige: number;
}

export interface SkyblockMemberChocolateFactoryDataTimeTower {
  charges: number;
  level: number;
}

export interface SkyblockMemberChocolateFactoryDataUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
}

export interface SkyblockMemberChocolateFactoryDataGoldenClick {
  amount: number;
  year: number;
}

export interface SkyblockMemberChocolateFactoryData {
  employees: SkyblockMemberChocolateFactoryDataEmployees;
  chocolate: SkyblockMemberChocolateFactoryDataChocolate;
  timeTower: SkyblockMemberChocolateFactoryDataTimeTower;
  upgrades: SkyblockMemberChocolateFactoryDataUpgrades;
  goldenClick: SkyblockMemberChocolateFactoryDataGoldenClick;
  barnCapacity: number;
  prestige: number;
}

export interface PlayerInfo {
  max: number;
  online: number;
  players: any[];
  toString(): string;
}

export type PlayerRank = 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'MVP++' | 'Game Master' | 'Admin' | 'YouTube';

export interface RanksPurchaseTime {
  VIP: Date | null;
  VIP_PLUS: Date | null;
  MVP: Date | null;
  MVP_PLUS: Date | null;
}

export interface PetConsumables {
  BAKED_POTATO: number;
  COOKIE: number;
  FEATHER: number;
  HAY_BLOCK: number;
  SLIME_BALL: number;
  COOKED_BEEF: number;
  RED_ROSE: number;
  WATER_BUCKET: number;
  MELON: number;
  STICK: number;
  WOOD_SWORD: number;
  MILK_BUCKET: number;
  GOLD_RECORD: number;
  LEASH: number;
  LAVA_BUCKET: number;
  BONE: number;
  MAGMA_CREAM: number;
  WHEAT: number;
  MUSHROOM_SOUP: number;
  BREAD: number;
  PUMPKIN_PIE: number;
  APPLE: number;
  CARROT_ITEM: number;
  RAW_FISH: number;
  PORK: number;
  CAKE: number;
  ROTTEN_FLESH: number;
}

export type BedWarsPrestige =
  | 'Stone'
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Iron Prime'
  | 'Gold Prime'
  | 'Diamond Prime'
  | 'Emerald Prime'
  | 'Sapphire Prime'
  | 'Ruby Prime'
  | 'Crystal Prime'
  | 'Opal Prime'
  | 'Amethyst Prime'
  | 'Mirror'
  | 'Light'
  | 'Dawn'
  | 'Dusk'
  | 'Air'
  | 'Wind'
  | 'Nebula'
  | 'Thunder'
  | 'Earth'
  | 'Water'
  | 'Fire'
  | 'Sunrise'
  | 'Eclipse'
  | 'Gamma'
  | 'Majestic'
  | 'Andesine'
  | 'Marine'
  | 'Element'
  | 'Galaxy'
  | 'Atomic'
  | 'Sunset'
  | 'Time'
  | 'Winter'
  | 'Obsidian'
  | 'Spring'
  | 'Ice'
  | 'Summer'
  | 'Spinel'
  | 'Autumn'
  | 'Mystic'
  | 'Eternal';

export interface BedWarsCollectedItems {
  iron: number;
  gold: number;
  diamond: number;
  emerald: number;
}

export interface BedWarsAvg {
  kills: number;
  finalKills: number;
  bedsBroken: number;
}

export interface BedWarsBeds {
  lost: number;
  broken: number;
  BLRatio: number;
}

export interface BedWarsModeStats {
  winstreak: number;
  playedGames: number;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  finalKills: number;
  finalDeaths: number;
  beds: BedWarsBeds;
  avg: BedWarsAvg;
  KDRatio: number;
  WLRatio: number;
  finalKDRatio: number;
}
export interface BedwarsDreamModeStats {
  doubles: BedWarsModeStats;
  fours: BedWarsModeStats;
}

export interface BedwarsDreamStats {
  ultimate: BedwarsDreamModeStats;
  rush: BedwarsDreamModeStats;
  armed: BedwarsDreamModeStats;
  lucky: BedwarsDreamModeStats;
  voidless: BedwarsDreamModeStats;
}

export interface BedWarsPracticeAttempts {
  failed: number;
  successful: number;
  total: number;
}

export interface BedWarsPracticeElevation {
  straight: number;
  diagonal: number;
}

export interface BedWarsPracticeElevations {
  none: BedWarsPracticeElevation;
  slight: BedWarsPracticeElevation;
  staircase: BedWarsPracticeElevation;
}

export interface BedWarsPracticeRecord {
  elevation: BedWarsPracticeElevations;
}

export interface BedWarsPracticeRecords {
  blocks30: BedWarsPracticeRecord;
  blocks50: BedWarsPracticeRecord;
  blocks100: BedWarsPracticeRecord;
}

export interface BedWarsPracticeBridging {
  blocksPlaced: number;
  attempts: BedWarsPracticeAttempts;
  records: BedWarsPracticeRecords;
}

export interface BedWarsPracticePearlClutching {
  attempts: BedWarsPracticeAttempts;
}

export interface BedWarsPracticeBase {
  blocksPlaced: number;
  attempts: BedWarsPracticeAttempts;
}

export interface BedWarsPracticeStats {
  selected: string;
  bridging: BedWarsPracticeBridging;
  fireballJumping: BedWarsPracticeBase;
  pearlClutching: BedWarsPracticePearlClutching;
  mlg: BedWarsPracticeBase;
}

export interface BuildBattleWins {
  solo: number;
  teams: number;
  pro: number;
  gtb: number;
}

export interface PitArmor {
  helmet: PitInventoryItem | null;
  chestplate: PitInventoryItem | null;
  leggings: PitInventoryItem | null;
  boots: PitInventoryItem | null;
}

export type SkyWarsPrestige =
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Mythic';

export type SkyWarsPrestigeIcons =
  | '⋆'
  | '★'
  | '☆'
  | '⁕'
  | '✶'
  | '✳'
  | '✴'
  | '✷'
  | '❋'
  | '✼'
  | '❂'
  | '❁'
  | '☬'
  | '✙'
  | '❤️'
  | '☠'
  | '✦'
  | '✌'
  | '❦'
  | '✵'
  | '❣'
  | '☯'
  | '✺'
  | 'ಠ_ಠ'
  | '⚔';

export interface WoolWarsStats {
  wins: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  assists: number;
  powerups: number;
}

export interface WoolWarsPrivateGamesConfig {
  one_hit_one_kil: boolean;
  rainbow_wool: 'Enabled' | 'Disabled';
  health_buff: string;
  game_speed: string;
  speed: string;
  no_class: 'Enabled' | 'Disabled';
  respawn_enable: boolean;
}

export interface QuestObjective {
  id: string;
  type: 'Integer' | 'Boolean';
  amountNeeded: number;
}

export interface QuestReward {
  type: string;
  amount: number;
}

export interface ChallengeData {
  id: string;
  name: string;
  reward: number;
  rewardType: string;
}

export type StaticGameNames =
  | 'arcade'
  | 'arena'
  | 'bedwars'
  | 'hungergames'
  | 'buildbattle'
  | 'truecombat'
  | 'duels'
  | 'mcgo'
  | 'murdermystery'
  | 'paintball'
  | 'quake'
  | 'skyclash'
  | 'skywars'
  | 'supersmash'
  | 'speeduhc'
  | 'gingerbread'
  | 'tntgames'
  | 'uhc'
  | 'vampirez'
  | 'walls3'
  | 'walls'
  | 'battleground'
  | 'woolgames';

export type SkyblockGemstoneQuality = 'Rough' | 'Flawed' | 'Fine' | 'Flawless' | 'Perfect';

export type SkyblockRarity =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'DIVINE'
  | 'SPECIAL'
  | 'VERY_SPECIAL';

export interface SkyblockGardenVisitorServed {
  total: number;
  unique: number;
}
export interface SkyblockGardenVisitor {
  visited: Record<string, number>;
  completed: Record<string, number>;
  served: SkyblockGardenVisitorServed;
}

export interface SkyblockGardenComposterUpgrades {
  speed: number;
  multiDrop: number;
  fuelCap: number;
  organicMatterCap: number;
  costReduction: number;
}

export interface SkyblockGardenComposter {
  organicMatter: number;
  fuelUnits: number;
  compostUnits: number;
  compostItems: number;
  conversionTicks: number;
  upgrades: SkyblockGardenComposterUpgrades;
}

export interface SkyblockGarenCrops {
  wheat: number;
  carrot: number;
  sugarCane: number;
  potato: number;
  pumpkin: number;
  melon: number;
  cactus: number;
  cocoBeans: number;
  mushroom: number;
  netherWart: number;
}

export interface SkyblockGardenCropMilestones {
  wheat: SkyblockSkillLevel;
  carrot: SkyblockSkillLevel;
  sugarCane: SkyblockSkillLevel;
  potato: SkyblockSkillLevel;
  pumpkin: SkyblockSkillLevel;
  melon: SkyblockSkillLevel;
  cactus: SkyblockSkillLevel;
  cocoBeans: SkyblockSkillLevel;
  mushroom: SkyblockSkillLevel;
  netherWart: SkyblockSkillLevel;
}

export type SkyblockMemberTrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';

export interface SkyblockMemberEquipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

export interface SkyblockMemberArmor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

export interface SkyblockMemberStats {
  kills: Record<string, any>;
  deaths: Record<string, any>;
}

export interface PlayerBingoDataPerEvent {
  eventId: number;
  points: number;
  enrichedGoals: boolean;
  goalsCompleted: Bingo[] | string[];
}

export interface ProductStatus {
  sellPrice: number;
  buyPrice: number;
  sellVolume: number;
  buyVolume: number;
  sellMovingWeek: number;
  buyMovingWeek: number;
  sellOrders: number;
  buyOrders: number;
}
