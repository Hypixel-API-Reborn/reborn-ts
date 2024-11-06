import BedWarsBeds from './BedWarsBeds.js';
import divide from '../../../utils/divide.js';
import type { BedwarsGamemodeName } from '../../../Types/Player.js';

class BedWarsMode {
  mode: BedwarsGamemodeName;
  winstreak: number;
  playedGames: number;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  finalKills: number;
  finalDeaths: number;
  beds: BedWarsBeds;
  KDR: number;
  WLR: number;
  FKDR: number;
  constructor(data: Record<string, any>, mode: BedwarsGamemodeName) {
    this.mode = mode;
    this.winstreak = data?.[`${mode}_winstreak`] || 0;
    this.playedGames = data?.[`${mode}_games_played_bedwars`] || 0;
    this.kills = data?.[`${mode}_kills_bedwars`] || 0;
    this.deaths = data?.[`${mode}_deaths_bedwars`] || 0;
    this.wins = data?.[`${mode}_wins_bedwars`] || 0;
    this.losses = data?.[`${mode}_losses_bedwars`] || 0;
    this.finalKills = data?.[`${mode}_final_kills_bedwars`] || 0;
    this.finalDeaths = data?.[`${mode}_final_deaths_bedwars`] || 0;
    this.beds = new BedWarsBeds(data, mode);
    this.KDR = divide(data?.[`${mode}_kills_bedwars`], data?.[`${mode}_deaths_bedwars`]);
    this.WLR = divide(data?.[`${mode}_wins_bedwars`], data?.[`${mode}_losses_bedwars`]);
    this.FKDR = divide(data?.[`${mode}_final_kills_bedwars`], data?.[`${mode}_final_deaths_bedwars`]);
  }
}

export default BedWarsMode;
