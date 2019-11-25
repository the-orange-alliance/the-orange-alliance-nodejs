import API from "../src";

let api: API;

beforeAll(() => {
  let api_key = process.env.TOA_KEY || "";
  api = new API(api_key, "TOA-API-Test");
});

test("api_connection", () => {
  api
    .getAPI()
    .then((version: string) => {
      console.log(version);
      expect(version.split(".").length).toEqual(3);
    })
    .catch(err => {
      fail(err);
    });
});
