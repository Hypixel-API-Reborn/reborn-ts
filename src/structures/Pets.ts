import Pet from './Pet';

export interface PetConsumables {
  BAKED_POTATO: number;
  COOKIE: number;
  FEATHER: number;
  HAY_BLOCK: number;
  SLIME_BALL: number;
  COOKED_BEEF: number;
  RED_ROSE: number;
  WATER_BUCKET: number;
  MELON: number;
  STICK: number;
  WOOD_SWORD: number;
  MILK_BUCKET: number;
  GOLD_RECORD: number;
  LEASH: number;
  LAVA_BUCKET: number;
  BONE: number;
  MAGMA_CREAM: number;
  WHEAT: number;
  MUSHROOM_SOUP: number;
  BREAD: number;
  PUMPKIN_PIE: number;
  APPLE: number;
  CARROT_ITEM: number;
  RAW_FISH: number;
  PORK: number;
  CAKE: number;
  ROTTEN_FLESH: number;
}

class Pets {
  pets: Pet[];
  lastJourneyTimestamp: number | null;
  lastJourneyAt: Date | null;
  petConsumables: PetConsumables;
  constructor(data: Record<string, any>, pets: string[]) {
    this.pets = pets.map((x) => new Pet(x, data));
    this.lastJourneyTimestamp = data.petJourneyTimestamp || null;
    this.lastJourneyAt = this.lastJourneyTimestamp ? new Date(this.lastJourneyTimestamp) : null;
    this.petConsumables = data.petConsumables;
  }
}

export default Pets;
