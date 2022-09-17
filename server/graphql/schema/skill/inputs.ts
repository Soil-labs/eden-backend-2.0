import { gql } from "apollo-server-core";

export default gql`
    # ---------- QUERY - Functions --------------
  """
  💡 Every Skill have the skillID and the level
  """
  input SkillAndLevelInput {
    skillID: ID!
    level: levelEnum!
  }

  input findSkillInput {
    _id: ID
    lightcastID: String
  }

  # ---------- findSkillsInput - Query -----------
  input findSkillsInput {
    _id: [ID]
    lightcastID: [String]
    state: approvedSkillEnum
  }

  # ---------- findSkillsInput - Query -----------

  input skillsAutocompleteInput {
    search: String
  }
  # ---------- QUERY - Functions --------------

  # ---------- MUTATION - Functions --------------
  input addSkillInput {
    name: String
    state: approvedSkillEnum

    subCategorySkillID: [ID]
    categorySkillID: [ID]

    relatedSkillID: [ID]

    lightcastID: String
  }

  input approveOrRejectSkillInput {
    _id: ID
    state: approvedSkillEnum
  }

  input addRelatedSkillsInput {
    """
    This is the main skill that will be connected with the related skills 🛠
    """
    skillID: ID
    relatedSkillIDs: [ID]
  }
  # ---------- MUTATION - Functions --------------
`;
