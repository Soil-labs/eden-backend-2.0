import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Server -------
    updateServer(request: updateServerInput): Server
    #  ---------- Server -------
  }
`;
