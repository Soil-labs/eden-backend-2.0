import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    # ------- Member General ------
    addMember(request: addMemberInput!): Member

    updateMember(request: updateMemberInput!): Member

    # ------- Member Skills ------
    addSkillsToMember(request: AddSkillsToMemberInput!): Member

    deleteSkillsFromMember(request: DeleteSkillsFromMemberInput): Member
  }
`;
