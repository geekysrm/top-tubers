const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ChannelSchema = new Schema({
  rank: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  channelName: {
    type: String,
    required: true
  },
  videoUploads: {
    type: Number,
    required: true
  },
  subscribers: {
    type: Number,
    required: true
  },
  videoViews: {
    type: Number,
    required: true
  }
});

module.exports = Channel = mongoose.model("channel", ChannelSchema);
