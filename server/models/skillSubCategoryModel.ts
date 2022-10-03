const mongoose = require("mongoose");

const skillSubCategorySchema = mongoose.Schema({
  name: String,
  description: String,

  categorySkills: [mongoose.Schema.ObjectId],
  skills: [mongoose.Schema.ObjectId],

  lightcastID: String,

  emoji: String,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const SkillSubCategory = mongoose.model("SkillSubCategory", skillSubCategorySchema);
export { SkillSubCategory };
