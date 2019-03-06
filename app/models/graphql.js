module.exports = `
  type Song {
    id: Int
    name: String
    description: String
    image: String
    plays: Int
    genre: String
    length: String
    relatedSongs: [Song] @relation(name: "RELATED_TO", direction: "OUT")
    artist: [User] @relation(name: "CREATED_BY", direction: "OUT")
    playlists: [Playlist] @relation(name: "IS_IN", direction: "OUT")
    albums: [Album] @relation(name: "IS_IN", direction: "OUT")
  }
  type Album {
    name: String
    image: String
    id: Int
    songs: [Song] @relation(name: "CONTAINS", direction: "OUT")
  }
  type User {
    id: Int
    name: String
    image: String
    songs: [Song] @relation(name: "CREATED", direction: "OUT")
  }
  type Playlist {
    id: Int
    name: String
    image: String
    songs: [Song] @relation(name: "CONTAINS", direction: "OUT")
  }
`;
