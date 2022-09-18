// const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: String,
  members: [String],
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Rooms = mongoose.model("Rooms", roomSchema);
module.exports = { Rooms };
