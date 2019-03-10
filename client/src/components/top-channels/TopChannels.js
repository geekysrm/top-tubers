import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "./TopChannels.css";
import ChannelListItem from "./ChannelListItem";
import { getTopChannels } from "../../actions/channelActions";

class TopChannels extends Component {
  async componentDidMount() {
    await this.props.getTopChannels();
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="list">
            <div className="list__header">
              <h5>TopYT</h5>
              <h1>Top Youtube Channels</h1>
            </div>
            {this.props.channels.all.length !== 0 ? (
              <div className="list__body">
                <table className="list__table">
                  <tbody>
                    {this.props.channels.all.map(channel => (
                      <ChannelListItem key={channel.rank} rank={channel.rank} videoUploads={channel.videoUploads} videoViews={channel.videoViews} subscribers={channel.subscribers} grade={channel.grade} channelName={channel.channelName}  />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="loader">
                <Loader
                  type="Triangle"
                  color="#DC143C"
                  height="100"
                  width="100"
                />
              </div>
            )}
          </div>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channels
});

export default connect(
  mapStateToProps,
  { getTopChannels }
)(TopChannels);
