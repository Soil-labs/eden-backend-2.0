import { gql } from "apollo-server-core";
module.exports = gql`
  type SkillSubCategory {
    _id: ID
    name: String
    description: String

    skills: [Skill]
    categoriesSkill: [SkillCategory]

    lightcastID: String

    emoji: String
  }

  input findSkillSubCategoriesInput {
    skillSubCategories: [ID]
  }

  input updateSkillSubCategoryInput {
    _id: ID
    name: String
    description: String

    skillsID: [ID]
    categoriesSkillID: [ID]

    lightcastID: String

    emoji: String
  }
`;
