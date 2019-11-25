import { ISerializable } from "./ISerializable";
import StreamType, { streamToNumber, numberToStream } from "./types/StreamType";

export default class EventLiveStream implements ISerializable {
  private _streamKey: string;
  private _eventKey: string;
  private _streamType: StreamType;
  private _isActive: boolean;
  private _streamURL: string;
  private _channelName: string;
  private _streamName: string;
  private _startDateTime: string;
  private _endDateTime: string;
  private _channelURL: string;

  private _fullURL: string;

  constructor() {
    this._streamKey = "";
    this._eventKey = "";
    this._streamType = StreamType.Unknown;
    this._isActive = false;
    this._streamURL = "";
    this._channelName = "";
    this._streamName = "";
    this._startDateTime = "";
    this._endDateTime = "";
    this._channelURL = "";
    this._fullURL = "";
  }

  toJSON(): object {
    return {
      stream_key: this.streamKey,
      event_key: this.eventKey,
      stream_type: streamToNumber(this.streamType),
      is_active: this.isActive,
      url: this.streamURL,
      channel_name: this.channelName,
      stream_name: this.streamName,
      start_datetime: this.startDateTime,
      end_datetime: this.endDateTime,
      channel_url: this.channelURL
    };
  }

  fromJSON(json: any): EventLiveStream {
    const stream: EventLiveStream = new EventLiveStream();
    stream.streamKey = json.stream_key;
    stream.eventKey = json.event_key;
    stream.streamType = numberToStream(json.stream_type);
    stream.isActive = json.is_active;
    stream.streamURL = json.url;
    stream.channelName = json.channel_name;
    stream.streamName = json.stream_name;
    stream.startDateTime = json.start_datetime;
    stream.endDateTime = json.end_datetime;
    stream.channelURL = json.channel_url;
    return stream;
  }

  get streamKey(): string {
    return this._streamKey;
  }

  set streamKey(value: string) {
    this._streamKey = value;
  }

  get eventKey(): string {
    return this._eventKey;
  }

  set eventKey(value: string) {
    this._eventKey = value;
  }

  get streamType(): StreamType {
    return this._streamType;
  }

  set streamType(value: StreamType) {
    this._streamType = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get streamURL(): string {
    return this._streamURL;
  }

  set streamURL(value: string) {
    this._streamURL = value;
  }

  get channelName(): string {
    return this._channelName;
  }

  set channelName(value: string) {
    this._channelName = value;
  }

  get streamName(): string {
    return this._streamName;
  }

  set streamName(value: string) {
    this._streamName = value;
  }

  get startDateTime(): string {
    return this._startDateTime;
  }

  set startDateTime(value: string) {
    this._startDateTime = value;
  }

  get endDateTime(): string {
    return this._endDateTime;
  }

  set endDateTime(value: string) {
    this._endDateTime = value;
  }

  get channelURL(): string {
    return this._channelURL;
  }

  set channelURL(value: string) {
    this._channelURL = value;
  }

  get fullURL(): string {
    return this._fullURL;
  }

  set fullURL(value: string) {
    this._fullURL = value;
  }
}
