const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const neo4j = require('neo4j-driver').v1;

const app = express();

const typeDefs = require('./app/models/graphql');
const { neo4jPass, neo4jUser } = require('./config');

const schema = makeAugmentedSchema({
  typeDefs,
  config: {
    debug: false,
  },
});

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(neo4jUser, neo4jPass),
);

const server = new ApolloServer({ schema, context: { driver } });

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
