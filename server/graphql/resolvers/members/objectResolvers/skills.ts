import { ApolloError } from "apollo-server-express";

const skills = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent = ", parent);

  try {
    const skills = parent.skills;

    return skills;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > skills",
      user: context.req.user?._id,
    });
  }
};

export default skills;
