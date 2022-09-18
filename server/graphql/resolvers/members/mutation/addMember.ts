import { ApolloError } from "apollo-server-express";
// import { Members } from "../../../../models/memberModel";
import { Fields } from "../types";

const addMember = async (
  parent: { parent: any },
  args: { args: any; request: Fields },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, name, avatar } = args.request;
  console.log("Mutation > addMember > args.fields = ", args.request);

  // if (!_id) throw new ApolloError("_id is required, the IDs come from Discord");

  // let fields: Fields = <any>{};
  // fields._id = _id;
  // fields.registeredAt = new Date();

  // if (name) fields.name = name;
  // if (avatar) fields.avatar = avatar;

  // //let membersData = await Members.findOne({ _id: fields._id })
  // let membersData = await new Members(fields);
  // membersData.save();
  // return membersData;
  return [{}];
};

export default addMember;
