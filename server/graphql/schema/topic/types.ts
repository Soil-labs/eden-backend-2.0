import { gql } from "apollo-server-core";

export default gql`
  type Topic {
    _id: ID
    name: String
    description: String
    notes: [ID]
  }

  type FindOtpicsCursorOputput {
    topics: [Topic]
    pageInfo: PageInfo
  }
`;
