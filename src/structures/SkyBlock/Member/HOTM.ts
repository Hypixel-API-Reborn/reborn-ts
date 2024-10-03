import { HOTMForgeItemType, HOTMPickaxeAbility, PowderType, SkillLevel } from './Types';
import { getLevelByXp } from '../../../utils/SkyblockUtils';

export class HOTMCrystal {
  found: boolean;
  totalPlaced: number;
  totalFound: number;
  constructor(data: Record<string, any>) {
    this.found = data?.state ? 'FOUND' === data.state : false;
    this.totalPlaced = data?.total_placed || 0;
    this.totalFound = data?.total_found || 0;
  }
}

export class HOTMCrystals {
  jade: HOTMCrystal;
  amber: HOTMCrystal;
  topaz: HOTMCrystal;
  sapphire: HOTMCrystal;
  amethyst: HOTMCrystal;
  jasper: HOTMCrystal;
  ruby: HOTMCrystal;
  onyx: HOTMCrystal;
  citrine: HOTMCrystal;
  opal: HOTMCrystal;
  aquamarine: HOTMCrystal;
  peridot: HOTMCrystal;
  constructor(data: Record<string, any>) {
    this.jade = new HOTMCrystal(data.jade_crystal);
    this.amber = new HOTMCrystal(data.amber_crystal);
    this.topaz = new HOTMCrystal(data.topaz_crystal);
    this.sapphire = new HOTMCrystal(data.sapphire_crystal);
    this.amethyst = new HOTMCrystal(data.amethyst_crystal);
    this.jasper = new HOTMCrystal(data.jasper_crystal);
    this.ruby = new HOTMCrystal(data.ruby_crystal);
    this.onyx = new HOTMCrystal(data.onyx_crystal);
    this.citrine = new HOTMCrystal(data.citrine_crystal);
    this.opal = new HOTMCrystal(data.opal_crystal);
    this.aquamarine = new HOTMCrystal(data.aquamarine_crystal);
    this.peridot = new HOTMCrystal(data.peridot_crystal);
  }
}

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


class HOTMForgeItem {
  type: HOTMForgeItemType;
  id: string;
  startTime: number;
  slot: number;
  notified: boolean;
  constructor(data: Record<string, any>) {
    this.type = data.type;
    this.id = data.id;
    this.startTime = data.startTime;
    this.slot = data.slot;
    this.notified = data.notified;
  }
}

class HOTM {
  experience: SkillLevel;
  ability: HOTMPickaxeAbility | 'None';
  powder: HOTMPowder;
  crystals: HOTMCrystals;
  constructor(data: Record<string, any>) {
    this.experience = getLevelByXp(data?.mining_core?.experience || 0, 'hotm');
    this.ability = data?.mining_core?.selected_pickaxe_ability || 'None';
    this.powder = new HOTMPowder(data);
    this.crystals = new HOTMCrystals(data.crystals || {});
  }
}

export default HOTM;
