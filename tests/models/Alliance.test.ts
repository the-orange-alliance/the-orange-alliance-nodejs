import Alliance from "../../src/models/Alliance";
import Team from "../../src/models/Team";

test("empty", () => {
  let a = new Alliance();
  expect(a.seed).toEqual(0);
  expect(a.captain).toEqual(new Team());
  expect(a.pick1).toEqual(new Team());
  expect(a.pick2).toEqual(null);
});

test("to_json", () => {
  let captain = new Team();
  captain.teamNumber = 1;
  let pick1 = new Team();
  pick1.teamNumber = 2;
  let pick2 = new Team();
  pick2.teamNumber = 3;
  let a = new Alliance();
  a.seed = 1;
  a.captain = captain;
  a.pick1 = pick1;
  expect(a.toJSON()).toEqual({
    seed: 1,
    captain: captain.toJSON(),
    pick1: pick1.toJSON(),
    pick2: null
  });
  a.pick2 = pick2;
  expect(a.toJSON()).toEqual({
    seed: 1,
    captain: captain.toJSON(),
    pick1: pick1.toJSON(),
    pick2: pick2.toJSON()
  });
});

test("from_json", () => {
  let json = {
    seed: 1,
    captain: {
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
    },
    pick1: {
      team_key: "13643",
      region_key: "FIM",
      league_key: null,
      team_number: 13643,
      team_name_short: "Rebel Wreckers",
      team_name_long: "Larson Middle School",
      robot_name: null,
      last_active: "1920",
      city: "Troy",
      state_prov: "MI",
      zip_code: "48085",
      country: "USA",
      rookie_year: 2017,
      website: null
    },
    pick2: {
      team_key: "14757",
      region_key: "FIM",
      league_key: null,
      team_number: 14757,
      team_name_short: "Clarkston Mayhem",
      team_name_long: "Sashabaw Middle School",
      robot_name: null,
      last_active: "1920",
      city: "Clarkston",
      state_prov: "MI",
      zip_code: "48346",
      country: "USA",
      rookie_year: 2018,
      website: null
    }
  };
  let captain = new Team().fromJSON({
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
  });
  let pick1 = new Team().fromJSON({
    team_key: "13643",
    region_key: "FIM",
    league_key: null,
    team_number: 13643,
    team_name_short: "Rebel Wreckers",
    team_name_long: "Larson Middle School",
    robot_name: null,
    last_active: "1920",
    city: "Troy",
    state_prov: "MI",
    zip_code: "48085",
    country: "USA",
    rookie_year: 2017,
    website: null
  });
  let pick2 = new Team().fromJSON({
    team_key: "14757",
    region_key: "FIM",
    league_key: null,
    team_number: 14757,
    team_name_short: "Clarkston Mayhem",
    team_name_long: "Sashabaw Middle School",
    robot_name: null,
    last_active: "1920",
    city: "Clarkston",
    state_prov: "MI",
    zip_code: "48346",
    country: "USA",
    rookie_year: 2018,
    website: null
  });
  let a = new Alliance().fromJSON(json);
  expect(a.seed).toEqual(1);
  expect(a.captain).toEqual(captain);
  expect(a.pick1).toEqual(pick1);
  expect(a.pick2).toEqual(pick2);
  delete (json as any).pick2;
  a = new Alliance().fromJSON(json);
  expect(a.seed).toEqual(1);
  expect(a.captain).toEqual(captain);
  expect(a.pick1).toEqual(pick1);
  expect(a.pick2).toEqual(null);
});

test("team_numbers_0", () => {
  let captain = new Team();
  captain.teamNumber = 0;
  let pick1 = new Team();
  pick1.teamNumber = 0;
  let a = new Alliance();
  a.seed = 1;
  a.captain = captain;
  a.pick1 = pick1;
  expect(a.toJSON()).toEqual({
    seed: 1,
    captain: null,
    pick1: null,
    pick2: null
  });
});
