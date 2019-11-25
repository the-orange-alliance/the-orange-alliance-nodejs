import API from "../src";

let api: API;

beforeAll(() => {
  let api_key = process.env.TOA_KEY || "";
  api = new API(api_key, "TOA-API-Test");
});

test("get_events", async () => {
  let events = await api.getEvents();
  expect(events.length).toBeGreaterThan(0);
});

test("get_event_count", async () => {
  let eventCount = await api.getEventCount();
  expect(eventCount).toBeGreaterThan(0);
});

test("get_event", async () => {
  let eventKey = "1920-FIM-OWQ1";
  let event = await api.getEvent(eventKey);
  expect(event.eventKey).toEqual(eventKey);
});
