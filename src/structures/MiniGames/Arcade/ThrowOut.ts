import divide from '../../../utils/divide.js';

class ThrowOut {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_throw_out || 0;
    this.kills = data?.kills_throw_out || 0;
    this.deaths = data?.deaths_throw_out || 0;
    this.KDR = divide(this.kills, this.deaths);
  }
}

export default ThrowOut;
