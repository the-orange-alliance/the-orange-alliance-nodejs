// import axios from "axios";
import fetch from "cross-fetch";
import * as qs from "qs";
import HTTPHeaders from "./util/HTTPHeaders";

import {
    Season,
    Region,
    League,
    EventLiveStream,
    Event,
    Match,
    MatchDetails,
    MatchParticipant,
    Ranking,
    Insights,
    Alliance,
    Media,
    AwardRecipient,
    EventParticipant,
    Team,
    WebAnnouncement,
    LeagueDiv,
} from "./models";
import { ISerializable } from "./models/ISerializable";

const api_endpoint = "https://theorangealliance.org/api";

export class API {
    private _api_key: string;
    private _app_name: string;
    private _proxy?: string = undefined;

    /**
     *
     * @param api_key Api key from myTOA
     * @param application_name Set an application name that your requests will use.
     */
    constructor(api_key: string, application_name: string) {
        this._api_key = api_key;
        this._app_name = application_name;
    }

    headers(): HTTPHeaders {
        return {
            "Content-Type": "application/json",
            "X-TOA-Key": this._api_key,
            "X-Application-Origin": this._app_name,
        };
    }

    /**
     * Make a web request to the api endpoint specified. Will return the text gotten from the endpoint.
     * @param url the api endpoint to call
     * @param query any query parameters that should be sent with the request
     */
    private async fetch(url: string, query?: any): Promise<string> {
        if (url.charAt(0) !== "/") {
            // If there is no leading slash, add one
            url = "/" + url;
        }

        let query_params: string = qs.stringify(query);
        if (query_params.length !== 0) {
            query_params = "?" + query_params;
        }

        let data = fetch(api_endpoint + url + query_params, {
            headers: this.headers(),
        })
            .then((res: any) => res.text())
            .catch((err: any) => {
                throw new Error(err);
            });
        return await data;
    }

    /**
     * Serializes a string json object into a javascript object with the specified type.
     * @param c Type of data to convert to
     * @param response_data Data as a string json object
     */
    private jsonToObj<T extends ISerializable>(
        c: new () => T,
        response_data: string
    ): T {
        let res: any = JSON.parse(response_data);
        let x = new c().fromJSON(res) as T;
        return x;
    }

    /**
     * Serializes a string json array into an array of javascript objects with the specified type.
     * @param c Type of data to convert to
     * @param response_data Data as a string json object
     */
    private arrToObj<T extends ISerializable>(
        c: new () => T,
        response_data: string
    ): T[] {
        let res: [any] = JSON.parse(response_data);
        let x = res.map((value) => new c().fromJSON(value) as T);
        return x;
    }

    /**
     * Returns the version of the API.
     */
    async getAPI(): Promise<string> {
        let res = await this.fetch("/");
        let version: { version: string } = JSON.parse(res);
        return version.version;
    }
    /**
     * Returns all API docs
     */
    async getDocs(): Promise<string> {
        console.warn("This method isn't implemented in the API yet.");
        return "";
    }
    /**
     * Returns all GET route docs for the API
     */
    async getDocsGet(): Promise<string> {
        console.warn("This method isn't implemented in the API yet.");
        return "";
    }
    /**
     * Returns all POST route docs for the API
     */
    async getDocsPost(): Promise<string> {
        console.warn("This method isn't implemented in the API yet.");
        return "";
    }
    /**
     * Returns all PUT route docs for the API
     */
    async getDocsPut(): Promise<string> {
        console.warn("This method isn't implemented in the API yet.");
        return "";
    }
    /**
     * Returns all TOA models used in the API
     */
    async getDocsModels(): Promise<string> {
        console.warn("This method isn't implemented in the API yet.");
        return "";
    }
    /**
     * Returns all FTC seasons
     * @returns All FTC seasons
     */
    async getSeasons(): Promise<Season[]> {
        return this.arrToObj(Season, await this.fetch("/seasons"));
    }
    /**
     * Returns all FTC regions
     * @returns All FTC regions
     */
    async getRegions(): Promise<Region[]> {
        return this.arrToObj(Region, await this.fetch("/regions"));
    }
    /**
     * This function has no implementation. Just use the `EventType` enum instead.
     */
    async getEventTypes(): Promise<string> {
        return "This function has no implementation. Just use the EventType enum instead.";
    }
    /**
     * Returns all FTC leagues
     * @param region_key The key of the region to search in
     * @param season_key The key of the season to search in
     * @returns All FTC leagues matching query
     */
    async getLeagues(
        region_key?: string,
        season_key?: string
    ): Promise<League[]> {
        return this.arrToObj(
            League,
            await this.fetch("/leagues", { region_key, season_key })
        );
    }
    /**
     * Returns all active livestreams
     */
    async getStreams(): Promise<EventLiveStream[]> {
        return this.arrToObj(EventLiveStream, await this.fetch("/streams"));
    }

    // /api/event
    /**
     * Returns all based upon the given query
     * @param league_key The key of the league to query the database by
     * @param region_key The key of the region to query the database by
     * @param season_key The key of the season to query the database by
     * @param type The event type to query the database by
     * @param start_date Start date of events to search
     * @param start_date_query 'equals' => events where start_date equals start_date; 'before' => events where start_date is before given date; 'after' => events where start_date is after given date
     * @param end_date End date of events to search
     * @param between To be used to search events between start_date and end_date, not to be used in conjunction with start_date_query
     * @param includeMatchCount To include match count in the response
     * @param includeTeamCount To include team count in the response
     * @returns Array of events matching the query
     */
    async getEvents({
        league_key,
        region_key,
        season_key,
        type,
        start_date,
        end_date,
        start_date_query,
        between,
        includeMatchCount,
        includeTeamCount,
    }: {
        league_key?: string;
        region_key?: string;
        season_key?: string;
        type?: string;
        start_date?: string;
        end_date?: string;
        start_date_query?: 'equals' | 'before' | 'after';
        between?: boolean;
        includeMatchCount?: boolean;
        includeTeamCount?: boolean;
    } = {}): Promise<Event[]> {
        return this.arrToObj(
            Event,
            await this.fetch("/event/", {
                league_key: league_key,
                region_key: region_key,
                season_key: season_key,
                type: type,
                start_date: start_date,
                start_date_query: start_date_query,
                end_date: end_date,
                between: between,
                includeMatchCount: includeMatchCount,
                includeTeamCount: includeTeamCount,
            })
        );
    }
    /**
     * Returns the amount of events in the database
     * @returns Number of events
     */
    async getEventCount(
        options: {
            league_key?: string;
            region_key?: string;
            season_key?: string;
            type?: string;
        } = {}
    ): Promise<number> {
        let x = await this.fetch("/event/size", { ...options });
        let y: { result: number } = JSON.parse(x);
        return y.result;
    }
    /**
     * Returns event information on a specific event
     * @param eventKey the TOA event key to specify an event
     * @returns Specified event
     */
    async getEvent(eventKey: string): Promise<Event> {
        return this.arrToObj(Event, await this.fetch(`/event/${eventKey}`))[0];
    }
    /**
     * Returns all matches for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of matches
     */
    async getEventMatches(eventKey: string): Promise<Match[]> {
        return this.arrToObj(
            Match,
            await this.fetch(`/event/${eventKey}/matches`)
        );
    }
    /**
     * Returns all match details for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of match details
     */
    async getEventMatchDetails(eventKey: string): Promise<MatchDetails[]> {
        return this.arrToObj(
            MatchDetails,
            await this.fetch(`/event/${eventKey}/matches/details`)
        );
    }
    /**
     * Returns all match participants for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of match participants
     */
    async getEventMatchParticipants(
        eventKey: string
    ): Promise<MatchParticipant[]> {
        return this.arrToObj(
            MatchParticipant,
            await this.fetch(`/event/${eventKey}/matches/participants`)
        );
    }
    /**
     * Returns all rankings for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of rankings for all teams at the event
     */
    async getEventRankings(eventKey: string): Promise<Ranking[]> {
        return this.arrToObj(
            Ranking,
            await this.fetch(`/event/${eventKey}/rankings`)
        );
    }
    /**
     * Returns all insights for that event.
     * @param eventKey the TOA event key to specify an event
     * @param type the level of the event to query by
     * @returns Array of event insights
     */
    async getEventInsights(
        eventKey: string,
        type?: "quals" | "elims"
    ): Promise<Insights[]> {
        return this.arrToObj(
            Insights,
            await this.fetch(`/event/${eventKey}/insights`, { type })
        );
    }
    /**
     * Returns all alliances for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of event alliances
     */
    async getEventAlliances(eventKey: string): Promise<Alliance[]> {
        return this.arrToObj(
            Alliance,
            await this.fetch(`/event/${eventKey}/alliances`)
        );
    }
    /**
     * Returns all live streams for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of live streams
     */
    async getEventStreams(eventKey: string): Promise<EventLiveStream[]> {
        return this.arrToObj(
            EventLiveStream,
            await this.fetch(`/event/${eventKey}/streams`)
        );
    }
    /**
     * Returns all teams participating in that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of event participants
     */
    async getEventTeams(eventKey: string): Promise<EventParticipant[]> {
        return this.arrToObj(
            EventParticipant,
            await this.fetch(`/event/${eventKey}/teams`)
        );
    }
    /**
     * Returns all awards given for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of awards
     */
    async getEventAwards(eventKey: string): Promise<AwardRecipient[]> {
        return this.arrToObj(
            AwardRecipient,
            await this.fetch(`/event/${eventKey}/awards`)
        );
    }
    /**
     * Returns all media uploaded for that event.
     * @param eventKey the TOA event key to specify an event
     * @returns Array of media
     */
    async getEventMedia(eventKey: string): Promise<Media[]> {
        return this.arrToObj(
            Media,
            await this.fetch(`/event/${eventKey}/media`)
        );
    }

    // /api/match
    /**
     * Returns list of matches from the TOA database
     * @param seasonKey the TOA season key
     * @param start place in the database to start
     * @param count number of matches to be returned (max 500)
     * @returns Array of matches
     */
    async getSeasonMatches(seasonKey: string, start: number = 0, count = 500) {
        return this.arrToObj(
            Match,
            await this.fetch(`/match/all/${seasonKey}`, {
                start: start,
                count: count,
            })
        );
    }
    /**
     * Returns the amount of matches in the current season database
     * @returns number of matches
     */
    async getSeasonMatchCount(
        options: { season_key?: string; played?: boolean } = {}
    ): Promise<number> {
        let x = await this.fetch("/match/size", { ...options });
        let y: { result: number } = JSON.parse(x);
        return y.result;
    }
    /**
     * Returns the matches with the highest scores based on the query.
     * @param type quals, elims, or all matches
     * @returns Match with the high score
     */
    async getHighScoreMatch(
        type: "quals" | "elims" | "all" | "single_team",
        options: {
            seasonKey?: string;
            singleTeam?: boolean;
            penalty?: boolean;
        } = {}
    ): Promise<Match> {
        return this.arrToObj(
            Match,
            await this.fetch("/match/high-scores", { type: type, ...options })
        )[0];
    }
    /**
     * Returns match information on the specific match.
     * @param matchKey TOA key of the match
     * @returns Specified match
     */
    async getMatch(matchKey: string): Promise<Match> {
        return this.arrToObj(Match, await this.fetch(`/match/${matchKey}`))[0];
    }
    /**
     * Returns match detail information on the specific match.
     * @param matchKey TOA key of the match
     * @returns Specified match details
     */
    async getMatchDetails(matchKey: string): Promise<MatchDetails> {
        return this.arrToObj(
            MatchDetails,
            await this.fetch(`/match/${matchKey}/details`)
        )[0];
    }
    /**
     * Returns match participant information on the specific match.
     * @param matchKey TOA key of the match
     * @returns Teams in the specified match
     */
    async getMatchParticipants(matchKey: string): Promise<MatchParticipant[]> {
        return this.arrToObj(
            MatchParticipant,
            await this.fetch(`/match/${matchKey}/participants`)
        );
    }

    // /api/team
    /**
     * Returns all teams.
     * @todo Add queries
     * @returns Array of teams
     */
    async getTeams(
        options: {
            league_key?: string;
            region_key?: string;
            last_active?: string;
            country?: string;
            start?: number;
            count?: number;
        } = {}
    ): Promise<Team[]> {
        return this.arrToObj(Team, await this.fetch(`/team`, { ...options }));
    }
    /**
     * Returns the amount of teams in the database
     * @returns number of teams
     */
    async getTeamCount(
        options: {
            league_key?: string;
            region_key?: string;
            last_active?: string;
            country?: string;
        } = {}
    ): Promise<number> {
        let x = await this.fetch("/team/size", { ...options });
        let y: { result: number } = JSON.parse(x);
        return y.result;
    }
    /**
     * Returns match detail information on the specific team
     * @param teamKey team number
     * @returns individual team
     */
    async getTeam(teamKey: string): Promise<Team> {
        return this.arrToObj(Team, await this.fetch(`/team/${teamKey}`))[0];
    }
    /**
     * Returns the WLT record of the team
     * @param teamKey team number
     * @returns object with wins, losses, and ties
     */
    async getTeamWLT(
        teamKey: string,
        options: { season_key?: string } = {}
    ): Promise<{ wins: number; losses: number; ties: number }> {
        return JSON.parse(
            await this.fetch(`/team/${teamKey}/wlt`, { ...options })
        )[0];
    }
    /**
     * Returns all events a team participated in for a given season.
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns Array of event participant objects
     */
    async getTeamEvents(
        teamKey: string,
        seasonKey: string
    ): Promise<EventParticipant[]> {
        return this.arrToObj(
            EventParticipant,
            await this.fetch(`/team/${teamKey}/events/${seasonKey}`)
        );
    }
    /**
     * Returns all matches a team participated in for a given season
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns Array of all matches a team participated in
     */
    async getTeamMatches(
        teamKey: string,
        seasonKey: string
    ): Promise<MatchParticipant[]> {
        return this.arrToObj(
            MatchParticipant,
            await this.fetch(`/team/${teamKey}/matches/${seasonKey}`)
        );
    }
    /**
     * Returns all awards a team received in for a given season.
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns Array of awards given to a team
     */
    async getTeamAwards(
        teamKey: string,
        seasonKey: string
    ): Promise<AwardRecipient[]> {
        return this.arrToObj(
            AwardRecipient,
            await this.fetch(`/team/${teamKey}/awards/${seasonKey}`)
        );
    }
    /**
     * Returns all final rankings of a team for a given season
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns Array of ranking objects
     */
    async getTeamRankings(
        teamKey: string,
        seasonKey: string
    ): Promise<Ranking[]> {
        return this.arrToObj(
            Ranking,
            await this.fetch(`/team/${teamKey}/results/${seasonKey}`)
        );
    }
    /**
     * Returns all media uploaded for a team for a given season
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns all media
     */
    async getTeamMedia(teamKey: string, seasonKey: string): Promise<Media[]> {
        return this.arrToObj(
            Media,
            await this.fetch(`/team/${teamKey}/media/${seasonKey}`)
        );
    }
    /**
     * Returns all teams, as they were in TIMS at the end of the requested season.
     * @param seasonKey the TOA season key
     * @returns all teams
     */
    async getSeasonTeams(seasonKey: string): Promise<Team[]> {
        return this.arrToObj(
            Team,
            await this.fetch(`/team/history/${seasonKey}`)
        );
    }
    /**
     * Returns a team, as it was in TIMS at the end of the requested season
     * @param teamKey team number
     * @param seasonKey the TOA season key
     * @returns the team specified
     */
    async getSeasonTeam(
        teamKey: string,
        seasonKey: string,
        options: {
            league_key?: string;
            region_key?: string;
            last_active?: string;
            country?: string;
            start?: number;
            count?: number;
        } = {}
    ): Promise<Team> {
        return this.arrToObj(
            Team,
            await this.fetch(`/team/history/${seasonKey}/${teamKey}`, {
                ...options,
            })
        )[0];
    }

    // /api/web
    /**
     * Returns all live web announcements
     * @returns all live web announcements
     */
    async getWebAnnouncements(): Promise<WebAnnouncement[]> {
        return this.arrToObj(
            WebAnnouncement,
            await this.fetch(`/web/announcements`)
        );
    }

    // /api/league
    /**
     * Returns information on the given league
     * @param leagueKey the TOA league key
     * @returns league information
     */
    async getLeague(leagueKey: string): Promise<League> {
        return this.arrToObj(
            League,
            await this.fetch(`/league/${leagueKey}`)
        )[0];
    }
    /**
     * Returns all league divisions
     * @returns all league divisions
     */
    async getLeagueDivisions(): Promise<LeagueDiv[]> {
        return this.arrToObj(LeagueDiv, await this.fetch(`/league/divisions`));
    }
}
