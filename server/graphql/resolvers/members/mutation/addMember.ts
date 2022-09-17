import { ApolloError } from "apollo-server-express";
import { Members } from "../../../../models/memberModel";

const addMember = async (
  parent: { parent: any },
  args: { args: any; fields: Fields },
  context: { context: any },
  info: { info: any }
) => {
  const {
    discordName,
    _id,
    discordAvatar,
    discriminator,
    bio,
    // hoursPerWeek,
    // previusProjects,
    // invitedBy,
    // serverID,
  } = args.fields;
  console.log("Mutation > addMember > args.fields = ", args.fields);
  if (!_id) throw new ApolloError("_id is required, the IDs come from Discord");

  let fields: Fields = <any>{};
  fields._id = _id;
  fields.registeredAt = new Date();

  if (discordName) fields.discordName = discordName;
  if (discordAvatar) fields.discordAvatar = discordAvatar;
  if (discriminator) fields.discriminator = discriminator;
  if (bio) fields.bio = bio;

  //let membersData = await Members.findOne({ _id: fields._id })
  let membersData = await new Members(fields);
  membersData.save();
  return membersData;
};

export default addMember;
