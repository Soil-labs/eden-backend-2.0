import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Room -------
    createRoom(request: createRoomInput!): Room

    enterRoom(request: enterExitRoomInput!): Room

    exitRoom(request: enterExitRoomInput!): Room

    updateMemberInRoom(request: updateMemberInRoomInput): Member
    #  ---------- Room -------
  }
`;
