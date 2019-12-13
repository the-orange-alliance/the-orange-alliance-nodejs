# The Orange Alliance Node.js

The Orange Alliance Library for Node.js

> Note: Only supports the GET api currently.

[![GitHub issues](https://img.shields.io/github/issues/orange-alliance/the-orange-alliance-nodejs?style=for-the-badge)](https://github.com/orange-alliance/the-orange-alliance-nodejs/issues)

## Usage

Using the API is simple. Just create an instance of the API class, passing in your auth key and the name of your app.
From there, call any of the methods to retrieve the data from the API.

```ts
import { API } from "@the-orange-alliance/api";

const api = new API("YOUR_AUTH_KEY_HERE", "Name your app");

// All the requests will return promises of the model.
const event = await api.getEvent("1920-FIM-KFQ");
console.log(event.eventName);

// OR

api.getEvent("1920-FIM-KFQ").then(event => {
  console.log(event.eventName);
});
```

### API KEY

Go to https://theorangealliance.org/account and click the `Generate an API key...` button.
Use that key in the initialization for your API object.
