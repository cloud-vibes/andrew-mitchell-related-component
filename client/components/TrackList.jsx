import React from 'react';

import TracksListHeader from './TracksListHeader';
import ListSeparator from './ListSeparator';
import TrackListItem from './TrackListItem';
import Grey from './Grey';

export default ({ tracks }) => (
  <div style={{ width: '55%' }}>
    <Grey><TracksListHeader /></Grey>
    <ListSeparator />
    <div className="headpad">
      {
        tracks.map(track => (
          <TrackListItem
            select={false}
            track={track}
            key={track.id}
          />
        ))
      }
    </div>
  </div>
);
