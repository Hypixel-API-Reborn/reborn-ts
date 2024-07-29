import { recursive, removeSnakeCaseString } from '../utils/removeSnakeCase';
import { MiniGamesString } from '../utils/Constants';

/**
 * GameCounts class
 */
class GameCounts {
  [x: string]: object | number;
  constructor(data: Record<string, any>) {
    this.playerCount = data.playerCount;
    for (const game in data.games) {
      if (Object.prototype.hasOwnProperty.call(MiniGamesString, game)) {
        const objectName = (MiniGamesString as { [key: string]: string })[game]
          .toUpperCase()
          .replace(/ +/g, '_');
        this[removeSnakeCaseString(objectName)] = recursive(data.games[game], true);
      } else {
        this[removeSnakeCaseString(game)] = recursive(data.games[game], true);
      }
    }
  }

  toString(): number {
    return this.playerCount as number;
  }
}

export default GameCounts;
