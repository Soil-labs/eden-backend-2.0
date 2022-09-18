const mongoose = require("mongoose");
require("dotenv").config();

const serverSchema = mongoose.Schema({
  _id: {
    type: String,
    unique: true,
  },

  name: String,
  adminID: [String],
  adminRoles: [String],
  adminCommands: [String],

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Servers = mongoose.model("Servers", serverSchema);
module.exports = { Servers };
