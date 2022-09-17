import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Room -------
    createRoom(fields: createRoomInput!): Room

    enterRoom(fields: enterExitRoomInput!): Room

    exitRoom(fields: enterExitRoomInput!): Room

    updateMemberInRoom(fields: updateMemberInRoomInput): Member
    #  ---------- Room -------
  }
`;
