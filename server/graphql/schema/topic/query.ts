import { gql } from "apollo-server-core";

export default gql`
  type Query {
    findTopics(
      request: findTopicsInput
      orderBy: SkillOrderBy
      after: String
      before: String
      limit: Int
    ): FindOtpicsCursorOputput
  }
`;
