import { Members } from "../../../../models/memberModel";
import { AddMemberInput, Member } from "../../../../generated";

const addMember = async (
  parent: { parent: any },
  args: { args: any; request: AddMemberInput },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, name, avatar, discriminator } = args.request;
  console.log("Mutation > addMember > args.fields = ", args.request);

  let fields: Member = <any>{};
  fields._id = _id;
  fields.registeredAt = new Date();

  if (name) fields.name = name;
  if (avatar) fields.avatar = avatar;
  if (discriminator) fields.discriminator = discriminator;

  let membersData = await Members.findOne({ _id: fields._id });

  if (!membersData) {
    membersData = await new Members(fields).save();

    return membersData;
  } else {
    return membersData;
  }
};

export default addMember;
