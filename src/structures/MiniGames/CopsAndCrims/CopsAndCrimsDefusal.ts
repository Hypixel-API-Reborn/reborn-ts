import divide from '../../../utils/divide.js';

class CopsAndCrimsDefusal {
  kills: number;
  headshotKills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  roundWins: number;
  shotsFired: number;
  bombsDefused: number;
  bombsPlanted: number;
  killsAsCrim: number;
  killsAsCop: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills || 0;
    this.headshotKills = data?.headshot_kills || 0;
    this.assists = data?.assists || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.game_wins || 0;
    this.gamesPlayed = data?.game_plays || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.roundWins = data?.round_wins || 0;
    this.shotsFired = data?.shots_fired || 0;
    this.bombsDefused = data?.bombs_defused || 0;
    this.bombsPlanted = data?.bombs_planted || 0;
    this.killsAsCrim = data?.criminal_kills || 0;
    this.killsAsCop = data?.cop_kills || 0;
  }
}

export default CopsAndCrimsDefusal;
