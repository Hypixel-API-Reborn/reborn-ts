import Perk from './Perk';

/**
 * Candidate class
 */
class Candidate {
  name: string;
  keyBenefit: string;
  perks: Perk[];
  isMayor: boolean;
  votesReceived: number;
  constructor(data: Record<string, any>, isMayor: boolean = false) {
    this.name = data.name;
    this.keyBenefit = data.key;
    this.perks = data.perks.map((x: any) => new Perk(x));
    this.isMayor = isMayor || false;
    this.votesReceived = parseInt(data.votes, 10) || 0;
  }
}

export default Candidate;