import Divide from '../../../Utils/Divide.js';

class CopsAndCrimsDeathmatch {
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
  constructor(data: Record<string, any>) {
    this.kills = data?.kills_deathmatch || 0;
    this.assists = data?.assists_deathmatch || 0;
    this.deaths = data?.deaths_deathmatch || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.game_wins_deathmatch || 0;
    this.gamesPlayed = data?.game_plays_deathmatch || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
    this.killsAsCrim = data?.criminal_kills_deathmatch || 0;
    this.killsAsCop = data?.cop_kills_deathmatch || 0;
  }
}

export default CopsAndCrimsDeathmatch;
