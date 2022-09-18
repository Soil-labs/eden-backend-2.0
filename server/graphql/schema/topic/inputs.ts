import { gql } from "apollo-server-core";

export default gql`
  input findTopicsInput {
    _id: [ID]
  }

  input updateTopicInput {
    _id: ID
    name: String
    description: String
    notesID: [ID]
  }
`;
