import {
  numberToTeamMedia,
  MediaTypeTeam,
  teamMediaToNumber,
  MediaTypeEvent,
  eventMediaToNumber,
  numberToEventMedia
} from "../../../src/models/types/MediaType";

describe("team_media", () => {
  test("number_to_team_media", () => {
    expect(numberToTeamMedia(3)).toEqual(MediaTypeTeam.RobotReveal);
  });

  test("team_media_to_number", () => {
    expect(teamMediaToNumber(MediaTypeTeam.CAD)).toEqual(1);
  });
});

describe("event_media", () => {
  test("number_to_event_media", () => {
    expect(numberToEventMedia(1)).toEqual(MediaTypeEvent.Schedule);
  });

  test("event_media_to_number", () => {
    expect(eventMediaToNumber(MediaTypeEvent.PitMap)).toEqual(0);
  });
});
