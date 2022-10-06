import {
    SkillCategory,
    Skill,
    SkillSubCategory as SkillSubCategoryType,
    UpdateSkillSubCategoryInput,
  } from "../../../../generated";
  import { SkillSubCategory } from "../../../../models/skillSubCategoryModel";
  import { ApolloError } from "apollo-server-express";
  
  const updateSkillSubCategory = async (
    parent: any,
    args: { request: UpdateSkillSubCategoryInput },
    context: any,
    info: any,
  ) => {
    const { _id, name, description, skillsID, categoriesSkillID, lightcastID, emoji } = args.request;
  
    console.log("Mutation > updateSkillSubCategory > args.request = ", args.request);
  
    let fields: SkillSubCategoryType = {};
  
    if (skillsID) fields.skills = skillsID as Skill[];
    if (description) fields.description = description;
    if (name) fields.name = name;
    if (_id) fields._id = _id;
    if (categoriesSkillID) fields.skillCategories = categoriesSkillID as SkillCategory[];
    if (lightcastID) fields.lightcastID = lightcastID;
    if (emoji) fields.emoji = emoji;
  
    try {
      let skillSubCategoryData;
      if (_id || lightcastID) {
        let searchTerm = {};
        if (_id) {
          searchTerm = { _id: _id };
        } else {
          searchTerm = { lightcastID: lightcastID };
        }
        skillSubCategoryData = await SkillSubCategory.findOne(searchTerm);
  
        if (!skillSubCategoryData) {
          skillSubCategoryData = await new SkillSubCategory(fields);
          skillSubCategoryData.save();
        } else {
          skillSubCategoryData = await SkillSubCategory.findOneAndUpdate(
            { _id: skillSubCategoryData._id },
            { $set: fields },
            { new: true },
          );
        }
      } else {
        skillSubCategoryData = await new SkillSubCategory(fields);
        skillSubCategoryData.save();
      }
   
      return skillSubCategoryData;
    } catch (err: any) {
      throw new ApolloError(err.message, err.extensions?.code || "updateSkillSubCategory", {
        component: "SkillSubCategoryMutation > updateSkillSubCategory",
      });
    }
  };
  
  export default updateSkillSubCategory;
  