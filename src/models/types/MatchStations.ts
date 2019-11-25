enum MatchStations {
  Unknown = -1,
  Red1 = 11,
  Red2 = 12,
  Red3 = 13,
  Blue1 = 21,
  Blue2 = 22,
  Blue3 = 23
}

const StationMapping = {
  [MatchStations.Unknown]: -1,
  [MatchStations.Red1]: 11,
  [MatchStations.Red2]: 12,
  [MatchStations.Red3]: 13,
  [MatchStations.Blue1]: 21,
  [MatchStations.Blue2]: 22,
  [MatchStations.Blue3]: 23
};

export const numberToStation = (station: number): MatchStations => {
  return station;
};

export const stationToNumber = (station: MatchStations): number => {
  return StationMapping[station];
};

export default MatchStations;
