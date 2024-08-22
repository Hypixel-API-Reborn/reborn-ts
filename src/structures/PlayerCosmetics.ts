/* eslint-disable no-underscore-dangle */
import { removeSnakeCaseString } from '../utils/removeSnakeCase';
import Pets from './Pets';

class PlayerCosmetics {
  allCosmetics: string[];
  petManager: Pets | null;
  _suits: any;
  _hats: any;
  _gadgets: any;
  _morphs: any;
  _cloaks: any;
  _taunts: any;
  _rankColors: any;
  _particle: any;
  _particlepacks: any;
  _clickfx: any;
  constructor(data: Record<string, any>) {
    this.allCosmetics = data?.vanityMeta?.packages || undefined;
    this.petManager = this.allCosmetics
      ? new Pets(
          this.allCosmetics.filter((x) => x.startsWith('pet_')),
          data
        )
      : null;
  }

  suits(): string[] {
    if (!this._suits) {
      this._suits = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('suit_'))
            .map((x) => removeSnakeCaseString(x.replace('suit_', ''))) || []
        : [];
    }
    return this._suits;
  }

  hats(): string[] {
    if (!this._hats) {
      this._hats = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('hat_'))
            .map((x) => removeSnakeCaseString(x.replace('hat_', ''))) || []
        : [];
    }
    return this._hats;
  }

  gadgets(): string[] {
    if (!this._gadgets) {
      this._gadgets = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('gadget_'))
            .map((x) => removeSnakeCaseString(x.replace('gadget_', ''))) || []
        : [];
    }
    return this._gadgets;
  }

  morphs(): string[] {
    if (!this._morphs) {
      this._morphs = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('morph_'))
            .map((x) => removeSnakeCaseString(x.replace('morph_', ''))) || []
        : [];
    }
    return this._morphs;
  }

  cloaks(): string[] {
    if (!this._cloaks) {
      this._cloaks = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('cloak_'))
            .map((x) => removeSnakeCaseString(x.replace('cloak_', ''))) || []
        : [];
    }
    return this._cloaks;
  }

  taunts(): string[] {
    if (!this._taunts) {
      this._taunts = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('taunt_'))
            .map((x) => removeSnakeCaseString(x.replace('taunt_', ''))) || []
        : [];
    }
    return this._taunts;
  }

  rankColors(): string[] {
    if (!this._rankColors) {
      this._rankColors = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('rankcolor_'))
            .map((x) => removeSnakeCaseString(x.replace('rankcolor_', ''))) || []
        : [];
    }
    return this._rankColors;
  }

  particlePacks(): string[] {
    if (!this._particle) {
      this._particle = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('particlepack_'))
            .map((x) => removeSnakeCaseString(x.replace('particlepack_', ''))) || []
        : [];
    }
    return this._particlepacks;
  }

  clickEffects(): string[] {
    if (!this._clickfx) {
      this._clickfx = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('clickeffects_'))
            .map((x) => removeSnakeCaseString(x.replace('clickeffects_', ''))) || []
        : [];
    }
    return this._clickfx;
  }
}
export default PlayerCosmetics;
