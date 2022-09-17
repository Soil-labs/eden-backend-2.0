import { gql } from "apollo-server-core";

export default gql`
  #  ----------- Room ----------------
  type Room {
    _id: ID
    name: String
    members: [Member]
    registeredAt: String
  }
`;
