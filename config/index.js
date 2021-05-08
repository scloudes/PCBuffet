require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  dbName: process.env.DB_NAME,
  dbTags: process.env.DB_TAGS,
};

module.exports = { config };
