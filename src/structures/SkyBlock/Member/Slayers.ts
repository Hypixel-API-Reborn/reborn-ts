export class Slayer {
  xp: number;
  level: number;
  tier1Kills: number;
  tier2Kills: number;
  tier3Kills: number;
  tier4Kills: number;
  tier5Kills: number;
  constructor(data: Record<string, any>) {
    this.xp = data?.xp || 0;
    this.level =
      Object.entries(data?.claimed_levels || {})
        .filter(([_, value]) => true === value)
        .filter(([key, _]) => !key.endsWith('_special'))
        .map(([key, _]) => parseInt(key.split('level_')[1]))
        .sort((a, b) => a - b)
        .reverse()[0] || 0;
    this.tier1Kills = data?.boss_kills_tier_0 || 0;
    this.tier2Kills = data?.boss_kills_tier_1 || 0;
    this.tier3Kills = data?.boss_kills_tier_2 || 0;
    this.tier4Kills = data?.boss_kills_tier_3 || 0;
    this.tier5Kills = data?.boss_kills_tier_4 || 0;
  }
}

class Slayers {
  zombie: Slayer;
  spider: Slayer;
  wolf: Slayer;
  enderman: Slayer;
  blaze: Slayer;
  vampire: Slayer;
  constructor(data: Record<string, any>) {
    this.zombie = new Slayer(data?.slayer?.slayer_bosses?.zombie || {});
    this.spider = new Slayer(data?.slayer?.slayer_bosses?.spider || {});
    this.wolf = new Slayer(data?.slayer?.slayer_bosses?.wolf || {});
    this.enderman = new Slayer(data?.slayer?.slayer_bosses?.enderman || {});
    this.blaze = new Slayer(data?.slayer?.slayer_bosses?.blaze || {});
    this.vampire = new Slayer(data?.slayer?.slayer_bosses?.vampire || {});
  }
}

export default Slayers;
