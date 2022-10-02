import { gql } from "apollo-server-core";

export default gql`
  input findSkillCategoriesInput {
    _id: [ID]
    lightcastID: [ID]
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
