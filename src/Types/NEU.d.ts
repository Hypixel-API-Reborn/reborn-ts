export interface NEUBestiaryMobData {
  name: string;
  skullOwner: string;
  texture: string;
  cap: number;
  mobs: string[];
  bracket: number;
}

export interface NEUBestiaryData {
  brackets: { [key: string]: number[] };
  bestiary: {
    dynamic: { name: string; mobs: NEUBestiaryMobData[] };
    hub: { name: string; mobs: NEUBestiaryMobData[] };
    farming_1: { name: string; mobs: NEUBestiaryMobData[] };
    combat_1: { name: string; mobs: NEUBestiaryMobData[] };
    combat_3: { name: string; mobs: NEUBestiaryMobData[] };
    crimson_isle: { name: string; mobs: NEUBestiaryMobData[] };
    mining_2: { name: string; mobs: NEUBestiaryMobData[] };
    mining_3: { name: string; mobs: NEUBestiaryMobData[] };
    crystal_hollows: { name: string; mobs: NEUBestiaryMobData[] };
    foraging_1: { name: string; mobs: NEUBestiaryMobData[] };
    spooky_festival: { name: string; mobs: NEUBestiaryMobData[] };
    mythological_creatures: { name: string; mobs: NEUBestiaryMobData[] };
    jerry: { name: string; mobs: NEUBestiaryMobData[] };
    kuudra: { name: string; mobs: NEUBestiaryMobData[] };
    catacombs: { name: string; mobs: NEUBestiaryMobData[] };
    garden: { name: string; mobs: NEUBestiaryMobData[] };
  };
}

export interface NEUSkillTables {
  LEVELING_XP: { [key: number]: number };
  DEFAULT_SKILL_CAPS: { [key: string]: number };
  RUNECRAFTING_XP: { [key: number]: number };
  DUNGEONEERING_XP: { [key: number]: number };
  SOCIAL_XP: { [key: number]: number };
  HOTM_XP: { [key: number]: number };
  SKYBLOCK_XP: { [key: number]: number };
  GARDEN_XP: { [key: number]: number };
}

export interface NEUGardenCropMilestones {
  WHEAT: { [key: number]: number };
  CARROT: { [key: number]: number };
  POTATO: { [key: number]: number };
  MELON: { [key: string]: number };
  PUMPKIN: { [key: number]: number };
  SUGAR_CANE: { [key: number]: number };
  COCOA_BEANS: { [key: number]: number };
  CACTUS: { [key: number]: number };
  MUSHROOM: { [key: number]: number };
  NETHER_WART: { [key: number]: number };
}
