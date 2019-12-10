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

test("get_event_matches", async () => {
  mockFetch([
    {
      match_key: "1920-FIM-OWQ1-Q001-1",
      event_key: "1920-FIM-OWQ1",
      tournament_level: 1,
      scheduled_time: "2019-11-23T15:30:00.000Z",
      match_name: "Quals 1",
      play_number: 1,
      field_number: 1,
      prestart_time: null,
      match_start_time: "2019-11-23T15:28:52.000Z",
      prestart_count: null,
      cycle_time: null,
      red_score: 31,
      blue_score: 75,
      red_penalty: 0,
      blue_penalty: 0,
      red_auto_score: 5,
      blue_auto_score: 40,
      red_tele_score: 6,
      blue_tele_score: 15,
      red_end_score: 20,
      blue_end_score: 20,
      video_url: null,
      participants: [
        {
          match_participant_key: "1920-FIM-OWQ1-Q001-1-R1",
          match_key: "1920-FIM-OWQ1-Q001-1",
          team_key: "8579",
          station: 11,
          station_status: 1,
          ref_status: 0,
          team: {
            team_key: "8579",
            region_key: "FIM",
            league_key: null,
            team_number: 8579,
            team_name_short: "Classical Engineers",
            team_name_long: "Bedford Junior High School",
            robot_name: null,
            last_active: "1920",
            city: "Temperance",
            state_prov: "MI",
            zip_code: "48182",
            country: "USA",
            rookie_year: 2014,
            website: "http://classicalenginneers.com"
          }
        },
        {
          match_participant_key: "1920-FIM-OWQ1-Q001-1-R2",
          match_key: "1920-FIM-OWQ1-Q001-1",
          team_key: "6134",
          station: 12,
          station_status: 1,
          ref_status: 0,
          team: {
            team_key: "6134",
            region_key: "FIM",
            league_key: null,
            team_number: 6134,
            team_name_short: "Black Frogs",
            team_name_long: "Black Frogs & Novi Middle School",
            robot_name: null,
            last_active: "1920",
            city: "Novi",
            state_prov: "MI",
            zip_code: "48375",
            country: "USA",
            rookie_year: 2012,
            website: null
          }
        },
        {
          match_participant_key: "1920-FIM-OWQ1-Q001-1-B1",
          match_key: "1920-FIM-OWQ1-Q001-1",
          team_key: "16408",
          station: 21,
          station_status: 1,
          ref_status: 0,
          team: {
            team_key: "16408",
            region_key: "FIM",
            league_key: null,
            team_number: 16408,
            team_name_short: "Frost RoboFalcons Black",
            team_name_long: "Frost Middle School",
            robot_name: null,
            last_active: "1920",
            city: "Livonia",
            state_prov: "MI",
            zip_code: "48154",
            country: "USA",
            rookie_year: 2019,
            website: "http://www.livoniarobos.org"
          }
        },
        {
          match_participant_key: "1920-FIM-OWQ1-Q001-1-B2",
          match_key: "1920-FIM-OWQ1-Q001-1",
          team_key: "12775",
          station: 22,
          station_status: 1,
          ref_status: 0,
          team: {
            team_key: "12775",
            region_key: "FIM",
            league_key: null,
            team_number: 12775,
            team_name_short: "Christ Connectors",
            team_name_long:
              "FIRST of the Great Lakes Bay Region/Nexteer Automotive&Christ the King Sch-Sebawaing",
            robot_name: null,
            last_active: "1920",
            city: "Unionville",
            state_prov: "MI",
            zip_code: "48767",
            country: "USA",
            rookie_year: 2017,
            website: null
          }
        }
      ]
    }
  ]);
  let eventKey = "1920-FIM-OWQ1";
  try {
    let matches = await api.getEventMatches(eventKey);
    expect(matches.length).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});

test("get_event_match_details", async () => {
  mockFetch([
    {
      match_detail_key: "1920-FIM-OWQ1-E001-1-DTL",
      match_key: "1920-FIM-OWQ1-E001-1",
      red_min_pen: 0,
      blue_min_pen: 0,
      red_maj_pen: 0,
      blue_maj_pen: 0,
      red: {
        auto_stone_1: "SKYSTONE",
        auto_stone_2: "NONE",
        auto_stone_3: "NONE",
        auto_stone_4: "NONE",
        auto_stone_5: "NONE",
        auto_stone_6: "NONE",
        auto_delivered_skystones: 1,
        auto_delivered_stones: 0,
        auto_returned: 0,
        first_returned_is_skystone: false,
        auto_placed: 0,
        foundation_repositioned: true,
        tele_delivered: 5,
        tele_returned: 0,
        tele_placed: 4,
        robot_1: {
          nav: false,
          parked: true,
          cap_level: -1
        },
        robot_2: {
          nav: true,
          parked: true,
          cap_level: 0
        },
        foundation_moved: true,
        auto_transport_points: 10,
        auto_placed_points: 0,
        reposition_points: null,
        nav_points: 5,
        tele_transport_points: 5,
        tele_placed_points: 4,
        tower_bonus: 3,
        tower_capping_bonus: 1,
        tower_level_bonus: 0,
        end_robots_parked: 2
      },
      blue: {
        auto_stone_1: "SKYSTONE",
        auto_stone_2: "NONE",
        auto_stone_3: "NONE",
        auto_stone_4: "NONE",
        auto_stone_5: "NONE",
        auto_stone_6: "NONE",
        auto_delivered_skystones: 1,
        auto_delivered_stones: 0,
        auto_returned: 0,
        first_returned_is_skystone: false,
        auto_placed: 0,
        foundation_repositioned: false,
        tele_delivered: 4,
        tele_returned: 0,
        tele_placed: 2,
        robot_1: {
          nav: true,
          parked: true,
          cap_level: 0
        },
        robot_2: {
          nav: true,
          parked: true,
          cap_level: -1
        },
        foundation_moved: true,
        auto_transport_points: 10,
        auto_placed_points: 0,
        reposition_points: null,
        nav_points: 10,
        tele_transport_points: 4,
        tele_placed_points: 2,
        tower_bonus: 2,
        tower_capping_bonus: 1,
        tower_level_bonus: 0,
        end_robots_parked: 2
      },
      randomization: 2
    }
  ]);
  let eventKey = "1920-FIM-OWQ1";
  try {
    let details = await api.getEventMatchDetails(eventKey);
    expect(details.length).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});

test("get_event_match_participants", async () => {
  mockFetch([
    {
      match_participant_key: "1920-FIM-OWQ1-E001-1-B1",
      match_key: "1920-FIM-OWQ1-E001-1",
      team_key: "11691",
      station: 21,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11691",
        region_key: "FIM",
        league_key: null,
        team_number: 11691,
        team_name_short: "Scripps Dragons",
        team_name_long: "Scripps Middle School",
        robot_name: null,
        last_active: "1920",
        city: "Lake Orion",
        state_prov: "MI",
        zip_code: "48360",
        country: "USA",
        rookie_year: 2016,
        website: null
      }
    }
  ]);
  let eventKey = "1920-FIM-OWQ1";
  try {
    let participants = await api.getEventMatchParticipants(eventKey);
    expect(participants.length).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});

test("get_event_rankings", async () => {
  mockFetch([
    {
      rank_key: "1920-FIM-OWQ1-R16408",
      event_key: "1920-FIM-OWQ1",
      team_key: "16408",
      rank: 1,
      rank_change: 0,
      opr: 63.7,
      wins: 5,
      losses: 0,
      ties: 0,
      highest_qual_score: 111,
      ranking_points: 2,
      qualifying_points: 0,
      tie_breaker_points: 45.5,
      disqualified: 0,
      played: 5,
      team: {
        team_key: "16408",
        region_key: "FIM",
        league_key: null,
        team_number: 16408,
        team_name_short: "Frost RoboFalcons Black",
        team_name_long: "Frost Middle School",
        robot_name: null,
        last_active: "1920",
        city: "Livonia",
        state_prov: "MI",
        zip_code: "48154",
        country: "USA",
        rookie_year: 2019,
        website: "http://www.livoniarobos.org"
      }
    }
  ]);
  let eventKey = "1920-FIM-OWQ1";
  try {
    let rankings = await api.getEventRankings(eventKey);
    expect(rankings.length).toBeGreaterThan(0);
  } catch (err) {
    fail(err);
  }
});
