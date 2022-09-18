import { gql } from "apollo-server-core";

export default gql`
  type Query {
    findNotes(
      request: findNotesInput
      orderBy: SkillOrderBy
      after: String
      before: String
      limit: Int
    ): findNotesCursorOutput
  }
`;
