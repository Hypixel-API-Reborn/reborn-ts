import Client from '../Client.js';
import Decolorize from '../Utils/Decolorize.js';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import type { NEUBestiaryData, NEUBestiaryMobData, NEUGardenCropMilestones, NEUSkillTables } from '../Types/NEU.js';

class NEURepo {
  readonly client: Client;
  readonly commitHash: string;
  constructor(client: Client) {
    this.client = client;
    this.commitHash = 'a6116d945491d7c57c93d43f51250f93d62d8434';

    this.initialize();
  }

  cleanUp() {
    if (existsSync('./src/cache')) rmSync('./src/cache', { recursive: true, force: true });
  }

  private initialize() {
    if (!existsSync('./src/cache')) mkdirSync('./src/cache', { recursive: true });
    this.getTables().then((skills) => writeFileSync('./src/cache/skills.json', JSON.stringify(skills, null, 2)));
    this.getBestiary().then((bestiary) => {
      writeFileSync('./src/cache/bestiary.json', JSON.stringify(bestiary, null, 2));
    });
  }

  private parseSkillData(inputData: number[]): { [key: number]: number } {
    const parsedData: { [key: number]: number } = {};
    inputData.forEach((key: number, index: number) => (parsedData[index + 1] = key));
    return parsedData;
  }

  async getSkillTables(): Promise<NEUSkillTables> {
    const res = await this.client.requestHandler.fetchExternalData(
      `https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/${this.commitHash}/constants/leveling.json`
    );
    const gardenData = await this.client.requestHandler.fetchExternalData(
      `https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/${this.commitHash}/constants/garden.json`
    );

    return {
      LEVELING_XP: this.parseSkillData(res.data.leveling_xp),
      DEFAULT_SKILL_CAPS: { ...res.data.leveling_caps, garden: 15, cropMilestone: 46, default: 50 },
      RUNECRAFTING_XP: this.parseSkillData(res.data.runecrafting_xp),
      DUNGEONEERING_XP: this.parseSkillData(res.data.catacombs),
      SOCIAL_XP: this.parseSkillData(res.data.social),
      HOTM_XP: this.parseSkillData(res.data.HOTM),
      SKYBLOCK_XP: { 1: 100 },
      GARDEN_XP: this.parseSkillData(gardenData.data.garden_exp)
    };
  }

  async getGardenCropMilestonesTables(): Promise<NEUGardenCropMilestones> {
    const res = await this.client.requestHandler.fetchExternalData(
      `https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/${this.commitHash}/constants/garden.json`
    );

    return {
      WHEAT: this.parseSkillData(res.data.crop_milestones.WHEAT),
      CARROT: this.parseSkillData(res.data.crop_milestones.CARROT),
      POTATO: this.parseSkillData(res.data.crop_milestones.POTATO),
      MELON: this.parseSkillData(res.data.crop_milestones.MELON),
      PUMPKIN: this.parseSkillData(res.data.crop_milestones.PUMPKIN),
      SUGAR_CANE: this.parseSkillData(res.data.crop_milestones.SUGAR_CANE),
      COCOA_BEANS: this.parseSkillData(res.data.crop_milestones.COCOA_BEANS),
      CACTUS: this.parseSkillData(res.data.crop_milestones.CACTUS),
      MUSHROOM: this.parseSkillData(res.data.crop_milestones.MUSHROOM),
      NETHER_WART: this.parseSkillData(res.data.crop_milestones.NETHER_WART)
    };
  }

  async getTables(): Promise<NEUSkillTables & NEUGardenCropMilestones> {
    const skillTables = await this.getSkillTables();
    const cropMilestones = await this.getGardenCropMilestonesTables();
    return { ...skillTables, ...cropMilestones };
  }

  private parseBestiaryData(data: NEUBestiaryMobData[]): NEUBestiaryMobData[] {
    return data.map((info) => {
      info.name = Decolorize(info.name);
      return info;
    });
  }

  async getBestiary(): Promise<NEUBestiaryData> {
    const res = await this.client.requestHandler.fetchExternalData(
      `https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/${this.commitHash}/constants/bestiary.json`
    );

    /* eslint-disable camelcase */
    const data: NEUBestiaryData = {
      brackets: {},
      bestiary: {
        dynamic: { name: 'Private Island', mobs: this.parseBestiaryData(res.data.dynamic.mobs) },
        hub: { name: 'Hub', mobs: this.parseBestiaryData(res.data.hub.mobs) },
        farming_1: { name: 'The Farming Islands', mobs: this.parseBestiaryData(res.data.farming_1.mobs) },
        combat_1: { name: 'Spiders Den', mobs: this.parseBestiaryData(res.data.combat_1.mobs) },
        combat_3: { name: 'The End', mobs: this.parseBestiaryData(res.data.combat_3.mobs) },
        crimson_isle: { name: 'Crimson Isle', mobs: this.parseBestiaryData(res.data.crimson_isle.mobs) },
        mining_2: { name: 'Deep Caverns', mobs: this.parseBestiaryData(res.data.mining_2.mobs) },
        mining_3: { name: 'Dwarven Mines', mobs: this.parseBestiaryData(res.data.mining_3.mobs) },
        crystal_hollows: { name: 'Crystal Hollows', mobs: this.parseBestiaryData(res.data.crystal_hollows.mobs) },
        foraging_1: { name: 'The Park', mobs: this.parseBestiaryData(res.data.foraging_1.mobs) },
        spooky_festival: { name: 'Spooky Festival', mobs: this.parseBestiaryData(res.data.spooky_festival.mobs) },
        mythological_creatures: {
          name: 'Mythological Creatures',
          mobs: this.parseBestiaryData(res.data.mythological_creatures.mobs)
        },
        jerry: { name: 'Jerry', mobs: this.parseBestiaryData(res.data.jerry.mobs) },
        kuudra: { name: 'Kuudra', mobs: this.parseBestiaryData(res.data.kuudra.mobs) },
        catacombs: { name: 'Catacombs', mobs: this.parseBestiaryData(res.data.catacombs.mobs) },
        garden: { name: 'Garden', mobs: this.parseBestiaryData(res.data.garden.mobs) }
      }
    };
    /* eslint-enable camelcase */

    Object.keys(res.data.brackets).forEach((key) => {
      data.brackets[Number(key)] = res.data.brackets[key];
    });

    return data;
  }
}

export default NEURepo;
