export class StatsCandyCollected {
  green: number;
  purple: number;
  total: number;
  constructor(data: Record<string, any>, year: string) {
    this.green = data?.candy_collected?.[`spooky_festival_${year}`]?.green_candy || 0;
    this.purple = data?.candy_collected?.[`spooky_festival_${year}`]?.purple_candy || 0;
    this.total = data?.candy_collected?.[`spooky_festival_${year}`]?.total || 0;
  }
}

export class StatsCandyFestival {
  year: number;
  collected: StatsCandyCollected;
  constructor(data: Record<string, any>, year: string) {
    this.year = Number(year);
    this.collected = new StatsCandyCollected(data, year);
  }
}

export class StatsCandy {
  green: number;
  purple: number;
  total: number;
  festivals: StatsCandyFestival[];
  constructor(data: Record<string, any>) {
    this.green = data?.candy_collected?.green_candy || 0;
    this.purple = data?.candy_collected?.purple_candy || 0;
    this.total = data?.candy_collected?.total || 0;
    this.festivals = Object.keys(data?.candy_collected || {})
      .filter((year) => year.startsWith('spooky_festival_'))
      .map((year) => new StatsCandyFestival(data, year.split('spooky_festival_')[1]));
  }
}

export class StatsPetMilestones {
  oresMinned: number;
  seaCreaturesKilled: number;
  constructor(data: Record<string, any>) {
    this.oresMinned = data?.pets?.milestone?.ores_mined || 0;
    this.seaCreaturesKilled = data?.pets?.milestone?.sea_creatures_killed || 0;
  }
}

export class StatsKillsDeaths {
  [key: string]: number;
  constructor(data: Record<string, any>) {
    this.total = Object.keys(data)
      .filter((key) => 'total' !== key)
      .reduce((acc, curr) => acc + data[curr], 0);
    Object.keys(data || {})
      .filter((key) => 'total' !== key)
      .sort((a, b) => data?.[b] - data?.[a])
      .forEach((key) => {
        this[key] = data[key];
      });
  }
}

export class StatsAuctionsStats {
  common: number;
  uncommon: number;
  rare: number;
  epic: number;
  legendary: number;
  special: number;
  mythic: number;
  ultimate: number;
  total: number;
  constructor(data: Record<string, any>) {
    this.common = data?.COMMON || 0;
    this.uncommon = data?.UNCOMMON || 0;
    this.rare = data?.RARE || 0;
    this.epic = data?.EPIC || 0;
    this.legendary = data?.LEGENDARY || 0;
    this.special = data?.SPECIAL || 0;
    this.mythic = data?.MYTHIC || 0;
    this.ultimate = data?.ULTIMATE || 0;
    this.total =
      this.common + this.uncommon + this.rare + this.epic + this.legendary + this.special + this.mythic + this.ultimate;
  }
}

export class StatsAuctions {
  noBids: number;
  bids: number;
  highestBid: number;
  goldSpent: number;
  goldEarnt: number;
  auctionsWon: number;
  auctionsCompleted: number;
  auctionsCreated: number;
  auctionFees: number;
  auctionsWithOutBids: number;
  bought: StatsAuctionsStats;
  sold: StatsAuctionsStats;
  constructor(data: Record<string, any>) {
    this.noBids = data?.auctions?.no_bids || 0;
    this.bids = data?.auctions?.bids || 0;
    this.highestBid = data?.auctions?.highest_bid || 0;
    this.goldSpent = data?.auctions?.gold_spent || 0;
    this.goldEarnt = data?.auctions?.gold_earned || 0;
    this.auctionsWon = data?.auctions?.won || 0;
    this.auctionsCompleted = data?.auctions?.completed || 0;
    this.auctionsCreated = data?.auctions?.created || 0;
    this.auctionFees = data?.auctions?.fees || 0;
    this.auctionsWithOutBids = data?.auctions?.no_bids || 0;
    this.bought = new StatsAuctionsStats(data?.auctions?.total_bought || {});
    this.sold = new StatsAuctionsStats(data?.auctions?.total_sold || {});
  }
}

export class StatsGifts {
  given: number;
  received: number;
  constructor(data: Record<string, any>) {
    this.given = data?.gifts?.total_given || 0;
    this.received = data?.gifts?.total_received || 0;
  }
}

export class StatsFishing {
  total: number;
  normal: number;
  tresure: number;
  largeTresure: number;
  constructor(data: Record<string, any>) {
    this.total = data?.items_fished?.total || 0;
    this.normal = data?.items_fished?.normal || 0;
    this.tresure = data?.items_fished?.treasure || 0;
    this.largeTresure = data?.items_fished?.large_treasure || 0;
  }
}

export class StatsBurrow {
  total: number;
  common: number;
  none: number;
  rare: number;
  legendary: number;
  constructor(data: Record<string, any>) {
    this.total = data?.total || 0;
    this.common = data?.COMMON || 0;
    this.none = data?.none || 0;
    this.rare = data?.RARE || 0;
    this.legendary = data?.LEGENDARY || 0;
  }
}

export class StatsMythos {
  kills: number;
  burrowsDugNext: StatsBurrow;
  burrowsDugCombat: StatsBurrow;
  burrowsDugTreasure: StatsBurrow;
  burrowsDugComplate: StatsBurrow;
  constructor(data: Record<string, any>) {
    this.kills = data?.mythos?.kills || 0;
    this.burrowsDugNext = new StatsBurrow(data?.mythos?.burrows_dug_next || {});
    this.burrowsDugCombat = new StatsBurrow(data?.mythos?.burrows_dug_combat || {});
    this.burrowsDugTreasure = new StatsBurrow(data?.mythos?.burrows_dug_treasure || {});
    this.burrowsDugComplate = new StatsBurrow(data?.mythos?.burrows_chains_complete || {});
  }
}

class Stats {
  candy: StatsCandy;
  petMilestones: StatsPetMilestones;
  highestCriticalDamage: number;
  highestDamage: number;
  kills: StatsKillsDeaths;
  deaths: StatsKillsDeaths;
  auctions: StatsAuctions;
  gifts: StatsGifts;
  itemsFished: StatsFishing;
  mythos: StatsMythos;
  constructor(data: Record<string, any>) {
    this.candy = new StatsCandy(data);
    this.petMilestones = new StatsPetMilestones(data);
    this.highestCriticalDamage = data?.highest_critical_damage || 0;
    this.highestDamage = data?.highest_damage || 0;
    this.kills = new StatsKillsDeaths(data?.kills || {});
    this.deaths = new StatsKillsDeaths(data?.deaths || {});
    this.auctions = new StatsAuctions(data);
    this.gifts = new StatsGifts(data);
    this.itemsFished = new StatsFishing(data);
    this.mythos = new StatsMythos(data);
  }
}

export default Stats;
