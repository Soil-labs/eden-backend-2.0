import { Servers } from "../../../../models/serverModel";
import { ApolloError } from "apollo-server-express";
import { Server, UpdateServerInput } from "../../../../generated";

const updateServer = async (
  parent: any,
  args: { request: UpdateServerInput },
  context: any,
  info: any,
): Promise<Server> => {
  const { _id, name, adminID, adminRolesID, adminCommandsID } = args.request;
  console.log("Mutation > updateServer > args.request = ", args.request);
  if (!_id) throw new ApolloError("_id -> serverID is required");

  let fields: Server = {};

  if (_id) fields._id = _id;
  if (name) fields.name = name;
  if (adminID) fields.adminID = adminID;
  if (adminRolesID) fields.adminRoles = adminRolesID;
  if (adminCommandsID) fields.adminCommands = adminCommandsID;

  //let isNewServer = false;

  try {
    let serverData: any;
    if (_id) {
      serverData = await Servers.findOne({ _id: _id });
      if (!serverData) {
        serverData = await new Servers(fields);
        serverData.save();
        //isNewServer = true;
      } else {
        serverData = await Servers.findOneAndUpdate(
          { _id: serverData._id },
          {
            $set: fields,
          },
          { new: true },
        );
      }
    } else {
      serverData = await new Servers(fields);
      serverData.save();
      //isNewServer = true;
    }

    return serverData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateServer", {
      component: "ServerMutation > updateServer",
    });
  }
};

export default updateServer;
