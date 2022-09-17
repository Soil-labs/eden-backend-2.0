import { gql } from "apollo-server-core";

export default gql`
  input OrderBy {
    field: OrderField
    direction: OrderDirection
  }

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

  # --------- Match -------------

  # ------- matchProjectsToMember ------
  input matchProjectsToMemberInput {
    memberID: ID!
    serverID: [ID]
  }

  # ------- matchMembersToProject ------
  input matchMembersToProjectInput {
    projectID: ID!
    serverID: [ID]
  }

  # ------- matchMembersToProject ------

  input matchMembersToProjectRoleInput {
    projectRoleID: ID!
    serverID: [ID]
  }

  input matchMembersToSkillsInput {
    skillIDs: [ID]!
    serverID: [ID]
  }

  input matchMembersToUserInput {
    memberID: ID!
    serverID: [ID]
  }
`;
