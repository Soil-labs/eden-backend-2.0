const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  //  --- Content ---
  title: String,
  content: String,
  //  --- Content ---

  //  --- Garden Location ---
  projectID: mongoose.Schema.ObjectId,
  teamID: [mongoose.Schema.ObjectId],
  roleID: [mongoose.Schema.ObjectId],
  topicID: mongoose.Schema.ObjectId,

  threadDiscordID: String,
  serverID: [String],
  //  --- Garden Location ---

  //  --- Member Info ---
  championID: String,
  memberID: [String],
  authorID: String,
  notifyUserID: [String],
  //  --- Member Info ---

  phase: {
    type: String,
    enum: ["OPEN", "ARCHIVE"],
  },

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Notes = mongoose.model("Notes", noteSchema);
export { Notes };
