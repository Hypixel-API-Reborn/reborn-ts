import Divide from '../../../Utils/Divide.js';

class CopsAndCrimsGunGame {
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  killsAsCrim: number;
  killsAsCop: number;
  fastestWin: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills_gungame || 0;
    this.assists = data?.assists_gungame || 0;
    this.deaths = data?.deaths_gungame || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.game_wins_gungame || 0;
    this.gamesPlayed = data?.game_plays_gungame || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
    this.killsAsCrim = data?.criminal_kills_gungame || 0;
    this.killsAsCop = data?.cop_kills_gungame || 0;
    this.fastestWin = data?.fastest_win_gungame || 0;
  }
}

export default CopsAndCrimsGunGame;
