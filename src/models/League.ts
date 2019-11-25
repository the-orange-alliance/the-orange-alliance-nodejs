import { ISerializable } from './ISerializable';

export default class League implements ISerializable {
  private _leagueKey: string;
  private _regionKey: string;
  private _seasonKey: string;
  private _description: string;

  constructor() {
    this._leagueKey = '';
    this._regionKey = '';
    this._seasonKey = '';
    this._description = '';
  }

  toJSON(): object {
    return {
      league_key: this.leagueKey,
      region_key: this.regionKey,
      season_key: this.seasonKey,
      league_description: this.description,
    };
  }

  fromJSON(json: any): League {
    const league: League = new League();
    league.leagueKey = json.league_key;
    league.regionKey = json.region_key;
    league.seasonKey = json.season_key;
    league.description = json.league_description;
    return league;
  }

  get leagueKey(): string {
    return this._leagueKey;
  }

  set leagueKey(value: string) {
    this._leagueKey = value;
  }

  get regionKey(): string {
    return this._regionKey;
  }

  set regionKey(value: string) {
    this._regionKey = value;
  }

  get seasonKey(): string {
    return this._seasonKey;
  }

  set seasonKey(value: string) {
    this._seasonKey = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
