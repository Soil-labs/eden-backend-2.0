import { gql } from "apollo-server-core";

export default gql`
  # ---------- QUERY - Functions --------------
  input findMemberInput {
    discordID: String
    id: ID
  }

  #  ------- findMembers ------
  input findMembersInput {
    discordID: [String]
    serverID: [String]
  }

  #  ------- searchMembersAutocomplete ------
  input searchMembersAutocompleteInput {
    search: String
    serverID: [ID]
  }

  # ------- Member General - Functions ------
  input addMemberInput {
    discordID: String
    name: String
    avatar: String
    discriminator: String
  }

  input updateMemberInput {
    _id: String
    discordID: String
    name: String
    avatar: String
    discriminator: String
  }

  input updateMemberFullDetailsInput {
    _id: ID
    discordID: String
    name: String
    avatar: String
    discriminator: String
    onbording: OnboardingInput
    general: GeneralInput
    skills: [SkillAndLevelInput]
    projects: [ProjectOfMemberInput]
    servers: [ID]
  }

  input OnboardingInput {
    signup: Boolean
    percentage: Int
  }

  input GeneralInput {
    content: ContentInput
    hoursPerWeek: Float
    timeZone: String
    links: [LinkInput]
  }

  input ContentInput {
    bio: String
    interest: String
    mostProud: String
    showCaseAbility: String
  }

  input ProjectOfMemberInput {
    projectID: ID
    projectRoleID: ID
    phase: PhaseProjectRoleEnum
  }


  


  # ------- Member General - Functions ------

  # ------- Member Skills - Functions ------
  input AddSkillsToMemberInput {
    memberID: ID!
    skills: [SkillAndLevelInput]!
  }

  input DeleteSkillsFromMemberInput {
    memberID: ID!
    skills: [ID!]!
  }

  input MemberOrderBy {
    field: OrderableMemberField
    direction: OrderDirection
  }
`;
