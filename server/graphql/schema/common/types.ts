import { gql } from "apollo-server-core";

export default gql`
  """
  💡 You can either use the handle or the url of the link
  """
  type Link {
    name: nameEnum

    """
    The url need to be constracted at the Front, even if only the handle is used, the backEnd need to take the whole url
    """
    url: String

    """
    If the name is Other you can choose the name
    """
    nameCustom: String
    """
    If the name is Other you can save your image on the FrontEnd
    """
    imgCustom: String
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    start: String
    end: String
  }

  #  ----------- Room ----------------
  type Room {
    _id: ID
    name: String
    members: [Member]
    registeredAt: String
  }

  type matchProjectsCursorOutput {
    edges: [ProjectMatchEdge]
    pageInfo: PageInfo
  }

  type ProjectMatchEdge {
    cursor: String
    matchProject: MatchProjectInfo
    matchProjectRoles: [MatchProjectRole]
  }

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

  type matchMembersCursorOutput {
    edges: [MemberMatchEdge]
    pageInfo: PageInfo
  }

  type MemberMatchEdge {
    cursor: String
    member: Member
    matchPercentage: Int
    relatedSkills: [Skill]
  }
`;
