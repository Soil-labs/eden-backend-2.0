import { ApolloError } from "apollo-server-express";

const skills = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent = " , parent)

  try {
    const skills = parent.skills;

    let skillsID = skills.map((skill: any) => {
      return skill.id;
    });

    let skillData = await Skills.find({
      $and: [{ _id: skillsID }, { state: "approved" }],
    });

    let skillData_withAuthors = skillData.map((skillD: any, idx: any) => {
      return {
        skillInfo: skillD._doc,
        authors: skills[idx].authors,
        level: skills[idx].level,
      };
    });

    return skillData_withAuthors;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > skills",
      user: context.req.user?._id,
    });
  }
};

export default skills;
