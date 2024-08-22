import SkyblockMuseumItem from './SkyblockMuseumItem';
import { decode } from '../../utils/SkyblockUtils';

class SkyblockMuseum {
  raw: Record<string, any>;
  getItems: () => Promise<SkyblockMuseumItem[]>;
  getSpecial: () => Promise<SkyblockMuseumItem[]>;
  constructor(data: Record<string, any>) {
    this.raw = data.m.members?.[data.uuid] ?? {};
    this.getItems = async (): Promise<SkyblockMuseumItem[]> => {
      const keys = Object.keys(data.m.members[data.uuid].items);
      const items = [];
      for (const key of keys) {
        const decoded = await decode(data.m.members[data.uuid].items[key].items.data);
        items.push(
          new SkyblockMuseumItem({
            decoded: decoded,
            borrowing: data.m.members[data.uuid].items[key].borrowing ?? false,
            featuredSlot: data.m.members[data.uuid].items[key].featured_slot ?? null,
            donatedTime: data.m.members[data.uuid].items[key].donated_time,
            name: key.toLowerCase().replace(/_/g, ' ')
          })
        );
      }
      return items;
    };
    this.getSpecial = async (): Promise<SkyblockMuseumItem[]> => {
      const items = [];
      for (const item of data.m.members[data.uuid].special) {
        const decoded = await decode(item.items.data);
        items.push(
          new SkyblockMuseumItem({
            decoded: decoded,
            borrowing: item.borrowing ?? false,
            featuredSlot: item.featured_slot ?? null,
            donatedTime: item.donated_time,
            name: null
          })
        );
      }
      return items;
    };
  }
}

export default SkyblockMuseum;
