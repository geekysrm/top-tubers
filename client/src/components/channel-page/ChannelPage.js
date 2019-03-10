import React, { Component } from "react";

class ChannelPage extends Component {
  render() {
    return (
      <div style={{color: "#fff"}}>
        Channel Page for Rank
        {this.props.match.params.id}
      </div>
    );
  }
}


export default ChannelPage;