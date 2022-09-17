import { gql } from "apollo-server-core";

export default gql`

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

 

  """
  💡 Every Skill have the information and the level
  """
  type SkillAndLevel {
    info: Skill
    level: levelEnum
  }

  type FindSkillsCursorOutput {
    edges: [SkillEdge]
    pageInfo: PageInfo
  }
  type SkillEdge {
    cursor: String
    node: Skill
  }
`;
