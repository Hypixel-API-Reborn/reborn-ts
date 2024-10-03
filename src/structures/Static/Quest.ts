export type QuestType = 'Daily' | 'Weekly';
export type QuestObjectiveType = 'Integer' | 'Boolean';

export interface QuestReward {
  type: string;
  amount: number;
}

export class QuestObjective {
  id: string;
  type: QuestObjectiveType;
  amountNeeded: number;
  constructor(objective: Record<string, any>) {
    this.id = objective.id;
    this.type = 'IntegerObjective' === objective.type ? 'Integer' : 'Boolean';
    this.amountNeeded = parseInt(objective.integer || '1', 10);
  }
}

class Quest {
  id: string;
  name: string;
  description: string;
  rewards: QuestReward[];
  type: QuestType;
  objectives: QuestObjective[];
  constructor(data: Record<string, any>) {
    this.id = data.id.trim();
    this.name = data.name.trim();
    this.description = data.description.trim();
    this.rewards = data.rewards || [];
    this.type = 'DailyResetQuestRequirement' === data.requirements?.[0].type ? 'Daily' : 'Weekly';
    this.objectives = data.objectives.map((objective: any) => new QuestObjective(objective));
  }

  toString(): string {
    return this.name;
  }
}

export default Quest;
