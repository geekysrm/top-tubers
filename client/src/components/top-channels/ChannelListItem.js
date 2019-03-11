import React from "react";
import millify from 'millify';
// import {Link} from "react-router-dom";
// TODO: To add link to channel pages

const ChannelListItem = (props) =>
    (  <tr className="list__row">
        <td className="list__cell">
          <span className="list__value">{props.rank}</span>
        </td>
        <td className="list__cell">
          <span className="list__value">{props.channelName}</span>
          <small className="list__label">{props.grade}</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{millify(Number(props.videoUploads))}</span>
          <small className="list__label">Uploads</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{millify(Number(props.videoViews,3))}</span>
          <small className="list__label">Views</small>
        </td>
        <td className="list__cell">
          <span className="list__value">{millify(Number(props.subscribers,3))}</span>
          <small className="list__label">subscribers</small>
        </td>
      </tr>
    );
export default ChannelListItem;