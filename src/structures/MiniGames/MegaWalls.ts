import divide from '../../utils/divide.js';

export class MegaWallsModeStats {
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  finalKills: number;
  finalAssists: number;
  finalDeaths: number;
  FKDR: number;
  playedGames: number;
  witherDamage: number;
  defenderKills: number;
  walked: number;
  blocksPlaced: number;
  blocksBroken: number;
  meleeKills: number;
  damageDealt: number;
  constructor(data: Record<string, any>, mode: string, kit?: string) {
    if (kit) kit = `${kit}_`;
    this.kills = data?.[`${kit}kills_${mode}`] || 0;
    this.assists = data?.[`${kit}assists_${mode}`] || 0;
    this.deaths = data?.[`${kit}deaths_${mode}`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.[`${kit}wins_${mode}`] || 0;
    this.losses = data?.[`${kit}losses_${mode}`] || 0;
    this.WLR = divide(this.wins, this.losses);
    this.finalKills = data?.[`${kit}final_kills_${mode}`] || 0;
    this.finalAssists = data?.[`${kit}final_assists_${mode}`] || 0;
    this.finalDeaths = data?.[`${kit}final_deaths_${mode}`] || 0;
    this.FKDR = divide(this.finalKills, this.finalDeaths);
    this.playedGames = data?.[`${kit}games_played_${mode}`] || 0;
    this.witherDamage = data?.[`${kit}wither_damage_${mode}`] || 0;
    this.defenderKills = data?.[`${kit}defender_kills_${mode}`] || 0;
    this.walked = data?.[`${kit}meters_walked_${mode}`] || 0;
    this.blocksPlaced = data?.[`${kit}blocks_placed_${mode}`] || 0;
    this.blocksBroken = data?.[`${kit}blocks_broken_${mode}`] || 0;
    this.meleeKills = data?.[`${kit}kills_melee_${mode}`] || 0;
    this.damageDealt = data?.[`${kit}damage_dealt_${mode}`] || 0;
  }
}

export class MegaWallsKitStats {
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  finalKills: number;
  finalAssists: number;
  finalDeaths: number;
  FKDR: number;
  playedGames: number;
  witherDamage: number;
  defenderKills: number;
  walked: number;
  blocksPlaced: number;
  blocksBroken: number;
  meleeKills: number;
  damageDealt: number;
  faceOff: MegaWallsModeStats;
  casualBrawl: MegaWallsModeStats;
  constructor(data: Record<string, any>, kit: string) {
    this.kills = data?.[`${kit}_kills`] || 0;
    this.assists = data?.[`${kit}_assists`] || 0;
    this.deaths = data?.[`${kit}_deaths`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.[`${kit}_wins`] || 0;
    this.losses = data?.[`${kit}_losses`] || 0;
    this.WLR = divide(this.wins, this.losses);
    this.finalKills = data?.[`${kit}_final_kills`] || 0;
    this.finalAssists = data?.[`${kit}_final_assists`] || 0;
    this.finalDeaths = data?.[`${kit}_final_deaths`] || 0;
    this.FKDR = divide(this.finalKills, this.finalDeaths);
    this.playedGames = data?.[`${kit}_games_played`] || 0;
    this.witherDamage = data?.[`${kit}_wither_damage`] || 0;
    this.defenderKills = data?.[`${kit}_defender_kills`] || 0;
    this.walked = data?.[`${kit}_meters_walked`] || 0;
    this.blocksPlaced = data?.[`${kit}_blocks_placed`] || 0;
    this.blocksBroken = data?.[`${kit}_blocks_broken`] || 0;
    this.meleeKills = data?.[`${kit}_kills_melee`] || 0;
    this.damageDealt = data?.[`${kit}_damage_dealt`] || 0;
    this.faceOff = new MegaWallsModeStats(data, 'face_off', kit);
    this.casualBrawl = new MegaWallsModeStats(data, 'gvg', kit);
  }
}

class MegaWalls {
  selectedClass: string;
  coins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  finalKills: number;
  finalAssists: number;
  finalDeaths: number;
  FKDR: number;
  playedGames: number;
  witherDamage: number;
  defenderKills: number;
  walked: number;
  blocksPlaced: number;
  blocksBroken: number;
  meleeKills: number;
  damageDealt: number;
  faceOff: MegaWallsModeStats;
  casualBrawl: MegaWallsModeStats;
  cow: MegaWallsKitStats;
  hunter: MegaWallsKitStats;
  shark: MegaWallsKitStats;
  arcanist: MegaWallsKitStats;
  deadlord: MegaWallsKitStats;
  golem: MegaWallsKitStats;
  herobrine: MegaWallsKitStats;
  pigman: MegaWallsKitStats;
  zombie: MegaWallsKitStats;
  blaze: MegaWallsKitStats;
  enderman: MegaWallsKitStats;
  shaman: MegaWallsKitStats;
  squid: MegaWallsKitStats;
  creeper: MegaWallsKitStats;
  pirate: MegaWallsKitStats;
  sheep: MegaWallsKitStats;
  skeleton: MegaWallsKitStats;
  spider: MegaWallsKitStats;
  werewolf: MegaWallsKitStats;
  angel: MegaWallsKitStats;
  assassin: MegaWallsKitStats;
  automaton: MegaWallsKitStats;
  moleman: MegaWallsKitStats;
  phoenix: MegaWallsKitStats;
  renegade: MegaWallsKitStats;
  snowman: MegaWallsKitStats;
  constructor(data: Record<string, any>) {
    this.selectedClass = data?.chosen_class || '';
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = data?.kills || 0;
    this.assists = data?.assists || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.losses = data?.losses || 0;
    this.WLR = divide(this.wins, this.losses);
    this.finalKills = (data?.final_kills || 0) + (data?.finalkills || 0);
    this.finalAssists = (data?.final_assists || 0) + (data?.finalassists || 0);
    this.finalDeaths = (data?.final_deaths || 0) + (data?.finalDeaths || 0);
    this.FKDR = divide(this.finalKills, this.finalDeaths);
    this.playedGames = data?.games_played || 0;
    this.witherDamage = (data?.wither_damage || 0) + (data?.witherDamager || 0);
    this.defenderKills = data?.defender_kills || 0;
    this.walked = data?.meters_walked || 0;
    this.blocksPlaced = data?.blocks_placed || 0;
    this.blocksBroken = data?.blocks_broken || 0;
    this.meleeKills = data?.kills_melee || 0;
    this.damageDealt = data?.damage_dealt || 0;
    this.faceOff = new MegaWallsModeStats(data, 'face_off');
    this.casualBrawl = new MegaWallsModeStats(data, 'gvg');
    this.cow = new MegaWallsKitStats(data, 'cow');
    this.hunter = new MegaWallsKitStats(data, 'hunter');
    this.shark = new MegaWallsKitStats(data, 'shark');
    this.arcanist = new MegaWallsKitStats(data, 'arcanist');
    this.deadlord = new MegaWallsKitStats(data, 'deadlord');
    this.golem = new MegaWallsKitStats(data, 'golem');
    this.herobrine = new MegaWallsKitStats(data, 'herobrine');
    this.pigman = new MegaWallsKitStats(data, 'pigman');
    this.zombie = new MegaWallsKitStats(data, 'zombie');
    this.blaze = new MegaWallsKitStats(data, 'blaze');
    this.enderman = new MegaWallsKitStats(data, 'enderman');
    this.shaman = new MegaWallsKitStats(data, 'shaman');
    this.squid = new MegaWallsKitStats(data, 'squid');
    this.creeper = new MegaWallsKitStats(data, 'creeper');
    this.pirate = new MegaWallsKitStats(data, 'pirate');
    this.sheep = new MegaWallsKitStats(data, 'sheep');
    this.skeleton = new MegaWallsKitStats(data, 'skeleton');
    this.spider = new MegaWallsKitStats(data, 'spider');
    this.werewolf = new MegaWallsKitStats(data, 'werewolf');
    this.angel = new MegaWallsKitStats(data, 'angel');
    this.assassin = new MegaWallsKitStats(data, 'assassin');
    this.automaton = new MegaWallsKitStats(data, 'automaton');
    this.moleman = new MegaWallsKitStats(data, 'moleman');
    this.phoenix = new MegaWallsKitStats(data, 'phoenix');
    this.renegade = new MegaWallsKitStats(data, 'renegade');
    this.snowman = new MegaWallsKitStats(data, 'snowman');
  }
}

export default MegaWalls;
