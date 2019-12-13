import EventType, {
  enumerate,
  stringify
} from "../../../src/models/types/EventType";

test("enumerate", () => {
  expect(enumerate("QUAL")).toEqual(EventType.Qualifier);
});

test("stringify", () => {
  expect(stringify(EventType.Qualifier)).toEqual("QUAL");
});
