enum StreamType {
  Unknown = -1,
  YouTube = 0,
  Twitch = 1,
  Custom = 3
}

const StreamTypeMapping = {
  [StreamType.Unknown]: -1,
  [StreamType.YouTube]: 0,
  [StreamType.Twitch]: 1,
  [StreamType.Custom]: 3
};

export const numberToStream = (streamType: number): StreamType => {
  return streamType;
};

export const streamToNumber = (streamType: StreamType): number => {
  return StreamTypeMapping[streamType];
};

export default StreamType;
