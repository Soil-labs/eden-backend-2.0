import { gql } from "apollo-server-core";
module.exports = gql`
  # ---------- Member --------------

  type Project {
    _id: ID
    title: String

    """
    Team Members of the Project
    """
    teamMembers: [ProjectTeamMember]

    """
    Available Roles of the Project
    """
    roles: [ProjectRole]

    serverID: [String]
    gardenServerID: String
  }

  type ProjectContent {
    description: String
    emoji: String
    color: String

    links: [Link]

    budget: Budget

    dates: datesType
  }

  type ProjectTeamMember {
    """
    Information of this Team Member 👬
    """
    info: Member
    """
    The Role of this Member in the Project
    """
    role: ProjectRole
    """
    Phase of the application for this member
    """
    phase: PhaseProjectTeamMemberEnum
  }

  """
  This is the Roles of the Project
  """
  type ProjectRole {
    _id: ID
    title: String
    content: ProjectRoleContent

    skills: [SkillAndLevel]

    phase: PhaseProjectRoleEnum
  }

  type ProjectRoleContent {
    description: String

    dateRangeStart: String
    dateRangeEnd: String
    hoursPerWeek: Int
    budget: Budget
  }

  type Budget {
    token: String
    perHour: String
    totalBudget: String
  }

  type datesType {
    kickOff: String
    complition: String
  }

  """
  Keep track of the phase of application 👦 for a project 👩‍🍳
  """
  enum PhaseProjectTeamMemberEnum {
    SHORTLISTED
    ENGAGED
    COMMITTED
    REJECTED
    INVITED
  }

  """
  Keep track of the phase of Role 🎨 for a project 👩‍🍳
  """
  enum PhaseProjectRoleEnum {
    OPEN
    CLOSED
  }

  # ---------- Member --------------

  # ---------- QUERY - Functions --------------

  # ------- Project General - Functions ------
  input findProjectInput {
    _id: ID!
  }

  # ------- findProjects ------
  input findProjectsInput {
    _id: [ID]
    serverID: [String]
    gardenServerID: String
  }

  type FindProjectsCursorOutput {
    edges: [ProjectEdge]
    pageInfo: PageInfo
  }

  type ProjectEdge {
    cursor: String
    node: Project
  }
  # ------- findProjects ------

  # ------- Project General - Functions ------

  # ------- Project Role - Functions ------
  input findProjectRoleInput {
    _id: ID!
  }

  input findProjectRolesInput {
    _id: [ID]
  }
  # ------- Project Role - Functions ------

  # ---------- QUERY - Functions --------------

  # ---------- MUTATION - Functions --------------

  # ------- Project General - Functions ------
  input addProjectInput {
    title: String
  }

  input updateProjectInput {
    _id: ID!
    title: String
    description: String
  }
  # ------- Project General - Functions ------

  # ------- Project Role - Functions ------
  input addProjectRoleInput {
    title: String
    description: String
  }

  input updateProjectRoleInput {
    """
    The ID of the Role
    """
    _id: ID!
    title: String
    description: String
  }
  # ------- Project Role - Functions ------

  # ------- Project Team Member - Functions ------
  input addProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!
  }
  input updateProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!

    phase: PhaseProjectTeamMemberEnum
  }
  input deleteProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!
  }
  # ------- Project Team Member - Functions ------

  # ---------- MUTATION - Functions --------------

  # # --------- Match -------------

  #     # ------- matchProjectsToMember ------
  #     input matchProjectsToMemberInput {
  #         memberID: ID!
  #         serverID: [ID]
  #     }

  #     type matchProjectsCursorOutput{
  #         edges: [ProjectMatchEdge]
  #         pageInfo: PageInfo
  #     }

  #     type ProjectMatchEdge {
  #         cursor: String
  #         matchProject: MatchProjectInfo
  #         matchProjectRoles: [MatchProjectRole]
  #     }

  #     type MatchProjectInfo {
  #         project: Project
  #         matchPercentage: Int
  #         relatedSkills: [Skill]
  #     }

  #     type MatchProjectRole {
  #         role: ProjectRole
  #         matchPercentage: Int
  #         relatedSkills: [Skill]
  #     }
  #     # ------- matchProjectsToMember ------

  #     # ------- matchMembersToProject ------
  #     input matchMembersToProjectInput {
  #         projectID: ID!
  #         serverID: [ID]
  #     }

  #     type matchMembersCursorOutput{
  #         edges: [MemberMatchEdge]
  #         pageInfo: PageInfo
  #     }

  #     type MemberMatchEdge {
  #         cursor: String
  #         member: Member
  #         matchPercentage: Int
  #         relatedSkills: [Skill]
  #     }
  #     # ------- matchMembersToProject ------

  #     input matchMembersToProjectRoleInput {
  #         projectRoleID: ID!
  #         serverID: [ID]
  #     }

  #     input matchMembersToSkillsInput {
  #         skillIDs: [ID]!
  #         serverID: [ID]
  #     }

  #     input matchMembersToUserInput {
  #         memberID: ID!
  #         serverID: [ID]
  #     }
  # # --------- Match -------------
`;