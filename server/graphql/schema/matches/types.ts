import { gql } from "apollo-server-core";

export default gql`
  type MatchProjectInfo {
    project: Project
    matchPercentage: Int
    relatedSkills: [Skill]
  }

  type MatchProjectRole {
    role: ProjectRole
    matchPercentage: Int
    relatedSkills: [Skill]
  }

  type matchProjectsCursorOutput {
    matches: [ProjectMatch]
    pageInfo: PageInfo
  }

  type ProjectMatch {
    matchProject: MatchProjectInfo
    matchProjectRoles: [MatchProjectRole]
  }

  type matchMembersCursorOutput {
    matches: [MemberMatch]
    pageInfo: PageInfo
  }

  type MemberMatch {
    member: Member
    matchPercentage: Int
    relatedSkills: [Skill]
  }
`;
