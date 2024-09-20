export class JacobMedals {
  gold: number;
  silver: number;
  bronze: number;
  constructor(data: Record<string, any>) {
    this.bronze = data?.jacobs_contest?.medals_inv?.bronze || 0;
    this.silver = data?.jacobs_contest?.medals_inv?.silver || 0;
    this.gold = data?.jacobs_contest?.medals_inv?.gold || 0;
  }
}

export class JacobPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
  constructor(data: Record<string, any>) {
    this.doubleDrops = data?.jacobs_contest?.perks?.double_drops || 0;
    this.farmingLevelCap = data?.jacobs_contest?.perks?.farming_level_cap || 0;
    this.personalBests = data?.jacobs_contest?.perks?.personal_bests || false;
  }
}

class Jacob {
  medals: JacobMedals;
  perks: JacobPerks;
  contests: Record<string, any>;
  constructor(data: Record<string, any>) {
    this.medals = new JacobMedals(data);
    this.perks = new JacobPerks(data);
    this.contests = data?.jacobs_contestcontests || {};
  }
}

export default Jacob;
