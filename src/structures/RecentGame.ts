import Game from './Game';

class RecentGame {
  game: Game | null;
  dateTimestamp: number | null;
  dateAt: Date | null;
  mode: string | null;
  map: string | null;
  ongoing: boolean;
  endedTimestamp: number | null;
  endedAt: Date | null;
  constructor(data: Record<string, any>) {
    this.game = data?.gameType ? new Game(data.gameType) : null;
    this.dateTimestamp = data?.date || null;
    this.dateAt = this.dateTimestamp ? new Date(this.dateTimestamp) : null;
    this.mode = data?.mode || null;
    this.map = data?.map || null;
    this.ongoing = Boolean(!data?.ended) || false;
    this.endedTimestamp = data?.ended ? data?.ended : null;
    this.endedAt = this.endedTimestamp ? new Date(this.endedTimestamp) : null;
  }

  toString(): string | null {
    return this.mode;
  }
}

export default RecentGame;
