const express = require('express');
const path = require('path');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const neo4j = require('neo4j-driver').v1;

const app = express();
app.use(express.json());
app.use(cors());

const typeDefs = require('./app/models/graphql');
const { neo4jPass, neo4jUser } = require('./config');

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(neo4jUser, neo4jPass),
);

const server = new ApolloServer({ schema, context: { driver } });

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, '/dist')));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
