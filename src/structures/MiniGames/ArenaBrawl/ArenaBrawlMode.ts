import divide from '../../../utils/divide.js';
import type { ArenaBrawlModes } from '../../../Types/Player.js';

class ArenaBrawlMode {
  damage: number;
  kills: number;
  deaths: number;
  KDR: number;
  healed: number;
  wins: number;
  losses: number;
  WLR: number;
  games: number;
  winstreak: number;
  constructor(data: Record<string, any>, mode: ArenaBrawlModes) {
    this.damage = data?.[`damage_${mode}`] || 0;
    this.kills = data?.[`kills_${mode}`] || 0;
    this.deaths = data?.[`deaths_${mode}`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.healed = data?.[`healed_${mode}`] || 0;
    this.wins = data?.[`wins_${mode}`] || 0;
    this.losses = data?.[`losses_${mode}`] || 0;
    this.WLR = divide(this.wins, this.losses);
    this.games = data?.[`games_${mode}`] || 0;
    this.winstreak = data?.[`win_streaks_${mode}`] || 0;
  }
}

export default ArenaBrawlMode;
