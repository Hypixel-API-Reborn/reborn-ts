import BaseAuction from './BaseAuction';

class PartialAuction extends BaseAuction {
  buyer: string | null;
  price: number;
  constructor(data: Record<string, any>, includeItemBytes: boolean) {
    super(data, includeItemBytes);
    this.buyer = data.buyer || null;
    this.price = parseInt(data.price, 10) || 0;
  }
}

export default PartialAuction;
