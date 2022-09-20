const mongoose = require("mongoose");
require("dotenv").config();

const roleTemplateSchema = mongoose.Schema({
  title: String,
  description: String,
  skillsID: [mongoose.Schema.Types.ObjectId],
});

const RoleTemplate = mongoose.model("RoleTemplate", roleTemplateSchema);
export { RoleTemplate };
