import Quest from './Quest';
import { StaticGameNames } from '../../typings';

class GameQuests {
  game: StaticGameNames;
  quests: Quest[];
  constructor(name: StaticGameNames, data: Record<string, any>) {
    this.game = name;
    this.quests = data.map((x: any) => new Quest(x));
  }
}

export default GameQuests;
