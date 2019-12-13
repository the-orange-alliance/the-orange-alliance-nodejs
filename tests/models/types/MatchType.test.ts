import MatchType, {
  numberToMatchType,
  matchTypeToNumber
} from "../../../src/models/types/MatchType";

test("number_to_match_type", () => {
  expect(numberToMatchType(4)).toEqual(MatchType.Finals);
});

test("match_type_to_number", () => {
  expect(matchTypeToNumber(MatchType.QualificationMatch)).toEqual(1);
});
