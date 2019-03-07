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
      songs: [],
      users: [],
      playlists: [],
      currentlySelected: { num_likes: undefined },
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          {
            Song(id: 12325) {
              relatedSongs {
                name
                plays
              }
            }
          }
        `,
      })
      .then(result => console.log(result.data));
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="app">
        <TrackList select={this.selectSong} tracks={songs} />
        <PlaylistList playlists={this.state.playlists.slice(0, 3)} />
        <BubbleList likes={this.state.currentlySelected.num_likes} users={this.state.users.slice(0, 9)} />
      </div>
    );
  }
}

export default App;
