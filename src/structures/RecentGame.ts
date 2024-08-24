import Game from './Game';

class RecentGame {
  game: Game;
  dateTimestamp: number | null;
  date: Date | null;
  mode: string | null;
  map: string | null;
  ongoing: boolean;
  endedAt: Date | null;
  endedTimestamp: number | null;
  constructor(data: Record<string, any>) {
    this.game = new Game(data.gameType);
    this.dateTimestamp = data.date || null;
    this.date = this.dateTimestamp ? new Date(this.dateTimestamp) : null;
    this.mode = data.mode || null;
    this.map = data.map || null;
    this.ongoing = Boolean(!data.ended);
    this.endedAt = data.ended ? new Date(data.ended) : null;
    this.endedTimestamp = data.ended ? data.ended : null;
  }

  toString(): string | null {
    return this.mode;
  }
}

export default RecentGame;
