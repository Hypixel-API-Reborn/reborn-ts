import Pet from './Pet.js';

export class PetConsumables {
  bakedPotato: number;
  cookie: number;
  feather: number;
  hayBlock: number;
  slimeBall: number;
  cookedBeef: number;
  redRose: number;
  waterBucket: number;
  melon: number;
  stick: number;
  woodSword: number;
  milkBucket: number;
  goldRecord: number;
  leash: number;
  lavaBucket: number;
  bone: number;
  magmaCream: number;
  wheat: number;
  mushroomSoup: number;
  bread: number;
  pumpkinPie: number;
  apple: number;
  carrot: number;
  rawFish: number;
  pork: number;
  cake: number;
  rottenFlesh: number;
  constructor(data: Record<string, number>) {
    this.bakedPotato = data?.BAKED_POTATO || 0;
    this.cookie = data?.COOKIE || 0;
    this.feather = data?.FEATHER || 0;
    this.hayBlock = data?.HAY_BLOCK || 0;
    this.slimeBall = data?.SLIME_BALL || 0;
    this.cookedBeef = data?.COOKED_BEEF || 0;
    this.redRose = data?.RED_ROSE || 0;
    this.waterBucket = data?.WATER_BUCKET || 0;
    this.melon = data?.MELON || 0;
    this.stick = data?.STICK || 0;
    this.woodSword = data?.WOOD_SWORD || 0;
    this.milkBucket = data?.MILK_BUCKET || 0;
    this.goldRecord = data?.GOLD_RECORD || 0;
    this.leash = data?.LEASH || 0;
    this.lavaBucket = data?.LAVA_BUCKET || 0;
    this.bone = data?.BONE || 0;
    this.magmaCream = data?.MAGMA_CREAM || 0;
    this.wheat = data?.WHEAT || 0;
    this.mushroomSoup = data?.MUSHROOM_SOUP || 0;
    this.bread = data?.BREAD || 0;
    this.pumpkinPie = data?.PUMPKIN_PIE || 0;
    this.apple = data?.APPLE || 0;
    this.carrot = data?.CARROT_ITEM || 0;
    this.rawFish = data?.RAW_FISH || 0;
    this.pork = data?.PORK || 0;
    this.cake = data?.CAKE || 0;
    this.rottenFlesh = data?.ROTTEN_FLESH || 0;
  }
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
    this.petConsumables = new PetConsumables(data?.petConsumables || {});
  }
}

export default Pets;
