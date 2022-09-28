import { Members } from "../../../../models/memberModel";
import { FindMemberInput } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findMember = async (
  parent: { parent: any },
  args: { args: any; request: FindMemberInput },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, serverID } = args.request;
  console.log("Query > findMember > args.fields = ", args);
  if (!_id) {
    throw new ApolloError("No id provided");
  }
  let queryServerID: any = [];
  if (serverID) {
    serverID.forEach(ID => {
      queryServerID.push({ serverID: ID });
    });
  }
  try {
    let memberData = await Members.findOne({ _id: _id });
    if (queryServerID.length > 0) {
      memberData = await Members.findOne({ $and: [{ _id: _id }, { $or: queryServerID }] });
    } else {
      memberData = await Members.findOne({ _id: _id });
    }
    console.log("memberData = ", memberData);
    return memberData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberQuery > findMember",
    });
  }
};

export default findMember;
