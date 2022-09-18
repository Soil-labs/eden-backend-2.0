import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    updateNote(request: updateNoteInput!): Note
  }
`;
