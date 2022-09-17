import { gql } from "apollo-server-core";
module.exports = gql`
  type Skill {
    _id: ID
    name: String
    description: String

    state: approvedSkillEnum

    subCategorySkill: [SkillSubCategory]
    categorySkills: [SkillCategory]

    relatedSkills: [Skill]

    lightcastID: String

    registeredAt: String
  }

  enum approvedSkillEnum {
    waiting
    rejected
    approved
  }

  """
  💡 Every Skill have the information and the level
  """
  type SkillAndLevel {
    info: Skill
    level: levelEnum
  }

  """
  🛠 This is the Level of proficiency for this specific Skill
  """
  enum levelEnum {
    LEARNING
    JUNIOR
    MID
    SENIOR
    OTHER
  }

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

  type FindSkillsCursorOutput {
    edges: [SkillEdge]
    pageInfo: PageInfo
  }
  type SkillEdge {
    cursor: String
    node: Skill
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