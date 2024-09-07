import divide from '../../utils/divide';

export class TNTRun {
  wins: number;
  bestTime: number;
  deaths: number;
  slownessPotions: number;
  speedPotions: number;
  doubleJumps: number;
  prefix: string;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_tntrun || 0;
    this.bestTime = data?.record_tntrun || 0;
    this.deaths = data?.deaths_tntrun || 0;
    this.slownessPotions = data?.new_tntrun_slowness_potions || 0;
    this.speedPotions = data?.new_tntrun_speed_potions || 0;
    this.doubleJumps = data?.new_tntrun_double_jumps || 0;
    this.prefix = data?.prefix_tntrun || '';
  }
}

export class PVPRun {
  wins: number;
  bestTime: number;
  kills: number;
  deaths: number;
  KDR: number;
  regeneration: number;
  notoriety: number;
  fortitude: number;
  doubleJumps: number;
  prefix: string;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_pvprun || 0;
    this.bestTime = data?.record_pvprun || 0;
    this.kills = data?.kills_pvprun || 0;
    this.deaths = data?.deaths_pvprun || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.regeneration = data?.new_pvprun_regeneration || 0;
    this.notoriety = data?.new_pvprun_notoriety || 0;
    this.fortitude = data?.new_pvprun_fortitude || 0;
    this.doubleJumps = data?.new_pvprun_double_jumps || 0;
    this.prefix = data?.prefix_pvprun || '';
  }
}

export class BowSpleef {
  wins: number;
  tags: number;
  deaths: number;
  prefix: string;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_bowspleef || 0;
    this.tags = data?.tags_bowspleef || 0;
    this.deaths = data?.deaths_bowspleef || 0;
    this.prefix = data?.prefix_bowspleef || '';
  }
}

export class TNTTag {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  speed: number;
  blastProtection: number;
  speedItUp: number;
  slowItDown: number;
  prefix: string;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_tntag || 0;
    this.kills = data?.kills_tntag || 0;
    this.deaths = data?.deaths_tntag || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.speed = data?.new_tntag_speedy || 0;
    this.blastProtection = data?.tag_blastprotection || 0;
    this.speedItUp = data?.tag_speeditup || 0;
    this.slowItDown = data?.tag_slowitdown || 0;
    this.prefix = data?.prefix_tntag || '';
  }
}

export class TNTWizards {
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  points: number;
  kineticHealing: number;
  airTime: number;
  prefix: string;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_capture || 0;
    this.kills = data?.kills_capture || 0;
    this.assists = data?.assists_capture || 0;
    this.deaths = data?.deaths_capture || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.points = data?.points_capture || 0;
    this.kineticHealing = data?.kinetic_healing_capture || 0;
    this.airTime = data?.air_time_capture || 0;
    this.prefix = data?.prefix_capture || '';
  }
}

class TNTGames {
  coins: number;
  winstreak: number;
  wins: number;
  tntrun: TNTRun;
  pvpRun: PVPRun;
  bowSpleef: BowSpleef;
  tnttag: TNTTag;
  wizards: TNTWizards;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || 0;
    this.winstreak = data?.winstreak || 0;
    this.wins = data?.wins || 0;
    this.tntrun = new TNTRun(data);
    this.pvpRun = new PVPRun(data);
    this.bowSpleef = new BowSpleef(data);
    this.tnttag = new TNTTag(data);
    this.wizards = new TNTWizards(data);
  }
}

export default TNTGames;
