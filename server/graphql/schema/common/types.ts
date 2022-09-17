import { gql } from "apollo-server-core";

export default gql`
  """
  💡 You can either use the handle or the url of the link
  """
  type Link {
    name: nameEnum

    """
    The url need to be constracted at the Front, even if only the handle is used, the backEnd need to take the whole url
    """
    url: String

    """
    If the name is Other you can choose the name
    """
    nameCustom: String
    """
    If the name is Other you can save your image on the FrontEnd
    """
    imgCustom: String
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    start: String
    end: String
  }
`;
