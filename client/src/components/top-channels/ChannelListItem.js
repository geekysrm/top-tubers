import React, { Component } from "react";

export default class ChannelListItem extends Component {
  render() {
    return (
      <tr className="list__row">
        <td className="list__cell">
          <span className="list__value">1</span>
        </td>
        <td className="list__cell">
          <span className="list__value">SET India</span>
          <small className="list__label">A++</small>
        </td>
        <td className="list__cell">
          <span className="list__value">27323</span>
          <small className="list__label">Uploads</small>
        </td>
        <td className="list__cell">
          <span className="list__value">22675948293</span>
          <small className="list__label">Views</small>
        </td>
        <td className="list__cell">
          <span className="list__value">31180559</span>
          <small className="list__label">subscribers</small>
        </td>
      </tr>
    );
  }
}
