import { gql } from "apollo-server-core";

export default gql`
  input findRoleTemplatesInput {
    _id: [ID]
  }

  input updateRoleTemplateInput {
    _id: ID
    title: String,
    description: String,
    skillsID: [ID],
  }
`;
