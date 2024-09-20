import { SkillLevel } from './Types';
import { getLevelByXp } from '../../../utils/SkyblockUtils';

class Skills {
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
  constructor(data: Record<string, any>) {
    this.combat = getLevelByXp(data?.player_data?.experience?.SKILL_COMBAT || 0, 'combat');
    this.farming = getLevelByXp(data?.player_data?.experience?.SKILL_FARMING || 0, 'farming');
    this.fishing = getLevelByXp(data?.player_data?.experience?.SKILL_FISHING || 0, 'fishing');
    this.mining = getLevelByXp(data?.player_data?.experience?.SKILL_MINING || 0, 'mining');
    this.foraging = getLevelByXp(data?.player_data?.experience?.SKILL_FORAGING || 0, 'foraging');
    this.enchanting = getLevelByXp(data?.player_data?.experience?.SKILL_ENCHANTING || 0, 'enchanting');
    this.alchemy = getLevelByXp(data?.player_data?.experience?.SKILL_ALCHEMY || 0, 'alchemy');
    this.carpentry = getLevelByXp(data?.player_data?.experience?.SKILL_CARPENTRY || 0, 'carpentry');
    this.runecrafting = getLevelByXp(data?.player_data?.experience?.SKILL_RUNECRAFTING || 0, 'runecrafting');
    this.taming = getLevelByXp(data?.player_data?.experience?.SKILL_TAMING || 0, 'taming');
    this.social = getLevelByXp(data?.player_data?.experience?.SKILL_SOCIAL || 0, 'social');
    const levels = Object.values(this)
      .filter((skill) => skill !== undefined)
      .filter((skill) => true !== skill.cosmetic)
      .map((skill) => skill.level);
    this.average = levels.reduce((a, b) => a + b, 0) / levels.length;
  }
}

export default Skills;
