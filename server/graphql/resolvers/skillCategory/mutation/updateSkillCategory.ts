import {
  SkillCategory as SkillCategoryType,
  SkillSubCategory,
  Skill,
  UpdateSkillCategoryInput,
} from "../../../../generated";
import { SkillCategory } from "../../../../models/skillCategoryModel";
import { ApolloError, AuthenticationError } from "apollo-server-express";
import { EdenContext } from "../../../../auth/types";
import { ACCESS_LEVELS } from "../../../../auth/constants";

const updateSkillCategory = async (
  parent: any,
  args: { request: UpdateSkillCategoryInput },
  { req: { user } }: EdenContext,
  info: any,
) => {
  if (!(user && user._id && user.accessLevel && user.accessLevel < ACCESS_LEVELS.OPERATOR_ACCESS)) {
    throw new AuthenticationError("You are Not authorized to perform this action");
  }

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
    console.log("skillcategory data", skillCategoryData);
    return skillCategoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tSkillCategoryMutation > updateSkillCategory",
    });
  }
};

export default updateSkillCategory;
