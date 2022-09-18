import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
  name: String,

  description: String,
  notes: [mongoose.Schema.Types.ObjectId],

  //  --- Garden Location ---
  projectID: mongoose.Schema.Types.ObjectId,
  teamID: mongoose.Schema.Types.ObjectId,

  chanelDiscordID: String,
  serverID: [String],
  //  --- Garden Location ---

  //  --- Member Info ---
  championID: String,
  memberID: [String],
  authorID: String,
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

const Topics = mongoose.model("Topics", topicSchema);
export { Topics };
