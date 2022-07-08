const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/chat_users");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", function () {
  console.log("Successfully connected to the database");
});