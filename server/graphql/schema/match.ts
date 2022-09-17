import { gql } from "apollo-server-core";
module.exports = gql`
  # # ------- matchProjectsToMember ------

  # type matchProjectsCursorOutput{
  #     edges: [ProjectMatchEdge]
  #     pageInfo: PageInfo
  # }

  # type ProjectMatchEdge {
  #     cursor: String
  #     matchProject: MatchProjectInfo
  #     matchProjectRoles: [MatchProjectRole]
  # }

  # type MatchProjectInfo {
  #     project: Project
  #     matchPercentage: Int
  #     relatedSkills: [Skill]
  # }

  # type MatchProjectRole {
  #     role: ProjectRole
  #     matchPercentage: Int
  #     relatedSkills: [Skill]
  # }

  # input matchProjectsToMemberInput {
  #     memberID: ID!
  #     serverID: [ID]
  # }

  # # ------- matchProjectsToMember ------

  # # ------- matchMembersToProject ------
  # type matchMembersCursorOutput{
  #     edges: [MemberMatchEdge]
  #     pageInfo: PageInfo
  # }

  # type MemberMatchEdge {
  #     cursor: String
  #     member: Member
  #     matchPercentage: Int
  #     relatedSkills: [Skill]
  # }

  # input matchMembersToProjectInput {
  #     projectID: ID!
  #     serverID: [ID]
  # }

  # # ------- matchMembersToProject ------

  # input matchMembersToProjectRoleInput {
  #     projectRoleID: ID!
  #     serverID: [ID]
  # }

  # input matchMembersToSkillsInput {
  #     skillIDs: [ID]!
  #     serverID: [ID]
  # }

  # input matchMembersToUserInput {
  #     memberID: ID!
  #     serverID: [ID]
  # }
`;
