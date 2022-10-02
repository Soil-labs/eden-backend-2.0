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
