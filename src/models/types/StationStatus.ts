enum StationStatus {
  Unknown = -1,
  Surrogate = 0,
  Normal = 1,
  SitOut = 2
}

const StationTypeMapping = {
  [StationStatus.Unknown]: -1,
  [StationStatus.Surrogate]: 0,
  [StationStatus.Normal]: 1,
  [StationStatus.SitOut]: 2
};

export const numberToStationStatus = (stationStatus: number): StationStatus => {
  return stationStatus;
};

export const stationStatusToNumber = (station: StationStatus): number => {
  return StationTypeMapping[station];
};

export default StationStatus;
