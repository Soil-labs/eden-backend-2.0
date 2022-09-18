import { Members } from "../../../../models/memberModel";
import { addMemberInput } from "../types";

const addMember = async (
  parent: { parent: any },
  args: { args: any; request: addMemberInput },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, name, avatar } = args.request;
  console.log("Mutation > addMember > args.fields = ", args.request);

  let fields: addMemberInput = <any>{};
  fields._id = _id;
  fields.registeredAt = new Date();

  if (name) fields.name = name;
  if (avatar) fields.avatar = avatar;

  console.log("fields = ", fields);

  let membersData = await Members.findOne({ _id: fields._id });

  console.log("membersData = ", membersData);

  if (!membersData) {
    membersData = await new Members(fields);
    console.log("membersData = ", membersData);
    await membersData.save();

    return membersData;
  } else {
    return membersData;
  }
};

export default addMember;
