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
