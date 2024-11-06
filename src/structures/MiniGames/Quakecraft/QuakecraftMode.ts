import divide from '../../../utils/divide.js';

class QuakecraftMode {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  killstreaks: number;
  distanceTravelled: number;
  shotsFired: number;
  headshots: number;
  constructor(data: Record<string, any>, gamemode?: 'teams') {
    const mode = gamemode ? `_${gamemode}` : '';
    this.wins = data?.[`wins${mode}`] || 0;
    this.kills = data?.[`kills${mode}`] || 0;
    this.deaths = data?.[`deaths${mode}`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.killstreaks = data?.[`killstreaks${mode}`] || 0;
    this.distanceTravelled = data?.[`distance_travelled${mode}`] || 0;
    this.shotsFired = data?.[`shots_fired${mode}`] || 0;
    this.headshots = data?.[`headshots${mode}`] || 0;
  }
}

export default QuakecraftMode;
