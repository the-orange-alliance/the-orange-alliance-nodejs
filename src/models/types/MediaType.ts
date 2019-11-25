enum MediaTypeTeam {
  Unknown = -1,
  Github = 0,
  CAD = 1,
  EngNotebook = 2,
  RobotReveal = 3,
  RobotImage = 4,
  TeamLogo = 5
}

const TeamMediaMapping = {
  [MediaTypeTeam.Unknown]: -1,
  [MediaTypeTeam.Github]: 0,
  [MediaTypeTeam.CAD]: 1,
  [MediaTypeTeam.EngNotebook]: 2,
  [MediaTypeTeam.RobotReveal]: 3,
  [MediaTypeTeam.RobotImage]: 4,
  [MediaTypeTeam.TeamLogo]: 5
};

const numberToTeamMedia = (mediaType: number): MediaTypeTeam => {
  return mediaType;
};

const teamMediaToNumber = (media: MediaTypeTeam): number => {
  return TeamMediaMapping[media];
};

enum MediaTypeEvent {
  Unknown = -1,
  PitMap = 0,
  Schedule = 1,
  VenueMap = 2,
  EventPhoto = 6
}

const EventMediaMapping = {
  [MediaTypeEvent.Unknown]: -1,
  [MediaTypeEvent.PitMap]: 0,
  [MediaTypeEvent.Schedule]: 1,
  [MediaTypeEvent.VenueMap]: 2,
  [MediaTypeEvent.EventPhoto]: 6
};

const numberToEventMedia = (mediaType: number): MediaTypeEvent => {
  return mediaType;
};

const eventMediaToNumber = (media: MediaTypeEvent): number => {
  return EventMediaMapping[media];
};

export {
  MediaTypeTeam,
  MediaTypeEvent,
  numberToTeamMedia,
  numberToEventMedia,
  teamMediaToNumber,
  eventMediaToNumber
};
