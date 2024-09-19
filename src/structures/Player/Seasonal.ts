class SeasonBingoTier {
  objectives: Record<string, number>;
  rewards: string[];
  constructor(data: Record<string, any>) {
    this.objectives = data.objectives || {};
    this.rewards = data.rewards || [];
  }
}

class SeasonBingo {
  easy: SeasonBingoTier | null;
  medium: SeasonBingoTier | null;
  hard: SeasonBingoTier | null;
  constructor(data: Record<string, any>) {
    this.easy = data.easy ? new SeasonBingoTier(data.easy) : null;
    this.medium = data.medium ? new SeasonBingoTier(data.medium) : null;
    this.hard = data.hard ? new SeasonBingoTier(data.hard) : null;
  }
}

class SeasonYear {
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

class Season {
  season: string;
  years: SeasonYear[];
  constructor(data: Record<string, any>, season: string) {
    this.season = season;
    this.years = [];
    Object.keys(data).forEach((key) => this.years.push(new SeasonYear(data?.[key], key)));
  }
}

class Seasonal {
  silver: number;
  christmas: Season;
  easter: Season;
  summer: Season;
  halloween: Season;
  anniversary: Season;
  constructor(data: Record<string, any>) {
    this.silver = data.silver || 0;
    this.christmas = new Season(data?.christmas || {}, 'christmas');
    this.easter = new Season(data?.easter || {}, 'easter');
    this.summer = new Season(data?.summer || {}, 'summer');
    this.halloween = new Season(data?.halloween || {}, 'halloween');
    this.anniversary = new Season(data?.anniversary || {}, 'anniversary');
  }
}

export default Seasonal;
