import { gql } from "apollo-server-core";
export default gql`

type SkillSubCategory {
    _id: ID
    name: String
    description: String

    skills: [Skill]
    categoriesSkill: [SkillCategory]

    lightcastID: String

    emoji: String
  }

`;
