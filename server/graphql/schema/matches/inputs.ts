import { gql } from "apollo-server-core";

export default gql`
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
