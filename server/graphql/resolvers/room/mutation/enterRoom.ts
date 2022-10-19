import { Rooms } from "../../../../models/roomModel";
import { Members } from "../../../../models/memberModel";
import { ApolloError } from "apollo-server-express";
import { EnterExitRoomInput } from "../../../../generated";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();

const enterRoom = async (
  parent: any,
  args: { request: EnterExitRoomInput },
  context: any,
  info: any,
) => {
  const { roomID, memberID } = args.request;
  console.log("Mutation > enterRoom > args.request = ", args.request);
  if (!roomID) throw new ApolloError("_id is required, the IDs come from Discord");
  if (!memberID) throw new ApolloError("You need to specify the memberId to enter the Room");

  let fields: EnterExitRoomInput = {
    roomID,
    memberID,
  };

  try {
    let roomData: any;
    roomData = await Rooms.findOne({ _id: fields.roomID });
    if (!roomData) throw new ApolloError("RoomId does Not exists");
    const member = await Members.findOne({ _id: memberID });
    if (!member) throw new ApolloError("Member does not exist with the passed memberID");

    const isMemberInTheRoom = roomData.members?.indexOf(memberID) === -1 ? false : true;
    if (!isMemberInTheRoom) {
      const updatedMember = [...roomData.members, memberID];
      roomData = await Rooms.findOneAndUpdate(
        { _id: fields.roomID },
        {
          members: updatedMember,
        },
        { new: true },
      );
    }
    pubsub.publish(roomData._id, {
      roomUpdated: roomData,
    });

    return roomData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "enterRoom", {
      component: "RoomMutation > enterRoom",
    });
  }
};

export default enterRoom;
