import divide from '../../utils/divide';

class Paintball {
  coins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  shotsFired: number;
  killstreaks: number;
  forceFieldTime: number;
  hat: string;
  adrenaline: number;
  endurance: number;
  fortune: number;
  godfather: number;
  superluck: number;
  transfusion: number;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.shotsFired = data.shots_fired || 0;
    this.killstreaks = data.killstreaks || 0;
    this.forceFieldTime = data.forcefieldTime || 0;
    this.hat = data.hat || 'None';
    this.adrenaline = data.adrenaline || 0;
    this.endurance = data.endurance || 0;
    this.fortune = data.fortune || 0;
    this.godfather = data.godfather || 0;
    this.superluck = data.superluck || 0;
    this.transfusion = data.transfusion || 0;
  }
}

export default Paintball;
