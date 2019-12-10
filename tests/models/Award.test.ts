import Award from "../../src/models/Award";

test("empty", () => {
  let a = new Award();
  expect(a.awardKey).toEqual("");
  expect(a.awardDescription).toEqual("");
  expect(a.awardType).toEqual("");
  expect(a.displayOrder).toEqual(0);
});

test("to_json", () => {
  let a = new Award();
  a.awardDescription = "Judges' Award Winner";
  a.awardKey = "JUD1";
  a.awardType = "1";
  a.displayOrder = 36;
  let json = a.toJSON();
  expect(json).toEqual({
    award_key: "JUD1",
    award_type: 1,
    award_description: "Judges' Award Winner",
    display_order: 36
  });
});

test("from_json", () => {
  let json = {
    award_key: "JUD1",
    award_type: 1,
    award_description: "Judges' Award Winner",
    display_order: 36
  };
  let a = new Award().fromJSON(json);
  expect(a.awardKey).toEqual("JUD1");
  expect(a.awardDescription).toEqual("Judges' Award Winner");
  expect(a.awardType).toEqual("1");
  expect(a.displayOrder).toEqual(36);
});
