import { gql } from "apollo-server-core";
module.exports = gql`
  type SkillCategory {
    _id: ID
    name: String
    description: String

    skills: [Skill]
    subCategoriesSkill: [SkillSubCategory]

    lightcastID: String

    emoji: String
  }

  input findSkillCategoriesInput {
    skillCategories: [ID]
  }

  input updateSkillCategoryInput {
    _id: ID
    name: String
    description: String

    skillsID: [ID]
    subCategoriesSkillID: [ID]

    lightcastID: ID

    emoji: String
  }
`;
