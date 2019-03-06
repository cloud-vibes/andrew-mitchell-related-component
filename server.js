const express = require('express');
const path = require('path');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const neo4j = require('neo4j-driver').v1;

const app = express();

const songRoutes = require('./app/controllers/songs');
const typeDefs = require('./app/models/graphql');
const { neo4jPass, neo4jUser } = require('./config');

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(neo4jUser, neo4jPass),
);

const server = new ApolloServer({ schema, context: { driver } });

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);

// app.use(express.json());
// app.use(cors());

// app.use(express.static(path.join(__dirname, '/dist')));

// app.use('/api/songs', songRoutes);

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
