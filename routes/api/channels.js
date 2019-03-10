const express = require("express");
const app = express();

const Channel = require("../../models/Channel");

module.exports = app => {
  app.get("/channels/test", (req, res) => {
    res.send("Channels Working properly");
  });

  app.post("/channels", async (req, res) => {
    await Channel.find({}, async (err, channels) => {
      await channels.forEach(
        channel => (channel.rank = channel.rank.replace(",", "").slice(0, -2))
      );
      await channels.sort(function(a, b) {
        if (Number(a.rank) < Number(b.rank)) {
          return -1;
        }
        if (Number(a.rank) > Number(b.rank)) {
          return 1;
        }
        return 0;
      });
      res.json({
        channels
      });
    });
  });
};
