import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    # ------- Member General ------
    addMember(request: addMemberInput!): Member
    updateMember(request: updateMemberInput!): Member

    # ------- Member Skills ------
    addMemberSkills(request: addMemberSkillsInput!): Member
    deleteMemberSkills(skillID: [ID!]!): Member
  }
`;
