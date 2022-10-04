import { gql } from "apollo-server-core";
export default gql`
  type SkillCategory {
    _id: ID
    name: String
    description: String

    skills: [Skill]
    skillSubCategories: [SkillSubCategory] 

    lightcastID: String

    emoji: String
  }
`;
