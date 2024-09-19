class QuestCompletion {
  amount: number;
  timestamp: number;
  timestampAt: Date;
  constructor(data: Record<string, any>) {
    this.amount = data.length || 0;
    this.timestamp = data?.time || 0;
    this.timestampAt = new Date(this.timestamp);
  }
}

class QuestCompletions {
  amount: number;
  completions: QuestCompletion[];
  constructor(data: Record<string, any>) {
    this.amount = data.length || 0;
    this.completions = [];
    data.forEach((completion: Record<string, any>) => {
      this.completions.push(new QuestCompletion(completion));
    });
  }
}

class Quest {
  name: string;
  completions: QuestCompletions;
  constructor(data: Record<string, any>, name: string) {
    this.name = name;
    this.completions = new QuestCompletions(data);
  }
}

export default Quest;
