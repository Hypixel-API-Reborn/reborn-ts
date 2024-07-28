/**
 * House class
 */
class House {
  name: string;
  uuid: string;
  owner: string;
  createdAtTimestamp: number;
  createdAt: Date;
  players: number;
  cookies: number;
  constructor(data: Record<string, any>) {
    this.name = data.name || '';
    this.uuid = data.uuid || '';
    this.owner = data.owner || '';
    this.createdAtTimestamp = data.createdAt || 0;
    this.createdAt = new Date(this.createdAtTimestamp);
    this.players = data.players || 0;
    this.cookies = data.cookies?.current || 0;
  }

  toString(): string {
    return this.name;
  }
}

export default House;
