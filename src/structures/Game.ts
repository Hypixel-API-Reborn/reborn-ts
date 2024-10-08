import { games } from '../utils/Constants.js';
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

class Game {
  game: GameID | GameCode;
  id: GameID | null;
  code: GameCode | null;
  name: GameString | null;
  found: boolean;
  constructor(game: GameID | GameCode) {
    this.game = game;
    const result =
      games.find(
        (Game) =>
          Game.code.toLowerCase() === this.game ||
          Game.id.toString() === this.game ||
          Game.name.toLowerCase() === this.game
      ) || null;
    this.id = result?.id || null;
    this.code = result?.code || null;
    this.name = result?.name || null;
    this.found = null !== result;
  }

  toString(): GameString | null {
    return this.name;
  }

  static get IDS(): GameID[] {
    return games.map((x) => x.id as GameID);
  }

  static get CODES(): GameCode[] {
    return games.map((x) => x.code) as GameCode[];
  }

  static get NAMES(): GameString[] {
    return games.map((x) => x.name) as GameString[];
  }
}

export default Game;
