import { Rooms } from "../../../../models/roomModel";
import { ApolloError } from "apollo-server-express";
import { FindRoomInput, Room } from "../../../../generated";

const findRoom = async (
  parent: any,
  args: { request: FindRoomInput },
  context: any,
  info: any,
): Promise<Room[]> => {
  const { _id } = args.request;
  console.log("Query > findRoom > args.request = ", args.request);

  let searchTerm = {};

  if (_id) {
    searchTerm = { _id: _id };
  }

  try {
    let roomData = await Rooms.findOne(searchTerm);

    return roomData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findRoom", {
      component: "RoomQuery > findRoom",
    });
  }
};

export default findRoom;
