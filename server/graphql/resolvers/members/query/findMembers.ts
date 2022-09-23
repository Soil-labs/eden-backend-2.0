import { FindMembersCursorOutput } from "../../../../generated";
import { Members } from "../../../../models/memberModel";

const findMembers = async (
  parent: any,
  { request }: { request: FindMembersCursorOutput },
  context: any,
  info: any,
) => {
  console.log({ request });

  try {
    let members = await Members.find({});

    return { members };
  } catch (error) {
    console.error(error);
  }
  //   console.log("discordId = ", discordId);
  // console.log("Query > findMember > args.fields = ", args.fields);
  // if (!_id) {
  //   throw new ApolloError("No id provided");
  // }
  // let memberData = await Members.findOne({ _id: _id });
  // console.log("memberData = ", memberData);

  // return memberData;
};

export default findMembers;
