import { gql } from "apollo-server-core";

export default gql`
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
