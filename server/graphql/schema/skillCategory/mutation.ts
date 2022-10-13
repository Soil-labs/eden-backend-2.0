import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Skill Category  -------
    updateSkillCategory(request: updateSkillCategoryInput): SkillCategory
    deleteSkillCategory(request: deleteSkillCategoryInput): String
    #  ---------- Skill Category  -------
  }
`;
