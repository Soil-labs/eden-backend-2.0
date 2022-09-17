import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ------------ Skill Sub Category -----------
    findSkillSubCategories(request: findSkillSubCategoriesInput): [SkillSubCategory]
    #  ------------ Skill Sub Category -----------
  }
`;
