import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';

import resolvers from './resolvers';

const typeDefs = gql(fs.readFileSync('src/schema.graphql').toString());

const app = express();

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { req, res };
  },
  tracing: true
});

graphqlServer.applyMiddleware({ app });

app.listen(5000, () => {
  console.log('Server started on port: 5000');
});