import StationStatus, {
  stationStatusToNumber,
  numberToStationStatus
} from "../../../src/models/types/StationStatus";

test("station_status_to_number", () => {
  expect(stationStatusToNumber(StationStatus.SitOut)).toEqual(2);
});

test("number_to_station_status", () => {
  expect(numberToStationStatus(2)).toEqual(StationStatus.SitOut);
});
