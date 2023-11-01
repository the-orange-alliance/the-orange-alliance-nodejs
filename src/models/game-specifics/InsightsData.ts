import Insights from "../Insights";
import FreightFrenzyInsights from "./2122/FreightFrenzyInsights";
import UltimateGoalInsights from "./2021/UltimateGoalInsights";
import SkystoneInsights from "./1920/SkystoneInsights";
import RelicRecoveryInsights from "./1718/RelicRecoveryInsights";
import RoverRuckusInsights from "./1819/RoverRuckusInsights";
import PowerPlayInsights from "./2223/PowerPlayInsights";
import CenterstageInsights from "./2324/Insights";

export type GameSpecificInsights =
  | FreightFrenzyInsights
  | UltimateGoalInsights
  | SkystoneInsights
  | RelicRecoveryInsights
  | RoverRuckusInsights
  | PowerPlayInsights
  | CenterstageInsights
  | Insights;

export function getInsights(seasonKey: string): Insights {
  const insightsType = getInsightsType(seasonKey);
  return insightsType;
}

export function getInsightsType(seasonKey: string): GameSpecificInsights {
  switch (seasonKey) {
    // case '1617':
    //   return new VelocityVortexInsights();
    case "1718":
      return new RelicRecoveryInsights();
    case "1819":
      return new RoverRuckusInsights();
    case "1920":
      return new SkystoneInsights();
    case "2021":
      return new UltimateGoalInsights();
    case "2122":
      return new FreightFrenzyInsights();
    case "2223":
      return new PowerPlayInsights();
    case "2324":
      return new CenterstageInsights();
    default:
      return new Insights();
  }
}
