# graphql-apollo-node-ts-server

Apollo server with typescript and graphql-import

The BFF (Backend for Frontend) written in NodeJS.
It supplies the Front-End with a GraphQL server to provide all data the FE.

## Installation

**Prerequisite**: Install Node 12 or later (check by running `node -v`).

Next, install all dependencies:

```
npm install
```

Every time the dependencies change (ie `package.json` is updated), you'll need to
re-run this command.

## Start Dev Server

To start a dev server, run the following command:

```
yarn | npm start
```

```
yarn | npm server
```

The server will start, and restart automatically when it detects changes, on
[http://localhost:4000](localhost:4000).

## Create a Build

To create a build, run the following command:

```
npm run build
```

This will transpile the TypeScript application and create a build in the
`./dist` directory. To start your generated build, run:

```
node ./dist
```

## GraphQL Schema

1. Make your desired changes in `./schema.graphql`.
2. Run `npm run generate` to generate TypeScript types. It will automatically.
   update `src/models/types.ts`.
3. Edit your resolvers in `src/resolvers/`.

## Services

Services handle fetching data from the REST endpoints
