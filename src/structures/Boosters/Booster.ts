import Game from '../Game';

function parseType(data: Record<string, any>): 'STACKED' | 'QUEUED' | 'ACTIVE' {
  if (true === data.stacked) return 'STACKED';
  if (!data.stacked) return 'QUEUED';
  return 'ACTIVE';
}

class Booster {
  purchaser: string;
  amount: number;
  originalLength: number;
  remaining: number;
  activatedTimestamp: number;
  activated: Date;
  game: Game | null;
  isActive: boolean;
  type: 'STACKED' | 'QUEUED' | 'ACTIVE';
  stackers: string[];
  expired: boolean;
  constructor(data: Record<string, any>) {
    this.purchaser = data.purchaserUuid;
    this.amount = data.amount;
    this.originalLength = data.originalLength;
    this.remaining = data.length;
    this.activatedTimestamp = data.dateActivated;
    this.activated = new Date(data.dateActivated);
    this.game = data.gameType ? new Game(data.gameType) : null;
    this.isActive = Array.isArray(data.stacked);
    this.type = parseType(data);
    this.stackers = Array.isArray(data.stacked) ? Array.from(data.stacked) : [];
    this.expired = 0 > data.length;
  }

  toString(): string {
    return `${this.purchaser}'s booster in ${this.game}`;
  }
}

export default Booster;
