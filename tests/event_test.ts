import { API } from "../src";
import { mockFetch } from "./util/fetch_mock";
jest.mock("node-fetch");
let api: API;

beforeAll(() => {
  let api_key = process.env.TOA_KEY || "";
  api = new API(api_key, "TOA-API-Test", true);
});

test("get_events", async () => {
  mockFetch([
    {
      event_key: "1920-AB-FAC",
      season_key: "1920",
      region_key: "AB",
      league_key: null,
      event_code: "FAC",
      first_event_code: "AL1",
      event_type_key: "RCMP",
      event_region_number: 0,
      division_key: 0,
      division_name: null,
      event_name: "FTC Alberta Championship",
      start_date: "2020-03-07T00:00:00.000Z",
      end_date: "2020-03-07T00:00:00.000Z",
      week_key: "March",
      city: "Edmonton, AB T5M 4A1",
      state_prov: "AB",
      country: "Canada",
      venue: "Telus World of Science Edmonton",
      website: "http://ftcalberta.ca",
      time_zone: "",
      is_active: true,
      is_public: true,
      active_tournament_level: 0,
      alliance_count: 4,
      field_count: 2,
      advance_spots: 0,
      advance_event: "",
      data_source: 0
    }
  ]);
  try {
    let events = await api.getEvents();
    expect(events.length).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});

test("get_event_count", async () => {
  mockFetch({ result: 15 });
  try {
    let eventCount = await api.getEventCount();
    expect(eventCount).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});

test("get_event", async () => {
  mockFetch([
    {
      event_key: "1920-FIM-OWQ1",
      season_key: "1920",
      region_key: "FIM",
      league_key: null,
      event_code: "OWQ1",
      first_event_code: "19MIQT15",
      event_type_key: "QUAL",
      event_region_number: 0,
      division_key: 0,
      division_name: null,
      event_name: "Oxford Wildcat Quest 1",
      start_date: "2019-11-22T00:00:00.000Z",
      end_date: "2019-11-23T00:00:00.000Z",
      week_key: "November",
      city: "Oxford",
      state_prov: "MI",
      country: "USA",
      venue: "Oxford Middle School",
      website: "http://firstinmichigan.us/FTC/events/",
      time_zone: "",
      is_active: true,
      is_public: true,
      active_tournament_level: 0,
      alliance_count: 4,
      field_count: 2,
      advance_spots: 0,
      advance_event: "",
      data_source: 0
    }
  ]);
  let eventKey = "1920-FIM-OWQ1";
  try {
    let event = await api.getEvent(eventKey);
    expect(event.eventKey).toEqual(eventKey);
  } catch (err) {
    fail(err);
  }
});
