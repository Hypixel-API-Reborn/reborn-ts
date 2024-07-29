import { PetConsumables } from '../typings';
import Pet from './Pet';

class Pets {
  pets: Pet[];
  lastJourneyTimestamp: number | null;
  lastJourneyAt: Date | null;
  petConsumables: PetConsumables;
  constructor(pets: string[], data: Record<string, any>) {
    this.pets = pets.map((x) => new Pet(x, data));
    this.lastJourneyTimestamp = data.petJourneyTimestamp || null;
    this.lastJourneyAt = this.lastJourneyTimestamp ? new Date(this.lastJourneyTimestamp) : null;
    this.petConsumables = data.petConsumables;
  }
}

export default Pets;
