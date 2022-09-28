import { Members } from "../../../../models/memberModel";
import { FindMembersInput } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findMembers = async (
  parent: { parent: any },
  args: { args: any; request: FindMembersInput },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, serverID } = args.request;
  console.log("Query > findMembers > args.fields = ", args.request);
  let queryServerID: any = [];

  if (serverID) {
    serverID.forEach(ID => {
      queryServerID.push({ serverID: ID });
    });
  }

  try {
    let membersData;

    if (_id) {
      if (queryServerID.length > 0) {
        membersData = await Members.find({ $and: [{ _id: _id }, { $or: queryServerID }] });
      } else {
        membersData = await Members.find({ _id: _id });
      }
    } else {
      if (queryServerID.length > 0) {
        membersData = await Members.find({ $or: queryServerID });
      } else {
        membersData = await Members.find({});
      }
    }
    console.log("membersData = ", membersData);
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberQuery > findMembers",
    });
  }
};

export default findMembers;
