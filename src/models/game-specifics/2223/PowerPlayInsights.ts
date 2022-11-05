import Insights from '../../Insights';
import Match from '../../Match';
import {ISerializable} from '../../ISerializable';

export default class PowerPlayInsights extends Insights implements ISerializable {


  constructor() {
    super();
  }

  toJSON(): object {
    return {
      high_score_match: this.highScoreMatch?.toJSON(),
      average_match_score: this.averageMatchScore,
      average_winning_score: this.averageWinningScore,
      average_winning_margin: this.averageWinningMargin,
      average_major_penalty: this.averageMajorPenalties,
      average_minor_penalty: this.averageMinorPenalties,
      game: {

      }
    }
  }

  fromJSON(json: any): PowerPlayInsights {
    const insights = new PowerPlayInsights();
    insights.highScoreMatch = json.high_score_match ? new Match().fromJSON(json.high_score_match) : null;
    insights.averageMatchScore = json.average_match_score;
    insights.averageWinningScore = json.average_winning_score;
    insights.averageWinningMargin = json.average_winning_margin;
    insights.averageMajorPenalties = json.average_major_penalty;
    insights.averageMinorPenalties = json.average_minor_penalty;

    return insights;
  }
}
