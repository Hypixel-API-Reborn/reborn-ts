import Game from './Game';

class RecentGame extends Game {
  dateTimestamp: number | null;
  dateAt: Date | null;
  mode: string | null;
  map: string | null;
  ongoing: boolean;
  endedTimestamp: number | null;
  endedAt: Date | null;
  constructor(data: Record<string, any>) {
    super(data.gameType);
    this.dateTimestamp = data.date || null;
    this.dateAt = this.dateTimestamp ? new Date(this.dateTimestamp) : null;
    this.mode = data.mode || null;
    this.map = data.map || null;
    this.ongoing = Boolean(!data.ended || 0);
    this.endedTimestamp = data.ended ? data.ended : null;
    this.endedAt = this.endedTimestamp ? new Date(this.endedTimestamp) : null;
  }

  toString(): any {
    return this.mode;
  }
}

export default RecentGame;
