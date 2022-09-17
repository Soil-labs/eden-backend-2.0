import { gql } from "apollo-server-core";
module.exports = gql`
  type Server {
    _id: ID
    name: String
    adminID: [String]
    adminRoles: [String]
    adminCommands: [String]
  }

  input findServerInput {
    serverID: [ID]
  }

  input updateServerInput {
    _id: ID
    name: String
    adminID: [String]
    adminRolesID: [String]
    adminCommandsID: [String]
  }
`;
