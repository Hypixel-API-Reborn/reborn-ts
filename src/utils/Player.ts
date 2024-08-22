import { LevelProgress, PlayerRank, PlayerSocialMedia } from '../structures/Player';

export function getRank(player: Record<string, any>): PlayerRank {
  let rank;
  if (player.prefix) {
    rank = player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '');
  } else if (player.rank && 'NORMAL' !== player.rank) {
    switch (player.rank) {
      case 'YOUTUBER':
        rank = 'YouTube';
        break;
      case 'GAME_MASTER':
        rank = 'Game Master';
        break;
      case 'ADMIN':
        rank = 'Admin';
        break;
      default:
        rank = '';
        break;
    }
  } else {
    switch (player.newPackageRank) {
      case 'MVP_PLUS':
        rank = player.monthlyPackageRank && 'SUPERSTAR' === player.monthlyPackageRank ? 'MVP++' : 'MVP+';
        break;
      case 'MVP':
        rank = 'MVP';
        break;
      case 'VIP_PLUS':
        rank = 'VIP+';
        break;
      case 'VIP':
        rank = 'VIP';
        break;
      default:
        rank = player.monthlyPackageRank && 'SUPERSTAR' === player.monthlyPackageRank ? 'MVP++' : '';
    }
  }
  return rank;
}

export function getPlayerLevel(exp: number): number {
  const base = 10000;
  const growth = 2500;
  const reversePqPrefix = -(base - 0.5 * growth) / growth;
  const reverseConst = reversePqPrefix * reversePqPrefix;
  const growthdivides2 = 2 / growth;
  const num = 1 + reversePqPrefix + Math.sqrt(reverseConst + growthdivides2 * exp);
  const level = Math.round(num * 100) / 100;
  return level;
}

export function xpToNextLevel(xp: number): number {
  const lvl = getPlayerLevel(xp);
  const xpToNext = 2500 * Math.floor(lvl) + 5000;
  if (10000 > xp) return 10000;
  return xpToNext;
}

export function levelToXP(xp: number): number {
  let level = Number(Math.floor(getPlayerLevel(xp)));
  level = level - 1;
  return 1250 * level ** 2 + 8750 * level;
}

export function playerLevelProgress(xp: number): LevelProgress {
  const xpFromLevel = levelToXP(xp);
  let currentXP = xp - xpFromLevel;
  const xpToNext = xpToNextLevel(xp);
  const remainingXP = xpToNext - currentXP + 2500;
  currentXP = currentXP - 2500;
  const percent = Math.round((currentXP / xpToNext) * 100 * 100) / 100;
  const percentRemaining = Math.round((100 - percent) * 100) / 100;
  return { xpToNext, remainingXP, currentXP, percent, percentRemaining };
}

export function getSocialMedia(data: Record<string, any>): PlayerSocialMedia[] {
  const links = data.links;
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'HYPIXEL', 'DISCORD'];
  return Object.keys(links)
    .map((x) => upperNames.indexOf(x))
    .filter((x) => -1 !== x)
    .map((x) => ({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}

export function parseClaimedRewards(data: Record<string, any>): number[] {
  return Object.keys(data)
    .map((x) => x.match(/levelingReward_(\d+)/))
    .filter((x) => x)
    .map((x) => (x ? parseInt(x[1], 10) : null))
    .filter((x) => null !== x);
}
