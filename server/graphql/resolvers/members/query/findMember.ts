import { Members } from "../../../../models/memberModel";
import { FindMemberInput } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findMember = async (parent: any, args: { request: FindMemberInput }, context: any, info: any) => {
  const { discordID } = args.request;
  console.log("discordID = ", discordID);
  console.log("Query > findMember > args.fields = ", args.request);
  if (!discordID) {
      throw new ApolloError("No discordID provided");
   }
  let memberData = await Members.findOne({ discordID: discordID });
  console.log("memberData = ", memberData);
  return memberData;
  
};

export default findMember;
