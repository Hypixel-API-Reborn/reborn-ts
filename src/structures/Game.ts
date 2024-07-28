import { GameCode, GameID, GameString } from '../typings';
import Constants from '../utils/Constants';

/**
 * Game class
 */
class Game {
  game: GameID | GameCode;
  id: GameID | null;
  code: GameCode | null;
  name: GameString | null;
  found: boolean;

  constructor(game: GameID | GameCode) {
    this.game = game;
    const result = Constants.games.find(
      (g) => g.code.toLowerCase() === this.game || g.id.toString() === this.game || g.name.toLowerCase() === this.game
    ) as any;
    this.id = result ? result.id : null;
    this.code = result ? result.code : null;
    this.name = result ? result.name : null;
    this.found = Boolean(result);
  }

  toString(): GameString | null {
    return this.name;
  }
  static get IDS(): GameID[] {
    return Constants.games.map((x) => x.id as GameID);
  }

  static get CODES(): GameCode[] {
    return Constants.games.map((x) => x.code) as GameCode[];
  }

  static get NAMES(): GameString[] {
    return Constants.games.map((x) => x.name) as GameString[];
  }
}

export default Game;
