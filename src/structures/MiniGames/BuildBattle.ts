import divide from '../../utils/divide.js';

export interface BuildBattleWins {
  solo: number;
  teams: number;
  pro: number;
  gtb: number;
}

class BuildBattle {
  score: number;
  totalWins: number;
  games: number;
  WLR: number;
  superVotes: number;
  coins: number;
  totalVotes: number;
  wins: BuildBattleWins;
  constructor(data: Record<string, any>) {
    this.score = data?.score || 0;
    this.totalWins = data?.wins || 0;
    this.games = data?.games_played || 0;
    this.WLR = divide(this.totalWins, this.games);
    this.superVotes = data?.super_votes || 0;
    this.coins = data?.coins || data?.tokens || 0;
    this.totalVotes = data?.total_votes || 0;
    this.wins = {
      solo: data?.wins_solo_normal || 0,
      teams: data?.wins_teams_normal || 0,
      pro: data?.wins_solo_pro || 0,
      gtb: data?.wins_guess_the_build || 0
    };
  }
}

export default BuildBattle;
