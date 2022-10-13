import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ---------- Skill Sub Category -------
    updateSkillSubCategory(request: updateSkillSubCategoryInput): SkillSubCategory
    deleteSkillSubCategory(request: deleteSkillSubCategoryInput): String
    #  ---------- Skill Sub Category -------
  }
`;
