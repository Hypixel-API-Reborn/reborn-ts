import divide from '../../utils/divide';

class ArenaBrawlMode {
  damage: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  healed: number;
  wins: number;
  losses: number;
  WLRatio: number;
  games: number;
  winstreak: number;
  constructor(data: Record<string, any>, mode: string) {
    this.damage = data[`damage_${mode}`];
    this.kills = data[`kills_${mode}`];
    this.deaths = data[`deaths_${mode}`];
    this.KDRatio = divide(this.kills, this.deaths);
    this.healed = data[`healed_${mode}`];
    this.wins = data[`wins_${mode}`];
    this.losses = data[`losses_${mode}`];
    this.WLRatio = divide(this.wins, this.losses);
    this.games = data[`games_${mode}`];
    this.winstreak = data[`win_streaks_${mode}`];
  }
}

/**
 * ArenaBrawl class
 */
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
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Coins Spent
     * @type {number}
     */
    this.coinsSpent = data.coins_spent || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Keys
     * @type {number}
     */
    this.keys = data.keys || 0;
    /**
     * Chests
     * @type {number}
     */
    this.chests = data.magical_chest || 0;
    /**
     * Rune
     * @type {string}
     */
    this.rune = data.active_rune || '';
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['1v1'] = new ArenaBrawlMode(data, '1v1');
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['2v2'] = new ArenaBrawlMode(data, '2v2');
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['4v4'] = new ArenaBrawlMode(data, '4v4');
  }
}

export default ArenaBrawl;
