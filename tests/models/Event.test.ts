import Event from "../../src/models/Event";
import EventType from "../../src/models/types/EventType";
import { DataSource } from "../../src/models/types/DataSource";
import Match from "../../src/models/Match";
import Ranking from "../../src/models/Ranking";
import AwardRecipient from "../../src/models/AwardRecipient";
import EventParticipant from "../../src/models/EventParticipant";
import Alliance from "../../src/models/Alliance";
import Team from "../../src/models/Team";
import Award from "../../src/models/Award";

test("empty", () => {
  let e = new Event();
  expect(e.eventKey).toEqual("");
  expect(e.seasonKey).toEqual("");
  expect(e.regionKey).toEqual("");
  expect(e.leagueKey).toEqual("");
  expect(e.eventCode).toEqual("");
  expect(e.eventTypeKey).toEqual(EventType.Unknown);
  expect(e.eventRegionNumber).toEqual(0);
  expect(e.firstEventCode).toEqual("");
  expect(e.divisionKey).toEqual(100);
  expect(e.divisionName).toEqual("");
  expect(e.eventName).toEqual("");
  expect(e.startDate).toEqual("");
  expect(e.endDate).toEqual("");
  expect(e.weekKey).toEqual("");
  expect(e.city).toEqual("");
  expect(e.stateProv).toEqual("");
  expect(e.country).toEqual("");
  expect(e.venue).toEqual("");
  expect(e.website).toEqual("");
  expect(e.timeZone).toEqual("");
  expect(e.isActive).toEqual(false);
  expect(e.isPublic).toEqual(false);
  expect(e.allianceCount).toEqual(0);
  expect(e.fieldCount).toEqual(0);
  expect(e.advanceSpots).toEqual(0);
  expect(e.advanceEvent).toEqual("");
  expect(e.teamCount).toEqual(-1);
  expect(e.matchCount).toEqual(-1);
  expect(e.matches).toEqual([]);
  expect(e.rankings).toEqual([]);
  expect(e.awards).toEqual([]);
  expect(e.teams).toEqual([]);
  expect(e.alliances).toEqual([]);
});

test("to_json", () => {
  let e = new Event();
  e.eventKey = "1920-FIM-OWQ1";
  e.seasonKey = "1920";
  e.regionKey = "FIM";
  e.leagueKey = null;
  e.eventCode = "OWQ1";
  e.eventTypeKey = EventType.Qualifier;
  e.eventRegionNumber = 0;
  e.firstEventCode = "19MIQT15";
  e.divisionKey = 0;
  e.divisionName = null;
  e.eventName = "Oxford Wildcat Quest 1";
  e.startDate = "2019-11-22T00:00:00.000Z";
  e.endDate = "2019-11-23T00:00:00.000Z";
  e.weekKey = "November";
  e.city = "Oxford";
  e.stateProv = "MI";
  e.country = "USA";
  e.venue = "Oxford Middle School";
  e.website = "http://firstinmichigan.us/FTC/events/";
  e.timeZone = "";
  e.isActive = true;
  e.isPublic = true;
  e.allianceCount = 4;
  e.fieldCount = 2;
  e.advanceSpots = 0;
  e.advanceEvent = "";
  e.teamCount = -1;
  e.matchCount = -1;
  e.matches = [];
  e.rankings = [];
  e.awards = [];
  e.teams = [];
  e.alliances = [];
  e.dataSource = DataSource.Unknown;

  let json = e.toJSON();
  expect(json).toEqual({
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
    alliance_count: 4,
    field_count: 2,
    advance_spots: 0,
    advance_event: "",
    data_source: 0,
    matches: undefined,
    rankings: undefined,
    awards: undefined,
    teams: undefined,
    alliances: undefined
  });
});

test("from_json", () => {
  let json = {
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
    alliance_count: 4,
    field_count: 2,
    advance_spots: 0,
    advance_event: "",
    data_source: 0,
    matches: undefined,
    rankings: undefined,
    awards: undefined,
    teams: undefined,
    alliances: undefined
  };
  let e = new Event().fromJSON(json);

  expect(e.eventKey).toEqual("1920-FIM-OWQ1");
  expect(e.seasonKey).toEqual("1920");
  expect(e.regionKey).toEqual("FIM");
  expect(e.leagueKey).toEqual(null);
  expect(e.eventCode).toEqual("OWQ1");
  expect(e.eventTypeKey).toEqual(EventType.Qualifier);
  expect(e.eventRegionNumber).toEqual(0);
  expect(e.firstEventCode).toEqual("19MIQT15");
  expect(e.divisionKey).toEqual(0);
  expect(e.divisionName).toEqual(null);
  expect(e.eventName).toEqual("Oxford Wildcat Quest 1");
  expect(e.startDate).toEqual("2019-11-22T00:00:00.000Z");
  expect(e.endDate).toEqual("2019-11-23T00:00:00.000Z");
  expect(e.weekKey).toEqual("November");
  expect(e.city).toEqual("Oxford");
  expect(e.stateProv).toEqual("MI");
  expect(e.country).toEqual("USA");
  expect(e.venue).toEqual("Oxford Middle School");
  expect(e.website).toEqual("http://firstinmichigan.us/FTC/events/");
  expect(e.timeZone).toEqual("");
  expect(e.isActive).toEqual(true);
  expect(e.isPublic).toEqual(true);
  expect(e.allianceCount).toEqual(4);
  expect(e.fieldCount).toEqual(2);
  expect(e.advanceSpots).toEqual(0);
  expect(e.advanceEvent).toEqual("");
});

test("get_full_event_name", () => {
  let e = new Event();
  e.eventName = "Michigan Championship - Warren";
  expect(e.fullEventName).toEqual("Michigan Championship - Warren");
  e.divisionName = "Woodie Flowers";
  expect(e.fullEventName).toEqual(
    "Michigan Championship - Warren - Woodie Flowers Division"
  );
});

test("get_location", () => {
  let e = new Event();
  e.city = "Warren";
  e.country = "USA";
  expect(e.getLocation(true)).toEqual("Warren, USA");
  expect(e.getLocation(false)).toEqual("Warren, USA");
  e.venue = "Macomb Community College";
  expect(e.getLocation(true)).toEqual("Macomb Community College, Warren, USA");
  expect(e.getLocation(false)).toEqual("Warren, USA");
  e.stateProv = "MI";
  expect(e.getLocation(false)).toEqual("Warren, MI, USA");
});

test("from_json_matches", () => {
  let e = new Event().fromJSON({
    matches: []
  });
  expect(e.matches).toEqual([]);
  e = new Event().fromJSON({
    matches: [new Match().toJSON()]
  });
  expect(e.matches).toEqual([new Match()]);
});

test("from_json_rankings", () => {
  let e = new Event().fromJSON({
    rankings: []
  });
  let rank = new Ranking();
  let team = new Team();
  team.teamNumber = 1;
  rank.team = team;
  expect(e.rankings).toEqual([]);
  e = new Event().fromJSON({
    rankings: [rank.toJSON()]
  });
  expect(e.rankings).toEqual([rank]);
});

test("from_json_awards", () => {
  let e = new Event().fromJSON({
    awards: []
  });
  let team = new Team();
  team.teamKey = "6000";
  let award = new Award();
  award.awardKey = "CTL1";
  let a = new AwardRecipient().fromJSON({
    team: team.toJSON(),
    award: award.toJSON()
  });
  expect(e.awards).toEqual([]);
  e = new Event().fromJSON({
    awards: [a.toJSON()]
  });
  expect(e.awards).toEqual([a]);
});

test("from_json_teams", () => {
  let e = new Event().fromJSON({
    teams: []
  });
  let team = new Team();
  team.teamNumber = 1;
  let t = new EventParticipant();
  t.team = team;
  console.log(t);
  expect(e.teams).toEqual([]);
  e = new Event().fromJSON({
    teams: [t.toJSON()]
  });
  expect(e.teams).toEqual([t]);
});

test("from_json_alliances", () => {
  let e = new Event().fromJSON({
    alliances: []
  });
  let captain = new Team();
  captain.teamNumber = 1;
  let pick1 = new Team();
  pick1.teamNumber = 2;
  let a = new Alliance();
  a.seed = 1;
  a.captain = captain;
  a.pick1 = pick1;
  expect(e.alliances).toEqual([]);
  e = new Event().fromJSON({
    alliances: [a.toJSON()]
  });
  expect(e.alliances).toEqual([a]);
});
