import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ---------- Room -------
    findRoom(fields: findRoomInput): Room
    #  ---------- Room -------
  }
`;
