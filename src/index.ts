import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { importSchema } from 'graphql-import';
import { formatError } from './util/format-error';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';
require('dotenv').config();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: importSchema('./src/schema.graphql'),
    resolvers,
    formatError: formatError,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground()
    ]
  });

  await server.start();

  const app = express();

  // Additional middleware can be mounted at this point to run before Apollo.

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: '/graphql' });

  // Modified server startup
  return app.listen(process.env.PORT_NUMBER);
}

startApolloServer()
  .then(__ =>
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT_NUMBER}/graphql`
    )
  )
  .catch(error => {
    console.error(error);
  });
