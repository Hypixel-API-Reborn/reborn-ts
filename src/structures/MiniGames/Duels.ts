import Constants from '../../utils/Constants';
import divide from '../../utils/divide';
import romanize from '../../utils/romanize';

function getTitle(data: Record<string, any>, mode: string): string {
  for (const div of Constants.duelsDivisions.slice().reverse()) {
    const prestige = data[`${mode}_${div.key}_title_prestige`];
    if (prestige) {
      return `${div.name} ${romanize(prestige)}`;
    }
  }
  return '';
}

class DuelsGamemode {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>, mode: string, title: string = '') {
    this.title = title;
    this.winstreak = data[`current_winstreak_mode_${mode}`] || 0;
    this.bestWinstreak = data[`best_winstreak_mode_${mode}`] || 0;
    this.kills = data[`${mode}_kills`] || 0;
    this.deaths = data[`${mode}_deaths`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data[`${mode}_wins`] || 0;
    this.losses = data[`${mode}_losses`] || 0;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames = data[`${mode}_rounds_played`] || 0;
    this.swings = data[`${mode}_melee_swings`] || 0;
    this.hits = data[`${mode}_melee_hits`] || 0;
    this.meleeAccuracy = divide(this.swings, this.hits);
    this.bowShots = data[`${mode}_bow_shots`] || 0;
    this.bowHits = data[`${mode}_bow_hits`] || 0;
    this.bowAccuracy = divide(this.bowShots, this.bowHits);
    this.blocksPlaced = data[`${mode}_blocks_placed`] || 0;
    this.healthRegenerated = data[`${mode}_health_regenerated`] || 0;
    this.goldenApplesEatan = data[`${mode}_golden_apples_eaten`] || 0;
  }
}

class DuelsUHC {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  fours: DuelsGamemode;
  deathmatch: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'uhc');
    this.winstreak = data.current_uhc_winstreak || 0;
    this.bestWinstreak = data.best_uhc_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'uhc_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'uhc_doubles', this.title);
    this.fours = new DuelsGamemode(data, 'uhc_four', this.title);
    this.deathmatch = new DuelsGamemode(data, 'uhc_meetup', this.title);
    this.kills = this.solo.kills + this.doubles.kills + this.fours.kills + this.deathmatch.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths + this.fours.deaths + this.deathmatch.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins + this.fours.wins + this.deathmatch.wins;
    this.losses = this.solo.losses + this.doubles.losses + this.fours.losses + this.deathmatch.losses;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames =
      this.solo.playedGames + this.doubles.playedGames + this.fours.playedGames + this.deathmatch.playedGames;
    this.swings = this.solo.swings + this.doubles.swings + this.fours.swings + this.deathmatch.swings;
    this.hits = this.solo.hits + this.doubles.hits + this.fours.hits + this.deathmatch.hits;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots + this.fours.bowShots + this.deathmatch.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits + this.fours.bowHits + this.deathmatch.bowHits;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.blocksPlaced =
      this.solo.blocksPlaced + this.doubles.blocksPlaced + this.fours.blocksPlaced + this.deathmatch.blocksPlaced;
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.fours.healthRegenerated +
      this.deathmatch.healthRegenerated;
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this.deathmatch.goldenApplesEatan;
  }
}

class DuelsSkyWars {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'sw');
    this.winstreak = data.current_sw_winstreak || 0;
    this.bestWinstreak = data.best_sw_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'sw_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'sw_doubles', this.title);
    this.kills = this.solo.kills + this.doubles.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins;
    this.losses = this.solo.losses + this.doubles.losses;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    this.swings = this.solo.swings + this.doubles.swings;
    this.hits = this.solo.hits + this.doubles.hits;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}

class DuelsMegaWalls {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'mega_walls');
    this.winstreak = data.current_mega_walls_winstreak || 0;
    this.bestWinstreak = data.best_mega_walls_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'mw_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'mw_doubles', this.title);
    this.kills = this.solo.kills + this.doubles.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins;
    this.losses = this.solo.losses + this.doubles.losses;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    this.swings = this.solo.swings + this.doubles.swings;
    this.hits = this.solo.hits + this.doubles.hits;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}

class DuelsOP {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'op');
    this.winstreak = data.current_op_winstreak || 0;
    this.bestWinstreak = data.best_op_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'op_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'op_doubles', this.title);
    this.kills = this.solo.kills + this.doubles.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins;
    this.losses = this.solo.losses + this.doubles.losses;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    this.swings = this.solo.swings + this.doubles.swings;
    this.hits = this.solo.hits + this.doubles.hits;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}

class DuelsBridge {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  threes: DuelsGamemode;
  fours: DuelsGamemode;
  '2v2v2v2': DuelsGamemode;
  '3v3v3v3': DuelsGamemode;
  ctf: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'bridge');
    this.winstreak = data.current_bridge_winstreak || 0;
    this.bestWinstreak = data.best_bridge_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'bridge_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'bridge_doubles', this.title);
    this.threes = new DuelsGamemode(data, 'bridge_threes', this.title);
    this.fours = new DuelsGamemode(data, 'bridge_fours', this.title);
    this['2v2v2v2'] = new DuelsGamemode(data, '2v2v2v2', this.title);
    this['3v3v3v3'] = new DuelsGamemode(data, '3v3v3v3', this.title);
    this.ctf = new DuelsGamemode(data, 'capture_threes', this.title);
    this.kills =
      this.solo.kills +
      this.doubles.kills +
      this.threes.kills +
      this.fours.kills +
      this['2v2v2v2'].kills +
      this['3v3v3v3'].kills +
      this.ctf.kills;
    this.deaths =
      this.solo.deaths +
      this.doubles.deaths +
      this.threes.deaths +
      this.fours.deaths +
      this['2v2v2v2'].deaths +
      this['3v3v3v3'].deaths +
      this.ctf.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins =
      this.solo.wins +
      this.doubles.wins +
      this.threes.wins +
      this.fours.wins +
      this['2v2v2v2'].wins +
      this['3v3v3v3'].wins +
      this.ctf.wins;
    this.losses =
      this.solo.losses +
      this.doubles.losses +
      this.threes.losses +
      this.fours.losses +
      this['2v2v2v2'].losses +
      this['3v3v3v3'].losses +
      this.ctf.losses;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames =
      this.solo.playedGames +
      this.doubles.playedGames +
      this.threes.playedGames +
      this.fours.playedGames +
      this['2v2v2v2'].playedGames +
      this['3v3v3v3'].playedGames +
      this.ctf.playedGames;
    this.swings =
      this.solo.swings +
      this.doubles.swings +
      this.threes.swings +
      this.fours.swings +
      this['2v2v2v2'].swings +
      this['3v3v3v3'].swings +
      this.ctf.swings;
    this.hits =
      this.solo.hits +
      this.doubles.hits +
      this.threes.hits +
      this.fours.hits +
      this['2v2v2v2'].hits +
      this['3v3v3v3'].hits +
      this.ctf.hits;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots =
      this.solo.bowShots +
      this.doubles.bowShots +
      this.threes.bowShots +
      this.fours.bowShots +
      this['2v2v2v2'].bowShots +
      this['3v3v3v3'].bowShots +
      this.ctf.bowShots;
    this.bowHits =
      this.solo.bowHits +
      this.doubles.bowHits +
      this.threes.bowHits +
      this.fours.bowHits +
      this['2v2v2v2'].bowHits +
      this['3v3v3v3'].bowHits +
      this.ctf.bowHits;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.blocksPlaced =
      this.solo.blocksPlaced +
      this.doubles.blocksPlaced +
      this.threes.blocksPlaced +
      this.fours.blocksPlaced +
      this['2v2v2v2'].blocksPlaced +
      this['3v3v3v3'].blocksPlaced +
      this.ctf.blocksPlaced;
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.threes.healthRegenerated +
      this.fours.healthRegenerated +
      this['2v2v2v2'].healthRegenerated +
      this['3v3v3v3'].healthRegenerated +
      this.ctf.healthRegenerated;
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.threes.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this['2v2v2v2'].goldenApplesEatan +
      this['3v3v3v3'].goldenApplesEatan +
      this.ctf.goldenApplesEatan;
  }
}

class Duels {
  tokens: number;
  title: string | null;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  winstreak: number;
  bestWinstreak: number;
  ping: number;
  blocksPlaced: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  uhc: DuelsUHC;
  skywars: DuelsSkyWars;
  megawalls: DuelsMegaWalls;
  blitz: DuelsGamemode;
  op: DuelsOP;
  classic: DuelsGamemode;
  bow: DuelsGamemode;
  noDebuff: DuelsGamemode;
  combo: DuelsGamemode;
  bowSpleef: DuelsGamemode;
  sumo: DuelsGamemode;
  bridge: DuelsBridge;
  parkour: DuelsGamemode;
  arena: DuelsGamemode;
  constructor(data: Record<string, any>) {
    this.tokens = data.coins || 0;
    this.title = getTitle(data, 'all_modes');
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLR = divide(this.wins, this.losses);
    this.playedGames = data.games_played_duels || 0;
    this.winstreak = data.current_winstreak || 0;
    this.bestWinstreak = data.best_overall_winstreak || 0;
    this.ping = data.pingPreference || 0;
    this.blocksPlaced = data.blocks_placed || 0;
    this.swings = data.melee_swings || 0;
    this.hits = data.melee_hits || 0;
    this.meleeAccuracy = divide(this.hits, this.swings);
    this.bowShots = data.bow_shots || 0;
    this.bowHits = data.bow_hits || 0;
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    this.healthRegenerated = data.health_regenerated || 0;
    this.goldenApplesEatan = data.golden_apples_eaten || 0;
    this.uhc = new DuelsUHC(data);
    this.skywars = new DuelsSkyWars(data);
    this.megawalls = new DuelsMegaWalls(data);
    this.blitz = new DuelsGamemode(data, 'blitz_duel', getTitle(data, 'blitz'));
    this.op = new DuelsOP(data);
    this.classic = new DuelsGamemode(data, 'classic_duel', getTitle(data, 'classic'));
    this.bow = new DuelsGamemode(data, 'bow_duel', getTitle(data, 'bow'));
    this.noDebuff = new DuelsGamemode(data, 'potion_duel', getTitle(data, 'no_debuff'));
    this.combo = new DuelsGamemode(data, 'combo_duel', getTitle(data, 'combo'));
    this.bowSpleef = new DuelsGamemode(data, 'bowspleef_duel', getTitle(data, 'tnt_games'));
    this.sumo = new DuelsGamemode(data, 'sumo_duel', getTitle(data, 'sumo'));
    this.bridge = new DuelsBridge(data);
    this.parkour = new DuelsGamemode(data, 'parkour_eight', getTitle(data, 'parkour'));
    this.arena = new DuelsGamemode(data, 'duel_arena');
  }
}

export default Duels;
