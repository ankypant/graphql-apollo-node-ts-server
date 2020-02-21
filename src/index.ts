import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { formatError } from './util/format-error';
const bodyParser = require('body-parser');
const express = require('express');

require('dotenv').config();

import { resolvers } from './resolvers';
const typeDefs = importSchema('./src/schema.graphql');

const portNumber: number = 4000;

const server = new ApolloServer({
  tracing: true,
  typeDefs,
  resolvers,
  formatError: formatError,
  playground: {
    settings: {
      'request.credentials': 'include'
    }
  },
  introspection: true
});

console.log('starting for NODE_ENV', portNumber);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('cookie-parser')());

server.applyMiddleware({ app, path: '/graphql' });

let serverStarted = false;

app.listen({ port: portNumber }, () => {
  console.log(`Apollo Server on http://localhost:${portNumber}/graphql`);
  serverStarted = true;
});

app.get('/infra/healthcheck', (req, res, next) => {
  if (serverStarted) {
    return res.status(200).json({ status: 'UP' });
  } else {
    return res.status(503).json({ status: 'STARTING' });
  }
});
