/**
 * Leaderboard class
 */
class Leaderboard {
  name: string | null;
  title: string;
  playerCount: string;
  leaders: string[];
  constructor(data: Record<string, any>) {
    this.name = data.prefix || null;
    this.title = data.title || null;
    this.playerCount = data.count || 0;
    this.leaders = data.leaders || [];
  }
}

export default Leaderboard;
