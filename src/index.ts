// import axios from "axios";
import fetch from "node-fetch";
import * as qs from "qs";
import HTTPHeaders from "./util/HTTPHeaders";
import HttpsProxy from "./util/HttpsProxy";
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
  LeagueDiv
} from "./models";
import { ISerializable } from "./models/ISerializable";

const api_endpoint = "https://theorangealliance.org/api";

class API {
  private _api_key: string;
  private _app_name: string;
  private _proxy: HttpsProxy | undefined;

  constructor(api_key: string, application_name: string, proxy?: HttpsProxy) {
    this._api_key = api_key;
    this._app_name = application_name;
    this._proxy = proxy;
  }

  headers(): HTTPHeaders {
    return {
      "Content-Type": "application/json",
      "X-TOA-Key": this._api_key,
      "X-Application-Origin": this._app_name
    };
  }

  async fetch(url: string, query?: any): Promise<string> {
    if (url.charAt(0) !== "/") {
      // If there is no leading slash, add one
      url = "/" + url;
    }

    let query_params: string = qs.stringify(query);
    if (query_params.length !== 0) {
      query_params = "?" + query_params;
    }

    let data = fetch(api_endpoint + url + query_params, {
      headers: this.headers()
    })
      .then(res => res.text())
      .catch(err => {
        throw new Error(err);
      });
    return await data;

    // return await axios.get(api_endpoint + url, {
    //   headers: this.headers(),
    //   proxy: this._proxy,
    //   params: query
    // });
  }

  private jsonToObj<T extends ISerializable>(
    c: new () => T,
    response_data: string
  ): T {
    let res: any = JSON.parse(response_data);
    let x = new c().fromJSON(res) as T;
    return x;
  }

  private arrToObj<T extends ISerializable>(
    c: new () => T,
    response_data: string
  ): T[] {
    let res: [any] = JSON.parse(response_data);
    let x = res.map(value => new c().fromJSON(res) as T);
    return x;
  }

  async getAPI(): Promise<string> {
    let res = await this.fetch("/");
    let version: { version: string } = JSON.parse(res);
    return version.version;
  }
  async getDocs(): Promise<string> {
    console.warn("This method isn't implemented in the API yet.");
    return "";
  }
  async getDocsGet(): Promise<string> {
    console.warn("This method isn't implemented in the API yet.");
    return "";
  }
  async getDocsPost(): Promise<string> {
    console.warn("This method isn't implemented in the API yet.");
    return "";
  }
  async getDocsPut(): Promise<string> {
    console.warn("This method isn't implemented in the API yet.");
    return "";
  }
  async getDocsModels(): Promise<string> {
    console.warn("This method isn't implemented in the API yet.");
    return "";
  }
  async getSeasons(): Promise<Season[]> {
    return this.arrToObj(Season, await this.fetch("/seasons"));
  }
  async getRegions(): Promise<Region[]> {
    return this.arrToObj(Region, await this.fetch("/regions"));
  }
  async getLeagues(): Promise<League[]> {
    return this.arrToObj(League, await this.fetch("/leagues"));
  }
  async getStreams(): Promise<EventLiveStream[]> {
    return this.arrToObj(EventLiveStream, await this.fetch("/streams"));
  }

  // /api/event
  async getEvents({
    league_key,
    region_key,
    season_key,
    type
  }: {
    league_key?: string;
    region_key?: string;
    season_key?: string;
    type?: string;
  } = {}): Promise<Event[]> {
    return this.arrToObj(
      Event,
      await this.fetch("/event/", {
        league_key: league_key,
        region_key: region_key,
        season_key: season_key,
        type: type
      })
    );
  }
  async getEventCount(): Promise<number> {
    let x = await this.fetch("/event/size");
    let y: { result: number } = JSON.parse(x);
    return y.result;
  }
  async getEvent(eventKey: string): Promise<Event> {
    return this.arrToObj(Event, await this.fetch(`/event/${eventKey}`))[0];
  }
  async getEventMatches(eventKey: string): Promise<Match[]> {
    return this.arrToObj(Match, await this.fetch(`/event/${eventKey}/matches`));
  }
  async getEventMatchDetails(eventKey: string): Promise<MatchDetails[]> {
    return this.arrToObj(
      MatchDetails,
      await this.fetch(`/event/${eventKey}/matches/details`)
    );
  }
  async getEventMatchParticipants(
    eventKey: string
  ): Promise<MatchParticipant[]> {
    return this.arrToObj(
      MatchParticipant,
      await this.fetch(`/event/${eventKey}/matches/participants`)
    );
  }
  async getEventRankings(eventKey: string): Promise<Ranking[]> {
    return this.arrToObj(
      Ranking,
      await this.fetch(`/event/${eventKey}/rankings`)
    );
  }
  async getEventInsights(eventKey: string): Promise<Insights[]> {
    return this.arrToObj(
      Insights,
      await this.fetch(`/event/${eventKey}/insights`)
    );
  }
  async getEventAlliances(eventKey: string): Promise<Alliance[]> {
    return this.arrToObj(
      Alliance,
      await this.fetch(`/event/${eventKey}/alliances`)
    );
  }
  async getEventStreams(eventKey: string): Promise<EventLiveStream[]> {
    return this.arrToObj(
      EventLiveStream,
      await this.fetch(`/event/${eventKey}/streams`)
    );
  }
  async getEventTeams(eventKey: string): Promise<EventParticipant[]> {
    return this.arrToObj(
      EventParticipant,
      await this.fetch(`/event/${eventKey}/teams`)
    );
  }
  async getEventAwards(eventKey: string): Promise<AwardRecipient[]> {
    return this.arrToObj(
      AwardRecipient,
      await this.fetch(`/event/${eventKey}/awards`)
    );
  }
  async getEventMedia(eventKey: string): Promise<Media[]> {
    return this.arrToObj(Media, await this.fetch(`/event/${eventKey}/media`));
  }

  // /api/match
  async getSeasonMatches(seasonKey: string, start: number = 0, count = 500) {
    return this.arrToObj(
      Match,
      await this.fetch(`/match/all/${seasonKey}`, {
        start: start,
        count: count
      })
    );
  }
  async getSeasonMatchCount(): Promise<number> {
    let x = await this.fetch("/match/size");
    let y: { result: number } = JSON.parse(x);
    return y.result;
  }
  async getHighScoreMatch(type: "quals" | "elims" | "all"): Promise<Match> {
    return this.arrToObj(
      Match,
      await this.fetch("/match/high-scores", { type: type })
    )[0];
  }
  async getMatch(matchKey: string): Promise<Match> {
    return this.arrToObj(Match, await this.fetch(`/match/${matchKey}`))[0];
  }
  async getMatchDetails(matchKey: string): Promise<MatchDetails> {
    return this.arrToObj(
      MatchDetails,
      await this.fetch(`/match/${matchKey}/details`)
    )[0];
  }
  async getMatchParticipants(matchKey: string): Promise<MatchParticipant[]> {
    return this.arrToObj(
      MatchParticipant,
      await this.fetch(`/match/${matchKey}/participants`)
    );
  }

  // /api/team
  async getTeams(): Promise<Team[]> {
    return this.arrToObj(Team, await this.fetch(`/team`));
  }
  async getTeamCount(): Promise<number> {
    let x = await this.fetch("/team/size");
    let y: { result: number } = JSON.parse(x);
    return y.result;
  }
  async getTeam(teamKey: string): Promise<Team> {
    return this.arrToObj(Team, await this.fetch(`/team/${teamKey}`))[0];
  }
  async getTeamWLT(teamKey: string): Promise<Team> {
    return this.arrToObj(Team, await this.fetch(`/team/${teamKey}/wlt`))[0];
  }
  async getTeamEvents(
    teamKey: string,
    seasonKey: string
  ): Promise<EventParticipant[]> {
    return this.arrToObj(
      EventParticipant,
      await this.fetch(`/team/${teamKey}/events/${seasonKey}`)
    );
  }
  async getTeamAwards(
    teamKey: string,
    seasonKey: string
  ): Promise<AwardRecipient[]> {
    return this.arrToObj(
      AwardRecipient,
      await this.fetch(`/team/${teamKey}/awards/${seasonKey}`)
    );
  }
  async getTeamRankings(
    teamKey: string,
    seasonKey: string
  ): Promise<Ranking[]> {
    return this.arrToObj(
      Ranking,
      await this.fetch(`/team/${teamKey}/results/${seasonKey}`)
    );
  }
  async getTeamMedia(teamKey: string, seasonKey: string): Promise<Media[]> {
    return this.arrToObj(
      Media,
      await this.fetch(`/team/${teamKey}/media/${seasonKey}`)
    );
  }
  async getSeasonTeams(seasonKey: string): Promise<Team[]> {
    return this.arrToObj(Team, await this.fetch(`/team/history/${seasonKey}`));
  }
  async getSeasonTeam(teamKey: string, seasonKey: string): Promise<Team[]> {
    return this.arrToObj(
      Team,
      await this.fetch(`/team/history/${seasonKey}/${teamKey}`)
    );
  }

  // /api/web
  async getWebAnnouncements(): Promise<WebAnnouncement[]> {
    return this.arrToObj(
      WebAnnouncement,
      await this.fetch(`/web/announcements`)
    );
  }

  // /api/league
  async getLeague(leagueKey: string): Promise<League> {
    return this.arrToObj(League, await this.fetch(`/league/${leagueKey}`))[0];
  }
  async getLeagueDivisions(): Promise<LeagueDiv[]> {
    return this.arrToObj(LeagueDiv, await this.fetch(`/league/divisions`));
  }
}

export default API;
