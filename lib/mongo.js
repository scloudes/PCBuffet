const mongoose = require("mongoose");
const { config } = require("../config");

const MONGO_URI = `${config.dbUri}${config.dbName}${config.dbTags}`;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("db is connected"))
  .catch((db) => console.log("db isn't connected"));
