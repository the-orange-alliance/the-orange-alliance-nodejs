# The Orange Alliance Node.js

A Node.js wrapper for The Orange Alliance API

[![Travis](https://img.shields.io/travis/com/orange-alliance/the-orange-alliance-nodejs)](https://travis-ci.com/github/orange-alliance/the-orange-alliance-nodejs)
[![Version](https://img.shields.io/npm/v/@the-orange-alliance/api?label=Version)](https://www.npmjs.com/package/@the-orange-alliance/api)
[![GitHub issues](https://img.shields.io/github/issues/orange-alliance/the-orange-alliance-nodejs)](https://github.com/orange-alliance/the-orange-alliance-nodejs/issues)

> Note: Only supports the GET API currently.


## Install
```
$ npm install @the-orange-alliance/api
```

## Usage

Using the API is simple. Just create an instance of the API class, passing in your auth key and the name of your app.
From there, call any of the methods to retrieve the data from the API.<br/>
All the requests will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) of the model.

```ts
import { API } from "@the-orange-alliance/api";
// OR const { API } = require("@the-orange-alliance/api")

const toa = new API("YOUR_AUTH_KEY_HERE", "Name your app");

const event = await toa.getEvent("1920-FIM-KFQ");
console.log(event.eventName);

// OR

toa.getEvent("1920-FIM-KFQ").then(event => {
  console.log(event.eventName);
});
```

#### API Key
Generate your API Key on your [myTOA Account Dashboard](https://theorangealliance.org/account).<br/>
Use that key in the initialization for your API object.

## API

#### toa.getAPI(): ``Promise<string>``
#### toa.getSeasons(): ``Promise<Season[]>``
#### toa.getRegions(): ``Promise<Region[]>``
#### toa.getStreams(): ``Promise<EventLiveStream[]>``

#### toa.getEvents({league_key?, region_key?, season_key?, type?}): ``Promise<Event[]>``
#### toa.getEventCount(): ``Promise<number>``
#### toa.getEvent(eventKey): ``Promise<Event>``
#### toa.getEventMatches(eventKey): ``Promise<Match[]>``
#### toa.getEventMatchDetails(eventKey): ``Promise<MatchDetails[]>``
#### toa.getEventMatchParticipants(eventKey): ``Promise<MatchParticipant[]>``
#### toa.getEventRankings(eventKey): ``Promise<Ranking[]>``
#### toa.getEventInsights(eventKey, type?): ``Promise<Insights[]>``
#### toa.getEventAlliances(eventKey): ``Promise<Alliance[]>``
#### toa.getEventStreams(eventKey): ``Promise<EventLiveStream[]>``
#### toa.getEventTeams(eventKey): ``Promise<EventParticipant[]>``
#### toa.getEventAwards(eventKey): ``Promise<AwardRecipient[]>``
#### toa.getEventMedia(eventKey): ``Promise<Media[]>``

#### toa.getSeasonMatches(seasonKey, start?, count?): ``Promise<Match[]>``
#### toa.getSeasonMatchCount(): ``Promise<number>``
#### toa.getHighScoreMatch(type: quals|elims|all): ``Promise<Match>``
#### toa.getMatch(matchKey): ``Promise<Match>``
#### toa.getMatchDetails(matchKey): ``Promise<MatchDetails>``
#### toa.getMatchParticipants(matchKey): ``Promise<MatchParticipant[]>``

#### toa.getTeams(): ``Promise<Team[]>``
#### toa.getSeasonTeams(seasonKey): ``Promise<Team[]>``
#### toa.getTeamCount(): ``Promise<number>``
#### toa.getTeam(teamKey): ``Promise<Team>``
#### toa.getSeasonTeam(teamKey, seasonKey): ``Promise<Team[]>``
#### toa.getTeamWLT(teamKey): ``Promise<WLT>``
#### toa.getTeamEvents(teamKey, seasonKey): ``Promise<EventParticipant[]>``
#### toa.getTeamMatches(teamKey, seasonKey): ``Promise<MatchParticipant[]>``
#### toa.getTeamAwards(teamKey, seasonKey): ``Promise<AwardRecipient[]>``
#### toa.getTeamRankings(teamKey, seasonKey): ``Promise<Ranking[]>``
#### toa.getTeamMedia(teamKey, seasonKey): ``Promise<Media[]>``

#### toa.getLeagues(region_key?, season_key?): ``Promise<League[]>``
#### toa.getLeague(getLeague): ``Promise<League>``
#### toa.getLeagueDivisions(): ``Promise<LeagueDiv[]>``
