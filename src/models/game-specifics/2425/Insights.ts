import Insights from "../../Insights";
import Match from "../../Match";
import { ISerializable } from "../../ISerializable";

export default class Insights2425 extends Insights implements ISerializable {
    // TODO: any game-specific insight fields can be added here
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
            game: {},
        };
    }

    fromJSON(json: any): Insights2425 {
        this.highScoreMatch = json.high_score_match
            ? new Match().fromJSON(json.high_score_match)
            : null;
        this.averageMatchScore = json.average_match_score;
        this.averageWinningScore = json.average_winning_score;
        this.averageWinningMargin = json.average_winning_margin;
        this.averageMajorPenalties = json.average_major_penalty;
        this.averageMinorPenalties = json.average_minor_penalty;
        return this;
    }
}
