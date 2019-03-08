/* eslint-disable no-param-reassign */
const faker = require('faker');

module.exports.generateRandomPayload = (userContext, events, done) => {
  const randId = faker.random.number(215) ** 3;

  const graphqlQuery = {
    query: `{
          Song(id: ${randId}) {
            relatedSongs {
              name
            plays
            image
            artist {
                name
              image
            }
          }
          playlists {
              name
            image
          }
        }
        User(first: 10) {
            image
        }
      }`,
  };
  userContext.vars.graphJSON = graphqlQuery;
  return done();
};
