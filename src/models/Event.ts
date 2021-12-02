import { ISerializable } from "./ISerializable";
import Match from "./Match";
import Ranking from "./Ranking";
import AwardRecipient from "./AwardRecipient";
import EventParticipant from "./EventParticipant";
import Alliance from "./Alliance";
import EventType, { stringify, enumerate } from "./types/EventType";
import {
    DataSource,
    dataSourceToNumber,
    numberToDataSource,
} from "./types/DataSource";
import { DateTime } from "luxon";
import Insights from "./Insights";
import {
    GameSpecificInsights,
    getInsightsType,
} from "./game-specifics/InsightsData";

export default class Event implements ISerializable {
    private _eventKey: string;
    private _seasonKey: string;
    private _regionKey: string;
    private _leagueKey: string | null;
    private _eventCode: string;
    private _eventTypeKey: EventType;
    private _eventRegionNumber: number;
    private _firstEventCode: string;
    private _divisionKey: number;
    private _divisionName: string | null;
    private _eventName: string;
    private _startDate: string;
    private _endDate: string;
    private _weekKey: string;
    private _city: string;
    private _stateProv: string;
    private _country: string;
    private _venue: string;
    private _website: string;
    private _timeZone: string;
    private _isActive: boolean;
    private _isPublic: boolean;
    private _allianceCount: number;
    private _fieldCount: number;
    private _advanceSpots: number;
    private _advanceEvent: string;
    private _teamCount: number;
    private _matchCount: number;
    private _dataSource: DataSource;

    // Supplemental fields that are not crucial to the model
    private _matches: Match[];
    private _rankings: Ranking[];
    private _awards: AwardRecipient[];
    private _teams: EventParticipant[];
    private _alliances: Alliance[];
    private _insights: GameSpecificInsights[];

    constructor() {
        this._eventKey = "";
        this._seasonKey = "";
        this._regionKey = "";
        this._leagueKey = "";
        this._eventCode = "";
        this._eventTypeKey = EventType.Unknown;
        this._eventRegionNumber = 0;
        this._firstEventCode = "";
        this._divisionKey = 100;
        this._divisionName = "";
        this._eventName = "";
        this._startDate = "";
        this._endDate = "";
        this._weekKey = "";
        this._city = "";
        this._stateProv = "";
        this._country = "";
        this._venue = "";
        this._website = "";
        this._timeZone = "";
        this._isActive = false;
        this._isPublic = false;
        this._allianceCount = 0;
        this._fieldCount = 0;
        this._advanceSpots = 0;
        this._advanceEvent = "";
        this._teamCount = -1;
        this._matchCount = -1;
        this._dataSource = DataSource.Unknown;

        this._matches = [];
        this._rankings = [];
        this._awards = [];
        this._teams = [];
        this._alliances = [];
        this._insights = [];
    }

    toJSON(): object {
        const matchesIsArr = Array.isArray(this.matches);
        const rankingsIsArr = Array.isArray(this.rankings);
        const awardsIsArr = Array.isArray(this.awards);
        const teamsIsArr = Array.isArray(this.teams);
        const alliancesIsArr = Array.isArray(this.alliances);
        const insightsIsArr = Array.isArray(this.insights);
        return {
            event_key: this.eventKey,
            season_key: this.seasonKey,
            region_key: this.regionKey,
            league_key: this.leagueKey,
            event_code: this.eventCode,
            event_region_number: this.eventRegionNumber,
            event_type_key: stringify(this.eventTypeKey),
            division_key: this.divisionKey,
            division_name: this.divisionName,
            first_event_code: this.firstEventCode,
            event_name: this.eventName,
            start_date: this.startDate,
            end_date: this.endDate,
            week_key: this.weekKey,
            city: this.city,
            state_prov: this.stateProv,
            country: this.country,
            venue: this.venue,
            website: this.website,
            time_zone: this.timeZone,
            is_active: this.isActive,
            is_public: this.isPublic,
            alliance_count: this.allianceCount,
            field_count: this.fieldCount,
            advance_spots: this.advanceSpots,
            advance_event: this.advanceEvent,
            data_source: dataSourceToNumber(this.dataSource),
            matches:
                    !matchesIsArr || (matchesIsArr && this.matches.length === 0)
                    ? undefined
                    : this.matches.map((val: Match) => val.toJSON()),
            rankings:
                    !rankingsIsArr || (rankingsIsArr && this.matches.length === 0)
                    ? undefined
                    : this.rankings.map((val: Ranking) => val.toJSON()),
            awards:
                    !awardsIsArr || (awardsIsArr && this.matches.length === 0)
                    ? undefined
                    : this.awards.map((val: AwardRecipient) => val.toJSON()),
            teams:
                    !teamsIsArr || (teamsIsArr && this.matches.length === 0)
                    ? undefined
                    : this.teams.map((val: EventParticipant) => val.toJSON()),
            alliances:
                    !alliancesIsArr || (alliancesIsArr && this.matches.length === 0)
                    ? undefined
                    : this.alliances.map((val: Alliance) => val.toJSON()),
            insights:
                    !insightsIsArr || (insightsIsArr && this.matches.length === 0)
                    ? undefined
                    : this.insights.map((val: GameSpecificInsights) =>
                          val ? val.toJSON() : null
                      ),
        };
    }

    fromJSON(json: any): Event {
        const event: Event = new Event();
        event.eventKey = json.event_key;
        event.seasonKey = json.season_key;
        event.regionKey = json.region_key;
        event.leagueKey = json.league_key;
        event.eventCode = json.event_code;
        event.eventRegionNumber = parseInt(json.event_region_number, 10);
        event.divisionKey = json.division_key;
        event.eventTypeKey = enumerate(json.event_type_key);
        event.firstEventCode = json.first_event_code;
        event.eventName = json.event_name;
        event.divisionName = json.division_name;
        event.startDate = json.start_date;
        event.endDate = json.end_date;
        event.weekKey = json.week_key;
        event.city = json.city;
        event.stateProv = json.state_prov;
        event.country = json.country;
        event.venue = json.venue;
        event.website = json.website;
        event.timeZone = json.time_zone;
        event.isActive = json.is_active;
        event.isPublic = json.is_public;
        event.allianceCount = parseInt(json.alliance_count, 10);
        event.fieldCount = parseInt(json.field_count, 10);
        event.advanceSpots = parseInt(json.advance_spots, 10);
        event.advanceEvent = json.advance_event;
        event.dataSource = numberToDataSource(json.data_source);
        event.teamCount =
            json.team_count && parseInt(json.team_count, 10) > -1
                ? parseInt(json.team_count, 10)
                : -1;
        event.matchCount =
            json.match_count && parseInt(json.match_count, 10) > -1
                ? parseInt(json.match_count, 10)
                : -1;
        event.matches = json.matches
            ? json.matches.map((val: any) => new Match().fromJSON(val))
            : [];
        event.rankings = json.rankings
            ? json.rankings.map((val: any) => new Ranking().fromJSON(val))
            : [];
        event.awards = json.awards
            ? json.awards.map((val: any) => new AwardRecipient().fromJSON(val))
            : [];
        event.teams = json.teams
            ? json.teams.map((val: any) => new EventParticipant().fromJSON(val))
            : [];
        event.alliances = json.alliances
            ? json.alliances.map((val: any) => new Alliance().fromJSON(val))
            : [];
        event.insights = json.insights
            ? json.insights.map((val: any) => {
                  console.log(val);
                  return getInsightsType(event.seasonKey).fromJSON(val);
              })
            : [];
        return event;
    }

    get eventKey(): string {
        return this._eventKey;
    }

    set eventKey(value: string) {
        this._eventKey = value;
    }

    get seasonKey(): string {
        return this._seasonKey;
    }

    set seasonKey(value: string) {
        this._seasonKey = value;
    }

    get regionKey(): string {
        return this._regionKey;
    }

    set regionKey(value: string) {
        this._regionKey = value;
    }

    get leagueKey(): string | null {
        return this._leagueKey;
    }

    set leagueKey(value: string | null) {
        this._leagueKey = value;
    }

    get eventCode(): string {
        return this._eventCode;
    }

    set eventCode(value: string) {
        this._eventCode = value;
    }

    get eventTypeKey(): EventType {
        return this._eventTypeKey;
    }

    set eventTypeKey(value: EventType) {
        this._eventTypeKey = value;
    }

    get eventRegionNumber(): number {
        return this._eventRegionNumber;
    }

    set eventRegionNumber(value: number) {
        this._eventRegionNumber = value;
    }

    get firstEventCode(): string {
        return this._firstEventCode;
    }

    set firstEventCode(value: string) {
        this._firstEventCode = value;
    }

    get divisionKey(): number {
        return this._divisionKey;
    }

    set divisionKey(value: number) {
        this._divisionKey = value;
    }

    get divisionName(): string | null {
        return this._divisionName;
    }

    set divisionName(value: string | null) {
        this._divisionName = value;
    }

    get eventName(): string {
        return this._eventName;
    }

    set eventName(value: string) {
        this._eventName = value;
    }

    get startDate(): string {
        return this._startDate;
    }

    set startDate(value: string) {
        this._startDate = value;
    }

    get endDate(): string {
        return this._endDate;
    }

    set endDate(value: string) {
        this._endDate = value;
    }

    get weekKey(): string {
        return this._weekKey;
    }

    set weekKey(value: string) {
        this._weekKey = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get stateProv(): string {
        return this._stateProv;
    }

    set stateProv(value: string) {
        this._stateProv = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get venue(): string {
        return this._venue;
    }

    set venue(value: string) {
        this._venue = value;
    }

    get website(): string {
        return this._website;
    }

    set website(value: string) {
        this._website = value;
    }

    get timeZone(): string {
        return this._timeZone;
    }

    set timeZone(value: string) {
        this._timeZone = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    get isPublic(): boolean {
        return this._isPublic;
    }

    set isPublic(value: boolean) {
        this._isPublic = value;
    }

    get allianceCount(): number {
        return this._allianceCount;
    }

    set allianceCount(value: number) {
        this._allianceCount = value;
    }

    get fieldCount(): number {
        return this._fieldCount;
    }

    set fieldCount(value: number) {
        this._fieldCount = value;
    }

    get advanceSpots(): number {
        return this._advanceSpots;
    }

    set advanceSpots(value: number) {
        this._advanceSpots = value;
    }

    get advanceEvent(): string {
        return this._advanceEvent;
    }

    set advanceEvent(value: string) {
        this._advanceEvent = value;
    }

    get teamCount(): number {
        return this._teamCount;
    }

    set teamCount(value: number) {
        this._teamCount = value;
    }

    get matchCount(): number {
        return this._matchCount;
    }

    set matchCount(value: number) {
        this._matchCount = value;
    }

    get matches(): Match[] {
        return this._matches;
    }

    set matches(value: Match[]) {
        this._matches = value;
    }

    get rankings(): Ranking[] {
        return this._rankings;
    }

    set rankings(value: Ranking[]) {
        this._rankings = value;
    }

    get awards(): AwardRecipient[] {
        return this._awards;
    }

    set awards(value: AwardRecipient[]) {
        this._awards = value;
    }

    get teams(): EventParticipant[] {
        return this._teams;
    }

    set teams(value: EventParticipant[]) {
        this._teams = value;
    }

    get alliances(): Alliance[] {
        return this._alliances;
    }

    set alliances(value: Alliance[]) {
        this._alliances = value;
    }

    get dataSource(): DataSource {
        return this._dataSource;
    }

    set dataSource(value: DataSource) {
        this._dataSource = value;
    }

    get insights(): GameSpecificInsights[] {
        return this._insights;
    }

    set insights(value: GameSpecificInsights[]) {
        this._insights = value;
    }

    get fullEventName(): string {
        return this._divisionName
            ? this._eventName + " - " + this._divisionName + " Division"
            : this._eventName;
    }

    getDateString(breakable: boolean = true): string {
        // `\u00A0` is no-break space
        const formatSpaces = (str: string) =>
            breakable ? str : str.replace(/ /g, "\u00a0");
        const startDate = DateTime.fromISO(this.startDate);
        const endDate = DateTime.fromISO(this.endDate);

        const endDateStr = endDate.toFormat("LLL d, yyyy");
        if (this.startDate !== this.endDate) {
            const startDateStr = startDate.toFormat("LLL d");
            return `${formatSpaces(startDateStr)} to ${formatSpaces(
                endDateStr
            )}`;
        } else {
            return formatSpaces(endDateStr);
        }
    }

    getLocation(venue: boolean = true): string {
        return (
            (this.venue && venue ? this.venue + ", " : "") +
            this.city +
            ", " +
            (this.stateProv ? this.stateProv + ", " : "") +
            this.country
        );
    }
}
