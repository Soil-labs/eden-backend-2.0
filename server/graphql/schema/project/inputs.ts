import { gql } from "apollo-server-core";

export default gql`
  # ---------- QUERY - Functions --------------

  # ------- Project General - Functions ------
  input findProjectInput {
    _id: ID!
  }

  # ------- findProjects ------
  input findProjectsInput {
    _id: [ID]
    serverID: [String]
    gardenServerID: String
  }

  # ------- findProjects ------

  # ------- Project General - Functions ------

  # ------- Project Role - Functions ------
  input findProjectRoleInput {
    _id: ID!
  }

  input findProjectRolesInput {
    _id: [ID]
  }
  # ------- Project Role - Functions ------

  # ---------- QUERY - Functions --------------

  # ---------- MUTATION - Functions --------------

  # ------- Project General - Functions ------
  input addProjectInput {
    title: String
  }

  input updateProjectInput {
    _id: ID!
    title: String
    description: String
  }
  # ------- Project General - Functions ------

  # ------- Project Role - Functions ------
  input addProjectRoleInput {
    title: String
    description: String
  }

  input updateProjectRoleInput {
    """
    The ID of the Role
    """
    _id: ID!
    title: String
    description: String
  }
  # ------- Project Role - Functions ------

  # ------- Project Team Member - Functions ------
  input addProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!
  }
  input updateProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!

    phase: PhaseProjectTeamMemberEnum
  }
  input deleteProjectTeamMemberInput {
    projectID: ID!
    memberID: ID!
    roleID: ID!
  }

  input ProjectOrderBy {
    field: ProjectOrderField
    direction: OrderDirection
  }
`;
