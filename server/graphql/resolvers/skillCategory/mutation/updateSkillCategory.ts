import {
  SkillCategory as SkillCategoryType,
  SkillSubCategory,
  Skill,
  UpdateSkillCategoryInput,
} from "../../../../generated";
import { SkillCategory } from "../../../../models/skillCategoryModel";
import { ApolloError } from "apollo-server-express";


const updateSkillCategory = async (
  parent: any,
  args: { request: UpdateSkillCategoryInput },
  context: any,
  info: any,
) => {
  const { _id, name, description, skillsID, subCategoriesSkillID, lightcastID, emoji } =
    args.request;
  console.log("Mutation > updateSkillCategory > args.request = ", args.request);

  let fields: SkillCategoryType = {};

  if (skillsID) fields.skills = skillsID as Skill[];
  if (description) fields.description = description;
  if (name) fields.name = name;
  if (_id) fields._id = _id;
  if (subCategoriesSkillID) fields.skillSubCategories = subCategoriesSkillID as SkillSubCategory[];
  if (lightcastID) fields.lightcastID = lightcastID;
  if (emoji) fields.emoji = emoji;

 

  try {
    let skillCategoryData;
    if (_id || lightcastID) {
      let searchTerm = {};
      if (_id) {
        searchTerm = { _id: _id };
      } else {
        searchTerm = { lightcastID: lightcastID };
      }
      skillCategoryData = await SkillCategory.findOne(searchTerm);
      if (!skillCategoryData) {
        skillCategoryData = await new SkillCategory(fields);
        skillCategoryData.save();
      } else {
        skillCategoryData = await SkillCategory.findOneAndUpdate(
          { _id: skillCategoryData._id },
          {
            $set: fields,
          },
          { new: true },
        );
      }
    } else {
      skillCategoryData = await new SkillCategory(fields);
      skillCategoryData.save();
    }
    console.log("skillcategory data", skillCategoryData)
    return skillCategoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateSkillCategory", {
      component: "SkillCategoryMutation > updateSkillCategory",
    });
  }
};

export default updateSkillCategory;
