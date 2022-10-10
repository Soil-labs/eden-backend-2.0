import { Members } from "../../../../models/memberModel";
import { ApolloError } from "apollo-server-express";
import { Room, Member } from "../../../../generated";

const members = async (parent: Room, args: any, context: any, info: any): Promise<Member> => {
  try {
    const members = parent.members;
    let membersData: Member = await Members.find({ _id: members });
    return membersData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "members", {
      component: "RoomResolver > members",
      user: context.req.user?._id,
    });
  }
};

export default members;
