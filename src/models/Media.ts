import { ISerializable } from "./ISerializable";
import {
  MediaTypeTeam,
  MediaTypeEvent,
  numberToTeamMedia,
  numberToEventMedia,
  teamMediaToNumber,
  eventMediaToNumber
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
    let m_type: MediaTypeTeam | MediaTypeEvent = MediaTypeTeam.Unknown;
    if (this.teamKey !== "" || this.teamKey !== undefined) {
      m_type = teamMediaToNumber(this.mediaType as MediaTypeTeam);
    } else if (this.eventKey !== "" || this.eventKey !== undefined) {
      m_type = eventMediaToNumber(this.mediaType as MediaTypeEvent);
    } else {
      m_type = -1;
    }
    return {
      media_key: this.mediaKey,
      event_key: this.eventKey,
      team_key: this.teamKey,
      media_type: m_type,
      is_primary: this.isPrimary,
      title: this.mediaTitle,
      link: this.mediaLink
    };
  }

  fromJSON(json: any): Media {
    const award: Media = new Media();
    if (this.teamKey !== "") {
      award.mediaType = numberToTeamMedia(json.media_type);
    } else if (this.teamKey !== "") {
      award.mediaType = numberToEventMedia(json.media_type);
    } else {
      award.mediaType = MediaTypeTeam.Unknown;
    }
    award.mediaKey = json.media_key;
    award.eventKey = json.event_key;
    award.teamKey = json.team_key;
    award.isPrimary = json.is_primary;
    award.mediaTitle = json.title;
    award.mediaLink = json.link;
    return award;
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
