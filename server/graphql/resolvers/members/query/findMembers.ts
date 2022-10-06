import { AuthenticationError } from "apollo-server";
import { EdenContext } from "../../../../auth/utils/types";
import { FindMembersCursorOutput } from "../../../../generated";
import { Members } from "../../../../models/memberModel";

const findMembers = async (
  parent: any,
  { request }: { request: FindMembersCursorOutput },
  { req: { user } }: EdenContext,
  info: any,
) => {
  console.log({ user });

  // Add Minimum access level required to use this resolver

  try {
    let members = await Members.find({});

    return { members };
  } catch (error) {
    console.error(error);
  }
  //   console.log("discordID = ", discordID);
  // console.log("Query > findMember > args.fields = ", args.fields);
  // if (!_id) {
  //   throw new ApolloError("No id provided");
  // }
  // let memberData = await Members.findOne({ _id: _id });
  // console.log("memberData = ", memberData);

  // return memberData;
};

export default findMembers;
