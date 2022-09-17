import { gql } from "apollo-server-core";

export default gql`
  type Query {
    #  ------------ Skill Category -----------
    findSkillCategories(request: findSkillCategoriesInput): [SkillCategory]
    #  ------------ Skill Category -----------
  }
`;
