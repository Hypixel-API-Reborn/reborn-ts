import { SeasonName } from './Types.js';

export class SeasonBingoTier {
  objectives: Record<string, number>;
  rewards: string[];
  constructor(data: Record<string, any>) {
    this.objectives = data.objectives || {};
    this.rewards = data.rewards || [];
  }
}

export class SeasonBingo {
  easy: SeasonBingoTier | null;
  medium: SeasonBingoTier | null;
  hard: SeasonBingoTier | null;
  constructor(data: Record<string, any>) {
    this.easy = data.easy ? new SeasonBingoTier(data.easy) : null;
    this.medium = data.medium ? new SeasonBingoTier(data.medium) : null;
    this.hard = data.hard ? new SeasonBingoTier(data.hard) : null;
  }
}

export class SeasonYear {
  year: number;
  experience: number;
  season: Record<string, any>;
  bingo: SeasonBingo | null;
  adventRewards: Record<string, number> | null;
  presents: Record<string, boolean> | null;
  constructor(data: Record<string, any>, year: string) {
    this.year = Number(year);
    this.experience = data?.leveling?.experience || 0;
    this.season = data.season || {};
    this.bingo = data.bingo ? new SeasonBingo(data.bingo) : null;
    this.adventRewards = data.adventRewards ? data.adventRewards : null;
    this.presents = data.presents ? data.presents : null;
  }
}

export class Season {
  season: SeasonName;
  years: SeasonYear[];
  constructor(data: Record<string, any>, season: SeasonName) {
    this.season = season;
    this.years = [];
    Object.keys(data).forEach((key) => this.years.push(new SeasonYear(data?.[key], key)));
  }
}

class Seasonal {
  silver: number;
  anniversary: Season;
  christmas: Season;
  easter: Season;
  halloween: Season;
  summer: Season;
  constructor(data: Record<string, any>) {
    this.silver = data.silver || 0;
    this.anniversary = new Season(data?.anniversary || {}, 'anniversary');
    this.christmas = new Season(data?.christmas || {}, 'christmas');
    this.easter = new Season(data?.easter || {}, 'easter');
    this.halloween = new Season(data?.halloween || {}, 'halloween');
    this.summer = new Season(data?.summer || {}, 'summer');
  }
}

export default Seasonal;
