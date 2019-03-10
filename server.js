const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const channels = require("./routes/api/channels");

require("./models/Channel.js");

// MongoDB configuration
const db = process.env.mongoURI;

// Use mongoose to connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.log(err));

require("./routes/api/channels.js")(app);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));
