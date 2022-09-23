import { Members } from "../../../../models/memberModel";
import { AddMemberInput, Member } from "../../../../generated";
const { ApolloError } = require("apollo-server-express");

const addMember = async (
  parent: any,
  args: { request: AddMemberInput },
  context: any,
  info: any,
) => {
  try {
    const { discordId, name, avatar, discriminator } = args.request;
    console.log("Mutation > addMember > args.fields = ", args.request);

    if (!discordId) throw new Error("discordId (from Discord) is required to add member");
    if (discordId.length !== 18) throw new Error("discordId invalid");

    let fields: Member = {};
    fields.discordId = discordId;
    fields.registeredAt = new Date();

    if (name) fields.name = name;
    if (avatar) fields.avatar = avatar;
    if (discriminator) fields.discriminator = discriminator;

    let membersData = await Members.findOne({ discordId: fields.discordId });

    if (!membersData) {
      membersData = await new Members(fields).save();

      return membersData;
    } else {
      return membersData;
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberMutation > updateMember",
    });
  }
};

export default addMember;
