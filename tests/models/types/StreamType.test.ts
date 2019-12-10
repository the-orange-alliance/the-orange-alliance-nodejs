import StreamType, {
  streamToNumber,
  numberToStream
} from "../../../src/models/types/StreamType";

test("number_to_stream", () => {
  expect(numberToStream(1)).toEqual(StreamType.Twitch);
});

test("stream_to_number", () => {
  expect(streamToNumber(StreamType.Twitch)).toEqual(1);
});
