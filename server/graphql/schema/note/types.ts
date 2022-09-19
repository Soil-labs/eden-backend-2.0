import { gql } from "apollo-server-core";

export default gql`
  type Note {
    _id: ID
    title: String
    content: String
  }

  type findNotesCursorOutput {
    notes: [Note]
    pageInfo: PageInfo
  }
`;
