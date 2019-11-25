enum RefStatus {
  Unknown = -1,
  NoAction = 0,
  NoShow = 1,
  YellowCard = 2,
  RedCard = 3
}

const RefTypeMapping = {
  [RefStatus.Unknown]: -1,
  [RefStatus.NoAction]: 0,
  [RefStatus.NoShow]: 1,
  [RefStatus.YellowCard]: 2,
  [RefStatus.RedCard]: 3
};

export const numberToRef = (refStatus: number): RefStatus => {
  return refStatus;
};

export const refToNumber = (ref: RefStatus): number => {
  return RefTypeMapping[ref];
};

export default RefStatus;
