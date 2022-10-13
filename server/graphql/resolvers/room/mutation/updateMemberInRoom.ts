import { Members } from "../../../../models/memberModel";
import { ApolloError } from "apollo-server-express";
import {
  Room,
  UpdateMemberInRoomInput,
  UpdateMemberFullDetailsInput,
  Member,
  Server,
} from "../../../../generated";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();

const uniqueValueFilter = (arrayone: String[], arraytwo: String[]): String[] => {
  const uniqueSet = new Set([...arrayone, ...arraytwo]);
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
};

const updateMemberInRoom = async (
  parent: any,
  args: { request: UpdateMemberInRoomInput },
  context: any,
  info: any,
) => {
  const { roomID, updateMember, memberID } = args.request;

  const {
    avatar,
    discordID,
    discriminator,
    _id,
    name,
    skills,
    onbording,
    general,
    projects,
    servers,
  }: UpdateMemberFullDetailsInput = updateMember || {};

  console.log("Mutation > updateMemberInRoom > args.fields = ", args.request);

  if (!memberID) throw new ApolloError("member id is required");
  if (!roomID) throw new ApolloError("room id is required");

  let fields: Member = {};
  if (memberID) fields._id = memberID;
  if (avatar) fields.avatar = avatar;
  if (discordID) fields.discordID = discordID;
  if (name) fields.name = name;
  if (discriminator) fields.discriminator = discriminator;
  if (skills) fields.skills = skills;
  if (onbording) fields.onbording = onbording;
  if (general) fields.general = general;
  if (projects) fields.projects = projects;
  if (servers) fields.servers = servers as Server[];

  try {

    let membersData = await Members.findOne({ _id: fields._id });
    if (!membersData) {
      membersData = await new Members(fields);
      membersData.save();
    } else {
      if (onbording) {
        if (onbording.signup != undefined && onbording.percentage != undefined) {
          fields = { ...fields, onbording: onbording };
        } else if (onbording.signup != undefined) {
          fields = { ...fields, onbording: { ...membersData.onbording, signup: onbording.signup } };
        } else if (onbording.percentage != undefined) {
          fields = {
            ...fields,
            onbording: { ...membersData.onbording, percentage: onbording.percentage },
          };
        }
      }



      if (membersData.servers && servers) {
        let oldServersID: String[] = [...membersData.servers];
        let newServersID = uniqueValueFilter(oldServersID, servers as String[]);
        fields.servers = newServersID as Server[];
      }
      membersData = await Members.findOneAndUpdate({ _id: fields._id }, fields, { new: true });
    }

    pubsub.publish("SKILL_UPDATED_IN_ROOM" + roomID, {
      memberUpdatedInRoom: membersData,
    });
    return membersData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateMemberInRoom", {
      component: "RoomMutation > updateMemberInRoom",
    });
  }
};

export default updateMemberInRoom;
