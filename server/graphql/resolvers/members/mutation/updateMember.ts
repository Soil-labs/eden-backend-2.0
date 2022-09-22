import { Members } from "../../../../models/memberModel";
import { UpdateMemberInput, Member } from "../../../../generated";
const { ApolloError } = require("apollo-server-express");

const updateMember = async (
  parent: { parent: any },
  args: { args: any; request: UpdateMemberInput },
  context: { context: any },
  info: { info: any },
) => {
  try {
    const { _id, name, avatar, discriminator } = args.request;
    console.log("Mutation > updateMember > args.fields = ", args.request);

    if (!_id) throw new Error("_id (from Discord) is required to update member");
    if (_id.length !== 18) throw new Error("_id invalid");

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
      const newMemebersData = await Members.findOneAndUpdate({ _id: fields._id }, fields, {
        new: true,
      });
      return newMemebersData;
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberMutation > updateMember",
    });
  }
};

export default updateMember;
