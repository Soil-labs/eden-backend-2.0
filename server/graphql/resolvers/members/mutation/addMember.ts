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
    const { discordID, name, avatar, discriminator } = args.request;
    console.log("Mutation > addMember > args.fields = ", args.request);

    if (discordID?.length !== 18) throw new Error("discordID invalid");

    let fields: Member = {};
    fields.discordID = discordID;
    fields.registeredAt = new Date();

    if (name) fields.name = name;
    if (avatar) fields.avatar = avatar;
    if (discriminator) fields.discriminator = discriminator;
    if (discordID) fields.discordID = discordID;

    let membersData = await Members.findOne({ discordID: fields.discordID });

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
