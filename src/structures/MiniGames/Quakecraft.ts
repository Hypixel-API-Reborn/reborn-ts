import divide from '../../utils/divide';

class QuakecraftMode {
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  killstreaks: number;
  distanceTravelled: number;
  shotsFired: number;
  headshots: number;
  constructor(data: Record<string, any>, gamemode?: string) {
    if (gamemode) gamemode = `_${gamemode}`;
    this.wins = data[`wins${gamemode}`] || 0;
    this.kills = data[`kills${gamemode}`] || 0;
    this.deaths = data[`deaths${gamemode}`] || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.killstreaks = data[`killstreaks${gamemode}`] || 0;
    this.distanceTravelled = data[`distance_travelled${gamemode}`] || 0;
    this.shotsFired = data[`shots_fired${gamemode}`] || 0;
    this.headshots = data[`headshots${gamemode}`] || 0;
  }
}

class Quakecraft {
  coins: number;
  solo: QuakecraftMode;
  teams: QuakecraftMode;
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  killstreaks: number;
  distanceTravelled: number;
  shotsFired: number;
  headshots: number;
  instantRespawn: boolean;
  killPrefixColor: string;
  showPrefix: boolean;
  killSound: string;
  barrel: string;
  case: string;
  muzzle: string;
  sight: string;
  trigger: string;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.solo = new QuakecraftMode(data);
    this.teams = new QuakecraftMode(data, 'teams');
    this.wins = this.solo.wins + this.teams.wins;
    this.kills = this.solo.kills + this.teams.kills;
    this.deaths = this.solo.deaths + this.teams.deaths;
    this.KDRatio = divide(this.kills, this.deaths);
    this.killstreaks = this.solo.killstreaks + this.teams.killstreaks;
    this.distanceTravelled = this.solo.distanceTravelled + this.teams.distanceTravelled;
    this.shotsFired = this.solo.shotsFired + this.teams.shotsFired;
    this.headshots = this.solo.headshots + this.teams.headshots;
    this.instantRespawn = data.instantRespawn || false;
    this.killPrefixColor = data.selectedKillPrefix || '';
    this.showPrefix = data.showKillPrefix || false;
    this.killSound = data.killsound || '';
    this.barrel = data.barrel || '';
    this.case = data.case || '';
    this.muzzle = data.muzzle || '';
    this.sight = data.sight || '';
    this.trigger = data.trigger || '';
  }
}

export default Quakecraft;
