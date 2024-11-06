import divide from '../../../utils/divide.js';

class CaptureTheWool {
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

export default CaptureTheWool;
