import Constants from './Constants';
import { SkillLevel } from '../structures/SkyBlock/Member/Types';
import { parse, simplify } from 'prismarine-nbt';

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

export function getLevelByXp(xp: number, type: string): SkillLevel {
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

function formatBestiaryMobs(userProfile: Record<string, any>, mobs: any) {
  const output = [];
  for (const mob of mobs) {
    const mobBracket = (Constants.bestiaryBrackets as { [key: number]: number[] })[mob.bracket];
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
  if (userProfile?.bestiary?.kills === undefined) {
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
