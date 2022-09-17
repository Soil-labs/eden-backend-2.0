import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Skill Category  -------
    updateSkillCategory(fields: updateSkillCategoryInput): SkillCategory
    #  ---------- Skill Category  -------
  }
`;
