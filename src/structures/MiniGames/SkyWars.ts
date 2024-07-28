import { removeSnakeCaseString } from '../../utils/removeSnakeCase';
import { SkyWarsPrestige } from '../../typings';
import divide from '../../utils/divide';

function getSkyWarsPrestige(level: number): SkyWarsPrestige {
  if (60 <= level) return 'Mythic';
  return (['Iron', 'Iron', 'Gold', 'Diamond', 'Emerald', 'Sapphire', 'Ruby', 'Crystal', 'Opal', 'Amethyst', 'Rainbow'][
    Math.floor(level / 5)
  ] || 'Iron') as SkyWarsPrestige;
}

function getSkyWarsLevel(xp: number): number {
  const totalXp = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  if (15000 <= xp) return Math.floor((xp - 15000) / 10000 + 12);
  const level = totalXp.findIndex((x) => 0 < x * 10 - xp);
  return level;
}

function getSkyWarsLevelProgress(xp: number) {
  const totalXp = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  const xpToNextLvl = [0, 2, 5, 8, 10, 25, 50, 100, 150, 250, 400, 500];
  let percent;
  let xpToNextLevel;
  let currentLevelXp = xp;
  if (15000 <= xp) {
    currentLevelXp -= 15000;
    if (0 === currentLevelXp) return { currentLevelXp: 0, xpToNextLevel: 10000, percent: 0, xpNextLevel: 10000 };
    if (10000 < currentLevelXp) {
      do {
        currentLevelXp -= 10000;
      } while (10000 <= currentLevelXp);
    }
    xpToNextLevel = 10000 - currentLevelXp;
    percent = Math.round(currentLevelXp) / 100;
    const percentRemaining = Math.round((100 - percent) * 100) / 100;
    return {
      currentLevelXp,
      xpToNextLevel,
      percent,
      xpNextLevel: 10000,
      percentRemaining
    };
  }
  const totalXptoNextLevel = xpToNextLvl[totalXp.findIndex((x) => 0 < x * 10 - xp)] * 10;
  for (let i = 0; i < xpToNextLvl.length; i++) {
    if (0 > currentLevelXp - xpToNextLvl[i] * 10) break;
    currentLevelXp -= xpToNextLvl[i] * 10;
  }
  xpToNextLevel = totalXptoNextLevel - currentLevelXp;
  percent = Math.round((currentLevelXp / totalXptoNextLevel) * 10000) / 100;
  return {
    currentLevelXp,
    xpToNextLevel,
    percent,
    xpNextLevel: totalXptoNextLevel
  };
}

class SkywarsMode {
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  constructor(data: Record<string, any>, gamemode: string) {
    this.kills = data[`kills_${gamemode}`] || 0;
    this.deaths = data[`deaths_${gamemode}`] || 0;
    this.KDRatio = divide(data.kills, data.deaths);
    this.wins = data[`wins_${gamemode}`] || 0;
    this.losses = data[`losses_${gamemode}`] || 0;
    this.WLRatio = divide(data.wins, data.losses);
  }
}
class SkywarsModeStats {
  activeKit: string;
  killstreak: number;
  kills: number;
  voidKills: number;
  meleeKills: number;
  bowKills: number;
  mobKills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  survivedPlayers: number;
  chestsOpened: number;
  timePlayed: number;
  shard: number;
  longestBowShot: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  fastestWin: number;
  heads: number;
  constructor(data: Record<string, any>, gamemode: string) {
    this.activeKit = data[`activeKit_${gamemode.toUpperCase()}`] || '';
    this.killstreak = data[`killstreak_${gamemode}`] || 0;
    this.kills = data[`kills_${gamemode}`] || 0;
    this.voidKills = data[`void_kills_${gamemode}`] || 0;
    this.meleeKills = data[`melee_kills_${gamemode}`] || 0;
    this.bowKills = data[`bow_kills_${gamemode}`] || 0;
    this.mobKills = data[`mob_kills_${gamemode}`] || 0;
    this.assists = data[`assists_${gamemode}`] || 0;
    this.deaths = data[`deaths_${gamemode}`] || 0;
    this.KDRatio = divide(data.kills, data.deaths);
    this.wins = data[`wins_${gamemode}`] || 0;
    this.losses = data[`losses_${gamemode}`] || 0;
    this.WLRatio = divide(data.wins, data.losses);
    this.gamesPlayed = data[`games_${gamemode}`] || 0;
    this.survivedPlayers = data[`survived_players_${gamemode}`] || 0;
    this.chestsOpened = data[`chests_opened_${gamemode}`] || 0;
    this.timePlayed = data[`time_played_${gamemode}`] || 0;
    this.shard = data[`shard_${gamemode}`] || 0;
    this.longestBowShot = data[`longest_bow_shot_${gamemode}`] || 0;
    this.arrowsShot = data[`arrows_shot_${gamemode}`] || 0;
    this.arrowsHit = data[`arrows_hit_${gamemode}`] || 0;
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    this.fastestWin = data[`fastest_win_${gamemode}`] || 0;
    this.heads = data[`heads_${gamemode}`] || 0;
  }
}

/**
 * Parses SkyWars Kit
 */
class SkywarsKit {
  kitData: string[] | null;
  isKit: boolean;
  gameMode: string;
  kitType: string;
  kitName: string;
  constructor(kit: Record<string, any>) {
    this.kitData = kit.match(/^kit_([a-z]+)_([a-z]+)_([a-z]+)$/);
    this.isKit = Boolean(this.kitData);
    this.gameMode = this.kitData ? this.kitData[2] : '';
    this.kitType = this.kitData ? this.kitData[1] : '';
    this.kitName = removeSnakeCaseString(this.kitData ? this.kitData[3] : '');
  }
}

/**
 * Parses SkyWars Kits
 */
class SkywarsKits {
  kits: SkywarsKit[];
  constructor(kits: Record<string, any>) {
    this.kits = kits.map((kit: any) => new SkywarsKit(kit)).filter((kit: SkywarsKit) => kit.isKit);
  }

  get(gameMode: string = '', type: string = ''): SkywarsKit[] {
    return this.kits.filter((kit) => kit.gameMode.startsWith(gameMode) && kit.kitType.startsWith(type));
  }
}
/**
 * Skywars Packages - parses every package player has
 */
class SkywarsPackages {
  rawPackages: Record<string, any>;
  cages: any;
  kits: SkywarsKits;
  achievements: any;
  constructor(data: Record<string, any>) {
    // TODO : a lot more
    this.rawPackages = data;
    this.cages = this.parseCages();
    this.kits = new SkywarsKits(data);
    this.achievements = this.rawPackages
      .map((pkg: string) => pkg.match(/^([A-Za-z]+)_?achievement([0-9]?)$/))
      .filter((x: any) => x)
      .map((x: any[]) => x.slice(1).join(''));
  }

  parseCages(): string[] {
    return this.rawPackages
      .map((pkg: string) => pkg.match(/^cage_([A-Za-z]+)-cage$/))
      .filter((x: any) => x)
      .map((x: string[]) => x[1].replace(/-[a-z]/g, (x) => x[1].toUpperCase()));
  }
}
/**
 * SkyWars class
 */
class SkyWars {
  coins: number;
  souls: number;
  tokens: number;
  experience: number;
  level: number;
  levelProgress: any;
  levelFormatted: string;
  prestige: SkyWarsPrestige;
  opals: number;
  avarice: number;
  tenacity: number;
  shards: number;
  angelOfDeathLevel: number;
  killstreak: number;
  kills: number;
  voidKills: number;
  meleeKills: number;
  bowKills: number;
  mobKills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  survivedPlayers: number;
  chestsOpened: number;
  timePlayed: number;
  shard: number;
  longestBowShot: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  fastestWin: number;
  heads: number;
  blocksPlaced: number;
  blocksBroken: number;
  eggThrown: number;
  enderpearlsThrown: number;
  solo: SkywarsModeStats;
  soloNormal: SkywarsMode;
  soloInsane: SkywarsMode;
  team: SkywarsModeStats;
  teamNormal: SkywarsMode;
  teamInsane: SkywarsMode;
  mega: SkywarsMode;
  megaDoubles: SkywarsMode;
  lab: SkywarsMode;
  packages: SkywarsPackages;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.souls = data.souls || 0;
    this.tokens = data.cosmetic_tokens || 0;
    this.experience = data.skywars_experience || 0;
    this.level = getSkyWarsLevel(data.skywars_experience);
    this.levelProgress = getSkyWarsLevelProgress(data.skywars_experience);
    this.levelFormatted = data.levelFormatted
      ? data.levelFormatted
          .replace(/§l/gm, '**')
          .replace(/§([a-f]|[1-9])/gm, '')
          .replace(/§r/gm, '')
      : null;
    this.prestige = getSkyWarsPrestige(this.level);
    this.opals = data.opals || 0;
    this.avarice = data.avarice || 0;
    this.tenacity = data.tenacity || 0;
    this.shards = data.shard || 0;
    this.angelOfDeathLevel = data.angel_of_death_level || 0;
    this.killstreak = data.killstreak || 0;
    this.kills = data.kills || 0;
    this.voidKills = data.void_kills || 0;
    this.meleeKills = data.melee_kills || 0;
    this.bowKills = data.bow_kills || 0;
    this.mobKills = data.mob_kills || 0;
    this.assists = data.assists || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(data.kills, data.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(data.wins, data.losses);
    this.gamesPlayed = data.games || 0;
    this.survivedPlayers = data.survived_players || 0;
    this.chestsOpened = data.chests_opened || 0;
    this.timePlayed = data.time_played || 0;
    this.shard = data.shard || 0;
    this.longestBowShot = data.longest_bow_shot || 0;
    this.arrowsShot = data.arrows_shot || 0;
    this.arrowsHit = data.arrows_hit || 0;
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    this.fastestWin = data.fastest_win || 0;
    this.heads = data.heads || 0;
    this.blocksPlaced = data.blocks_placed || 0;
    this.blocksBroken = data.blocks_broken || 0;
    this.eggThrown = data.egg_thrown || 0;
    this.enderpearlsThrown = data.enderpearls_thrown || 0;
    this.solo = new SkywarsModeStats(data, 'solo');
    this.soloNormal = new SkywarsMode(data, 'solo_normal');
    this.soloInsane = new SkywarsMode(data, 'solo_insane');
    this.team = new SkywarsModeStats(data, 'team');
    this.teamNormal = new SkywarsMode(data, 'team_normal');
    this.teamInsane = new SkywarsMode(data, 'team_insane');
    this.mega = new SkywarsMode(data, 'mega');
    this.megaDoubles = new SkywarsMode(data, 'mega_doubles');
    this.lab = new SkywarsMode(data, 'lab');
    this.packages = new SkywarsPackages(data.packages || []);
  }
}

export default SkyWars;
