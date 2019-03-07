import React from "react";
import StatsBar from "./StatsBar";
import TrackImage from "./TrackImage";
import ReactTooltip from "react-tooltip";
import UserProfile from "./UserProfile";
import Grey from "./Grey";
export default class PlaylistListItem extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props.playlist;
    console.log(this.props)
    return (
      <div style={{ margin: ".5em", marginLeft: "0em" }}>
        <span>
          <TrackImage src={`url("${this.props.playlist.image}")`} style={{ float: "left", marginRight: ".5em" }} />
        </span>
        <span>
          <div className="nexttopic" data-tip data-for={`Artist 1`}>
            <Grey>Artist 1</Grey>
            <ReactTooltip delayHide={100}
              delayShow={100}
              delayUpdate={100}
              type={"light"}
              border={true}
              effect={'solid'}

              key={`Artist 1`}
              id={`Artist 1`}
              style={{ color: "#ff6e00 !important" }} >
              <UserProfile user={{username: 'Artist 1'}}></UserProfile>
            </ReactTooltip>
          </div>
          <div className="nexttopic">
            {name}
          </div>
          <div className="nexttopic">
            <Grey className="nexttopic"><StatsBar likes={10000} reposts={1000} /></Grey>
          </div>
        </span>
      </div>
    );
  }
}
