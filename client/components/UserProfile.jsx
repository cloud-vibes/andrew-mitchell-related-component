import React from 'react'
import ProfileImage from './ProfileImage';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div style={{ height: "150px", width: "75px" }}>
      <div ><ProfileImage src={`url("${this.props.user.image}")`}></ProfileImage></div>
      <div>{this.props.user.name}</div>
      <button>Follow</button>
    </div>);
  }
}