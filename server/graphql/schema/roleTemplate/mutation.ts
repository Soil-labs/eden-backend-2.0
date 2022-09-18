import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    updateRoleTemplate(request: updateRoleTemplateInput!): RoleTemplate
  }
`;
