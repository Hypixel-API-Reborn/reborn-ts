import { ExpHistory, parseHistory } from '../../utils/Guild';

class GuildMember {
  uuid: string;
  joinedAtTimestamp: number;
  joinedAt: Date;
  questParticipation: number;
  rank: string;
  mutedUntilTimestamp: number | null;
  mutedUntil: Date | null;
  expHistory: ExpHistory[];
  weeklyExperience: any | null;
  constructor(data: Record<string, any>) {
    this.uuid = data.uuid;
    this.joinedAtTimestamp = data.joined;
    this.joinedAt = new Date(data.joined);
    this.questParticipation = data.questParticipation || 0;
    this.rank = data.rank;
    this.mutedUntilTimestamp = data.mutedTill ?? null;
    this.mutedUntil = data.mutedTill ? new Date(data.mutedTill) : null;
    const xpCheck = data.expHistory && 'number' === typeof Object.values(data.expHistory)[0];
    this.expHistory = parseHistory(data.expHistory);
    this.weeklyExperience = xpCheck ? Object.values(data.expHistory).reduce((pV: any, cV: any) => pV + cV, 0) : null;
  }

  toString(): string {
    return this.uuid;
  }
}

export default GuildMember;
