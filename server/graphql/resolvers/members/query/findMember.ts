// import { Members } from "../../../../models/memberModel";
import { ApolloError } from "apollo-server-express";

const findMember = async (
  parent: { parent: any },
  args: { args: any; request: any },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, serverID } = args.request;
  console.log("_id = ", _id);
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
