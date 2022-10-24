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
    projectID: ID!
    roleID: ID
  }

  input findProjectRolesInput {
    projectID: ID
    roleID: [ID]
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
    projectID: ID!
  }

  input updateProjectRoleInput {
    """
    The ID of the Role
    """
    projectID: ID!
    roleID: ID!
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

  input deleteProjectRoleInput {
    projectID: ID!
    roleID: ID!
  }

  input ProjectOrderBy {
    field: OrderableProjectField
    direction: OrderDirection
  }

  
`;
