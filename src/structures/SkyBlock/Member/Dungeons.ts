import { DungeonClass, DungeonsFloorStats, RawDungeonRun, SkillLevel } from './Types';
import { getLevelByXp } from '../../../utils/SkyblockUtils';

export class DungeonsFloors {
  entrance: DungeonsFloorStats;
  floor1: DungeonsFloorStats;
  floor2: DungeonsFloorStats;
  floor3: DungeonsFloorStats;
  floor4: DungeonsFloorStats;
  floor5: DungeonsFloorStats;
  floor6: DungeonsFloorStats;
  floor7: DungeonsFloorStats;
  masterMode1: DungeonsFloorStats;
  masterMode2: DungeonsFloorStats;
  masterMode3: DungeonsFloorStats;
  masterMode4: DungeonsFloorStats;
  masterMode5: DungeonsFloorStats;
  masterMode6: DungeonsFloorStats;
  masterMode7: DungeonsFloorStats;
  constructor(data: Record<string, any>) {
    this.entrance = this.getDungeonsFloor(data, 'catacombs', '0');
    this.floor1 = this.getDungeonsFloor(data, 'catacombs', '1');
    this.floor2 = this.getDungeonsFloor(data, 'catacombs', '2');
    this.floor3 = this.getDungeonsFloor(data, 'catacombs', '3');
    this.floor4 = this.getDungeonsFloor(data, 'catacombs', '4');
    this.floor5 = this.getDungeonsFloor(data, 'catacombs', '5');
    this.floor6 = this.getDungeonsFloor(data, 'catacombs', '6');
    this.floor7 = this.getDungeonsFloor(data, 'catacombs', '7');
    this.masterMode1 = this.getDungeonsFloor(data, 'master_catacombs', '1');
    this.masterMode2 = this.getDungeonsFloor(data, 'master_catacombs', '2');
    this.masterMode3 = this.getDungeonsFloor(data, 'master_catacombs', '3');
    this.masterMode4 = this.getDungeonsFloor(data, 'master_catacombs', '4');
    this.masterMode5 = this.getDungeonsFloor(data, 'master_catacombs', '5');
    this.masterMode6 = this.getDungeonsFloor(data, 'master_catacombs', '6');
    this.masterMode7 = this.getDungeonsFloor(data, 'master_catacombs', '7');
  }

  getDungeonsFloor(
    data: Record<string, any>,
    type: 'catacombs' | 'master_catacombs',
    floor: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
  ): DungeonsFloorStats {
    return {
      fastestRun:
        (data?.dungeons?.dungeon_types?.[type]?.best_runs?.[floor] || []).sort(
          (a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time
        )?.[0] || {},
      fastestSRun:
        (data?.dungeons?.dungeon_types?.[type]?.best_runs?.[floor] || [])
          .filter(
            (run: RawDungeonRun) =>
              270 >= run?.score_exploration + run?.score_speed + run?.score_skill + run?.score_bonus
          )
          .sort((a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time)?.[0] || {},
      fastestSPlusRun:
        (data?.dungeons?.dungeon_type?.s[type]?.best_runs?.[floor] || [])
          .filter(
            (run: RawDungeonRun) =>
              300 >= run?.score_exploration + run?.score_speed + run?.score_skill + run?.score_bonus
          )
          .sort((a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time)?.[0] || {},
      completions: data?.dungeonXp?.dungeon_types?.[type]?.tier_completions?.[floor] || 0
    };
  }
}

export class DungeonsClasses {
  healer: SkillLevel;
  mage: SkillLevel;
  berserk: SkillLevel;
  archer: SkillLevel;
  tank: SkillLevel;
  selected: DungeonClass;
  constructor(data: Record<string, any>) {
    this.healer = getLevelByXp(data?.dungeons?.player_classes?.healer?.experience || 0, 'dungeons');
    this.mage = getLevelByXp(data?.dungeons?.player_classes?.mage?.experience || 0, 'dungeons');
    this.berserk = getLevelByXp(data?.dungeons?.player_classes?.berserk?.experience || 0, 'dungeons');
    this.archer = getLevelByXp(data?.dungeons?.player_classes?.archer?.experience || 0, 'dungeons');
    this.tank = getLevelByXp(data?.dungeons?.player_classes?.tank?.experience || 0, 'dungeons');
    this.selected = data?.dungeons?.selected_dungeon_class || 'mage';
  }
}

export class DungeonsEssence {
  diamond: number;
  dragon: number;
  spider: number;
  wither: number;
  undead: number;
  gold: number;
  ice: number;
  crimson: number;
  constructor(data: Record<string, any>) {
    this.diamond = data?.currencies?.essence?.DIAMOND?.current || 0;
    this.dragon = data?.currencies?.essence?.DRAGON?.current || 0;
    this.spider = data?.currencies?.essence?.SPIDER?.current || 0;
    this.wither = data?.currencies?.essence?.WITHER?.current || 0;
    this.undead = data?.currencies?.essence?.UNDEAD?.current || 0;
    this.gold = data?.currencies?.essence?.GOLD?.current || 0;
    this.ice = data?.currencies?.essence?.ICE?.current || 0;
    this.crimson = data?.currencies?.essence?.CRIMSON?.current || 0;
  }
}

class Dungeons {
  experience: SkillLevel;
  secrets: number;
  catacombsCompletions: Record<string, number>;
  masterModeCompletions: Record<string, number>;
  floors: DungeonsFloors;
  classes: DungeonsClasses;
  essence: DungeonsEssence;
  constructor(data: Record<string, any>) {
    this.experience = getLevelByXp(data?.dungeons?.dungeon_types?.catacombs?.experience || 0, 'dungeons');
    this.secrets = data?.dungeons?.secrets || 0;
    this.catacombsCompletions = this.getCompletions(data?.dungeons?.dungeon_types?.catacombs?.tier_completions);
    this.masterModeCompletions = this.getCompletions(data?.dungeons?.dungeon_types?.master_catacombs?.tier_completions);
    this.floors = new DungeonsFloors(data);
    this.classes = new DungeonsClasses(data);
    this.essence = new DungeonsEssence(data);
  }

  getCompletions(data: Record<string, any>): Record<string, number> {
    const completions: Record<string, number> = { total: 0 };
    for (const tier in data) {
      if ('total' === tier) continue;
      completions[`Floor_${tier}`] = data?.[tier];
      completions.total += data?.[tier];
    }
    return completions;
  }
}

export default Dungeons;
