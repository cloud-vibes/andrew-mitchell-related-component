CREATE CONSTRAINT ON (song:Song) ASSERT song.id IS UNIQUE;
CREATE CONSTRAINT ON (user:User) ASSERT user.id IS UNIQUE;
CREATE CONSTRAINT ON (playlist:Playlist) ASSERT playlist.id IS UNIQUE;
CREATE CONSTRAINT ON (album:Album) ASSERT album.id IS UNIQUE;
CREATE INDEX ON :Song(name);
// users
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/users.csv" AS csvLine
CREATE (user:User {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
})
// playlists
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/playlists.csv" AS csvLine
CREATE (playlist:Playlist {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
})
// albums
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/albums.csv" AS csvLine
CREATE (album:Album {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
})

LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/songs.csv" AS csvLine
MERGE (user:User {id: toInteger(csvLine.userId)})
MERGE (playlist:Playlist {id: toInteger(csvLine.playlistId)})
MERGE (album:Album {id: toInteger(csvLine.albumId)})
CREATE (song:Song {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  description: csvLine.description,
  plays: toInteger(csvLine.plays),
  genre: csvLine.genre,
  length: csvLine.length,
  image: csvLine.image
})
CREATE (user)-[:CREATED]->(song)
CREATE (song)-[:CREATED_BY]->(user)
CREATE (playlist)-[:CONTAINS]->(song)
CREATE (song)-[:IS_IN]->(playlist)
CREATE (album)-[:CONTAINS]->(song)
CREATE (song)-[:IS_IN]->(album)

// LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/songs.csv" AS csvLine
// CREATE (s:Song {
//   id: toInteger(csvLine.id),
//   name: csvLine.name,
//   description: csvLine.description,
//   plays: toInteger(csvLine.plays),
//   genre: csvLine.genre,
//   length: csvLine.length,
//   image: csvLine.image
// })

