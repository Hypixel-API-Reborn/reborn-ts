import Cosmetics from './Cosmetics';
import Gifting from './Gifting';
import Guild from '../Guild/Guild';
import House from '../House';
import Housing from '../Housing';
import Parkour from './Parkour';
import RecentGame from '../RecentGame';
import SocialMedia, { parseSocialMedia } from './SocialMedia';
import { LevelProgress, PlayerRank } from './Types';
import { getRank, playerLevelProgress } from './Utils';

class Player {
  nickname: string;
  uuid: string;
  rank: PlayerRank;
  guild: Guild | null;
  firstLoginTimestamp: number;
  firstLoginAt: Date;
  exp: number;
  level: LevelProgress;
  karma: number;
  cosmetics: Cosmetics;
  parkour: Parkour[];
  housing: Housing;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  channel: string;
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.rank = getRank(data);
    this.guild = extra.guild || null;
    this.firstLoginTimestamp = data.firstLogin;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.exp = data.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.karma = data.karma || 0;
    this.cosmetics = new Cosmetics(data);
    this.parkour = [];
    Object.keys(data.parkourCompletions).map((location) => {
      this.parkour.push(new Parkour(data.parkourCompletions, data.parkourCheckpointBests, location));
    });
    this.housing = new Housing(data.housingMeta);
    this.gifting = new Gifting(data.giftingMeta);
    this.socialMedia = parseSocialMedia(data.socialMedia);
    this.channel = data.channel || 'ALL';
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
