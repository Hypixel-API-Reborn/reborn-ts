import divide from '../../utils/divide';

export interface WoolGamesPrivateGameConfig {
  one_hit_one_kill: boolean;
  rainbow_wool: 'Enabled' | 'Disabled';
  health_buff: string;
  game_speed: string;
  speed: string;
  no_class: 'Enabled' | 'Disabled';
  respawn_enable: boolean;
}

export class WoolWarsClass {
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerups: number;
  constructor(data: Record<string, any>, className: string) {
    this.wins = data?.[className]?.wins || 0;
    this.kills = data?.[className]?.kills || 0;
    this.assists = data?.[className]?.assists || 0;
    this.deaths = data?.[className]?.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.gamesPlayed = data?.[className]?.games_played || 0;
    this.woolsPlaced = data?.[className]?.wool_placed || 0;
    this.blocksBroken = data?.[className]?.blocks_broken || 0;
    this.placeBreakRatio = divide(this.woolsPlaced, this.blocksBroken);
    this.powerups = data?.[className]?.powerups_gotten || 0;
  }
}

export class WoolWars {
  selectedClass: 'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER' | 'NONE';
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerups: number;
  assault: WoolWarsClass;
  tank: WoolWarsClass;
  golem: WoolWarsClass;
  swordsman: WoolWarsClass;
  engineer: WoolWarsClass;
  archer: WoolWarsClass;
  constructor(data: Record<string, any>) {
    this.selectedClass = data?.selected_class || 'NONE';
    this.wins = data?.stats?.wins || 0;
    this.kills = data?.stats?.kills || 0;
    this.assists = data?.stats?.assists || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.gamesPlayed = data?.stats?.games_played || 0;
    this.woolsPlaced = data?.stats?.wool_placed || 0;
    this.blocksBroken = data?.stats?.blocks_broken || 0;
    this.placeBreakRatio = divide(this.woolsPlaced, this.blocksBroken);
    this.powerups = data?.powerups_gotten || 0;
    this.assault = new WoolWarsClass(data?.stats?.classes, 'assault');
    this.tank = new WoolWarsClass(data?.stats?.classes, 'tank');
    this.golem = new WoolWarsClass(data?.stats?.classes, 'golem');
    this.swordsman = new WoolWarsClass(data?.stats?.classes, 'swordsman');
    this.engineer = new WoolWarsClass(data?.stats?.classes, 'engineer');
    this.archer = new WoolWarsClass(data?.stats?.classes, 'archer');
  }
}

export class CaptureTheWool {
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  killsWithWool: number;
  deathsWithWool: number;
  KDRatioWithWool: number;
  woolCaptured: number;
  woolStolen: number;
  woolCaptureStolenRatio: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.stats?.kills || 0;
    this.assists = data?.stats?.assists || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.killsWithWool = data?.stats?.kills_with_wool || 0;
    this.deathsWithWool = data?.stats?.deaths_with_wool || 0;
    this.KDRatioWithWool = divide(this.killsWithWool, this.deathsWithWool);
    this.woolCaptured = data?.stats?.wools_captured || 0;
    this.woolStolen = data?.stats?.wools_stolen || 0;
    this.woolCaptureStolenRatio = divide(this.woolCaptured, this.woolStolen);
  }
}

export class SheepWars {
  wins: number;
  kills: number;
  killsVoid: number;
  killsBow: number;
  killsExplosive: number;
  deaths: number;
  deathsVoid: number;
  deathsMelee: number;
  deathsExplosive: number;
  KDRatio: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  damageDealt: number;
  sheepThrown: number;
  magicWoolHit: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.stats?.wins || 0;
    this.kills = data?.stats?.kills || 0;
    this.killsVoid = data?.stats?.kills_void || 0;
    this.killsBow = data?.stats?.kills_bow || 0;
    this.killsExplosive = data?.stats?.kills_explosive || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.deathsVoid = data?.stats?.deaths_void || 0;
    this.deathsMelee = data?.stats?.deaths_melee || 0;
    this.deathsExplosive = data?.stats?.deaths_explosive || 0;
    this.KDRatio = divide(this.wins, this.deaths);
    this.losses = data?.stats?.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.gamesPlayed = data?.stats?.games_played || 0;
    this.damageDealt = data?.stats?.damage_dealt || 0;
    this.sheepThrown = data?.stats?.sheep_thrown || 0;
    this.magicWoolHit = data?.stats?.magic_wool_hit || 0;
  }
}

class WoolGames {
  layers: number;
  xp: number;
  exactLevel: number;
  level: number;
  coins: number;
  ownedCosmetics: string[];
  privateGamesConfig: WoolGamesPrivateGameConfig;
  playtime: number;
  woolWars: WoolWars;
  captureTheWool: CaptureTheWool;
  sheepWars: SheepWars;
  constructor(data: Record<string, any>) {
    this.layers = data?.progression?.available_layers || 0;
    this.xp = data?.progression?.experience || 0;
    this.exactLevel = this.convertXPToLevel(this.xp);
    this.level = Math?.floor(this.exactLevel);
    this.coins = data?.coins || 0;
    this.ownedCosmetics = data?.packages || [];
    this.privateGamesConfig = data?.privategames || {};
    this.playtime = data?.playtime || 0;
    this.woolWars = new WoolWars(data?.wool_wars);
    this.captureTheWool = new CaptureTheWool(data?.capture_the_wool);
    this.sheepWars = new SheepWars(data?.sheep_wars);
  }

  convertXPToLevel(exp: number): number {
    const minimalExp = [0, 1e3, 3e3, 6e3, 1e4, 15e3];
    const baseLevel = minimalExp?.length;
    const baseExp = minimalExp[minimalExp?.length - 1];
    const expToLevel100 = 49e4;
    if (exp < baseExp) return minimalExp?.findIndex((x) => exp < x);
    const theoreticalLevel = (exp - baseExp) / 5e3 + baseLevel;
    if (100 < theoreticalLevel) return 100 + this.convertXPToLevel(exp - expToLevel100);
    return theoreticalLevel;
  }
}

export default WoolGames;
