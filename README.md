# Spaced App
Spaced takes advantage of the [spaced repetition technique](https://en.wikipedia.org/wiki/Spaced_repetition) by allowing the user to set multiple dates in google calendar for a single learning or review event. They will then, if they choose, receive a reminder before each date.

## Live App
Check out the live app [here](http://spaced.surge.sh).

## Tools used:
* ES6 \(through Babel\)
* Webpack
* React
* React-router
* Redux
* Material UI
* Bootstrap 4
* Babel
* Moment
* uuid

## Instructions
A Google oauth client ID is needed for the app to work. It can either be set in the environments.json file or set as the environment variable `GOOGLE_OAUTH_CLIENT_ID` before runtime.
```bash
# Install dependencies
npm install

# Start app in development server
npm start

# Build app into /dist directory
npm run build

# Run server using production files in /dist
npm run server.prod
```
