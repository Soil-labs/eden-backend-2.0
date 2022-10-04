const mongoose = require("mongoose");

const skillCategorySchema = mongoose.Schema({
  name: String,
  description: String,

  skills: [mongoose.Schema.Types.ObjectId],
  skillSubCategories: [mongoose.Schema.Types.ObjectId],

  lightcastID: String,

  emoji: String,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const SkillCategory = mongoose.model("SkillCategory", skillCategorySchema);
export { SkillCategory };
