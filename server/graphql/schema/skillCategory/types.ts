import { gql } from "apollo-server-core";
export default gql`

  type Server {
    _id: ID
    name: String
    adminID: [String]
    adminRoles: [String]
    adminCommands: [String]
  }

`;
