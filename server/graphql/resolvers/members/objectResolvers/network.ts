import { ApolloError } from "apollo-server-express";
import { Members } from "../../../../models/memberModel";

const network = async (parent: any, args: any, context: any, info: any) => {
  try {
    const network = parent.network;

    if (!network || network.length === 0) return [{}];

    let networkIDs = network.map((net: any) => {
      return net.memberID;
    });

    let networkData = await Members.find({ _id: networkIDs });

    return networkData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > members",
      user: context.req.user?._id,
    });
  }
};

export default network;
