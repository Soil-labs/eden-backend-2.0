import { Skills } from "../../../../models/skillModel";
import { SkillSubCategory, Skill } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const skills = async (
  parent: SkillSubCategory,
  args: any,
  context: any,
  info: any,
): Promise<Skill> => {
  try {
    const skillsID = parent.skills;

    let skillData = await Skills.find({ _id: skillsID });

    return skillData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "skills", {
      component: "skillSubCategoryResolver > skills",
      user: context.req.user?._id,
    });
  }
};

export default skills;
