class AuctionInfo {
  page: number;
  totalPages: number;
  totalAuctions: number;
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  age: number;
  [key: string]: any;
  constructor(data: Record<string, any>) {
    this.page = parseInt(data.page, 10) || 0;
    this.totalPages = parseInt(data.totalPages, 10) || 1;
    this.totalAuctions = parseInt(data.totalAuctions, 10) || 0;
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(data.lastUpdated);
    // eslint-disable-next-line no-underscore-dangle
    this.age = parseInt(data._headers.get('age'), 10) || 0;
  }

  _extend(name: any, value: any) {
    this[name] = value;
    return this;
  }

  toString(): string {
    return `${this.page} / ${this.totalPages}`;
  }
}

export default AuctionInfo;
