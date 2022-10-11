import { ISerializable } from './ISerializable';
import Event from "./Event";
import Team from "./Team";

export default class SearchResult implements ISerializable {
  private _events: Event[];
  private _teams: Team[];

  constructor() {
    this._events = [];
    this._teams = [];
  }

  toJSON(): object {
    return {
      teams: this.teams,
      events: this.events
    };
  }

  fromJSON(json: any): SearchResult {
    const season: SearchResult = new SearchResult();
    season.teams = json.teams;
    season.events = json.events;
    return season;
  }

  get events(): Event[] {
    return this._events;
  }

  set events(value: Event[]) {
    this._events = value;
  }

  get teams(): Team[] {
    return this._teams;
  }

  set teams(value: Team[]) {
    this._teams = value;
  }
}
