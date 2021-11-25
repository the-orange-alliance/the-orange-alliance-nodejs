import MatchDetails from '../MatchDetails';
import UltimateGoalMatchDetails from "./2021/UltimateGoalMatchDetails";
import FreightFrenzyMatchDetails from "./2122/FreightFrenzyMatchDetails";
import VelocityVortexMatchDetails from "./1617/VelocityVortexMatchDetails";
import RelicRecoveryMatchDetails from "./1718/RelicRecoveryMatchDetails";
import RoverRuckusMatchDetails from "./1819/RoverRuckusMatchDetails";
import SkystoneMatchDetails from "./1920/SkystoneMatchDetails";

export function getMatchDetails(seasonKey: string): MatchDetails {
  switch (seasonKey) {
    case '1617':
      return new VelocityVortexMatchDetails();
    case '1718':
      return new RelicRecoveryMatchDetails();
    case '1819':
      return new RoverRuckusMatchDetails();
    case '1920':
      return new SkystoneMatchDetails();
    case '2021':
      return new UltimateGoalMatchDetails();
    case '2122':
      return new FreightFrenzyMatchDetails();
    default:
      return new MatchDetails();
  }
}
