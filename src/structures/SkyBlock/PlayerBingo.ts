import Bingo from './Static/Bingo';

export interface PlayerBingoDataPerEvent {
  eventId: number;
  points: number;
  goalsCompleted: Bingo[] | string[];
}
/**
 * Player Bingo Class
 */
class PlayerBingo {
  dataPerEvent: PlayerBingoDataPerEvent[];
  constructor(data: Record<string, any>) {
    const events = data.success && Array.isArray(data.events) ? data.events : [];
    this.dataPerEvent = events.map((eventData) => {
      let doneGoals = eventData.completed_goals;
      if (!Array.isArray(doneGoals)) doneGoals = [];
      return {
        eventId: parseInt(eventData.key, 10) || 0,
        points: parseInt(eventData.points, 10) || 0,
        goalsCompleted: doneGoals
      };
    });
  }
}

export default PlayerBingo;
