import { Members } from "../../../../models/memberModel";
import { UpdateMemberInput, Member } from "../../../../generated";
const { ApolloError } = require("apollo-server-express");

const updateMember = async (
  parent: any,
  args: { request: UpdateMemberInput },
  context: any,
  info: any,
) => {
  try {
    const { _id, discordID, name, avatar, discriminator } = args.request;
    console.log("Mutation > updateMember > args.fields = ", args.request);

    if (discordID?.length !== 18) throw new Error("discordID invalid");

    if (_id && discordID) throw new Error("Only one of _id or discordID can be used");

    let fields: Member = <any>{};
    fields.discordID = discordID;
    fields.registeredAt = new Date();

    if (name) fields.name = name;
    if (avatar) fields.avatar = avatar;
    if (discriminator) fields.discriminator = discriminator;

    let request;
    if (_id) {
      request = { _id };
    } else if (discordID) {
      request = { discordID };
    } else {
      throw new Error("No _id or discordID provided");
    }

    let membersData = await Members.findOne(request);

    if (!membersData) {
      membersData = await new Members(fields).save();

      return membersData;
    } else {
      const newMemebersData = await Members.findOneAndUpdate(request, fields, {
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
