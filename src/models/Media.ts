import { ISerializable } from "./ISerializable";
import {
  MediaTypeTeam,
  MediaTypeEvent
} from "./types/MediaType";

export default class Media implements ISerializable {
  private _mediaKey: string;
  private _eventKey: string;
  private _teamKey: string;
  private _mediaType: MediaTypeTeam | MediaTypeEvent;
  private _isPrimary: boolean;
  private _mediaTitle: string;
  private _mediaLink: string;

  constructor() {
    this._mediaKey = "";
    this._eventKey = "";
    this._teamKey = "";
    this._mediaType = MediaTypeTeam.Unknown;
    this._isPrimary = false;
    this._mediaTitle = "";
    this._mediaLink = "";
  }

  toJSON(): object {
    return {
      media_key: this.mediaKey,
      event_key: this.eventKey,
      team_key: this.teamKey,
      media_type: this.mediaType.valueOf(),
      is_primary: this.isPrimary,
      title: this.mediaTitle,
      link: this.mediaLink
    };
  }

  fromJSON(json: any): Media {
    const media: Media = new Media();
    media.mediaKey = json.media_key;
    media.eventKey = json.event_key;
    media.teamKey = json.team_key;
    media.isPrimary = json.is_primary;
    media.mediaTitle = json.title;
    media.mediaLink = json.link;
    if(media.teamKey && media.teamKey !== '') media.mediaType = json.media_type as MediaTypeTeam;
    else if(media.eventKey && media.eventKey !== '') media.mediaType = json.media_type as MediaTypeEvent;
    else media.mediaType = json.media_type;
    return media;
  }

  get mediaKey(): string {
    return this._mediaKey;
  }

  set mediaKey(value: string) {
    this._mediaKey = value;
  }

  get eventKey(): string {
    return this._eventKey;
  }

  set eventKey(value: string) {
    this._eventKey = value;
  }

  get teamKey(): string {
    return this._teamKey;
  }

  set teamKey(value: string) {
    this._teamKey = value;
  }

  get mediaType(): MediaTypeTeam | MediaTypeEvent {
    return this._mediaType;
  }

  set mediaType(value: MediaTypeTeam | MediaTypeEvent) {
    this._mediaType = value;
  }

  get isPrimary(): boolean {
    return this._isPrimary;
  }

  set isPrimary(value: boolean) {
    this._isPrimary = value;
  }

  get mediaTitle(): string {
    return this._mediaTitle;
  }

  set mediaTitle(value: string) {
    this._mediaTitle = value;
  }

  get mediaLink(): string {
    return this._mediaLink;
  }

  set mediaLink(value: string) {
    this._mediaLink = value;
  }
}
