import { gql } from "apollo-server-core";

export default gql`
  # ---------- QUERY - Functions --------------
  input findMemberInput {
    discordId: String
    serverID: [String]
  }

  #  ------- findMembers ------
  input findMembersInput {
    discordId: [String]
    serverID: [String]
  }

  #  ------- searchMembersAutocomplete ------
  input searchMembersAutocompleteInput {
    search: String
    serverID: [ID]
  }

  # ------- Member General - Functions ------
  input addMemberInput {
    discordId: String!
    name: String
    avatar: String
    discriminator: String
  }

  input updateMemberInput {
    discordId: String
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
