import { Members } from "../../../../models/memberModel";
import { FindMemberInput } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findMember = async (parent: any, args: { request: FindMemberInput }, context: any, info: any) => {
  const { discordID, id } = args.request;
  console.log("discordID = ", discordID);
  console.log("id = ", id);
  console.log("Query > findMember > args.fields = ", args.request);

  if (!discordID && !id) {
      throw new ApolloError("Either one of a discordID or _id is required");
   }
   let memberData;
   if ( discordID ){
     memberData = await Members.findOne({ discordID: discordID });
   }
   else if ( id ) {
     memberData = await Members.findOne({ _id: id });
   }

   if ( !memberData ){
     throw new ApolloError("member data not found");
   }

  console.log("memberData = ", memberData);
  return memberData;
  
};

export default findMember;
