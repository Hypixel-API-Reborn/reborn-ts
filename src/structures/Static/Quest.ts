export interface QuestObjective {
  id: string;
  type: 'Integer' | 'Boolean';
  amountNeeded: number;
}

export interface QuestReward {
  type: string;
  amount: number;
}

/**
 * Quest Class
 */
class Quest {
  questName: string;
  questID: string;
  description: string;
  type: 'DAILY' | 'WEEKLY';
  objectives: QuestObjective[];
  rewards: QuestReward[];
  constructor(data: Record<string, any>) {
    this.questName = data.name.trim();
    this.questID = data.id;
    this.description = data.description.trim();
    this.type = 'DailyResetQuestRequirement' === data.requirements?.[0].type ? 'DAILY' : 'WEEKLY';
    this.objectives = data.objectives.map((objective: any) => ({
      id: objective.id,
      type: 'IntegerObjective' === objective.type ? 'Integer' : 'Boolean',
      amountNeeded: parseInt(objective.integer || '1', 10)
    }));
    this.rewards = data.rewards || [];
  }
  toString(): string {
    return this.questName;
  }
}

export default Quest;
