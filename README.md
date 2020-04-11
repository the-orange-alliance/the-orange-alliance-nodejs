# The Orange Alliance Node.js

A Node.js wrapper for The Orange Alliance API

[![Travis](https://img.shields.io/travis/com/orange-alliance/the-orange-alliance-nodejs)](https://travis-ci.com/github/orange-alliance/the-orange-alliance-nodejs)
[![Version](https://img.shields.io/npm/v/@the-orange-alliance/api?label=Version)](https://www.npmjs.com/package/@the-orange-alliance/api)
[![GitHub issues](https://img.shields.io/github/issues/orange-alliance/the-orange-alliance-nodejs)](https://github.com/orange-alliance/the-orange-alliance-nodejs/issues)

> Note: Only supports the GET api currently.

## Usage

Using the API is simple. Just create an instance of the API class, passing in your auth key and the name of your app.
From there, call any of the methods to retrieve the data from the API.

```ts
import { API } from "@the-orange-alliance/api";
// OR const { API } = require("@the-orange-alliance/api")

const api = new API("YOUR_AUTH_KEY_HERE", "Name your app");

// All the requests will return promises of the model.
const event = await api.getEvent("1920-FIM-KFQ");
console.log(event.eventName);

// OR

api.getEvent("1920-FIM-KFQ").then(event => {
  console.log(event.eventName);
});
```

### API Key
Generate your API Key on your [myTOA Account Dashboard](https://theorangealliance.org/account).<br/>
Use that key in the initialization for your API object.
