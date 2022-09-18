import { ApolloError } from "apollo-server-express";
import { Members } from "../../../../models/memberModel";

const invitedBy = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent = " , parent)

  try {
    const invitedBy = parent.invitedBy;

    let invitedByData = await Members.findOne({ _id: invitedBy });

    return invitedByData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > members",
      user: context.req.user?._id,
    });
  }
};
export default invitedBy;
