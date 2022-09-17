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

  """
  Choose the website that you want to save for this link
  """
  enum nameEnum {
    GITHUB
    LINKEDIN
    INSTAGRAM
    YOUTUBE
    TWITTER
    DEWORK
    LENS
    OTHER
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    startCursor: String
    endCursor: String
  }

  input OrderBy {
    field: OrderField
    direction: OrderDirection
  }

  enum OrderField {
    PUBLISHED_AT
    UPDATED_AT
  }

  enum OrderDirection {
    ASC
    DESC
  }

  #  ----------- Room ----------------
  type Room {
    _id: ID
    name: String
    members: [Member]
    registeredAt: String
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
  # ------- matchProjectsToMember ------

  # ------- matchMembersToProject ------
  input matchMembersToProjectInput {
    projectID: ID!
    serverID: [ID]
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
  # --------- Match -------------
`;
