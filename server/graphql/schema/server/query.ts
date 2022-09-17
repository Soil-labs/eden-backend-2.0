import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ------------ Server -----------
    findServers(request: findServerInput): [Server]
    #  ------------ Server -----------
  }
`;
