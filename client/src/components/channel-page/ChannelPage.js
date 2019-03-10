import React, { Component } from "react";

class ChannelPage extends Component {
  render() {
    return (
      <div>
        Channel Page
        {this.props.match.params.id}
      </div>
    );
  }
}


export default ChannelPage;