import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ------------ Match -----------
    """
    For a Specific Member find -> 1) all the Projects that match 2) the persentage of Project match 3) all the Roles that match 4) the percentage of ProjectRole
    """
    matchProjectsToMember(
      request: matchProjectsToMemberInput
      orderBy: OrderBy
      cursor: String
      limit: Int
    ): matchProjectsCursorOutput

    """
    For a Specific Project find -> 1) all the Members that match 2) the persentage of match 3) related Skills
    """
    matchMembersToProject(
      request: matchMembersToProjectInput
      orderBy: OrderBy
      cursor: String
      limit: Int
    ): matchMembersCursorOutput

    """
    For a Specific Project Role find -> 1) all the Members that match 2) the persentage of match 3) related Skills
    """
    matchMembersToProjectRole(
      request: matchMembersToProjectRoleInput
      orderBy: OrderBy
      cursor: String
      limit: Int
    ): matchMembersCursorOutput

    """
    For Specific Skills find -> 1) all the Members that match 2) the persentage of match 3) related skills
    """
    matchMembersToSkills(
      request: matchMembersToSkillsInput
      orderBy: OrderBy
      cursor: String
      limit: Int
    ): matchMembersCursorOutput

    """
    For Specific User find -> 1) all the Members that match 2) the persentage of match 3) related skills
    """
    matchMembersToUser(
      request: matchMembersToUserInput
      orderBy: OrderBy
      cursor: String
      limit: Int
    ): matchMembersCursorOutput
    #  ------------ Match -----------
  }
`;
