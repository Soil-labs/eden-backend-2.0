import { SkillSubCategory } from "../../../../models/skillSubCategoryModel";
import { SkillCategory } from "../../../../models/skillCategoryModel";
import { Skills } from "../../../../models/skillModel";
import {
  DeleteSkillSubCategoryInput,
  SkillSubCategory as SkillSubCategoryType,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const deleteSkillSubCategory = async (
  parent: any,
  args: { request: DeleteSkillSubCategoryInput },
  context: any,
  info: any,
) => {
  const { _id, lightcastID } = args.request;
  if (!_id || lightcastID) {
    throw new ApolloError(
      "Please provide an _id or a lightcastID for the Skillsubcategory to delete",
    );
  }

  let toDeleteCategory = {};

  if (_id) {
    toDeleteCategory = { _id: _id };
  } else {
    toDeleteCategory = { lightcastID: lightcastID };
  }

  try {
    //find the skillcategory models
    const skillSubCategory: SkillSubCategoryType[] = await SkillSubCategory.find(toDeleteCategory);
    let documentDeleted = 0;
    if (skillSubCategory.length) {
      for (let i = 0; i < skillSubCategory.length; i++) {
        const skillSubCategoryToDelete: SkillSubCategoryType = skillSubCategory[i];
        let skill = await Skills.findOne({ skillSubCategoriesID: skillSubCategoryToDelete._id });

        if (skill) {
          let filteredskill: any = skill.skillCategoriesID?.filter((skill: any) => {
            return skill != skillSubCategoryToDelete._id;
          });

          await Skills.findOneAndUpdate(
            {
              _id: skill._id,
            },

            {
              $set: {
                skillSubCategoriesID: filteredskill,
              },
            },
          );
        }

        let skillCategory = await SkillCategory.findOne({
          skillSubCategories: skillSubCategoryToDelete._id,
        });

        if (skillCategory) {
          let filteredCategory = skillCategory.skillSubCategories?.filter((subCategory: any) => {
            return subCategory != skillSubCategoryToDelete._id;
          });

          await SkillCategory.findOneAndUpdate(
            {
              _id: skillCategory._id,
            },

            {
              $set: {
                skillSubCategories: filteredCategory,
              },
            },
          );
        }
        await SkillSubCategory.deleteOne({ _id: skillSubCategoryToDelete._id });
        documentDeleted++;
      }
    } else {
      throw new ApolloError("No data matches the passed parameter");
    }

    return documentDeleted;
  } catch (err: any) {}
};

export default deleteSkillSubCategory;
