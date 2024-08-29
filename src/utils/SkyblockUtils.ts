import { parse, simplify } from 'prismarine-nbt';
import Constants, { bestiaryBrackets } from './Constants';

export type SkyblockRarity =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'DIVINE'
  | 'SPECIAL'
  | 'VERY_SPECIAL';

export interface SkyblockMemberJacobDataMedals {
  gold: number;
  silver: number;
  bronze: number;
}

export interface SkyblockMemberJacobDataPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
}

export interface SkyblockMemberJacobData {
  medals: SkyblockMemberJacobDataMedals;
  perks: SkyblockMemberJacobDataPerks;
  contests: Record<string, any>;
}

export interface SkyblockMemberChocolateFactoryDataEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
}

export interface SkyblockMemberChocolateFactoryDataChocolate {
  current: number;
  total: number;
  sincePrestige: number;
}

export interface SkyblockMemberChocolateFactoryDataTimeTower {
  charges: number;
  level: number;
}

export interface SkyblockMemberChocolateFactoryDataUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
}

export interface SkyblockMemberChocolateFactoryDataGoldenClick {
  amount: number;
  year: number;
}

export interface SkyblockMemberChocolateFactoryData {
  employees: SkyblockMemberChocolateFactoryDataEmployees;
  chocolate: SkyblockMemberChocolateFactoryDataChocolate;
  timeTower: SkyblockMemberChocolateFactoryDataTimeTower;
  upgrades: SkyblockMemberChocolateFactoryDataUpgrades;
  goldenClick: SkyblockMemberChocolateFactoryDataGoldenClick;
  barnCapacity: number;
  prestige: number;
}

export interface SkyblockMemberSlayerLevel {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}

export interface SkyblockMemberSlayer {
  zombie: SkyblockMemberSlayerLevel;
  spider: SkyblockMemberSlayerLevel;
  wolf: SkyblockMemberSlayerLevel;
  enderman: SkyblockMemberSlayerLevel;
  blaze: SkyblockMemberSlayerLevel;
  vampire: SkyblockMemberSlayerLevel;
}
export type SkyblockMemberTrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
export interface SkyblockSkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}

export interface SkyblockMemberStats {
  kills: Record<string, any>;
  deaths: Record<string, any>;
}

export interface SkyblockMemberSkills {
  combat: SkyblockSkillLevel;
  farming: SkyblockSkillLevel;
  fishing: SkyblockSkillLevel;
  mining: SkyblockSkillLevel;
  foraging: SkyblockSkillLevel;
  enchanting: SkyblockSkillLevel;
  alchemy: SkyblockSkillLevel;
  carpentry: SkyblockSkillLevel;
  runecrafting: SkyblockSkillLevel;
  taming: SkyblockSkillLevel;
  social: SkyblockSkillLevel;
  average: number;
}

export interface SkyblockMemberDungeonsTypes {
  catacombs: SkyblockSkillLevel;
}

export interface SkyblockMemberDungeonsClasses {
  healer: SkyblockSkillLevel;
  mage: SkyblockSkillLevel;
  berserk: SkyblockSkillLevel;
  archer: SkyblockSkillLevel;
  tank: SkyblockSkillLevel;
}

export interface SkyblockMemberDungeons {
  types: SkyblockMemberDungeonsTypes;
  classes: SkyblockMemberDungeonsClasses;
}

export async function decode(base64: any, isBuffer: boolean = false): Promise<any[]> {
  // Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/3b5b3ae4fe77c60eff90691797f09024baf68872/src/lib/server/stats/items/processing.ts#L215-L218
  const buffer = isBuffer ? base64 : Buffer.from(base64, 'base64');
  const parseData = await parse(buffer);
  const data = simplify(parseData.parsed);
  const newdata = [];
  for (let i = 0; i < data.i.length; i++) {
    newdata.push(data.i[i]);
  }
  return newdata;
}

export function getLevelByXp(xp: number, type: string): SkyblockSkillLevel {
  let xpTable: Record<number, number>;
  switch (type) {
    case 'runecrafting':
      xpTable = Constants.runecraftingXp;
      break;
    case 'dungeons':
      xpTable = Constants.dungeonXp;
      break;
    case 'hotm':
      xpTable = Constants.hotmXp;
      break;
    case 'social':
      xpTable = Constants.socialXp;
      break;
    case 'garden':
      xpTable = Constants.garden;
      break;
    case 'wheat':
      xpTable = Constants.wheat;
      break;
    case 'carrot':
      xpTable = Constants.carrot;
      break;
    case 'potato':
      xpTable = Constants.potato;
      break;
    case 'melon':
      xpTable = Constants.melon;
      break;
    case 'pumpkin':
      xpTable = Constants.pumpkin;
      break;
    case 'sugarCane':
      xpTable = Constants.sugarCane;
      break;
    case 'cocoaBeans':
      xpTable = Constants.cocoaBeans;
      break;
    case 'cactus':
      xpTable = Constants.cactus;
      break;
    case 'mushroom':
      xpTable = Constants.mushroom;
      break;
    case 'netherWart':
      xpTable = Constants.netherWart;
      break;
    default:
      xpTable = Constants.levelingXp;
  }
  const maxLevel = Math.max(...Object.keys(xpTable).map(Number));
  if (isNaN(xp)) {
    return {
      xp: 0,
      level: 0,
      maxLevel,
      xpCurrent: 0,
      xpForNext: xpTable[1],
      progress: 0,
      cosmetic: Boolean('runecrafting' === type || 'social' === type)
    };
  }
  let xpTotal = 0;
  let level = 0;
  let xpForNext = 0;
  for (let x = 1; x <= maxLevel; x++) {
    if (!xpTable[x]) continue;
    xpTotal += xpTable[x];
    if (xpTotal > xp) {
      xpTotal -= xpTable[x];
      break;
    } else {
      level = x;
    }
  }
  const xpCurrent = Math.floor(xp - xpTotal);
  if (level < maxLevel) xpForNext = Math.ceil(xpTable[level + 1]);
  const progress = Math.floor(Math.max(0, Math.min(xpCurrent / xpForNext, 1)) * 100 * 10) / 10;
  return {
    xp: xp,
    level: level,
    maxLevel: maxLevel,
    xpCurrent: xpCurrent,
    xpForNext: xpForNext,
    progress: progress,
    cosmetic: Boolean('runecrafting' === type || 'social' === type)
  };
}

export function getSlayerLevel(slayer: Record<string, any>): SkyblockMemberSlayerLevel {
  if (!slayer) {
    return { xp: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0, tier5: 0, level: 0 };
  }
  // eslint-disable-next-line camelcase
  const { claimed_levels } = slayer;
  let level = 0;
  // eslint-disable-next-line camelcase
  for (const levelName in claimed_levels) {
    if (Object.prototype.hasOwnProperty.call(claimed_levels, levelName)) {
      const newLevel = parseInt(levelName.replace('_special', '').split('_').pop() ?? '', 10);
      if (newLevel > level) {
        level = newLevel;
      }
    }
  }
  return {
    xp: slayer.xp || 0,
    tier1: slayer.boss_kills_tier_0 || 0,
    tier2: slayer.boss_kills_tier_1 || 0,
    tier3: slayer.boss_kills_tier_2 || 0,
    tier4: slayer.boss_kills_tier_3 || 0,
    tier5: slayer.boss_kills_tier_4 || 0,
    level
  };
}

export function getMemberStats(obj: Record<string, any>): SkyblockMemberStats {
  return Object.keys(obj).reduce(
    (result, currentKey) => {
      const key = currentKey.replace(/_[a-z]/gi, (match) => match[1].toUpperCase());
      if (currentKey.startsWith('kills') || currentKey.startsWith('deaths')) {
        const category = currentKey.startsWith('kills') ? 'kills' : 'deaths';
        const subKey = key === category ? 'total' : key;
        result[category as keyof typeof result][
          subKey.replace(category, (sub, _, key) => {
            return key[sub.length].toLowerCase() + key.slice(sub.length + 1);
          })
        ] = obj[currentKey];
      } else {
        result[key as keyof typeof result] = obj[currentKey];
      }
      return result;
    },
    { kills: {}, deaths: {} } as { kills: Record<string, any>; deaths: Record<string, any> }
  );
}

export function getTrophyFishRank(level: number): SkyblockMemberTrophyFishRank {
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

export function getSkills(data: Record<string, any>): SkyblockMemberSkills {
  const skillsObject: SkyblockMemberSkills = {
    combat: getLevelByXp(data?.player_data?.experience?.SKILL_COMBAT ?? 0, 'combat'),
    farming: getLevelByXp(data?.player_data?.experience?.SKILL_FARMING ?? 0, 'farming'),
    fishing: getLevelByXp(data?.player_data?.experience?.SKILL_FISHING ?? 0, 'fishing'),
    mining: getLevelByXp(data?.player_data?.experience?.SKILL_MINING ?? 0, 'mining'),
    foraging: getLevelByXp(data?.player_data?.experience?.SKILL_FORAGING ?? 0, 'foraging'),
    enchanting: getLevelByXp(data?.player_data?.experience?.SKILL_ENCHANTING ?? 0, 'enchanting'),
    alchemy: getLevelByXp(data?.player_data?.experience?.SKILL_ALCHEMY ?? 0, 'alchemy'),
    carpentry: getLevelByXp(data?.player_data?.experience?.SKILL_CARPENTRY ?? 0, 'carpentry'),
    runecrafting: getLevelByXp(data?.player_data?.experience?.SKILL_RUNECRAFTING ?? 0, 'runecrafting'),
    taming: getLevelByXp(data?.player_data?.experience?.SKILL_TAMING ?? 0, 'taming'),
    social: getLevelByXp(data?.player_data?.experience?.SKILL_SOCIAL ?? 0, 'social'),
    average: 0
  };
  const levels = Object.values(skillsObject)
    .filter((skill) => true !== skill.cosmetic)
    .map((skill) => skill.level);
  skillsObject.average = levels.reduce((a, b) => a + b, 0) / levels.length;
  return skillsObject;
}

function formatBestiaryMobs(userProfile: Record<string, any>, mobs: any) {
  const output = [];
  for (const mob of mobs) {
    const mobBracket = bestiaryBrackets[mob.bracket];
    const totalKills = mob.mobs.reduce((acc: any, cur: any) => {
      return acc + (userProfile.bestiary.kills[cur] ?? 0);
    }, 0);
    const maxKills = mob.cap;
    const nextTierKills = mobBracket.find((tier: any) => totalKills < tier && tier <= maxKills);
    const tier = nextTierKills ? mobBracket.indexOf(nextTierKills) : mobBracket.indexOf(maxKills) + 1;
    output.push({ tier: tier });
  }
  return output;
}

export function getBestiaryLevel(userProfile: Record<string, any>): number {
  try {
    if (userProfile.bestiary?.kills === undefined) {
      return 0;
    }
    const output: { [key: string]: any } = {};
    let tiersUnlocked = 0;
    for (const [category, data] of Object.entries(Constants.bestiary)) {
      const { mobs } = data as { mobs: any };
      output[category] = {};
      if ('fishing' === category) {
        for (const [key, value] of Object.entries(data)) {
          output[category][key] = { mobs: formatBestiaryMobs(userProfile, value.mobs) };
          tiersUnlocked += output[category][key].mobs.reduce((acc: any, cur: any) => acc + cur.tier, 0);
        }
      } else {
        output[category].mobs = formatBestiaryMobs(userProfile, mobs);
        tiersUnlocked += output[category].mobs.reduce((acc: any, cur: any) => acc + cur.tier, 0);
      }
    }
    return tiersUnlocked / 10;
  } catch {
    return 0;
  }
}

export function getSlayer(data: Record<string, any>): SkyblockMemberSlayer | null {
  if (!data?.slayer?.slayer_bosses) return null;
  return {
    zombie: getSlayerLevel(data?.slayer?.slayer_bosses?.zombie),
    spider: getSlayerLevel(data?.slayer?.slayer_bosses?.spider),
    wolf: getSlayerLevel(data?.slayer?.slayer_bosses?.wolf),
    enderman: getSlayerLevel(data?.slayer?.slayer_bosses?.enderman),
    blaze: getSlayerLevel(data?.slayer?.slayer_bosses?.blaze),
    vampire: getSlayerLevel(data?.slayer?.slayer_bosses?.vampire)
  };
}

export function getDungeons(data: Record<string, any>): SkyblockMemberDungeons | null {
  return {
    types: { catacombs: getLevelByXp(data.dungeons?.dungeon_types?.catacombs ?? 0, 'dungeons') },
    classes: {
      healer: getLevelByXp(data.dungeons?.player_classes?.healer ?? 0, 'dungeons'),
      mage: getLevelByXp(data.dungeons?.player_classes?.mage ?? 0, 'dungeons'),
      berserk: getLevelByXp(data.dungeons?.player_classes?.berserk ?? 0, 'dungeons'),
      archer: getLevelByXp(data.dungeons?.player_classes?.archer ?? 0, 'dungeons'),
      tank: getLevelByXp(data.dungeons?.player_classes?.tank ?? 0, 'dungeons')
    }
  };
}

export function getJacobData(data: Record<string, any>): SkyblockMemberJacobData {
  if (!data.jacobs_contest) {
    return {
      medals: { bronze: 0, silver: 0, gold: 0 },
      perks: { doubleDrops: 0, farmingLevelCap: 0, personalBests: false },
      contests: {}
    };
  }
  return {
    medals: data.jacobs_contest.medals_inv
      ? {
          bronze: data.jacobs_contest.medals_inv.bronze || 0,
          silver: data.jacobs_contest.medals_inv.silver || 0,
          gold: data.jacobs_contest.medals_inv.gold || 0
        }
      : { bronze: 0, silver: 0, gold: 0 },
    perks: data.jacobs_contest.perks
      ? {
          doubleDrops: data.jacobs_contest.perks.double_drops || 0,
          farmingLevelCap: data.jacobs_contest.perks.farming_level_cap || 0,
          personalBests: data.jacobs_contest.perks.personal_bests || false
        }
      : { doubleDrops: 0, farmingLevelCap: 0, personalBests: false },
    contests: data.jacobs_contest.contests || {}
  };
}

export function getChocolateFactory(data: Record<string, any>): SkyblockMemberChocolateFactoryData {
  if (!data?.events?.easter) {
    return {
      employees: { bro: 0, cousin: 0, sis: 0, father: 0, grandma: 0, dog: 0, uncle: 0 },
      chocolate: { current: 0, total: 0, sincePrestige: 0 },
      timeTower: { charges: 0, level: 0 },
      upgrades: { click: 0, multiplier: 0, rabbitRarity: 0 },
      goldenClick: { amount: 0, year: 0 },
      barnCapacity: 0,
      prestige: 0
    };
  }
  return {
    employees: {
      bro: data?.events?.easter?.employees?.rabbit_bro || 0,
      cousin: data?.events?.easter?.employees?.rabbit_cousin || 0,
      sis: data?.events?.easter?.employees?.rabbit_sis || 0,
      father: data?.events?.easter?.employees?.rabbit_father || 0,
      grandma: data?.events?.easter?.employees?.rabbit_grandma || 0,
      dog: data?.events?.easter?.employees?.rabbit_dog || 0,
      uncle: data?.events?.easter?.employees?.rabbit_uncle || 0
    },
    chocolate: {
      current: data?.events?.easter?.chocolate || 0,
      total: data?.events?.easter?.total_chocolate || 0,
      sincePrestige: data?.events?.easter?.chocolate_since_prestige || 0
    },
    timeTower: {
      charges: data?.events?.easter?.time_tower?.charges || 0,
      level: data?.events?.easter?.time_tower?.level || 0
    },
    upgrades: {
      click: data?.events?.easter?.click_upgrades || 0,
      multiplier: data?.events?.easter?.chocolate_multiplier_upgrades || 0,
      rabbitRarity: data?.events?.easter?.rabbit_rarity_upgrades || 0
    },
    goldenClick: {
      amount: data?.events?.easter?.golden_click_amount || 0,
      year: data?.events?.easter?.golden_click_year || 0
    },
    barnCapacity: data?.events?.easter?.rabbit_barn_capacity_level || 0,
    prestige: data?.events?.easter?.chocolate_level || 0
  };
}

export function getPetLevel(petExp: number, offsetRarity: number, maxLevel: number) {
  const rarityOffset = Constants.petRarityOffset[offsetRarity as unknown as keyof typeof Constants.petRarityOffset];
  const levels = Constants.petLevels.slice(rarityOffset, rarityOffset + maxLevel - 1);
  const xpMaxLevel = levels.reduce((a, b) => a + b, 0);
  let xpTotal = 0;
  let level = 1;
  let xpForNext;
  for (let i = 0; i < maxLevel; i++) {
    xpTotal += levels[i];
    if (xpTotal > petExp) {
      xpTotal -= levels[i];
      break;
    } else {
      level++;
    }
  }
  let xpCurrent = Math.floor(petExp - xpTotal);
  let progress;
  if (level < maxLevel) {
    xpForNext = Math.ceil(levels[level - 1]);
    progress = Math.max(0, Math.min(xpCurrent / xpForNext, 1));
  } else {
    level = maxLevel;
    xpCurrent = petExp - levels[maxLevel - 1];
    xpForNext = 0;
    progress = 1;
  }
  return { level, xpCurrent, xpForNext, progress, xpMaxLevel };
}

export function parseRarity(str: string): SkyblockRarity {
  const rarityArray = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'MYTHIC',
    'DIVINE',
    'SPECIAL',
    'VERY SPECIAL'
  ];
  for (const rarity of rarityArray) {
    if (str.includes(rarity)) return rarity as SkyblockRarity;
  }
  return 'COMMON';
}

export function parseGearScore(lore: any): number {
  for (const line of lore) {
    if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
  }
  return 0;
}
