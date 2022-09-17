import { gql } from "apollo-server-core";

export default gql`
  # ---------- QUERY - Functions --------------
  input findMemberInput {
    _id: ID
    serverID: [String]
  }

  #  ------- findMembers ------
  input findMembersInput {
    _id: [ID]
    serverID: [String]
  }

  #  ------- searchMembersAutocomplete ------
  input searchMembersAutocompleteInput {
    search: String
    serverID: [ID]
  }

  # ------- Member General - Functions ------
  input addMemberInput {
    _id: ID
    name: String
    avatar: String
    discriminator: String
  }

  input updateMemberInput {
    _id: ID
    name: String
    avatar: String
    discriminator: String
  }
  # ------- Member General - Functions ------

  # ------- Member Skills - Functions ------
  input addMemberSkillsInput {
    memberID: ID!
    skills: [SkillAndLevelInput]!
  }

  input MemberOrderBy {
    field: MemberOrderField
    direction: OrderDirection
  }
`;
