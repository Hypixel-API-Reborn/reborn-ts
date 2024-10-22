import divide from '../../utils/divide.js';

export class ArenaBrawlMode {
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
  constructor(data: Record<string, any>, mode: string) {
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

class ArenaBrawl {
  coins: number;
  coinsSpent: number;
  wins: number;
  keys: number;
  chests: number;
  rune: string;
  '1v1': ArenaBrawlMode;
  '2v2': ArenaBrawlMode;
  '4v4': ArenaBrawlMode;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.coinsSpent = data?.coins_spent || 0;
    this.wins = data?.wins || 0;
    this.keys = data?.keys || 0;
    this.chests = data?.magical_chest || 0;
    this.rune = data?.active_rune || '';
    this['1v1'] = new ArenaBrawlMode(data, '1v1');
    this['2v2'] = new ArenaBrawlMode(data, '2v2');
    this['4v4'] = new ArenaBrawlMode(data, '4v4');
  }
}

export default ArenaBrawl;
