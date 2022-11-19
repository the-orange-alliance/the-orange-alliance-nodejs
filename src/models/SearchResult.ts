import Event from "./Event";
import Team from "./Team";

export class TeamSearchResult extends Team {
    private _score: number;

    constructor() {
        super();
        this._score = 0;
    }

    fromJSON(json: any): TeamSearchResult {
        const searchItem = new TeamSearchResult();
        const team = super.fromJSON(json);
        Object.assign(searchItem, team);
        searchItem.score = json.score;
        return searchItem;
    }

    toJSON(): object {
        const json = super.toJSON() as any;
        json.score = this.score;
        return json;
    }

    get type(): "team" {
        return "team";
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}

export class EventSearchResult extends Event {
    private _score: number;

    constructor() {
        super();
        this._score = 0;
    }

    fromJSON(json: any): EventSearchResult {
        const searchItem = new EventSearchResult();
        const event = super.fromJSON(json);
        Object.assign(searchItem, event);
        searchItem.score = json.score;
        return searchItem;
    }

    toJSON(): object {
        const json = super.toJSON() as any;
        json.score = this.score;
        return json;
    }

    get type(): "event" {
        return "event";
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}

type SearchResult = TeamSearchResult | EventSearchResult;

export default SearchResult;
