import React from 'react';
import ReactTooltip from 'react-tooltip';
import StatsBar from './StatsBar';
import TrackImage from './TrackImage';
import Grey from './Grey';
import UserProfile from './UserProfile';
import HeartBox from './HeartBox';
import Dots from './Dots';

export default class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  // handleMouseOver() {
  //   // check to see if we are already in the right state
  //   // that way we dont set state if we dont need to
  //   // this avoids triggering expensive rerenders
  //   if (!this.state.isSelected) {
  //     this.setState({ isSelected: true });
  //   }
  // }

  // handleMouseOut() {
  //   this.setState({ isSelected: false });
  // }

  render() {
    const { track } = this.props;
    const {
      plays, artist, name, image,
    } = track;
    return (
      <div style={{ margin: '.5em', marginLeft: '0em' }}>
        <span>
          <TrackImage
            src={`url("${image}")`}
            style={{ float: 'left', marginRight: '.5em' }}
            isSelected={this.state.isSelected}
          />
        </span>
        <span>
          <div className="nexttopic" data-tip data-for={`${artist[0].name}`}>
            <Grey>{artist[0].name}</Grey>
          </div>
          <ReactTooltip
            delayHide={100}
            delayShow={100}
            delayUpdate={100}
            type="light"
            border
            effect="solid"

            id={`${artist[0].name}`}
            style={{ color: '#ff6e00 !important' }}
          >
            <UserProfile user={artist[0]} />
          </ReactTooltip>
          <div className="nexttopic">
            <span style={{
              display: 'inline-block',
              width: '50%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
            >
              {name}

            </span>
            <span style={{
              display: 'inline-block', position: 'absolute', float: 'right', clear: 'right',
            }}
            >
              <HeartBox style={{ zIndex: 1, display: 'inline-block' }} isSelected={this.state.isSelected} />
              <Dots style={{ zIndex: 1, display: 'inline-block' }} isSelected={this.state.isSelected} />
            </span>
          </div>
          <div className="nexttopic">
            <Grey className="nexttopic"><StatsBar plays={plays} likes={Math.round(plays / 100)} reposts={Math.round(plays / 10)} comments={Math.round(plays / 1000)} /></Grey>
          </div>
        </span>
      </div>
    );
  }
}
