import Achievements from './Achievements';
import Color from '../Color';
import Cosmetics from './Cosmetics';
import Gifting from './Gifting';
import Guild from '../Guild/Guild';
import House from '../House';
import Housing from '../Housing';
import Parkour from './Parkour';
import Quests from './Quests';
import RecentGame from '../RecentGame';
import Rewards from './Rewards';
import Seasonal from './Seasonal';
import SocialMedia, { parseSocialMedia } from './SocialMedia';
import Tourney from './Tourney';
import { ChatChannel, Language, LevelProgress, PlayerRank, ScorpiusBribe } from './Types';
import { getRank, playerLevelProgress } from './Utils';

class Player {
  uuid: string;
  nickname: string;
  rank: PlayerRank;
  mvpPlusColor: Color | null;
  mvpPlusPlusColor: Color | null;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  firstLoginTimestamp: number;
  firstLoginAt: Date;
  lastLoginTimestamp: number;
  lastLoginAt: Date;
  achievements: Achievements;
  language: Language;
  channel: ChatChannel;
  exp: number;
  level: LevelProgress;
  seasonal: Seasonal;
  karma: number;
  freeSkyblockCookie: number | null;
  tourney: Tourney;
  rewards: Rewards;
  challenges: object;
  parkour: Parkour[];
  housing: Housing;
  cosmetics: Cosmetics;
  scorpiusBribes: ScorpiusBribe[];
  quests: Quests;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.uuid = data.uuid;
    this.nickname = data.displayname;
    this.rank = getRank(data);
    this.mvpPlusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    this.mvpPlusPlusColor = data.monthlyRankColor ? new Color(data.monthlyRankColor) : null;
    this.gifting = new Gifting(data?.giftingMeta || {});
    this.socialMedia = parseSocialMedia(data?.socialMedia || {});
    this.firstLoginTimestamp = data?.firstLogin || 0;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.lastLoginTimestamp = data?.lastLogin || 0;
    this.lastLoginAt = new Date(this.lastLoginTimestamp);
    this.achievements = new Achievements(data);
    this.language = data?.userLanguage || 'ENGLISH';
    this.channel = data.channel || 'ALL';
    this.exp = data?.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.seasonal = new Seasonal(data?.seasonal || {});
    this.karma = data?.karma || 0;
    this.freeSkyblockCookie = data?.skyblock_free_cookie || null;
    this.tourney = new Tourney(data?.tourney || {});
    this.rewards = new Rewards(data);
    this.challenges = data?.challenges || {};
    this.parkour = [];
    Object.keys(data?.parkourCompletions || {}).map((location) => {
      this.parkour.push(new Parkour(data?.parkourCompletions || {}, data?.parkourCheckpointBests || {}, location));
    });
    this.housing = new Housing(data?.housingMeta || {});
    this.cosmetics = new Cosmetics(data);
    this.scorpiusBribes = [];
    Object.keys(data)
      .filter((key) => key.startsWith('scorpius_bribe_'))
      .forEach((key) => {
        this.scorpiusBribes.push({ year: Number(key), timestamp: data[key] });
      });
    this.quests = new Quests(data?.quests || {}, data?.questSettings?.autoActivate || false);
    this.guild = extra.guild || null;
    this.houses = extra.houses || null;
    this.recentGames = extra.recentGames || null;
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
