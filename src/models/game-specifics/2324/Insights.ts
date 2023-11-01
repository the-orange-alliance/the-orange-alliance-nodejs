import Insights from '../../Insights';
import { ISerializable } from '../../ISerializable';
import Match from '../../Match';

export default class CenterstageInsights extends Insights implements ISerializable {
  // TODO

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

  fromJSON(json: any): CenterstageInsights {
    this.highScoreMatch = json.high_score_match ? new Match().fromJSON(json.high_score_match) : null;
    this.averageMatchScore = json.average_match_score;
    this.averageWinningScore = json.average_winning_score;
    this.averageWinningMargin = json.average_winning_margin;
    this.averageMajorPenalties = json.average_major_penalty;
    this.averageMinorPenalties = json.average_minor_penalty;


    return this;
  }
}