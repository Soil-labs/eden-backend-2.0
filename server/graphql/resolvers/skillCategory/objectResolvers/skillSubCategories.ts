import { SkillSubCategory } from "../../../../models/skillSubCategoryModel";
import { SkillCategory, SkillSubCategory as SkillSubCategoryOutput } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const skillSubCategories = async (parent: SkillCategory, args: any, context: any, info: any) => {
  try {
    const subCategorySkill = parent.skillSubCategories;
    let SkillSubCategoryData: SkillSubCategoryOutput = await SkillSubCategory.find({
      _id: subCategorySkill,
    });

    return SkillSubCategoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "skillSubCategoryResolver > skillsubCategories",
      user: context.req.user?._id,
    });
  }
};

export default skillSubCategories;
