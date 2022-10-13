import { Rooms } from "../../../../models/roomModel";
import { ApolloError } from "apollo-server-express";
import { EnterExitRoomInput, Member, Room } from "../../../../generated";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();

const exitRoom = async (
  parent: any,
  args: { request: EnterExitRoomInput },
  context: any,
  info: any,
): Promise<Room> => {
  const { roomID, memberID } = args.request;
  console.log("Mutation > exitRoom > args.fields = ", args.request);

  if (!roomID) throw new ApolloError("_id is required, the IDs come from Discord");
  if (!memberID) throw new ApolloError("You need to specify the memberId to Exit the Room");

  let fields: EnterExitRoomInput = {
    roomID,
    memberID,
  };

  try {
    let roomData: Room;

    roomData = await Rooms.findOne({ _id: fields.roomID });
    if (!roomData) throw new ApolloError("RoomId does Not exists");
    const isMemberInTheRoom = roomData.members?.indexOf(memberID as Member) === -1 ? false : true;

    if (!isMemberInTheRoom) throw new ApolloError("Member is not in the Room.");
    if (isMemberInTheRoom) {
      const tempMembers = roomData.members;

      const updatedMember = tempMembers?.filter(currentID => {
        return currentID != memberID;
      });
      roomData = await Rooms.findOneAndUpdate(
        { _id: fields.roomID },
        {
          members: updatedMember,
        },
        { new: true },
      );
    }
    pubsub.publish(roomData._id as string, {
      roomUpdated: roomData,
    });
    return roomData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "enterRoom", {
      component: "RoomMutation > enterRoom",
    });
  }
};

export default exitRoom;
