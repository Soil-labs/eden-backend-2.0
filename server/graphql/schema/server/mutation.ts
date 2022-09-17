import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Server -------
    updateServer(fields: updateServerInput): Server
    #  ---------- Server -------
  }
`;
