export interface ClientOptions {
  cache?: boolean;
  hypixelCacheTime?: number;
  mojangCacheTime?: number;
  cacheHandler?: CacheHandler;
  rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  syncWithHeaders?: boolean;
  keyLimit?: number;
  cacheSize?: number;
  silent?: boolean;
  headers?: object;
  checkForUpdates?: boolean;
  useThirdPartyAPI?: boolean | string;
}

export interface CacheHandler {
  set(key: string, value: any): void;
  get(key: string): any;
  has(key: string): boolean;
  delete(key: string): void;
  keys(): string[];
  size(): number;
  clear(): void;
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
