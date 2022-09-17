import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Skill Sub Category -------
    updateSkillSubCategory(fields: updateSkillSubCategoryInput): SkillSubCategory
    #  ---------- Skill Sub Category -------
  }
`;
