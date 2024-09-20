import SkyblockInventoryItem from '../SkyblockInventoryItem';

type SkyblockGemstoneQuality = 'Rough' | 'Flawed' | 'Fine' | 'Flawless' | 'Perfect';
type TrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
type DungeonClass = 'healer' | 'mage' | 'berserk' | 'archer' | 'tank';
type CrimsonIsleFactions = 'mages' | 'barbarians';
type CrimsonIsleBelt = 'White' | 'Yellow' | 'Green' | 'Blue' | 'Brown' | 'Black';
type CrimsonIsleDojoRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
type PowderType = 'mithril' | 'gemstone' | 'glacite';

interface Equipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

interface Armor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

type Rarity = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' | 'DIVINE' | 'SPECIAL' | 'VERY_SPECIAL';

interface SkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}

interface Skills {
  combat: SkillLevel;
  farming: SkillLevel;
  fishing: SkillLevel;
  mining: SkillLevel;
  foraging: SkillLevel;
  enchanting: SkillLevel;
  alchemy: SkillLevel;
  carpentry: SkillLevel;
  runecrafting: SkillLevel;
  taming: SkillLevel;
  social: SkillLevel;
  average: number;
}

interface RawDungeonRun {
  timestamp: number;
  score_exploration: number;
  score_speed: number;
  score_skill: number;
  score_bonus: number;
  dungeon_class: DungeonClass;
  teammates: string[];
  elapsed_time: number;
  damage_dealt: number;
  deaths: number;
  mobs_killed: number;
  secrets_found: number;
  damage_mitigated: number;
  ally_healing: number;
}

interface DungeonsFloorStats {
  fastestRun: RawDungeonRun;
  fastestSRun: RawDungeonRun;
  fastestSPlusRun: RawDungeonRun;
  completions: number;
}
