import { gql } from "apollo-server-core";

export default gql`
  input findSkillSubCategoriesInput {
    _id: [ID]
    lightcastID: [ID]
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
