import MatchDetails from "../MatchDetails";
import UltimateGoalMatchDetails from "./2021/UltimateGoalMatchDetails";
import FreightFrenzyMatchDetails from "./2122/FreightFrenzyMatchDetails";
import VelocityVortexMatchDetails from "./1617/VelocityVortexMatchDetails";
import RelicRecoveryMatchDetails from "./1718/RelicRecoveryMatchDetails";
import RoverRuckusMatchDetails from "./1819/RoverRuckusMatchDetails";
import SkystoneMatchDetails from "./1920/SkystoneMatchDetails";
import PowerPlayMatchDetails from "./2223/PowerPlayMatchDetails";
import CenterstageMatchDetails from "./2324/MatchDetails";

export type GameSpecificDetails =
    | UltimateGoalMatchDetails
    | FreightFrenzyMatchDetails
    | VelocityVortexMatchDetails
    | RelicRecoveryMatchDetails
    | RoverRuckusMatchDetails
    | SkystoneMatchDetails
    | PowerPlayMatchDetails
    | CenterstageMatchDetails;

export function getMatchDetails(seasonKey: string): MatchDetails {
    const matchDtlType = getMatchDetailsType(seasonKey);
    return new matchDtlType();
}

export function getMatchDetailsType(seasonKey: string): typeof MatchDetails {
    switch (seasonKey) {
        case "1617":
            return VelocityVortexMatchDetails;
        case "1718":
            return RelicRecoveryMatchDetails;
        case "1819":
            return RoverRuckusMatchDetails;
        case "1920":
            return SkystoneMatchDetails;
        case "2021":
            return UltimateGoalMatchDetails;
        case "2122":
            return FreightFrenzyMatchDetails;
        case "2223":
            return PowerPlayMatchDetails;
        case "2324":
            return CenterstageMatchDetails;
        default:
            return MatchDetails;
    }
}
