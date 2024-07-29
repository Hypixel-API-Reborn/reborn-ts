import SkyblockInventoryItem from './SkyblockInventoryItem';

/**
 * Item class
 */
class SkyblockMuseumItem {
  name: string | null;
  items: SkyblockInventoryItem[];
  donatedTime: number;
  donatedTimeAt: Date;
  borrowing: boolean;
  featuredSlot: string | null;
  constructor(data: Record<string, any>) {
    this.name = data.name;
    this.items = [];
    data.decoded.forEach((item: any) => {
      if (!item.tag) return;
      this.items.push(new SkyblockInventoryItem(item));
    });
    this.donatedTime = data.donatedTime;
    this.donatedTimeAt = new Date(data.donatedTime);
    this.borrowing = data.borrowing;
    this.featuredSlot = data.featuredSlot;
  }

  toString(): string | null {
    return this.name;
  }
}

export default SkyblockMuseumItem;
