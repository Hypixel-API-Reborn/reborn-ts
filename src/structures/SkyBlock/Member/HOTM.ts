import { PowderType, SkillLevel } from './Types';
import { getLevelByXp } from '../../../utils/SkyblockUtils';

export class HOTMPowderData {
  spent: number;
  current: number;
  total: number;
  constructor(data: Record<string, any>, type: PowderType) {
    this.spent = data?.mining_core?.[`powder_spent_${type}`] || 0;
    this.current = data?.mining_core?.[`powder_${type}`] || 0;
    this.total = this.spent + this.current;
  }
}

export class HOTMPowder {
  mithril: HOTMPowderData;
  gemstone: HOTMPowderData;
  glacite: HOTMPowderData;
  constructor(data: Record<string, any>) {
    this.mithril = new HOTMPowderData(data, 'mithril');
    this.gemstone = new HOTMPowderData(data, 'gemstone');
    this.glacite = new HOTMPowderData(data, 'glacite');
  }
}

class HOTM {
  experience: SkillLevel;
  ability: string;
  powder: HOTMPowder;
  constructor(data: Record<string, any>) {
    this.experience = getLevelByXp(data?.mining_core?.experience || 0, 'hotm');
    this.ability = data?.mining_core?.selected_pickaxe_ability || 'none';
    this.powder = new HOTMPowder(data);
  }
}

export default HOTM;
