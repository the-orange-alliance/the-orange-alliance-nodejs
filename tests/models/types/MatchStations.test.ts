import MatchStations, {
  numberToStation,
  stationToNumber
} from "../../../src/models/types/MatchStations";

test("number_to_station", () => {
  expect(numberToStation(MatchStations.Blue3)).toEqual(23);
});

test("station_to_number", () => {
  expect(stationToNumber(23)).toEqual(MatchStations.Blue3);
});
