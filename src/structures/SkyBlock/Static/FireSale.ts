/**
 * SB Fire Sale
 */
class FireSale {
  itemId: string | null;
  startTimestamp: number;
  startAt: Date;
  endTimestamp: number;
  endAt: Date;
  amount: number;
  price: number;
  constructor(data: Record<string, any>) {
    this.itemId = data.item_id || null;
    this.startTimestamp = parseInt(data.start, 10);
    this.startAt = new Date(this.startTimestamp);
    this.endTimestamp = parseInt(data.end, 10);
    this.endAt = new Date(this.endTimestamp);
    this.amount = data.amount || 0;
    this.price = data.price || 0;
  }

  toString(): string | null {
    return this.itemId;
  }
}

export default FireSale;
