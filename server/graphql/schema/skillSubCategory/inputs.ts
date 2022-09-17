import { gql } from "apollo-server-core";

export default gql`
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
