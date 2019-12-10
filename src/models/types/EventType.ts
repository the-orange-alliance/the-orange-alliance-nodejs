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

const EventTypeMapping = {
  "": EventType.Unknown,
  LGCMP: EventType.LeagueChampionship,
  LGMEET: EventType.LeagueMeet,
  OFFSSN: EventType.OffSeason,
  QUAL: EventType.Qualifier,
  RCMP: EventType.RegionChampionship,
  SCRIMMAGE: EventType.Scrimmage,
  SPRING: EventType.SpringEvent,
  SPRQUAL: EventType.SuperQual,
  SPRRGNL: EventType.SuperRegional,
  WRLDCMP: EventType.WorldChamp,
  OTHER: EventType.Other
};

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

export const enumerate = (
  eventType: keyof typeof EventTypeMapping
): EventType => {
  return EventTypeMapping[eventType];
};

export const stringify = (
  eventType: EventType
): keyof typeof EventTypeMapping => {
  return EventTypeStringMapping[eventType] as keyof typeof EventTypeMapping;
};

export default EventType;
