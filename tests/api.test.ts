import { API } from "../src";
import { mockFetch } from "./util/fetch_mock";
let api: API;

jest.mock("node-fetch");
beforeAll(() => {
  let api_key = process.env.TOA_KEY || "";
  api = new API(api_key, "TOA-API-Test");
});

test("api_connection", async () => {
  mockFetch({ version: "1.0.0" });
  try {
    let version = await api.getAPI();
    console.log(version);
    expect(version.split(".").length).toEqual(3);
  } catch (err) {
    fail(err);
  }
});
