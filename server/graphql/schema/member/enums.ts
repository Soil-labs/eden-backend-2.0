import { gql } from "apollo-server-core";

export default gql`
  enum OrderableMemberField {
    _id
    registeredAt
    name
  }
`;
