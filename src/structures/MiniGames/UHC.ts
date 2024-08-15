import divide from '../../utils/divide';

function getStarLevel(kills: number, wins: number) {
  const sum = Number(kills) + wins * 10;
  let starLevel = 1;
  const sums = [0, 1, 6, 21, 46, 96, 171, 271, 521, 1021, 1321, 1621, 1921, 2221, 2521, Infinity];
  starLevel += sums.map((x) => x * 10 - sum).findIndex((x) => 0 < x) - 1;
  return starLevel;
}

class UHCGamemode {
  kills: number;
  deaths: number;
  wins: number;
  headsEaten: number;
  ultimatesCrafted: number;
  extraUltimatesCrafted: number;
  constructor(data: Record<string, any>, mode?: string) {
    if (mode) mode = `_${mode}`;
    /**
     * @type {kills:number}
     */
    this.kills = data[`kills${mode}`] || 0;
    /**
     * @type {deaths:number}
     */
    this.deaths = data[`deaths${mode}`] || 0;
    /**
     * @type {wins:number}
     */
    this.wins = data[`wins${mode}`] || 0;
    /**
     * @type {headsEaten:number}
     */
    this.headsEaten = data[`heads_eaten${mode}`] || 0;
    /**
     * @type {ultimatesCrafted:number}
     */
    this.ultimatesCrafted = data[`ultimates_crafted${mode}`] || 0;
    /**
     * @type {extraUltimatesCrafted:number}
     */
    this.extraUltimatesCrafted = data[`extra_ultimates_crafted${mode}`] || 0;
  }
}

/**
 * UHC class
 */
class UHC {
  coins: number;
  score: number;
  kit: string;
  solo: UHCGamemode;
  team: UHCGamemode;
  redVsBlue: UHCGamemode;
  noDiamond: UHCGamemode;
  brawl: UHCGamemode;
  soloBrawl: UHCGamemode;
  duoBrawl: UHCGamemode;
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  headsEaten: number;
  ultimatesCrafted: number;
  extraUltimatesCrafted: number;
  starLevel: number;
  constructor(data: Record<string, any>) {
    /**
     * @type {coins:number}
     */
    this.coins = data.coins || 0;
    /**
     * @type {score:number}
     */
    this.score = data.score || 0;
    /**
     * @type {kit:string}
     */
    this.kit = data.equippedKit || '';
    /**
     * @type {solo:UHCGamemode}
     */
    this.solo = new UHCGamemode(data, 'solo');
    /**
     * @type {team:UHCGamemode}
     */
    this.team = new UHCGamemode(data);
    /**
     * @type {redVsBlue:UHCGamemode}
     */
    this.redVsBlue = new UHCGamemode(data, 'red_vs_blue');
    /**
     * @type {noDiamond:UHCGamemode}
     */
    this.noDiamond = new UHCGamemode(data, 'no_diamonds');
    /**
     * @type {brawl:UHCGamemode}
     */
    this.brawl = new UHCGamemode(data, 'brawl');
    /**
     * @type {soloBrawl:UHCGamemode}
     */
    this.soloBrawl = new UHCGamemode(data, 'solo_brawl');
    /**
     * @type {duoBrawl:UHCGamemode}
     */
    this.duoBrawl = new UHCGamemode(data, 'duo_brawl');
    /**
     * @type {wins:number}
     */
    this.wins =
      this.solo.wins +
      this.team.wins +
      this.redVsBlue.wins +
      this.noDiamond.wins +
      this.brawl.wins +
      this.soloBrawl.wins +
      this.duoBrawl.wins;
    /**
     * @type {kills:number}
     */
    this.kills =
      this.solo.kills +
      this.team.kills +
      this.redVsBlue.kills +
      this.noDiamond.kills +
      this.brawl.kills +
      this.soloBrawl.kills +
      this.duoBrawl.kills;
    /**
     * @type {deaths:number}
     */
    this.deaths =
      this.solo.deaths +
      this.team.deaths +
      this.redVsBlue.deaths +
      this.noDiamond.deaths +
      this.brawl.deaths +
      this.soloBrawl.deaths +
      this.duoBrawl.deaths;
    /**
     * @type {KDRatio:number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * @type {headsEaten:number}
     */
    this.headsEaten =
      this.solo.headsEaten +
      this.team.headsEaten +
      this.redVsBlue.headsEaten +
      this.noDiamond.headsEaten +
      this.brawl.headsEaten +
      this.soloBrawl.headsEaten +
      this.duoBrawl.headsEaten;
    /**
     * @type {ultimatesCrafted:number}
     */
    this.ultimatesCrafted =
      this.solo.ultimatesCrafted +
      this.team.ultimatesCrafted +
      this.redVsBlue.ultimatesCrafted +
      this.noDiamond.ultimatesCrafted +
      this.brawl.ultimatesCrafted +
      this.soloBrawl.ultimatesCrafted +
      this.duoBrawl.ultimatesCrafted;
    /**
     * @type {extraUltimatesCrafted:number}
     */
    this.extraUltimatesCrafted =
      this.solo.extraUltimatesCrafted +
      this.team.extraUltimatesCrafted +
      this.redVsBlue.extraUltimatesCrafted +
      this.noDiamond.extraUltimatesCrafted +
      this.brawl.extraUltimatesCrafted +
      this.soloBrawl.extraUltimatesCrafted +
      this.duoBrawl.extraUltimatesCrafted;
    /**
     * @type {starLevel:number}
     */
    this.starLevel = getStarLevel(this.kills, this.wins);
  }
}
export default UHC;
