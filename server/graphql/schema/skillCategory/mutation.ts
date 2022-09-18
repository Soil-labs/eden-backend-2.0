import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Skill Category  -------
    updateSkillCategory(request: updateSkillCategoryInput): SkillCategory
    #  ---------- Skill Category  -------
  }
`;
