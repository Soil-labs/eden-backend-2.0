import { SkillSubCategory, SkillCategory as SkillCategoryOutput } from "../../../../generated";
import { SkillCategory } from "../../../../models/skillCategoryModel";
import { ApolloError } from "apollo-server-express";

const categorySkills = async (
  parent: SkillSubCategory,
  args: any,
  context: any,
  info: any,
): Promise<SkillCategoryOutput> => {
  try {
    const categorySkills = parent.skillCategories;

    let categoryData = await SkillCategory.find({ _id: categorySkills });

    return categoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "categorySkills", {
      component: "skillSubCategoryResolver > categorySkills",
      user: context.req.user?._id,
    });
  }
};

export default categorySkills;
