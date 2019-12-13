import RefStatus, {
  refToNumber,
  numberToRef
} from "../../../src/models/types/RefStatus";

test("number_to_ref", () => {
  expect(numberToRef(3)).toEqual(RefStatus.RedCard);
});

test("ref_to_number", () => {
  expect(refToNumber(RefStatus.YellowCard)).toEqual(2);
});
