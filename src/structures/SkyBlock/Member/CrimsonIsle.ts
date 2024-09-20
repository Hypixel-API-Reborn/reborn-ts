import { CrimsonIsleBelt, CrimsonIsleDojoRank, CrimsonIsleFactions, TrophyFishRank } from './Types';

export class CrimsonIsleReputation {
  mages: number;
  barbarians: number;
  constructor(data: Record<string, any>) {
    this.mages = data?.nether_island_player_data?.mages_reputation || 0;
    this.barbarians = data?.nether_island_player_data?.barbarians_reputation || 0;
  }
}

export class CrimsonIsleTrophyFishCaught {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
  constructor(data: Record<string, any>) {
    this.total = data?.nether_island_player_data?.trophy_fish?.total_caught || 0;
    this.bronze =
      Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_bronze')).length ||
      0;
    this.silver =
      Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_silver')).length ||
      0;
    this.gold =
      Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_gold')).length ||
      0;
    this.diamond =
      Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_diamond'))
        .length || 0;
  }
}

export class CrimsonIsleTrophyFish {
  rank: TrophyFishRank;
  caught: CrimsonIsleTrophyFishCaught;
  constructor(data: Record<string, any>) {
    this.rank = this.getTrophyFishRank((data?.nether_island_player_data?.trophy_fish?.rewards || [])?.length);
    this.caught = new CrimsonIsleTrophyFishCaught(data);
  }

  getTrophyFishRank(level: number): TrophyFishRank {
    if (1 === level) {
      return 'Bronze';
    } else if (2 === level) {
      return 'Silver';
    } else if (3 === level) {
      return 'Gold';
    } else if (4 === level) {
      return 'Diamond';
    }
    return 'Bronze';
  }
}

export class CrimsonIsleDojoMinigame {
  points: number;
  rank: CrimsonIsleDojoRank;
  constructor(data: Record<string, any>, mode: string) {
    this.points = data?.nether_island_player_data?.dojo?.[`dojo_points_${mode}`] || 0;
    this.rank = this.getScore(this.points);
  }

  getScore(points: number): CrimsonIsleDojoRank {
    if (1000 <= points) {
      return 'S';
    } else if (800 <= points) {
      return 'A';
    } else if (600 <= points) {
      return 'B';
    } else if (400 <= points) {
      return 'C';
    } else if (200 <= points) {
      return 'D';
    }
    return 'F';
  }
}

export class CrimsonIsleDojo {
  belt: CrimsonIsleBelt;
  force: CrimsonIsleDojoMinigame;
  stamina: CrimsonIsleDojoMinigame;
  mastery: CrimsonIsleDojoMinigame;
  discipline: CrimsonIsleDojoMinigame;
  swiftness: CrimsonIsleDojoMinigame;
  control: CrimsonIsleDojoMinigame;
  tenacity: CrimsonIsleDojoMinigame;
  constructor(data: Record<string, any>) {
    this.belt = this.getBelt(
      Object.keys(data?.nether_island_player_data?.dojo ?? {})
        .filter((key) => key.startsWith('dojo_points'))
        .reduce((acc, key) => acc + (data?.nether_island_player_data?.dojo[key] || 0), 0)
    );
    this.force = new CrimsonIsleDojoMinigame(data, 'mob_kb');
    this.stamina = new CrimsonIsleDojoMinigame(data, 'wall_jump');
    this.mastery = new CrimsonIsleDojoMinigame(data, 'archer');
    this.discipline = new CrimsonIsleDojoMinigame(data, 'sword_swap');
    this.swiftness = new CrimsonIsleDojoMinigame(data, 'snake');
    this.control = new CrimsonIsleDojoMinigame(data, 'lock_head');
    this.tenacity = new CrimsonIsleDojoMinigame(data, 'fireball');
  }

  getBelt(points: number): CrimsonIsleBelt {
    if (7000 <= points) {
      return 'Black';
    } else if (6000 <= points) {
      return 'Brown';
    } else if (4000 <= points) {
      return 'Blue';
    } else if (2000 <= points) {
      return 'Green';
    } else if (1000 <= points) {
      return 'Yellow';
    }
    return 'White';
  }
}

export class CrimsonIsleKuudra {
  none: number;
  hot: number;
  burning: number;
  fiery: number;
  highestWaveHot: number;
  highestWaveFiery: number;
  infernal: number;
  highestWaveInfernal: number;
  highestWaveBurning: number;
  constructor(data: Record<string, any>) {
    this.none = data?.nether_island_player_data?.kuudra_completed_tiers?.none || 0;
    this.hot = data?.nether_island_player_data?.kuudra_completed_tiers?.hot || 0;
    this.burning = data?.nether_island_player_data?.kuudra_completed_tiers?.burning || 0;
    this.fiery = data?.nether_island_player_data?.kuudra_completed_tiers?.fiery || 0;
    this.highestWaveHot = data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_hot || 0;
    this.highestWaveFiery = data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_fiery || 0;
    this.infernal = data?.nether_island_player_data?.kuudra_completed_tiers?.infernal || 0;
    this.highestWaveInfernal = data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_infernal || 0;
    this.highestWaveBurning = data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_burning || 0;
  }
}

class CrimsonIsle {
  faction: CrimsonIsleFactions | null;
  reputation: CrimsonIsleReputation;
  trophyFish: CrimsonIsleTrophyFish;
  dojo: CrimsonIsleDojo;
  kuudra: CrimsonIsleKuudra;
  constructor(data: Record<string, any>) {
    this.faction = data?.nether_island_player_data?.selected_faction || null;
    this.reputation = new CrimsonIsleReputation(data);
    this.trophyFish = new CrimsonIsleTrophyFish(data);
    this.dojo = new CrimsonIsleDojo(data);
    this.kuudra = new CrimsonIsleKuudra(data);
  }
}

export default CrimsonIsle;
