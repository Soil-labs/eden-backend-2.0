import { gql } from "apollo-server-core";

export default gql`
  """
  Choose the website that you want to save for this link
  """
  enum nameEnum {
    GITHUB
    LINKEDIN
    INSTAGRAM
    YOUTUBE
    TWITTER
    DEWORK
    LENS
    OTHER
  }

  enum OrderField {
    PUBLISHED_AT
    UPDATED_AT
  }

  enum OrderDirection {
    ASC
    DESC
  }

  enum PhaseNote {
    OPEN
    ARCHIVE
  }
`;
