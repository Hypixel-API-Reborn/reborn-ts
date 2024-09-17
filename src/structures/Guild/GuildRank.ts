class GuildRank {
  name: string;
  default: boolean;
  tag: string | null;
  createdAtTimestamp: number;
  createdAt: Date;
  priority: number;
  constructor(data: Record<string, any>) {
    this.name = data.name;
    this.default = data.default;
    this.tag = data.tag ?? null;
    this.createdAtTimestamp = data.created ?? data.createdAtTimestamp;
    this.createdAt = new Date(this.createdAtTimestamp);
    this.priority = data.priority;
  }

  toString() {
    return this.name;
  }
}

export default GuildRank;
