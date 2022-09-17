import { gql } from "apollo-server-core";

export default gql`
  #  ----------- Room ----------------
  input findRoomInput {
    _id: ID
  }

  input createRoomInput {
    _id: String
    name: String
  }

  input enterExitRoomInput {
    roomID: ID
    memberID: ID
  }

  input updateMemberInRoomInput {
    roomID: ID
    memberID: ID
    updateMember: updateMemberInput
  }
  #  ----------- Room ----------------
`;
