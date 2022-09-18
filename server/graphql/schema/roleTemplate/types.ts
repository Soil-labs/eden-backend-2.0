import { gql } from "apollo-server-core";

export default gql`
  #  ----------- Room ----------------
  type RoleTemplate {
    _id: ID
    title: String
    description: String
    skills: [Skill]
  }
`;
