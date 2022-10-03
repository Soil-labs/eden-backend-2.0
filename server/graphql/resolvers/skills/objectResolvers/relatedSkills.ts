import { Skill } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";

const relatedSkills = async (
  parent: Skill,
  args: any,
  context: any,
  info: any,
): Promise<Skill[]> => {
  try {
    const relatedSkills = parent.relatedSkills;
    let relatedSkillsData = await Skills.find({ _id: relatedSkills });
    return relatedSkillsData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > skills",
      user: context.req.user?._id,
    });
  }
};

export default relatedSkills;
