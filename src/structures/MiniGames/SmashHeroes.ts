import divide from '../../utils/divide';

class SmashHeroesMode {
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  constructor(data: Record<string, any>, mode: string) {
    this.kills = data[`kills_${mode}`] || 0;
    this.deaths = data[`deaths_${mode}`] || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data[`wins_${mode}`] || 0;
    this.losses = data[`losses_${mode}`] || 0;
    this.WLRatio = divide(this.wins, this.losses);
  }
}

class SmashHeoresHero {
  name: string;
  level: number;
  xp: number;
  prestige: number;
  playedGames: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  constructor(data: Record<string, any>, hero: string) {
    this.name = hero;
    this.level = data[`lastLevel_${hero}`] || 0;
    this.xp = data[`xp_${hero}`] || 0;
    this.prestige = data[`pg_${hero}`] || 0;
    this.playedGames = data.class_stats?.[hero]?.games || 0;
    this.kills = data.class_stats?.[hero]?.kills || 0;
    this.deaths = data.class_stats?.[hero]?.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.class_stats?.[hero]?.wins || 0;
    this.losses = data.class_stats?.[hero]?.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
  }
}

/**
 * SmashHeroes class
 */
class SmashHeroes {
  coins: number;
  level: number;
  winstreak: number;
  playedGames: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  smashed: number;
  '1v1v1v1': SmashHeroesMode;
  '2v2': SmashHeroesMode;
  '2v2v2': SmashHeroesMode;
  activeClass: string;
  theBulk: SmashHeoresHero;
  cakeMonster: SmashHeoresHero;
  generalCluck: SmashHeoresHero;
  botmun: SmashHeoresHero;
  marauder: SmashHeoresHero;
  pug: SmashHeoresHero;
  tinman: SmashHeoresHero;
  spoderman: SmashHeoresHero;
  frosty: SmashHeoresHero;
  sergeantShield: SmashHeoresHero;
  skullfire: SmashHeoresHero;
  goku: SmashHeoresHero;
  sanic: SmashHeoresHero;
  duskCrawler: SmashHeoresHero;
  shoopDaWhoop: SmashHeoresHero;
  greenHood: SmashHeoresHero;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.level = data.smash_level_total || 0;
    this.winstreak = data.win_streak || 0;
    this.playedGames = data.games || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.smashed = data.smashed || 0;
    this['1v1v1v1'] = new SmashHeroesMode(data, 'normal');
    this['2v2'] = new SmashHeroesMode(data, '2v2');
    this['2v2v2'] = new SmashHeroesMode(data, 'teams');
    this.activeClass = data.active_class || null;
    this.theBulk = new SmashHeoresHero(data, 'THE_BULK');
    this.cakeMonster = new SmashHeoresHero(data, 'CAKE_MONSTER');
    this.generalCluck = new SmashHeoresHero(data, 'GENERAL_CLUCK');
    this.botmun = new SmashHeoresHero(data, 'BOTMUN');
    this.marauder = new SmashHeoresHero(data, 'MARAUDER');
    this.pug = new SmashHeoresHero(data, 'PUG');
    this.tinman = new SmashHeoresHero(data, 'TINMAN');
    this.spoderman = new SmashHeoresHero(data, 'SPODERMAN');
    this.frosty = new SmashHeoresHero(data, 'FROSTY');
    this.sergeantShield = new SmashHeoresHero(data, 'SERGEANT_SHIELD');
    this.skullfire = new SmashHeoresHero(data, 'SKULLFIRE');
    this.goku = new SmashHeoresHero(data, 'GOKU');
    this.sanic = new SmashHeoresHero(data, 'SANIC');
    this.duskCrawler = new SmashHeoresHero(data, 'DUSK_CRAWLER');
    this.shoopDaWhoop = new SmashHeoresHero(data, 'SHOOP_DA_WHOOP');
    this.greenHood = new SmashHeoresHero(data, 'GREEN_HOOD');
  }
}

export default SmashHeroes;
