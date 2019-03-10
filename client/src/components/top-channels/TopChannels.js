import React, { Component } from "react";
import "./TopChannels.css";
import ChannelListItem from "./ChannelListItem";

export default class TopChannels extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="list">
            <div className="list__header">
              <h5>TopYT</h5>
              <h1>Top Youtube Channels</h1>
            </div>
            <div className="list__body">
              <table className="list__table">
                <tbody>
                  <ChannelListItem />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}
