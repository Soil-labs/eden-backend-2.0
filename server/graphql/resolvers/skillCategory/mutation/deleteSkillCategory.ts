import { SkillCategory } from "../../../../models/skillCategoryModel";
import { SkillSubCategory } from "../../../../models/skillSubCategoryModel";
import { Skills } from "../../../../models/skillModel";
import {
  DeleteSkillCategoryInput,
  SkillCategory as SkillCategoryType,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const deleteSkillCategory = async (
  parent: any,
  args: { request: DeleteSkillCategoryInput },
  context: any,
  info: any,
) => {
  const { _id, lightcastID } = args.request;

  if (!_id || lightcastID) {
    throw new ApolloError("Please provide an _id or a lightcastID for the skillcategory to delete");
  }

  let toDeleteCategory = {};

  if (_id) {
    toDeleteCategory = { _id: _id };
  } else {
    toDeleteCategory = { lightcastID: lightcastID };
  }

  try {
    //find the skillcategory models
    const skillsCategory: SkillCategoryType[] = await SkillCategory.find(toDeleteCategory);
    let documentDeleted = 0;
    if (skillsCategory.length) {
      for (let i = 0; i < skillsCategory.length; i++) {
        const skillCategoryToDelete: SkillCategoryType = skillsCategory[i];
        let skill = await Skills.findOne({ skillCategoriesID: skillCategoryToDelete._id });

        if (skill) {
          let filteredskill: any = skill.skillCategoriesID?.filter((skill: any) => {
            return skill != skillCategoryToDelete._id;
          });

          await Skills.findOneAndUpdate(
            {
              _id: skill._id,
            },

            {
              $set: {
                skillCategoriesID: filteredskill,
              },
            },
          );
        }

        let skillsubCategory = await SkillSubCategory.findOne({
          categorySkills: skillCategoryToDelete._id,
        });

        if (skillsubCategory) {
          let filteredsubCategory = skillsubCategory.categorySkills?.filter((subCategory: any) => {
            return subCategory != skillCategoryToDelete._id;
          });

          await SkillSubCategory.findOneAndUpdate(
            {
              _id: skillsubCategory._id,
            },

            {
              $set: {
                categorySkills: filteredsubCategory,
              },
            },
          );
        }

        await SkillCategory.deleteOne({ _id: skillCategoryToDelete._id });
        documentDeleted++;
      }
    } else {
      throw new ApolloError("No data matches the passed parameter");
    }
    return documentDeleted;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "deleteSkillCategory", {
      component: "skillCategoryMutation > deleteSkillCategory",
    });
  }
};

export default deleteSkillCategory;
