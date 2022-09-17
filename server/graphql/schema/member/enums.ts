import { gql } from "apollo-server-core";

export default gql`
  enum MemberOrderField {
    _id
    registeredAt
    name
  }
`;
