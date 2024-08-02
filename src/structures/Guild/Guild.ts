import { calculateExpHistory, ExpHistory, getGuildLevel, members, ranks, totalWeeklyGexp } from '../../utils/Guild';
import GuildMember from './GuildMember';
import GuildRank from './GuildRank';
import Color from '../Color';
import Game from '../Game';

class Guild {
  id: string;
  name: string;
  description: string;
  experience: number;
  level: number;
  members: GuildMember[];
  me: GuildMember | any;
  ranks: GuildRank[];
  totalWeeklyGexp: number;
  createdAtTimestamp: string;
  createdAt: Date;
  joinable: boolean;
  publiclyListed: boolean;
  chatMuteUntilTimestamp: number | null;
  chatMuteUntil: Date | null;
  banner: { Pattern: string; Color: string }[];
  tag: string;
  tagColor: Color | null;
  expHistory: ExpHistory[];
  achievements: { winners: number; experienceKings: number; onlinePlayers: number };
  preferredGames: Game[];

  constructor(data: Record<string, any>, uuid?: string) {
    // eslint-disable-next-line no-underscore-dangle
    this.id = data._id;
    this.name = data.name;
    this.description = data.description ?? '';
    this.experience = data.exp || 0;
    this.level = getGuildLevel(this.experience);
    this.members = members(data);
    this.me = uuid ? this.members.find((member) => member.uuid === uuid) : null;
    this.ranks = ranks(data);
    this.totalWeeklyGexp = totalWeeklyGexp(data);
    this.createdAtTimestamp = data.created;
    this.createdAt = new Date(data.created);
    this.joinable = data.joinable ?? false;
    this.publiclyListed = Boolean(data.publiclyListed);
    this.chatMuteUntilTimestamp = data.chatMute ?? null;
    this.chatMuteUntil = data.chatMute ? new Date(data.chatMute) : null;
    this.banner = data.banner ?? null;
    this.tag = data.tag ?? null;
    this.tagColor = data.tagColor ? new Color(data.tagColor) : null;
    this.expHistory = calculateExpHistory(data);
    this.achievements = {
      winners: data.achievements.WINNERS ?? 0,
      experienceKings: data.achievements.EXPERIENCE_KINGS ?? 0,
      onlinePlayers: data.achievements.ONLINE_PLAYERS ?? 0
    };
    this.preferredGames = data.preferredGames ? data.preferredGames.map((g: any) => new Game(g)) : [];
  }
  toString(): string {
    return this.name;
  }
  guildMaster(): GuildMember {
    return this.members.find(
      (member) => 'Guild Master' === member.rank || 'GUILDMASTER' === member.rank
    ) as GuildMember;
  }
}

export default Guild;
