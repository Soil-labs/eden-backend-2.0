import { gql } from "apollo-server-core";

export default gql`
  # scalar Date

  """
  This is the Member of Eden 🌳
  """
  type Member {
    _id: ID
    # The Discord Name of the member
    name: String
    # The picture of the user on Discord
    avatar: String
    discriminator: String
    onbording: Onboarding
    general: General
    skills: [SkillAndLevel]
    projects: [ProjectOfMember]
    servers: [Server]
    registeredAt: String
  }

  """
  Automatically gets update by ProjectTeamMember
  """
  type ProjectOfMember {
    info: Project
    role: ProjectRole
    phase: PhaseProjectRoleEnum
  }

  """
  All the information about onboarding
  """
  type Onboarding {
    """
    💡 If someone finish the basic signup, this variable will be true
    """
    signup: Boolean
    """
    📝 Here you can see the progress of the signup for this user
    """
    percentage: Int
  }

  """
  This is the Content of the Member 🧑‍💼
  """
  type General {
    content: Content
    hoursPerWeek: Float
    timeZone: String
    """
    The Links that are saved during signup for the user
    """
    links: [Link]
  }

  type Content {
    bio: String
    interest: String
    mostProud: String
    showCaseAbility: String
  }

  """
  All the content that the user has created during signup ✍️
  """
  type Content {
    bio: String
    interest: String
    mostProud: String
    showCaseAbility: String
  }

  type FindMembersCursorOutput {
    members: [Member]
    pageInfo: PageInfo
  }
`;
