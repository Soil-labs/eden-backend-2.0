// import { Members } from "../../../../models/memberModel";
import { ApolloError } from "apollo-server-express";

const findMember = async (parent: any, args: { request: any }, context: any, info: any) => {
  const { discordId, serverID } = args.request;
  console.log("discordId = ", discordId);
  // console.log("Query > findMember > args.fields = ", args.fields);
  // if (!_id) {
  //   throw new ApolloError("No id provided");
  // }
  // let memberData = await Members.findOne({ _id: _id });
  // console.log("memberData = ", memberData);

  // return memberData;
  return [{}];
};

export default findMember;
