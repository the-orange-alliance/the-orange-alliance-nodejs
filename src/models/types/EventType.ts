enum EventType {
  Unknown = "",
  LeagueChampionship = "LGCMP",
  LeagueMeet = "LGMEET",
  OffSeason = "OFFSSN",
  Qualifier = "QUAL",
  RegionChampionship = "RCMP",
  Scrimmage = "SCRIMMAGE",
  SpringEvent = "SPRING",
  SuperQual = "SPRQUAL",
  SuperRegional = "SPRRGNL",
  WorldChamp = "WRLDCMP",
  Other = "OTHER"
}

const EventTypeStringMapping = {
  [EventType.Unknown]: "",
  [EventType.LeagueChampionship]: "LGCMP",
  [EventType.LeagueMeet]: "LGMEET",
  [EventType.OffSeason]: "OFFSSN",
  [EventType.Qualifier]: "QUAL",
  [EventType.RegionChampionship]: "RCMP",
  [EventType.Scrimmage]: "SCRIMMAGE",
  [EventType.SpringEvent]: "SPRING",
  [EventType.SuperQual]: "SPRQUAL",
  [EventType.SuperRegional]: "SPRRGNL",
  [EventType.WorldChamp]: "WRLDCMP",
  [EventType.Other]: "OTHER"
};

type EventTypeString = keyof typeof EventType;

export const enumerate = (eventType: EventTypeString): EventType => {
  return EventType[eventType];
};

export const stringify = (eventType: EventType): EventTypeString => {
  return EventTypeStringMapping[eventType] as EventTypeString;
};

export default EventType;
