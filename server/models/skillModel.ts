const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  name: String,
  description: String,

  state: {
    type: String,
    enum: ["WAITING", "REJECTED", "APPROVED"],
  },
  skillCategoriesID: [mongoose.Schema.Types.ObjectId],
  skillSubCategoriesID: [mongoose.Schema.Types.ObjectId],

  relatedSkillsID: [mongoose.Schema.Types.ObjectId],

  lightcastID: String,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Skills = mongoose.model("Skill", skillSchema);
module.exports = { Skills };
