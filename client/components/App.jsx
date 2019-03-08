import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

import styles from './styles.css';

import TrackList from './TrackList';
import PlaylistList from './PlaylistList';

import BubbleList from './BubbleList';

const client = new ApolloClient();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedSongs: [],
      usersWhoLiked: [],
      playlists: [],
      likes: [],
    };
  }

  componentDidMount() {
    const path = document.location.pathname.split('/');
    client
      .query({
        query: gql`
          {
            Song(id: ${path[path.length - 1]}) {
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
          }
        `,
      })
      .then(({ data }) => {
        this.setState({
          relatedSongs: data.Song[0].relatedSongs,
          playlists: data.Song[0].playlists,
          likes: 10,
          usersWhoLiked: data.User,
        });
      });
  }

  render() {
    const { relatedSongs, playlists, likes, usersWhoLiked } = this.state;
    return (
      <div className="app">
        <TrackList select={this.selectSong} tracks={relatedSongs} />
        <PlaylistList playlists={playlists} />
        <BubbleList likes={likes} users={usersWhoLiked} />
      </div>
    );
  }
}

export default App;
