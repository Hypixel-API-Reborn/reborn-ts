/* eslint-disable camelcase */
import { decolorizeString } from '../utils/decolorize';
import Client from '../Client';

export interface NEUBestiaryData {
  brackets: { [key: number]: number[] };
  dynamic: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  hub: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  farming_1: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  combat_1: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  combat_3: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  crimson_isle: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  mining_2: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  mining_3: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  crystal_hollows: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  foraging_1: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  spooky_festival: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  mythological_creatures: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  jerry: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  kuudra: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  catacombs: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
  garden: { name: string; mobs: { name: string; cap: number; mobs: string[]; bracket: number }[] };
}

class NEURepo {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async getBestiary(): Promise<NEUBestiaryData> {
    const res = await this.client.requests.fetchExternalData(
      'https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/master/constants/bestiary.json'
    );
    const data: NEUBestiaryData = {
      brackets: {},
      dynamic: { name: 'Private Island', mobs: [] },
      hub: { name: 'Hub', mobs: [] },
      farming_1: { name: 'The Farming Islands', mobs: [] },
      combat_1: { name: 'Spiders Den', mobs: [] },
      combat_3: { name: 'The End', mobs: [] },
      crimson_isle: { name: 'Crimson Isle', mobs: [] },
      mining_2: { name: 'Deep Caverns', mobs: [] },
      mining_3: { name: 'Dwarven Mines', mobs: [] },
      crystal_hollows: { name: 'Crystal Hollows', mobs: [] },
      foraging_1: { name: 'The Park', mobs: [] },
      spooky_festival: { name: 'Spooky Festival', mobs: [] },
      mythological_creatures: { name: 'Mythological Creatures', mobs: [] },
      jerry: { name: 'Jerry', mobs: [] },
      kuudra: { name: 'Kuudra', mobs: [] },
      catacombs: { name: 'Catacombs', mobs: [] },
      garden: { name: 'Garden', mobs: [] }
    };
    Object.keys(res.data.brackets).forEach((key) => {
      data.brackets[Number(key)] = res.data.brackets[key];
    });
    res.data.dynamic.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.dynamic.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.dynamic.mobs.push(mobInfo);
    });
    res.data.hub.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.hub.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.hub.mobs.push(mobInfo);
    });
    res.data.farming_1.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.farming_1.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.farming_1.mobs.push(mobInfo);
    });
    res.data.combat_1.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.combat_1.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.combat_1.mobs.push(mobInfo);
    });
    res.data.combat_3.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.combat_3.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.combat_3.mobs.push(mobInfo);
    });
    res.data.crimson_isle.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.crimson_isle.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.crimson_isle.mobs.push(mobInfo);
    });
    res.data.mining_2.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.mining_2.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.mining_2.mobs.push(mobInfo);
    });
    res.data.mining_3.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.mining_3.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.mining_3.mobs.push(mobInfo);
    });
    res.data.crystal_hollows.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.crystal_hollows.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.crystal_hollows.mobs.push(mobInfo);
    });
    res.data.foraging_1.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.foraging_1.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.foraging_1.mobs.push(mobInfo);
    });
    res.data.spooky_festival.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.spooky_festival.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.spooky_festival.mobs.push(mobInfo);
    });
    res.data.mythological_creatures.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.mythological_creatures.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.mythological_creatures.mobs.push(mobInfo);
    });
    res.data.jerry.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.jerry.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.jerry.mobs.push(mobInfo);
    });
    res.data.kuudra.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.kuudra.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.kuudra.mobs.push(mobInfo);
    });
    res.data.catacombs.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.catacombs.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.catacombs.mobs.push(mobInfo);
    });
    res.data.garden.mobs.forEach((mob: string | number) => {
      const mobInfo = res.data.garden.mobs[mob];
      mobInfo.name = decolorizeString(mobInfo.name);
      data.garden.mobs.push(mobInfo);
    });
    return data;
  }
}

export default NEURepo;
