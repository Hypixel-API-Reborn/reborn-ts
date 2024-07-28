import { populateGoals } from '../../utils/SkyblockUtils';
import { PlayerBingoDataPerEvent } from '../../typings';
import BingoData from './Static/BingoData';

/**
 * Player Bingo Class
 */
class PlayerBingo {
  dataPerEvent: PlayerBingoDataPerEvent[];
  constructor(data: Record<string, any>, bingoData: BingoData | null) {
    const events = data.success && Array.isArray(data.events) ? data.events : [];
    this.dataPerEvent = events.map((eventData) => {
      let doneGoals = eventData.completed_goals;
      if (!Array.isArray(doneGoals)) doneGoals = [];
      const enrichable = parseInt(eventData.key, 10) === bingoData?.id;
      if (enrichable) doneGoals = populateGoals(doneGoals, bingoData.goals);
      return {
        eventId: parseInt(eventData.key, 10) || 0,
        points: parseInt(eventData.points, 10) || 0,
        goalsCompleted: doneGoals,
        enrichedGoals: enrichable
      };
    });
  }
}

export default PlayerBingo;
