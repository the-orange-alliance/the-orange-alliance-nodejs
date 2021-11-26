import Insights from "../Insights";
import FreightFrenzyInsights from "./2122/FreightFrenzyInsights";
import UltimateGoalInsights from "./2021/UltimateGoalInsights";
import SkystoneInsights from "./1920/SkystoneInsights";
import RelicRecoveryInsights from "./1718/RelicRecoveryInsights";
import RoverRuckusInsights from "./1819/RoverRuckusInsights";

export type GameSpecificInsights =
    | FreightFrenzyInsights
    | UltimateGoalInsights
    | SkystoneInsights
    | RelicRecoveryInsights
    | RoverRuckusInsights;

export function getInsights(seasonKey: string): Insights {
    const insightsType = getInsightsType(seasonKey);
    return new insightsType();
}

export function getInsightsType(seasonKey: string): typeof Insights {
    switch (seasonKey) {
        // case '1617':
        //   return new VelocityVortexInsights();
        case "1718":
            return RelicRecoveryInsights;
        case "1819":
            return RoverRuckusInsights;
        case "1920":
            return SkystoneInsights;
        case "2021":
            return UltimateGoalInsights;
        case "2122":
            return FreightFrenzyInsights;
        default:
            return Insights;
    }
}
