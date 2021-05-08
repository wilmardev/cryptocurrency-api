const ENV = process.env.NODE_ENV || "development";
const { config } = require("../environments/" + ENV);
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(config.connectionString, config.dbOptions);
    console.info("Success connect to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connect };
