import divide from '../../utils/divide';

export class VampireZRole {
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  constructor(data: Record<string, any>, role: string) {
    this.kills = data[`${role}_kills`] || 0;
    this.deaths = data[`${role}_deaths`] || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data[`${role}_wins`] || 0;
  }
}

class VampireZ {
  coins: number;
  goldBought: number;
  blood: boolean;
  zombieKills: number;
  human: VampireZRole;
  vampire: VampireZRole;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.goldBought = data.gold_bought || 0;
    this.blood = data.blood || false;
    this.zombieKills = data.zombie_kills || 0;
    this.human = new VampireZRole(data, 'human');
    this.vampire = new VampireZRole(data, 'vampire');
    this.kills = this.human.kills + this.vampire.kills;
    this.deaths = this.human.deaths + this.vampire.deaths;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = this.human.wins + this.vampire.wins;
  }
}

export default VampireZ;
