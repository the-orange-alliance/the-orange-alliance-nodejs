enum MatchType {
  Unknown = -1,
  PracticeMatch = 0,
  QualificationMatch = 1,
  QuarterfinalSeries1 = 21,
  QuarterfinalSeries2 = 22,
  QuarterfinalSeries3 = 23,
  QuarterfinalSeries4 = 24,
  SemifinalsSeries1 = 31,
  SemifinalsSeries2 = 32,
  Finals = 4
}

const MatchTypeMapping = {
  [MatchType.Unknown]: -1,
  [MatchType.PracticeMatch]: 0,
  [MatchType.QualificationMatch]: 1,
  [MatchType.QuarterfinalSeries1]: 21,
  [MatchType.QuarterfinalSeries2]: 22,
  [MatchType.QuarterfinalSeries3]: 23,
  [MatchType.QuarterfinalSeries4]: 24,
  [MatchType.SemifinalsSeries1]: 31,
  [MatchType.SemifinalsSeries2]: 32,
  [MatchType.Finals]: 4
};

export const numberToMatchType = (matchType: number): MatchType => {
  return matchType;
};

export const matchTypeToNumber = (matchType: MatchType): number => {
  return MatchTypeMapping[matchType];
};

export default MatchType;
