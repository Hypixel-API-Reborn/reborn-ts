import { GameCode, GameID, GameString } from '../Types/Game.js';
import type { DuelsBaseDivision } from '../Types/Player.js';

export const games: { id: GameID; code: GameCode; name: GameString }[] = [
  { id: 2, code: 'QUAKECRAFT', name: 'Quake' },
  { id: 3, code: 'WALLS', name: 'Walls' },
  { id: 4, code: 'PAINTBALL', name: 'Paintball' },
  { id: 5, code: 'SURVIVAL_GAMES', name: 'Blitz Survival Games' },
  { id: 6, code: 'TNTGAMES', name: 'TNT Games' },
  { id: 7, code: 'VAMPIREZ', name: 'VampireZ' },
  { id: 13, code: 'WALLS3', name: 'Mega Walls' },
  { id: 14, code: 'ARCADE', name: 'Arcade' },
  { id: 17, code: 'ARENA', name: 'Arena' },
  { id: 20, code: 'UHC', name: 'UHC Champions' },
  { id: 21, code: 'MCGO', name: 'Cops and Crims' },
  { id: 23, code: 'BATTLEGROUND', name: 'Warlords' },
  { id: 24, code: 'SUPER_SMASH', name: 'Smash Heroes' },
  { id: 25, code: 'GINGERBREAD', name: 'Turbo Kart Racers' },
  { id: 26, code: 'HOUSING', name: 'Housing' },
  { id: 51, code: 'SKYWARS', name: 'SkyWars' },
  { id: 52, code: 'TRUE_COMBAT', name: 'Crazy Walls' },
  { id: 54, code: 'SPEED_UHC', name: 'Speed UHC' },
  { id: 55, code: 'SKYCLASH', name: 'SkyClash' },
  { id: 56, code: 'LEGACY', name: 'Classic Games' },
  { id: 57, code: 'PROTOTYPE', name: 'Prototype' },
  { id: 58, code: 'BEDWARS', name: 'Bed Wars' },
  { id: 59, code: 'MURDER_MYSTERY', name: 'Murder Mystery' },
  { id: 60, code: 'BUILD_BATTLE', name: 'Build Battle' },
  { id: 61, code: 'DUELS', name: 'Duels' },
  { id: 63, code: 'SKYBLOCK', name: 'SkyBlock' },
  { id: 64, code: 'PIT', name: 'Pit' },
  { id: 65, code: 'REPLAY', name: 'Replay' },
  { id: 67, code: 'SMP', name: 'SMP' },
  { id: 68, code: 'WOOL_GAMES', name: 'Wool Wars' }
];

export const duelsDivisions: { name: DuelsBaseDivision; key: string }[] = [
  { name: 'Rookie', key: 'rookie' },
  { name: 'Iron', key: 'iron' },
  { name: 'Gold', key: 'gold' },
  { name: 'Diamond', key: 'diamond' },
  { name: 'Master', key: 'master' },
  { name: 'Legend', key: 'legend' },
  { name: 'Grandmaster', key: 'grandmaster' },
  { name: 'Godlike', key: 'godlike' },
  { name: 'Celestial', key: 'celestial' },
  { name: 'Divine', key: 'divine' },
  { name: 'Ascended', key: 'ascended' }
];

export const MiniGamesString: { [key: string]: string } = {
  QUAKECRAFT: 'Quakecraft',
  WALLS: 'Walls',
  PAINTBALL: 'Paintball',
  SURVIVAL_GAMES: 'Blitz Survival Games',
  TNTGAMES: 'The TNT Games',
  VAMPIREZ: 'VampireZ',
  WALLS3: 'Mega Walls',
  ARCADE: 'Arcade',
  ARENA: 'Arena Brawl',
  MCGO: 'Cops and Crims',
  UHC: 'UHC Champions',
  BATTLEGROUND: 'Warlords',
  SUPER_SMASH: 'Smash Heroes',
  GINGERBREAD: 'Turbo Kart Racers',
  HOUSING: 'Housing',
  SKYWARS: 'SkyWars',
  TRUE_COMBAT: 'Crazy Walls',
  SPEED_UHC: 'Speed UHC',
  SKYCLASH: 'SkyClash',
  LEGACY: 'Classic Games',
  PROTOTYPE: 'Prototype',
  BEDWARS: 'BedWars',
  MURDER_MYSTERY: 'Murder Mystery',
  BUILD_BATTLE: 'Build Battle',
  DUELS: 'Duels',
  PIT: 'The Pit',
  SKYBLOCK: 'SkyBlock',
  REPLAY: 'Replay',
  LIMBO: 'Limbo',
  IDLE: 'Idle',
  QUEUE: 'Queue',
  MAIN_LOBBY: 'Main Lobby',
  TOURNAMENT_LOBBY: 'Tournament Lobby',
  WOOL_GAMES: 'Wool Wars'
};

// Credits (pit) https://github.com/PitPanda/PitPandaProduction/blob/b1971f56ea1aa8c829b722cbb33247c96591c0cb/structures/Pit.js

interface PitPrestigeData {
  Multiplier: number;
  TotalXp: number;
  SumXp: number;
  GoldReq: number;
  Renown: number;
}
interface PitLevelData {
  Xp: number;
}

export const pit: { Prestiges: PitPrestigeData[]; Levels: PitLevelData[] } = {
  Prestiges: [
    { Multiplier: 1, TotalXp: 65950, SumXp: 65950, GoldReq: 10000, Renown: 0 },
    { Multiplier: 1.1, TotalXp: 72560, SumXp: 138510, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.2, TotalXp: 79170, SumXp: 217680, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.3, TotalXp: 85750, SumXp: 303430, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.4, TotalXp: 92330, SumXp: 395760, GoldReq: 30000, Renown: 10 },
    { Multiplier: 1.5, TotalXp: 98940, SumXp: 494700, GoldReq: 35000, Renown: 10 },
    { Multiplier: 1.75, TotalXp: 115440, SumXp: 610140, GoldReq: 40000, Renown: 20 },
    { Multiplier: 2, TotalXp: 131900, SumXp: 742040, GoldReq: 45000, Renown: 20 },
    { Multiplier: 2.5, TotalXp: 164890, SumXp: 906930, GoldReq: 50000, Renown: 20 },
    { Multiplier: 3, TotalXp: 197850, SumXp: 1104780, GoldReq: 60000, Renown: 20 },
    { Multiplier: 4, TotalXp: 263800, SumXp: 1368580, GoldReq: 70000, Renown: 20 },
    { Multiplier: 5, TotalXp: 329750, SumXp: 1698330, GoldReq: 80000, Renown: 30 },
    { Multiplier: 6, TotalXp: 395700, SumXp: 2094030, GoldReq: 90000, Renown: 30 },
    { Multiplier: 7, TotalXp: 461650, SumXp: 2555680, GoldReq: 100000, Renown: 30 },
    { Multiplier: 8, TotalXp: 527600, SumXp: 3083280, GoldReq: 125000, Renown: 30 },
    { Multiplier: 9, TotalXp: 593550, SumXp: 3676830, GoldReq: 150000, Renown: 30 },
    { Multiplier: 10, TotalXp: 659500, SumXp: 4336330, GoldReq: 175000, Renown: 40 },
    { Multiplier: 12, TotalXp: 791400, SumXp: 5127730, GoldReq: 200000, Renown: 40 },
    { Multiplier: 14, TotalXp: 923300, SumXp: 6051030, GoldReq: 250000, Renown: 40 },
    { Multiplier: 16, TotalXp: 1055200, SumXp: 7106230, GoldReq: 300000, Renown: 40 },
    { Multiplier: 18, TotalXp: 1187100, SumXp: 8293330, GoldReq: 350000, Renown: 40 },
    { Multiplier: 20, TotalXp: 1319000, SumXp: 9612330, GoldReq: 400000, Renown: 50 },
    { Multiplier: 24, TotalXp: 1582800, SumXp: 11195130, GoldReq: 500000, Renown: 50 },
    { Multiplier: 28, TotalXp: 1846600, SumXp: 13041730, GoldReq: 600000, Renown: 50 },
    { Multiplier: 32, TotalXp: 2110400, SumXp: 15152130, GoldReq: 700000, Renown: 50 },
    { Multiplier: 36, TotalXp: 2374200, SumXp: 17526330, GoldReq: 800000, Renown: 50 },
    { Multiplier: 40, TotalXp: 2638000, SumXp: 20164330, GoldReq: 900000, Renown: 75 },
    { Multiplier: 45, TotalXp: 2967750, SumXp: 23132080, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 50, TotalXp: 3297500, SumXp: 26429580, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 75, TotalXp: 4946250, SumXp: 31375830, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 100, TotalXp: 6595000, SumXp: 37970830, GoldReq: 1000000, Renown: 250 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 44631780, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 51292730, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 57953680, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 64614630, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 71275580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 200, TotalXp: 13190000, SumXp: 84465580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 300, TotalXp: 19785000, SumXp: 104250580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 400, TotalXp: 26380000, SumXp: 130630580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 500, TotalXp: 32975000, SumXp: 163605580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 750, TotalXp: 49462500, SumXp: 213068080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1000, TotalXp: 65950000, SumXp: 279018080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1250, TotalXp: 82437500, SumXp: 361455580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1500, TotalXp: 98925000, SumXp: 460380580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1750, TotalXp: 115412500, SumXp: 575793080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 2000, TotalXp: 131900000, SumXp: 707693080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 3000, TotalXp: 197850000, SumXp: 905543080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 5000, TotalXp: 329750000, SumXp: 1235293080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 10000, TotalXp: 659500000, SumXp: 1894793080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 50000, TotalXp: 3297500000, SumXp: 5192293080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 100000, TotalXp: 6595000000, SumXp: 11787293080, GoldReq: 0, Renown: 100 }
  ],
  Levels: [
    { Xp: 15 },
    { Xp: 30 },
    { Xp: 50 },
    { Xp: 75 },
    { Xp: 125 },
    { Xp: 300 },
    { Xp: 600 },
    { Xp: 800 },
    { Xp: 900 },
    { Xp: 1000 },
    { Xp: 1200 },
    { Xp: 1500 },
    { Xp: 0 }
  ]
};

export const petLevels: number[] = [
  100, 110, 120, 130, 145, 160, 175, 190, 210, 230, 250, 275, 300, 330, 360, 400, 440, 490, 540, 600, 660, 730, 800,
  880, 960, 1050, 1150, 1260, 1380, 1510, 1650, 1800, 1960, 2130, 2310, 2500, 2700, 2920, 3160, 3420, 3700, 4000, 4350,
  4750, 5200, 5700, 6300, 7000, 7800, 8700, 9700, 10800, 12000, 13300, 14700, 16200, 17800, 19500, 21300, 23200, 25200,
  27400, 29800, 32400, 35200, 38200, 41400, 44800, 48400, 52200, 56200, 60400, 64800, 69400, 74200, 79200, 84700, 90700,
  97200, 104200, 111700, 119700, 128200, 137200, 146700, 156700, 167700, 179700, 192700, 206700, 221700, 237700, 254700,
  272700, 291700, 311700, 333700, 357700, 383700, 411700, 441700, 476700, 516700, 561700, 611700, 666700, 726700,
  791700, 861700, 936700, 1016700, 1101700, 1191700, 1286700, 1386700, 1496700, 1616700, 1746700, 1886700, 0, 5555,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
  1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700
];

export const petScore: { [key: string]: number } = {
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5,
  MYTHIC: 6,
  VERY_SPECIAL: 6
};
export const petRarityOffset: { [key: string]: number } = {
  COMMON: 0,
  UNCOMMON: 6,
  RARE: 11,
  EPIC: 16,
  LEGENDARY: 20,
  MYTHIC: 20
};

export default {
  SkyWarsPrestigeIcons: {
    /* eslint-disable camelcase */
    default: '⋆',
    angel_1: '★',
    angel_2: '☆',
    angel_3: '⁕',
    angel_4: '✶',
    angel_5: '✳',
    angel_6: '✴',
    angel_7: '✷',
    angel_8: '❋',
    angel_9: '✼',
    angel_10: '❂',
    angel_11: '❁',
    angel_12: '☬',
    iron_prestige: '✙',
    gold_prestige: '❤️',
    diamond_prestige: '☠',
    emerald_prestige: '✦',
    sapphire_prestige: '✌',
    ruby_prestige: '❦',
    crystal_prestige: '✵',
    opal_prestige: '❣',
    amethyst_prestige: '☯',
    rainbow_prestige: '✺',
    mythic_prestige: 'ಠ_ಠ',
    favor_of_the_angel_prestige: '⚔'
  }
};
