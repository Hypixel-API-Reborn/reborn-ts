import divide from '../../utils/divide';

export interface WoolWarsStats {
  wins: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  assists: number;
  powerups: number;
}
export interface WoolWarsPrivateGamesConfig {
  one_hit_one_kil: boolean;
  rainbow_wool: 'Enabled' | 'Disabled';
  health_buff: string;
  game_speed: string;
  speed: string;
  no_class: 'Enabled' | 'Disabled';
  respawn_enable: boolean;
}

function convertXPToLevel(exp: number): number {
  const minimalExp = [0, 1e3, 3e3, 6e3, 1e4, 15e3];
  const baseLevel = minimalExp.length;
  const baseExp = minimalExp[minimalExp.length - 1];
  const expToLevel100 = 49e4;
  if (exp < baseExp) return minimalExp.findIndex((x) => exp < x);
  const theoreticalLevel = (exp - baseExp) / 5e3 + baseLevel;
  if (100 < theoreticalLevel) return 100 + convertXPToLevel(exp - expToLevel100);
  return theoreticalLevel;
}

function generateStatsFor(data: Record<string, any>, className: string): WoolWarsStats {
  const workingData = (className ? data?.classes?.[className] : data) || {};
  return {
    wins: workingData.wins || 0,
    gamesPlayed: workingData.games_played || 0,
    woolsPlaced: workingData.wool_placed || 0,
    blocksBroken: workingData.blocks_broken || 0,
    placeBreakRatio: divide(workingData.wool_placed || 0, workingData.blocks_broken || 0),
    kills: workingData.kills || 0,
    deaths: workingData.deaths || 0,
    KDRatio: divide(workingData.kills, workingData.deaths),
    assists: workingData.assists || 0,
    powerups: workingData.powerups_gotten || 0
  };
}

class WoolWars {
  layers: number;
  xp: number;
  exactLevel: number;
  level: number;
  coins: number;
  wins: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  assists: number;
  powerups: number;
  selectedClass: 'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER' | 'NONE';
  assault: WoolWarsStats;
  tank: WoolWarsStats;
  golem: WoolWarsStats;
  swordsman: WoolWarsStats;
  engineer: WoolWarsStats;
  archer: WoolWarsStats;
  ownedCosmetics: string[];
  privateGamesConfig: WoolWarsPrivateGamesConfig;
  constructor(data: Record<string, any>) {
    this.layers = data.progression?.available_layers || 0;
    this.xp = data.progression?.experience || 0;
    this.exactLevel = convertXPToLevel(this.xp);
    this.level = Math.floor(this.exactLevel);
    this.coins = data.coins || 0;
    this.wins = data.wins || 0;
    this.gamesPlayed = data.games_played || 0;
    this.woolsPlaced = data.wool_placed || 0;
    this.blocksBroken = data.blocks_broken || 0;
    this.placeBreakRatio = divide(this.woolsPlaced, this.blocksBroken);
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.assists = data.assists || 0;
    this.powerups = data.powerups_gotten || 0;
    this.selectedClass = data.wool_wars?.selected_class || 'NONE';
    this.assault = generateStatsFor(data.wool_wars?.stats, 'assault');
    this.tank = generateStatsFor(data.wool_wars?.stats, 'tank');
    this.golem = generateStatsFor(data.wool_wars?.stats, 'golem');
    this.swordsman = generateStatsFor(data.wool_wars?.stats, 'swordsman');
    this.engineer = generateStatsFor(data.wool_wars?.stats, 'engineer');
    this.archer = generateStatsFor(data.wool_wars?.stats, 'archer');
    this.ownedCosmetics = data.packages || [];
    this.privateGamesConfig = data.privategames || {};
  }
}

export default WoolWars;
