import { ApolloError } from "apollo-server-express";

import { Skills } from "../../../../models/skillModel";

const skillInfo = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent = ", parent);

  try {
    const skillID = parent.skillID;

    let skillData = await Skills.findOne({
      $and: [{ _id: skillID }, { state: "APPROVED" }],
    });

    // console.log("skillData = ", skillData);

    return skillData;
    // return [{}];
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > skills",
      user: context.req.user?._id,
    });
  }
};

export default skillInfo;
