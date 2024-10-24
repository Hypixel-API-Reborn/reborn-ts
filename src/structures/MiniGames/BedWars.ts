import divide from '../../utils/divide.js';

export type BedWarsPrestige =
  | 'Stone'
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Iron Prime'
  | 'Gold Prime'
  | 'Diamond Prime'
  | 'Emerald Prime'
  | 'Sapphire Prime'
  | 'Ruby Prime'
  | 'Crystal Prime'
  | 'Opal Prime'
  | 'Amethyst Prime'
  | 'Mirror'
  | 'Light'
  | 'Dawn'
  | 'Dusk'
  | 'Air'
  | 'Wind'
  | 'Nebula'
  | 'Thunder'
  | 'Earth'
  | 'Water'
  | 'Fire'
  | 'Sunrise'
  | 'Eclipse'
  | 'Gamma'
  | 'Majestic'
  | 'Andesine'
  | 'Marine'
  | 'Element'
  | 'Galaxy'
  | 'Atomic'
  | 'Sunset'
  | 'Time'
  | 'Winter'
  | 'Obsidian'
  | 'Spring'
  | 'Ice'
  | 'Summer'
  | 'Spinel'
  | 'Autumn'
  | 'Mystic'
  | 'Eternal';

export interface BedWarsCollectedItems {
  iron: number;
  gold: number;
  diamond: number;
  emerald: number;
}

export interface BedWarsBeds {
  lost: number;
  broken: number;
  BLRatio: number;
}

export class BedwarsMode {
  winstreak: number;
  playedGames: number;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  finalKills: number;
  finalDeaths: number;
  beds: BedWarsBeds;
  KDR: number;
  WLR: number;
  FKDR: number;
  constructor(data: Record<string, any>, mode: string) {
    this.winstreak = data?.[`${mode}_winstreak`] || 0;
    this.playedGames = data?.[`${mode}_games_played_bedwars`] || 0;
    this.kills = data?.[`${mode}_kills_bedwars`] || 0;
    this.deaths = data?.[`${mode}_deaths_bedwars`] || 0;
    this.wins = data?.[`${mode}_wins_bedwars`] || 0;
    this.losses = data?.[`${mode}_losses_bedwars`] || 0;
    this.finalKills = data?.[`${mode}_final_kills_bedwars`] || 0;
    this.finalDeaths = data?.[`${mode}_final_deaths_bedwars`] || 0;
    this.beds = {
      broken: data?.[`${mode}_beds_broken_bedwars`] || 0,
      lost: data?.[`${mode}_beds_lost_bedwars`] || 0,
      BLRatio: divide(data?.[`${mode}_beds_broken_bedwars`], data?.[`${mode}_beds_lost_bedwars`])
    };
    this.KDR = divide(data?.[`${mode}_kills_bedwars`], data?.[`${mode}_deaths_bedwars`]);
    this.WLR = divide(data?.[`${mode}_wins_bedwars`], data?.[`${mode}_losses_bedwars`]);
    this.FKDR = divide(data?.[`${mode}_final_kills_bedwars`], data?.[`${mode}_final_deaths_bedwars`]);
  }
}

export class BedwarsDreamMode {
  doubles: BedwarsMode;
  fours: BedwarsMode;
  constructor(data: Record<string, any>, mode: string) {
    this.doubles = new BedwarsMode(data, `eight_two_${mode}`);
    this.fours = new BedwarsMode(data, `four_four_${mode}`);
  }
}

export interface BedWarsPracticeAttempts {
  failed: number;
  successful: number;
  total: number;
}

export interface BedWarsPracticeElevation {
  straight: number;
  diagonal: number;
}

export interface BedWarsPracticeElevations {
  none: BedWarsPracticeElevation;
  slight: BedWarsPracticeElevation;
  staircase: BedWarsPracticeElevation;
}

export interface BedWarsPracticeRecord {
  elevation: BedWarsPracticeElevations;
}

export interface BedWarsPracticeRecords {
  blocks30: BedWarsPracticeRecord;
  blocks50: BedWarsPracticeRecord;
  blocks100: BedWarsPracticeRecord;
}

export interface BedWarsPracticeBridging {
  blocksPlaced: number;
  attempts: BedWarsPracticeAttempts;
  records: BedWarsPracticeRecords;
}

export interface BedWarsPracticePearlClutching {
  attempts: BedWarsPracticeAttempts;
}

export interface BedWarsPracticeBase {
  blocksPlaced: number;
  attempts: BedWarsPracticeAttempts;
}

export interface BedWarsPracticeStats {
  selected: string;
  bridging: BedWarsPracticeBridging;
  fireballJumping: BedWarsPracticeBase;
  pearlClutching: BedWarsPracticePearlClutching;
  mlg: BedWarsPracticeBase;
}

export function getBedWarsPrestige(level: number): BedWarsPrestige {
  if (5000 <= level) return 'Eternal';
  return ([
    'Stone',
    'Iron',
    'Gold',
    'Diamond',
    'Emerald',
    'Sapphire',
    'Ruby',
    'Crystal',
    'Opal',
    'Amethyst',
    'Rainbow',
    'Iron Prime',
    'Gold Prime',
    'Diamond Prime',
    'Emerald Prime',
    'Sapphire Prime',
    'Ruby Prime',
    'Crystal Prime',
    'Opal Prime',
    'Amethyst Prime',
    'Mirror',
    'Light',
    'Dawn',
    'Dusk',
    'Air',
    'Wind',
    'Nebula',
    'Thunder',
    'Earth',
    'Water',
    'Fire',
    'Sunrise',
    'Eclipse',
    'Gamma',
    'Majestic',
    'Andesine',
    'Marine',
    'Element',
    'Galaxy',
    'Atomic',
    'Sunset',
    'Time',
    'Winter',
    'Obsidian',
    'Spring',
    'Ice',
    'Summer',
    'Spinel',
    'Autumn',
    'Mystic',
    'Eternal'
  ][Math.floor(level / 100)] || 'Eternal') as BedWarsPrestige;
}

const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;
function getLevelRespectingPrestige(level: number) {
  if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
    return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE;
  }
  return level % LEVELS_PER_PRESTIGE;
}

export function getExpForLevel(level: number) {
  if (0 === level) return 0;
  switch (getLevelRespectingPrestige(level)) {
    case 1:
      return 500;
    case 2:
      return 1000;
    case 3:
      return 2000;
    case 4:
      return 3500;
    default:
      return 5000;
  }
}

function getLevelForExp(exp: number) {
  const prestiges = Math.floor(exp / XP_PER_PRESTIGE);
  let level = prestiges * LEVELS_PER_PRESTIGE;
  let expWithoutPrestiges = exp - prestiges * XP_PER_PRESTIGE;
  for (let i = 1; i <= EASY_LEVELS; ++i) {
    const expForEasyLevel = getExpForLevel(i);
    if (expWithoutPrestiges < expForEasyLevel) {
      break;
    }
    level++;
    expWithoutPrestiges -= expForEasyLevel;
  }
  return level + Math.floor(expWithoutPrestiges / 5000);
}

function generateStatsForPractice(data: Record<string, any>): BedWarsPracticeStats {
  return {
    selected: data?.practice?.selected || 'NONE',
    bridging: {
      blocksPlaced: data?.practice?.bridging?.blocks_placed ?? 0,
      attempts: {
        failed: data?.practice?.bridging?.failed_attempts ?? 0,
        successful: data?.practice?.bridging?.successful_attempts ?? 0,
        total: data?.practice?.bridging?.failed_attempts + data?.practice?.bridging?.successful_attempts
      },
      records: {
        blocks30: {
          elevation: {
            none: {
              straight: data?.practice?.records?.['bridging_distance_30:elevation_NONE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_30:elevation_NONE:angle_DIAGONAL:'] ?? 0
            },
            slight: {
              straight: data?.practice?.records?.['bridging_distance_30:elevation_SLIGHT:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_30:elevation_SLIGHT:angle_DIAGONAL:'] ?? 0
            },
            staircase: {
              straight: data?.practice?.records?.['bridging_distance_30:elevation_STAIRCASE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_30:elevation_STAIRCASE:angle_DIAGONAL:'] ?? 0
            }
          }
        },
        blocks50: {
          elevation: {
            none: {
              straight: data?.practice?.records?.['bridging_distance_50:elevation_NONE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_50:elevation_NONE:angle_DIAGONAL:'] ?? 0
            },
            slight: {
              straight: data?.practice?.records?.['bridging_distance_50:elevation_SLIGHT:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_50:elevation_SLIGHT:angle_DIAGONAL:'] ?? 0
            },
            staircase: {
              straight: data?.practice?.records?.['bridging_distance_50:elevation_STAIRCASE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_50:elevation_STAIRCASE:angle_DIAGONAL:'] ?? 0
            }
          }
        },
        blocks100: {
          elevation: {
            none: {
              straight: data?.practice?.records?.['bridging_distance_100:elevation_NONE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_100:elevation_NONE:angle_DIAGONAL:'] ?? 0
            },
            slight: {
              straight: data?.practice?.records?.['bridging_distance_100:elevation_SLIGHT:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_100:elevation_SLIGHT:angle_DIAGONAL:'] ?? 0
            },
            staircase: {
              straight: data?.practice?.records?.['bridging_distance_100:elevation_STAIRCASE:angle_STRAIGHT:'] ?? 0,
              diagonal: data?.practice?.records?.['bridging_distance_100:elevation_STAIRCASE:angle_DIAGONAL:'] ?? 0
            }
          }
        }
      }
    },
    fireballJumping: {
      blocksPlaced: data?.practice?.fireball_jumping?.blocks_placed ?? 0,
      attempts: {
        failed: data?.practice?.fireball_jumping?.failed_attempts ?? 0,
        successful: data?.practice?.fireball_jumping?.successful_attempts ?? 0,
        total: data?.practice?.fireball_jumping?.failed_attempts + data?.practice?.fireball_jumping?.successful_attempts
      }
    },
    pearlClutching: {
      attempts: {
        failed: data?.practice?.pearl_clutching?.failed_attempts ?? 0,
        successful: data?.practice?.pearl_clutching?.successful_attempts ?? 0,
        total: data?.practice?.pearl_clutching?.failed_attempts + data?.practice?.pearl_clutching?.successful_attempts
      }
    },
    mlg: {
      blocksPlaced: data?.practice?.mlg?.blocks_placed ?? 0,
      attempts: {
        failed: data?.practice?.mlg?.failed_attempts ?? 0,
        successful: data?.practice?.mlg?.successful_attempts ?? 0,
        total: data?.practice?.mlg?.failed_attempts + data?.practice?.mlg?.successful_attempts
      }
    }
  };
}

export interface BedwarsDreamStats {
  ultimate: BedwarsDreamMode;
  rush: BedwarsDreamMode;
  armed: BedwarsDreamMode;
  lucky: BedwarsDreamMode;
  voidless: BedwarsDreamMode;
}

class BedWars {
  tokens: number;
  level: number;
  experience: number;
  prestige: BedWarsPrestige;
  playedGames: number;
  wins: number;
  winstreak: number;
  kills: number;
  finalKills: number;
  losses: number;
  deaths: number;
  finalDeaths: number;
  collectedItemsTotal: BedWarsCollectedItems;
  beds: BedWarsBeds;
  KDR: number;
  FKDR: number;
  WLR: number;
  solo: BedwarsMode;
  doubles: BedwarsMode;
  threes: BedwarsMode;
  fours: BedwarsMode;
  '4v4': BedwarsMode;
  dream: BedwarsDreamStats;
  castle: BedwarsMode;
  practice: BedWarsPracticeStats;
  slumberTickets: number;
  totalSlumberTicket: number;
  constructor(data: Record<string, any>) {
    this.tokens = data?.coins || data?.tokens || 0;
    this.level = data?.Experience ? getLevelForExp(data?.Experience) : 0;
    this.experience = data?.Experience || 0;
    this.prestige = getBedWarsPrestige(getLevelForExp(data?.Experience));
    this.playedGames = data?.games_played_bedwars || 0;
    this.wins = data?.wins_bedwars || 0;
    this.winstreak = data?.winstreak || 0;
    this.kills = data?.kills_bedwars || 0;
    this.finalKills = data?.final_kills_bedwars || 0;
    this.losses = data?.losses_bedwars || 0;
    this.deaths = data?.deaths_bedwars || 0;
    this.finalDeaths = data?.final_deaths_bedwars || 0;
    this.collectedItemsTotal = {
      iron: data?.iron_resources_collected_bedwars || 0,
      gold: data?.gold_resources_collected_bedwars || 0,
      diamond: data?.diamond_resources_collected_bedwars || 0,
      emerald: data?.emerald_resources_collected_bedwars || 0
    };
    this.beds = {
      lost: data?.beds_lost_bedwars || 0,
      broken: data?.beds_broken_bedwars || 0,
      BLRatio: divide(data?.beds_broken_bedwars, data?.beds_lost_bedwars)
    };
    this.KDR = divide(this.kills, this.deaths);
    this.FKDR = divide(this.finalKills, this.finalDeaths);
    this.WLR = divide(this.wins, this.losses);
    this.solo = new BedwarsMode(data, 'eight_one');
    this.doubles = new BedwarsMode(data, 'eight_two');
    this.threes = new BedwarsMode(data, 'four_three');
    this.fours = new BedwarsMode(data, 'four_four');
    this['4v4'] = new BedwarsMode(data, 'two_four');
    this.dream = {
      ultimate: new BedwarsDreamMode(data, 'ultimate'),
      rush: new BedwarsDreamMode(data, 'rush'),
      armed: new BedwarsDreamMode(data, 'armed'),
      lucky: new BedwarsDreamMode(data, 'lucky'),
      voidless: new BedwarsDreamMode(data, 'voidless')
    };
    this.castle = new BedwarsMode(data, 'castle');
    this.practice = generateStatsForPractice(data);
    this.slumberTickets = data?.slumber?.tickets || 0;
    this.totalSlumberTicket = data?.slumber?.total_tickets || 0;
  }
}

export default BedWars;
