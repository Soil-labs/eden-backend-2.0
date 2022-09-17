import { gql } from "apollo-server-core";
export default gql`
  """
  This is the Member of Eden 🌳
  """ # ---------- Member --------------
  type Member {
    _id: ID

    """
    The Discord Name of the member
    """
    name: String
    """
    The picture of the user on Discord
    """
    avatar: String
    """
    On Discord every user has a discriminator that looks like H%1234 for example BluePandaH%231234
    """
    discriminator: String

    onbording: Onboarding

    skills: [SkillAndLevel]

    projects: [ProjectOfMember]

    servers: [Server]

    general: General

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
  This is the General of the Member 🧑‍💼
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


  """
  All the content that the user has created during signup ✍️
  """
  type Content {
    bio: String
    interest: String
    mostProud: String
    showCaseAbility: String
  }

  # ---------- Member --------------

  type FindMembersCursorOutput {
    edges: [MemberEdge]
    pageInfo: PageInfo
  }

  type MemberEdge {
    cursor: String
    node: Member
  }
  #  ------- findMembers ------

  #  ------- searchMembersAutocomplete ------

  # ---------- QUERY - Functions --------------

  # ---------- MUTATION - Functions --------------

  # ------- Member Skills - Functions ------

  # ---------- MUTATION - Functions --------------
`;
