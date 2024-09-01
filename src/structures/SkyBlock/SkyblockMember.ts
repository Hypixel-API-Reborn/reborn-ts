import Constants from '../../utils/Constants';
import SkyblockGarden from './SkyblockGarden';
import SkyblockInventoryItem from './SkyblockInventoryItem';
import SkyblockMuseum from './SkyblockMuseum';
import SkyblockPet from './SkyblockPet';
import {
  Armor,
  ChocolateFactoryData,
  Dungeons,
  Equipment,
  JacobData,
  MemberStatsAuctions,
  MemberStatsCandy,
  MemberStatsFishing,
  MemberStatsGifts,
  MemberStatsMythos,
  MemberStatsPetMilestones,
  SkillLevel,
  Skills,
  Slayer,
  TrophyFishRank
} from './SkyblockMemberTypes';
import { NetworthResult, getNetworth } from 'skyhelper-networth';
import { createFarmingWeightCalculator } from 'farming-weight';
import {
  decode,
  getBestiaryLevel,
  getChocolateFactory,
  getDungeons,
  getJacobData,
  getLevelByXp,
  getPetLevel,
  getSkills,
  getSlayer,
  getTrophyFishRank
} from '../../utils/SkyblockUtils';

export class MemberStats {
  candy: MemberStatsCandy;
  petMilestones: MemberStatsPetMilestones;
  highestCriticalDamage: number;
  highestDamage: number;
  glowingMusroomsBroken: number;
  kills: Record<string, number>;
  deaths: Record<string, number>;
  auctions: MemberStatsAuctions;
  gifts: MemberStatsGifts;
  itemsFished: MemberStatsFishing;
  mythos: MemberStatsMythos;
  constructor(data: Record<string, any>) {
    this.candy = {
      green: data?.candy_collected?.green_candy || 0,
      purple: data?.candy_collected?.purple_candy || 0,
      total: data?.candy_collected?.total || 0,
      festivals: []
    };
    Object.keys(data?.candy_collected || {}).forEach((year: string) => {
      if ('total' !== year && 'green_candy' !== year && 'purple_candy' !== year) {
        this.candy?.festivals?.push({
          year: Number(data?.candy_collected?.[`spooky_festival_${year}`] || '0'),
          collected: {
            green: data?.candy_collected?.[`spooky_festival_${year}`]?.green_candy || 0,
            purple: data?.candy_collected?.[`spooky_festival_${year}`]?.purple_candy || 0,
            total: data?.candy_collected?.[`spooky_festival_${year}`]?.total || 0
          }
        });
      }
    });
    this.petMilestones = {
      oresMinned: data?.pets?.milestones?.ores_mined || 0,
      seaCreaturesKilled: data?.pets?.milestones?.sea_creatures_killed || 0
    };
    this.highestCriticalDamage = data?.highest_critical_damage || 0;
    this.highestDamage = data?.highest_damage || 0;
    this.glowingMusroomsBroken = data?.glowing_mushrooms_broken || 0;
    this.kills = {
      total: Object.values(data?.kills || {})?.reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.kills || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.kills[b] - data?.kills[a])
        .map((key) => ({ [key]: data?.kills[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.deaths = {
      total: Object.values(data?.deaths || {})?.reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.deaths || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.deaths[b] - data?.deaths[a])
        .map((key) => ({ [key]: data?.deaths[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.auctions = {
      bids: data?.auctions?.bids || 0,
      highestBid: data?.auctions?.highest_bid || 0,
      goldSpent: data?.auctions?.gold_spent || 0,
      goldEarnt: data?.auctions?.gold_earnt || 0,
      auctionsWon: data?.auctions?.won || 0,
      auctionsCompleted: data?.auctions?.completed || 0,
      auctionsCreated: data?.auctions?.created || 0,
      auctionFees: data?.auctions?.auction_fees || 0,
      auctionsWithOutBids: data?.auctions?.no_bids || 0,
      bought: {
        uncommon: data?.auctions?.total_bought?.uncommon || 0,
        common: data?.auctions?.total_bought?.common || 0,
        rare: data?.auctions?.total_bought?.rare || 0,
        epic: data?.auctions?.total_bought?.epic || 0,
        legendary: data?.auctions?.total_bought?.legendary || 0,
        special: data?.auctions?.total_bought?.special || 0,
        mythic: data?.auctions?.total_bought?.mythic || 0,
        total:
          data?.auctions?.total_bought?.uncommon ||
          0 + data?.auctions?.total_bought?.common ||
          0 + data?.auctions?.total_bought?.rare ||
          0 + data?.auctions?.total_bought?.epic ||
          0 + data?.auctions?.total_bought?.legendary ||
          0 + data?.auctions?.total_bought?.special ||
          0 + data?.auctions?.total_bought?.mythic ||
          0
      },
      sold: {
        uncommon: data?.auctions?.total_sold?.uncommon || 0,
        common: data?.auctions?.total_sold?.common || 0,
        rare: data?.auctions?.total_sold?.rare || 0,
        epic: data?.auctions?.total_sold?.epic || 0,
        legendary: data?.auctions?.total_sold?.legendary || 0,
        special: data?.auctions?.total_sold?.special || 0,
        mythic: data?.auctions?.total_sold?.mythic || 0,
        total:
          data?.auctions?.total_sold?.uncommon ||
          0 + data?.auctions?.total_sold?.common ||
          0 + data?.auctions?.total_sold?.rare ||
          0 + data?.auctions?.total_sold?.epic ||
          0 + data?.auctions?.total_sold?.legendary ||
          0 + data?.auctions?.total_sold?.special ||
          0 + data?.auctions?.total_sold?.mythic ||
          0
      }
    };
    this.gifts = { given: data?.gifts?.total_given || 0, received: data?.gifts?.total_received || 0 };
    this.itemsFished = {
      total: data?.items_fished?.total || 0,
      normal: data?.items_fished?.normal || 0,
      tresure: data?.items_fished?.treasure || 0,
      largeTresure: data?.items_fished?.large_treasure || 0
    };
    this.mythos = {
      kills: data?.mythos?.kills || 0,
      burrowsDugNext: {
        total: data?.mythos?.burrows_dug_next?.total || 0,
        common: data?.mythos?.burrows_dug_next?.common || 0
      },
      burrowsDugCombat: {
        total: data?.mythos?.burrows_dug_combat?.total || 0,
        common: data?.mythos?.burrows_dug_combat?.common || 0
      },
      burrowsDugTreasure: {
        total: data?.mythos?.burrows_dug_treasure?.total || 0,
        common: data?.mythos?.burrows_dug_treasure?.common || 0
      },
      burrowsDugComplate: {
        total: data?.mythos?.burrows_dug_complete?.total || 0,
        common: data?.mythos?.burrows_dug_complete?.common || 0
      }
    };
  }
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

export class SkyblockMemberMinions {
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
  firstJoinTimestamp: number | null;
  firstJoinAt: Date | null;
  experience: number;
  level: number;
  hotm: SkillLevel;
  trophyFish: TrophyFishRank;
  highestMagicalPower: number;
  fairySouls: number;
  fairyExchanges: number;
  skills: Skills;
  bestiary: number;
  slayer: Slayer | null;
  dungeons: Dungeons | null;
  collections: Record<string, number>;
  purse: number;
  stats: MemberStats;
  pets: SkyblockPet[];
  jacob: JacobData;
  chocolate: ChocolateFactoryData;
  minions: SkyblockMemberMinions;
  getArmor: () => Promise<Armor>;
  getWardrobe: () => Promise<SkyblockInventoryItem[]>;
  getEnderChest: () => Promise<SkyblockInventoryItem[]>;
  getInventory: () => Promise<SkyblockInventoryItem[]>;
  getPetScore: () => number;
  getEquipment: () => Promise<Equipment>;
  getPersonalVault: () => Promise<SkyblockInventoryItem[]>;
  getNetworth: () => Promise<NetworthResult | null>;
  getFarmingWeight: () => number;
  constructor(data: Record<string, any>) {
    this.uuid = data?.uuid || '';
    this.gameMode = data?.gameMode || null;
    this.selected = data?.selected || false;
    this.garden = data?.garden || null;
    this.museum = data?.museum || null;
    this.profileName = data?.profileName || '';
    this.profileId = data?.profileId || '';
    this.firstJoinTimestamp = data?.m?.profile?.first_join || null;
    this.firstJoinAt = this.firstJoinTimestamp ? new Date(this.firstJoinTimestamp) : null;
    this.experience = data?.m?.leveling?.experience || 0;
    this.level = this.experience / 100;
    this.hotm = getLevelByXp(data?.m?.mining_core?.experience, 'hotm');
    this.trophyFish = getTrophyFishRank(data?.m?.trophy_fish?.rewards?.length || 0);
    this.highestMagicalPower = data?.m?.accessory_bag_storage?.highest_magical_power || 0;
    this.fairySouls = data?.m?.fairy_soul?.total_collected || 0;
    this.fairyExchanges = data?.m?.fairy_soul?.fairy_exchanges || 0;
    this.skills = getSkills(data?.m);
    this.bestiary = getBestiaryLevel(data?.m);
    this.slayer = getSlayer(data?.m);
    this.dungeons = getDungeons(data?.m);
    this.collections = data?.m?.collection || {};
    this.purse = data?.m?.currencies?.coin_purse ?? 0;
    this.stats = new MemberStats(data?.m?.player_stats);
    this.pets = data?.m?.pets_data?.pets ? data?.m?.pets_data?.pets?.map((pet: any) => new SkyblockPet(pet)) : [];
    this.jacob = getJacobData(data?.m);
    this.chocolate = getChocolateFactory(data?.m);
    this.minions = new SkyblockMemberMinions(data?.m?.player_data?.crafted_generators || []);
    this.getArmor = async () => {
      const base64 = data?.m?.inventory?.inv_armor;
      const decoded = await decode(base64?.data);
      const armor = {
        helmet: decoded[3]?.id ? new SkyblockInventoryItem(decoded[3]) : null,
        chestplate: decoded[2]?.id ? new SkyblockInventoryItem(decoded[2]) : null,
        leggings: decoded[1]?.id ? new SkyblockInventoryItem(decoded[1]) : null,
        boots: decoded[0]?.id ? new SkyblockInventoryItem(decoded[0]) : null
      };
      return armor;
    };
    this.getWardrobe = async () => {
      const base64 = data?.m?.inventory?.wardrobe_contents?.data;
      if (!base64) return [];
      const decoded = await decode(base64);
      const armor = decoded
        .filter((item) => 0 !== Object.keys(item).length)
        .map((item) => new SkyblockInventoryItem(item));
      return armor;
    };
    this.getEnderChest = async () => {
      let chest = data?.m?.inventory?.ender_chest_contents;
      if (!chest) return [];
      try {
        chest = await decode(chest?.data);
        const edited = [];
        for (let i = 0; i < chest.length; i++) {
          if (!chest[i]?.id) continue;
          edited.push(new SkyblockInventoryItem(chest[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getInventory = async () => {
      let inventory = data?.m?.inventory?.inv_contents;
      if (!inventory) return [];
      try {
        inventory = await decode(inventory?.data);
        const edited = [];
        for (let i = 0; i < inventory.length; i++) {
          if (!inventory[i]?.id) continue;
          edited.push(new SkyblockInventoryItem(inventory[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getPetScore = () => {
      const highestRarity: { [key: string]: any } = {};
      for (const pet of data?.m?.pets_data?.pets) {
        if (
          !(pet?.type in highestRarity) ||
          (Constants.petScore as { [key: number]: number })[pet?.tier] > highestRarity[pet?.type]
        ) {
          highestRarity[pet?.type] = (Constants.petScore as { [key: number]: number })[pet?.tier];
        }
      }
      const highestLevel: { [key: string]: any } = {};
      for (const pet of data?.m?.pets_data?.pets) {
        const maxLevel = 'GOLDEN_DRAGON' === pet?.type ? 200 : 100;
        const petLevel = getPetLevel(pet?.exp, pet?.tier, maxLevel);
        if (!(pet?.type in highestLevel) || petLevel?.level > highestLevel[pet?.type]) {
          if (petLevel?.level < maxLevel) {
            continue;
          }
          highestLevel[pet?.type] = 1;
        }
      }
      return (
        Object.values(highestRarity).reduce((a, b) => a + b, 0) + Object.values(highestLevel).reduce((a, b) => a + b, 0)
      );
    };
    this.getEquipment = async () => {
      let equipment = data?.m?.inventory?.equipment_contents;
      if (!equipment) {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
      try {
        equipment = await decode(equipment?.data);
        const playerEquipment = {
          gauntlet: equipment?.[3]?.id ? new SkyblockInventoryItem(equipment[3]) : null,
          belt: equipment?.[2]?.id ? new SkyblockInventoryItem(equipment[2]) : null,
          cloak: equipment?.[1]?.id ? new SkyblockInventoryItem(equipment[1]) : null,
          necklace: equipment?.[0]?.id ? new SkyblockInventoryItem(equipment[0]) : null
        };
        return playerEquipment;
      } catch {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
    };
    this.getPersonalVault = async () => {
      let vault = data?.m?.inventory?.personal_vault_contents;
      if (!vault) return [];
      try {
        vault = await decode(vault?.data);
        const edited = [];
        for (let i = 0; i < vault?.length; i++) {
          if (!vault[i]?.id) continue;
          edited.push(new SkyblockInventoryItem(vault[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    this.getNetworth = async () => {
      try {
        const nw = await getNetworth(data?.m, data?.banking?.balance ?? 0, {
          onlyNetworth: true,
          v2Endpoint: true,
          cache: true,
          museumData: data?.museum?.raw ?? {}
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
          minions: data?.m?.player_data?.crafted_generators,
          contests: Object.values(this.jacob.contests),
          pests: data?.m?.bestiary?.kills
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
