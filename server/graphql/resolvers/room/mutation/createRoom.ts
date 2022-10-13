import { Rooms } from "../../../../models/roomModel";
import { ApolloError } from "apollo-server-express";
import { Room, CreateRoomInput } from "../../../../generated";

const createRoom = async (
  parent: any,
  args: { request: CreateRoomInput },
  context: any,
  info: any,
): Promise<Room> => {
  const { _id, name } = args.request;
  console.log("Mutation > createRoom > args.fields = ", args.request);

  let fields: Room = {};
  if (_id) fields._id = _id;
  if (name) fields.name = name;

  try {
    let roomData: any;
    roomData = await Rooms.findOne({ _id: fields._id });

    if (!roomData) {
      roomData = await new Rooms(fields);
      roomData.save();
    } else {
      roomData = await Rooms.findOneAndUpdate(
        { name: fields.name },
        {
          $set: fields,
        },
        { new: true },
      );
    }
    return roomData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "createRoom", {
      component: "RoomMutation > createRoom",
    });
  }
};

export default createRoom;
