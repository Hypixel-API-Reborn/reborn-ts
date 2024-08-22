import Game from './Game';

class RecentGame extends Game {
  dateTimestamp: number | null;
  date: Date | null;
  mode: string | null;
  map: string | null;
  ongoing: boolean;
  endedAt: Date | null;
  endedTimestamp: number | null;
  constructor(data: Record<string, any>) {
    super(data.gameType);
    this.dateTimestamp = data.date || null;
    this.date = data.date ? new Date(data.date) : null;
    this.mode = data.mode || null;
    this.map = data.map || null;
    this.ongoing = Boolean(!data.ended);
    this.endedAt = data.ended ? new Date(data.ended) : null;
    this.endedTimestamp = data.ended ? data.ended : null;
  }

  toString(): any {
    return this.mode;
  }
}

export default RecentGame;
