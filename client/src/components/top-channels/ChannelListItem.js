import React, { Component } from "react";

export default class ChannelListItem extends Component {
  render() {
    return (
      <tr className="list__row">
        <td className="list__cell">
          <span className="list__value">{this.props.rank}</span>
        </td>
        <td className="list__cell">
          <span className="list__value">{this.props.channelName}</span>
          <small className="list__label">{this.props.grade}</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{this.props.videoUploads}</span>
          <small className="list__label">Uploads</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{this.props.videoViews}</span>
          <small className="list__label">Views</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{this.props.subscribers}</span>
          <small className="list__label">subscribers</small>
        </td>
      </tr>
    );
  }
}
