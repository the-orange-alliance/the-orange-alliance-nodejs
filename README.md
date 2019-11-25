# The Orange Alliance Node.js
The Orange Alliance Library for Node.js
> Note: Only supports the GET api currently.

## Usage

Using the API is simple. Just create an instance of the API class, passing in your auth key and the name of your app.
From there, call any of the methods to retrieve the data from the API.

```ts
import API from 'toa-api';

const api = new API("YOUR_AUTH_KEY_HERE", "Name your app");

// All the requests will return promises of the model.
const event = await api.getEvent('1920-FIM-KFQ');
console.log(event.eventName)

// OR

api.getEvent('1920-FIM-KFQ').then((event) => {
    console.log(event.eventName)
});
```