# OpenShift-React-Universal-Cartidge

OpenShift cartridge to get quickly started with a react, redux, universal cartridge.

## Installation
```
npm install
npm run compile
```

## development
You probably wanna use Hot Module Replacement Here.

```sh
npm run server:dev
```

## Production Test

```sh
npm run compile
npm run server
```

## Actualy Production

```sh
npm run start
```
Note: start.js doesn't run in node cause of ES6 syntax. Just run:
```sh
babel-node ./start.js
```
to test. Openshift node:latest picks it up just fine, without any need for babel. You can also try using the node harmony flag I suppose (for testing ofcourse)
