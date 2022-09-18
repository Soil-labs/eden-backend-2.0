import mongoose from "mongoose";

const skillCategorySchema = mongoose.Schema({
  name: String,
  description: String,

  skillsID: [mongoose.Schema.Types.ObjectId],
  skillSubCategoriesID: [mongoose.Schema.Types.ObjectId],

  lightcastID: String,

  emoji: String,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const SkillCategory = mongoose.model("SkillCategory", skillCategorySchema);
module.exports = { SkillCategory };
