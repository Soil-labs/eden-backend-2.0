import { gql } from "apollo-server-core";

export default gql`
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
  # ---------- Member --------------

  type FindProjectsCursorOutput {
    projects: [Project]
    pageInfo: PageInfo
  }
`;
