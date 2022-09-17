import { gql } from "apollo-server-core";

export default gql`
  """
  Keep track of the phase of application 👦 for a project 👩‍🍳
  """
  enum PhaseProjectTeamMemberEnum {
    SHORTLISTED
    ENGAGED
    COMMITTED
    REJECTED
    INVITED
  }

  """
  Keep track of the phase of Role 🎨 for a project 👩‍🍳
  """
  enum PhaseProjectRoleEnum {
    OPEN
    CLOSED
  }

  enum ProjectOrderField {
    _id
    title
  }
`;
