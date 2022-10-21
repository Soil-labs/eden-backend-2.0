import { Servers } from "../../../../models/serverModel";
import { ApolloError } from "apollo-server-express";
import { Server, FindServerInput } from "../../../../generated";

const findServers = async (
  parent: any,
  args: { request: FindServerInput },
  context: any,
  info: any,
): Promise<Server[]> => {
  const { serverID } = args.request;
  console.log("Query > findServers > args.request = ", args.request);

  try {
    let searchTerm = {};

    if (serverID) {
      searchTerm = { _id: serverID };
    } else {
      searchTerm = {};
    }

    let serverData = await Servers.find(searchTerm);

    return serverData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findServers", {
      component: "ServerQuery > findServers",
    });
  }
};

export default findServers;
