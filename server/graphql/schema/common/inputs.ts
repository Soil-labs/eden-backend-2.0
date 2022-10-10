import { gql } from "apollo-server-core";

export default gql`
  input OrderBy {
    field: OrderField
    direction: OrderDirection
  }

  input LinkInput {
    name: nameEnum
    url: String
    nameCustom: String
    imgCustom: String
  }
`;
