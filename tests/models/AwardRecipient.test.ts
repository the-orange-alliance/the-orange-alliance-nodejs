import AwardRecipient from "../../src/models/AwardRecipient";
import Award from "../../src/models/Award";
import Team from "../../src/models/Team";

test("empty", () => {
  let a = new AwardRecipient();
  expect(a.awardsKey).toEqual("");
  expect(a.eventKey).toEqual("");
  expect(a.awardKey).toEqual("");
  expect(a.teamKey).toEqual("");
  expect(a.receiverName).toEqual("");
  expect(a.awardName).toEqual("");
  expect(a.award).toEqual(new Award());
  expect(a.team).toEqual(new Team());
});

test("to_json", () => {
  let a = new AwardRecipient();
  a.awardsKey = "1920-FIM-OWQ1-CNT1";
  a.awardKey = "CNT1";
  a.eventKey = "1920-FIM-OWQ1";
  a.teamKey = "8579";
  a.receiverName = null;
  a.awardName = "Connect Award Finalist";
  a.award = new Award().fromJSON({
    award_key: "CNT1",
    award_type: 1,
    award_description: "Connect Award Winner",
    display_order: 13
  });
  a.team = new Team().fromJSON({
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
  });

  expect(a.toJSON()).toEqual({
    awards_key: "1920-FIM-OWQ1-CNT1",
    event_key: "1920-FIM-OWQ1",
    award_key: "CNT1",
    team_key: "8579",
    receiver_name: null,
    award_name: "Connect Award Finalist",
    award: {
      award_key: "CNT1",
      award_type: 1,
      award_description: "Connect Award Winner",
      display_order: 13
    },
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
  });
});

test("from_json", () => {
  let json = {
    awards_key: "1920-FIM-OWQ1-CNT1",
    event_key: "1920-FIM-OWQ1",
    award_key: "CNT1",
    team_key: "8579",
    receiver_name: null,
    award_name: "Connect Award Finalist",
    award: {
      award_key: "CNT1",
      award_type: 1,
      award_description: "Connect Award Winner",
      display_order: 13
    },
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
  };
  let a = new AwardRecipient().fromJSON(json);
  expect(a.award).not.toEqual(new Award());
  expect(a.award).not.toEqual(null);
  expect(a.team).not.toEqual(new Team());
  expect(a.team).not.toEqual(null);
  expect(a.awardName).toEqual("Connect Award Finalist");
  expect(a.awardKey).toEqual("CNT1");
  expect(a.awardsKey).toEqual("1920-FIM-OWQ1-CNT1");
  expect(a.teamKey).toEqual("8579");
  expect(a.receiverName).toEqual(null);
});
