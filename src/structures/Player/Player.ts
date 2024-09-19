import Achievements from './Achievements';
import Cosmetics from './Cosmetics';
import Gifting from './Gifting';
import Guild from '../Guild/Guild';
import House from '../House';
import Housing from '../Housing';
import Parkour from './Parkour';
import Quest from './Quests';
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
  quests: Quest[];

  rank: PlayerRank;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.uuid = data.uuid;
    this.nickname = data.displayname;
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
    this.freeSkyblockCookie = data.skyblock_free_cookie || null;
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
    this.quests = [];
    Object.keys(data.quests || []).forEach((quest) => {
      this.quests.push(new Quest(data.quests[quest], quest));
    });

    this.rank = getRank(data);
    this.guild = extra.guild || null;
    this.houses = extra.houses || null;
    this.recentGames = extra.recentGames || null;
    this.gifting = new Gifting(data?.giftingMeta || {});
    this.socialMedia = parseSocialMedia(data?.socialMedia || {});
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
