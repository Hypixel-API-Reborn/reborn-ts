import divide from '../../../utils/divide.js';
import type { SmashHeoresModes } from '../../../Types/Player.js';

class SmashHeroesMode {
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  constructor(data: Record<string, any>, mode: SmashHeoresModes) {
    this.kills = data?.[`kills_${mode}`] || 0;
    this.deaths = data?.[`deaths_${mode}`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${mode}`] || 0;
    this.losses = data?.[`losses_${mode}`] || 0;
    this.WLR = divide(this.wins, this.losses);
  }
}

export default SmashHeroesMode;
