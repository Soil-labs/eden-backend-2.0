import { gql } from "apollo-server-core";
export default gql`
  type Query {
    #  ------------ Skill -----------
    findSkill(request: findSkillInput): Skill

    findSkills(
      request: findSkillsInput
      orderBy: SkillOrderBy
      after: String
      before: String
      limit: Int
    ): FindSkillsCursorOutput

    waitingToAproveSkills(request: findSkillsInput): [Skill]

    # TODO: Merge this into findSkills
    searchSkillsAutocomplete(request: skillsAutocompleteInput): [Skill]
  }
`;
