import SkyblockInventoryItem from './SkyblockInventoryItem';

/**
 * Item class
 */
class SkyblockMuseumItem {
  name: string;
  donated: number;
  featuredSlot: string | null;
  borrowing: boolean;
  items: SkyblockInventoryItem[];
  constructor(name: string, data: Record<string, any>, decoded: any[]) {
    this.name = name;
    this.donated = data.donated_time || 0;
    this.featuredSlot = data.featured_slot || null;
    this.borrowing = data.borrowing || false;
    this.items = [];
    decoded.forEach((item) => {
      if (!item.tag) return;
      this.items.push(new SkyblockInventoryItem(item));
    });
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockMuseumItem;
