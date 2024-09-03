import Constants from '../../utils/Constants';
import SkyblockGarden from './SkyblockGarden';
import SkyblockInventoryItem from './SkyblockInventoryItem';
import SkyblockMuseum from './SkyblockMuseum';
import SkyblockPet from './SkyblockPet';
import { NetworthResult, getNetworth } from 'skyhelper-networth';
import {
  SkyblockMemberChocolateFactoryData,
  SkyblockMemberCrimson,
  SkyblockMemberDungeons,
  SkyblockMemberJacobData,
  SkyblockMemberSkills,
  SkyblockMemberSlayer,
  SkyblockMemberStats,
  SkyblockMemberTrophyFishRank,
  SkyblockSkillLevel,
  decode,
  getBestiaryLevel,
  getChocolateFactory,
  getCrimsonIsle,
  getDungeons,
  getJacobData,
  getLevelByXp,
  getMemberStats,
  getPetLevel,
  getSkills,
  getSlayer,
  getTrophyFishRank
} from '../../utils/SkyblockUtils';
import { createFarmingWeightCalculator } from 'farming-weight';

export interface SkyblockMemberEquipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

export interface SkyblockMemberArmor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

class SkyblockMemberMinion {
  t1: boolean;
  t2: boolean;
  t3: boolean;
  t4: boolean;
  t5: boolean;
  t6: boolean;
  t7: boolean;
  t8: boolean;
  t9: boolean;
  t10: boolean;
  t11: boolean;
  t12: boolean;
  [key: string]: boolean;
  constructor(data: number[]) {
    this.t1 = false;
    this.t2 = false;
    this.t3 = false;
    this.t4 = false;
    this.t5 = false;
    this.t6 = false;
    this.t7 = false;
    this.t8 = false;
    this.t9 = false;
    this.t10 = false;
    this.t11 = false;
    this.t12 = false;
    data.forEach((tier) => {
      if (1 <= tier && 12 >= tier) {
        this[`t${tier}`] = true;
      }
    });
  }
}

class SkyblockMemberMinions {
  [key: string]: SkyblockMemberMinion;
  constructor(data: string[]) {
    const parsed = this.#parse(data);
    Object.keys(parsed).forEach((minion) => {
      this[minion] = new SkyblockMemberMinion(parsed[minion]);
    });
  }

  #parse(data: string[]): { [key: string]: number[] } {
    return data.reduce((acc: { [key: string]: number[] }, item: string) => {
      const lastUnderscoreIndex = item.lastIndexOf('_');
      if (-1 === lastUnderscoreIndex) return acc;
      const name = item.substring(0, lastUnderscoreIndex);
      const number = item.substring(lastUnderscoreIndex + 1);
      const num = parseInt(number, 10);
      if (isNaN(num)) return acc;
      if (!acc[name]) acc[name] = [];
      acc[name].push(num);
      return acc;
    }, {});
  }
}

class SkyblockMember {
  uuid: string;
  gameMode: string | null;
  selected: boolean;
  garden: SkyblockGarden | null;
  museum: SkyblockMuseum | null;
  profileName: string;
  profileId: string;
  firstJoinTimestamp: number;
  firstJoinAt: Date;
  experience: number;
  level: number;
  hotm: SkyblockSkillLevel;
  trophyFish: SkyblockMemberTrophyFishRank;
  highestMagicalPower: number;
  fairySouls: number;
  fairyExchanges: number;
  skills: SkyblockMemberSkills;
  bestiary: number;
  slayer: SkyblockMemberSlayer | null;
  crimsonIsle: SkyblockMemberCrimson;
  dungeons: SkyblockMemberDungeons;
  collections: Record<string, number>;
  purse: number;
  stats: SkyblockMemberStats | null;
  pets: SkyblockPet[];
  jacob: SkyblockMemberJacobData;
  chocolate: SkyblockMemberChocolateFactoryData;
  minions: SkyblockMemberMinions;
  getArmor: () => Promise<SkyblockMemberArmor>;
  getWardrobe: () => Promise<SkyblockInventoryItem[]>;
  getEnderChest: () => Promise<SkyblockInventoryItem[]>;
  getInventory: () => Promise<SkyblockInventoryItem[]>;
  getPetScore: () => number;
  getEquipment: () => Promise<SkyblockMemberEquipment>;
  getPersonalVault: () => Promise<SkyblockInventoryItem[]>;
  getNetworth: () => Promise<NetworthResult | null>;
  getFarmingWeight: () => number;
  constructor(data: Record<string, any>) {
    this.uuid = data.uuid;
    this.gameMode = data.gameMode;
    this.selected = data.selected;
    this.garden = data.garden;
    this.museum = data.museum;
    this.profileName = data.profileName;
    this.profileId = data.profileId;
    this.firstJoinTimestamp = data.m.profile?.first_join;
    this.firstJoinAt = new Date(data.m.profile?.first_join);
    this.experience = data.m.leveling?.experience ?? 0;
    this.level = this.experience ? this.experience / 100 : 0;
    this.hotm = getLevelByXp(data.m.mining_core?.experience, 'hotm');
    this.trophyFish = getTrophyFishRank(data.m.trophy_fish?.rewards?.length ?? 0);
    this.highestMagicalPower = data.m.accessory_bag_storage?.highest_magical_power ?? 0;
    this.fairySouls = data.m?.fairy_soul?.total_collected ?? 0;
    this.fairyExchanges = data.m?.fairy_soul?.fairy_exchanges ?? 0;
    this.skills = getSkills(data.m);
    this.bestiary = getBestiaryLevel(data.m);
    this.slayer = getSlayer(data.m);
    this.crimsonIsle = getCrimsonIsle(data.m);
    this.dungeons = getDungeons(data.m);
    this.collections = data.m.collection ? data.m.collection : null;
    this.purse = data.m?.currencies?.coin_purse ?? 0;
    this.stats = data.m.player_stats ? getMemberStats(data.m.player_stats) : null;
    this.pets = data.m?.pets_data?.pets ? data.m.pets_data.pets.map((pet: any) => new SkyblockPet(pet)) : [];
    this.jacob = getJacobData(data.m);
    this.chocolate = getChocolateFactory(data.m);
    this.minions = new SkyblockMemberMinions(data.m?.player_data?.crafted_generators ?? []);
    this.getArmor = async () => {
      const base64 = data.m.inventory.inv_armor;
      const decoded = await decode(base64.data);
      const armor = {
        helmet: decoded[3].id ? new SkyblockInventoryItem(decoded[3]) : null,
        chestplate: decoded[2].id ? new SkyblockInventoryItem(decoded[2]) : null,
        leggings: decoded[1].id ? new SkyblockInventoryItem(decoded[1]) : null,
        boots: decoded[0].id ? new SkyblockInventoryItem(decoded[0]) : null
      };
      return armor;
    };
    this.getWardrobe = async () => {
      const base64 = data.m?.inventory?.wardrobe_contents?.data;
      if (!base64) return [];
      const decoded = await decode(base64);
      const armor = decoded
        .filter((item) => 0 !== Object.keys(item).length)
        .map((item) => new SkyblockInventoryItem(item));
      return armor;
    };
    this.getEnderChest = async () => {
      let chest = data.m.inventory.ender_chest_contents;
      if (!chest) return [];
      try {
        chest = await decode(chest.data);
        const edited = [];
        for (let i = 0; i < chest.length; i++) {
          if (!chest[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(chest[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getInventory = async () => {
      let inventory = data.m.inventory.inv_contents;
      if (!inventory) return [];
      try {
        inventory = await decode(inventory.data);
        const edited = [];
        for (let i = 0; i < inventory.length; i++) {
          if (!inventory[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(inventory[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getPetScore = () => {
      const highestRarity: { [key: string]: any } = {};
      for (const pet of data.m.pets_data.pets) {
        if (
          !(pet.type in highestRarity) ||
          (Constants.petScore as { [key: number]: number })[pet.tier] > highestRarity[pet.type]
        ) {
          highestRarity[pet.type] = (Constants.petScore as { [key: number]: number })[pet.tier];
        }
      }
      const highestLevel: { [key: string]: any } = {};
      for (const pet of data.m.pets_data.pets) {
        const maxLevel = 'GOLDEN_DRAGON' === pet.type ? 200 : 100;
        const petLevel = getPetLevel(pet.exp, pet.tier, maxLevel);
        if (!(pet.type in highestLevel) || petLevel.level > highestLevel[pet.type]) {
          if (petLevel.level < maxLevel) {
            continue;
          }
          highestLevel[pet.type] = 1;
        }
      }
      return (
        Object.values(highestRarity).reduce((a, b) => a + b, 0) + Object.values(highestLevel).reduce((a, b) => a + b, 0)
      );
    };
    this.getEquipment = async () => {
      let equipment = data.m.inventory.equipment_contents;
      if (!equipment) {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
      try {
        equipment = await decode(equipment.data);
        const playerEquipment = {
          gauntlet: equipment[3].id ? new SkyblockInventoryItem(equipment[3]) : null,
          belt: equipment[2].id ? new SkyblockInventoryItem(equipment[2]) : null,
          cloak: equipment[1].id ? new SkyblockInventoryItem(equipment[1]) : null,
          necklace: equipment[0].id ? new SkyblockInventoryItem(equipment[0]) : null
        };
        return playerEquipment;
      } catch {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
    };
    this.getPersonalVault = async () => {
      let vault = data.m.inventory.personal_vault_contents;
      if (!vault) return [];
      try {
        vault = await decode(vault.data);
        const edited = [];
        for (let i = 0; i < vault.length; i++) {
          if (!vault[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(vault[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getNetworth = async () => {
      try {
        const nw = await getNetworth(data.m, data.banking?.balance ?? 0, {
          onlyNetworth: true,
          v2Endpoint: true,
          cache: true,
          museumData: data.museum?.raw ?? {}
        });
        return nw;
      } catch {
        return null;
      }
    };
    this.getFarmingWeight = () => {
      try {
        return createFarmingWeightCalculator({
          collection: this.collections,
          farmingXp: this.skills.farming.xp,
          levelCapUpgrade: this.jacob.perks.farmingLevelCap,
          anitaBonusFarmingFortuneLevel: this.jacob.perks.doubleDrops,
          minions: data.m.player_data.crafted_generators,
          contests: Object.values(this.jacob.contests),
          pests: data.m.bestiary.kills
        }).getWeightInfo().totalWeight;
      } catch {
        return 0;
      }
    };
  }

  toString(): string {
    return this.uuid;
  }
}

export default SkyblockMember;
