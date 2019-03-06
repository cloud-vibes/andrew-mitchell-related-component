// /Users/Andrew/Library/Application\ Support/Neo4j\ Desktop/Application/neo4jDatabases/database-40c4266f-26d8-4dbd-b363-77443e01cb45/installation-3.5.3/bin/cypher-shell -u neo4j -p ladybug12  < /Users/Andrew/webDev/hackReactor/SDC/andrew-mitchell-related-component/seeding/queries.cql

CREATE CONSTRAINT ON (song:Song) ASSERT song.id IS UNIQUE;
CREATE CONSTRAINT ON (user:User) ASSERT user.id IS UNIQUE;
CREATE CONSTRAINT ON (playlist:Playlist) ASSERT playlist.id IS UNIQUE;
CREATE CONSTRAINT ON (album:Album) ASSERT album.id IS UNIQUE;
CREATE INDEX ON :Song(name);
// users
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/users.csv" AS csvLine
CREATE (user:User {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
});
// playlists
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/playlists.csv" AS csvLine
CREATE (playlist:Playlist {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
});
// albums
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/albums.csv" AS csvLine
CREATE (album:Album {
  id: toInteger(csvLine.id),
  name: csvLine.name,
  image: csvLine.image
});
// songs
USING PERIODIC COMMIT
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
CREATE (song)-[:IS_IN]->(album);

// Add song relations
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "http://127.0.0.1:5500/seeding/csv/songsToSongs.csv" AS csvLine
MATCH (song:Song {id: toInteger(csvLine.songId)}),(songB:Song {id: toInteger(csvLine.relatedSongId)})
CREATE (song)-[:RELATED_TO]->(songB);