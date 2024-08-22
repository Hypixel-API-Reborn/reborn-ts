import { recursive } from '../utils/removeSnakeCase';

class Pet {
  isFavorite: boolean;
  name: string | null;
  active: boolean;
  hunger: number | null;
  lastFed: number | null;
  lastFedAt: Date | null;
  thirst: number | null;
  lastDrank: number | null;
  lastDrankAt: Date | null;
  exercise: number | null;
  lastExercised: number | null;
  lastExercisedAt: Date | null;
  rawNickname: string | null;
  nickname: string | null;
  experience: number;
  constructor(name: string, data: Record<string, any>) {
    this.isFavorite = data.vanityFavorites ? Boolean(data.vanityFavorites.includes(name.toUpperCase())) : false;
    name = name.replace('pet_', '');
    this.name = recursive(name) || null;
    this.active = data?.currentPet === name.toUpperCase();
    const stats = data?.petStats && data.petStats[name.toUpperCase()];
    this.hunger = stats?.HUNGER ? stats.HUNGER.value : null;
    this.lastFed = stats?.HUNGER ? stats.HUNGER.timestamp : null;
    this.lastFedAt = this.lastFed ? new Date(this.lastFed) : null;
    this.thirst = stats?.THIRST ? stats.THIRST.value : null;
    this.lastDrank = stats?.THIRST ? stats.THIRST.timestamp : null;
    this.lastDrankAt = this.lastDrank ? new Date(this.lastDrank) : null;
    this.exercise = stats?.EXERCISE ? stats.EXERCISE.value : null;
    this.lastExercised = stats?.EXERCISE ? stats.EXERCISE.timestamp : null;
    this.lastExercisedAt = this.lastExercised ? new Date(this.lastExercised) : null;
    this.rawNickname = stats?.name || null;
    this.nickname = stats?.name ? stats.name.replace(/§([0-9]|[a-f])|§/gm, '') : null;
    this.experience = stats?.experience || 0;
  }
}

export default Pet;
