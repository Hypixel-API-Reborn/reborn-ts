import Constants from '../../utils/Constants';
import { Rarity } from './Member/Types';

class SkyblockPet {
  uuid: string;
  name: string;
  xp: number;
  active: boolean;
  rarity: Rarity;
  petScore: number;
  heldItem: string | null;
  candyUsed: number;
  skin: string | null;
  constructor(data: Record<string, any>) {
    this.uuid = data.uuid;
    this.name = data.type;
    this.xp = data.exp || 0;
    this.active = Boolean(data.active);
    this.rarity = data.tier;
    this.petScore = (Constants.petScore as { [key: string]: number })[this.rarity] || 0;
    this.heldItem = data.heldItem ? data.heldItem.replace(/^PET_ITEM_/, '') : null;
    this.candyUsed = data.candyUsed || 0;
    this.skin = data.skin;
  }

  toString(): string {
    return this.name;
  }
}

export default SkyblockPet;
