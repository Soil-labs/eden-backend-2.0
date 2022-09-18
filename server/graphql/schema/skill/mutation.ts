import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ------------ Skills -----------
    addSkill(request: addSkillInput!): Skill
    addSkills(request: [addSkillInput]!): [Skill]

    approveOrRejectSkills(request: [approveOrRejectSkillInput]): [Skill]

    addRelatedSkills(request: addRelatedSkillsInput): [Skill]
    #  ------------ Skills -----------
  }
`;
