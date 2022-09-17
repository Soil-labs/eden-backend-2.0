import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ------------ Project -----------

    # ------- Project General ------
    addProject(request: addProjectInput!): Project

    updateProject(request: updateProjectInput!): Project

    # ------- Project Role ------
    addProjectRole(request: addProjectRoleInput!): ProjectRole

    updateProjectRole(request: updateProjectRoleInput!): ProjectRole

    deleteProjectRole(_id: ID!): ProjectRole

    # ------- Project Team Member ------
    addProjectTeamMember(request: addProjectTeamMemberInput!): ProjectTeamMember

    updateProjectTeamMember(request: updateProjectTeamMemberInput!): ProjectTeamMember

    deleteProjectTeamMember(request: deleteProjectTeamMemberInput): ProjectTeamMember
  }
`;
