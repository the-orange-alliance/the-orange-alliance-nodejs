import { ISerializable } from "./ISerializable";
import StationStatus, {
  numberToStationStatus,
  stationStatusToNumber
} from "./types/StationStatus";
import MatchStations, {
  numberToStation,
  stationToNumber
} from "./types/MatchStations";
import RefStatus, { numberToRef, refToNumber } from "./types/RefStatus";

export default class MatchParticipant implements ISerializable {
  private _matchParticipantKey: string;
  private _matchKey: string;
  private _teamKey: string;
  private _teamNumber: number;
  private _station: MatchStations;
  private _stationStatus: StationStatus;
  private _refStatus: RefStatus;

  constructor() {
    this._matchParticipantKey = "";
    this._matchKey = "";
    this._teamKey = "";
    this._teamNumber = -1;
    this._station = MatchStations.Unknown;
    this._stationStatus = StationStatus.Unknown;
    this._refStatus = 0;
  }

  toJSON(): object {
    return {
      match_participant_key: this.matchParticipantKey,
      match_key: this.matchKey,
      team_key: this.teamKey,
      team_number: this.teamNumber,
      station: stationToNumber(this.station),
      station_status: stationStatusToNumber(this.stationStatus),
      ref_status: refToNumber(this.refStatus)
    };
  }

  fromJSON(json: any): MatchParticipant {
    const participant: MatchParticipant = new MatchParticipant();
    participant.matchParticipantKey = json.match_participant_key;
    participant.matchKey = json.match_key;
    participant.teamKey = json.team_key;
    participant.teamNumber = json.team_number;
    participant.station = numberToStation(json.station);
    participant.stationStatus = numberToStationStatus(json.station_status);
    participant.refStatus = numberToRef(json.ref_status);
    return participant;
  }

  get matchParticipantKey(): string {
    return this._matchParticipantKey;
  }

  set matchParticipantKey(value: string) {
    this._matchParticipantKey = value;
  }

  get matchKey(): string {
    return this._matchKey;
  }

  set matchKey(value: string) {
    this._matchKey = value;
  }

  get teamKey(): string {
    return this._teamKey;
  }

  set teamKey(value: string) {
    this._teamKey = value;
  }

  get teamNumber(): number {
    return this._teamNumber;
  }

  set teamNumber(value: number) {
    this._teamNumber = value;
  }

  get station(): number {
    return this._station;
  }

  set station(value: number) {
    this._station = value;
  }

  get stationStatus(): StationStatus {
    return this._stationStatus;
  }

  set stationStatus(value: StationStatus) {
    this._stationStatus = value;
  }

  get refStatus(): number {
    return this._refStatus;
  }

  set refStatus(value: number) {
    this._refStatus = value;
  }
}
