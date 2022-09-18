import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ---------- Room -------
    findRoom(request: findRoomInput): Room
    #  ---------- Room -------
  }
`;
