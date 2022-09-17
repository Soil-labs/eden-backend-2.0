import { gql } from "apollo-server-core";
export default gql`
  type Query {
    # ------- Project General ------
    findProject(request: findProjectInput): Project

    findProjects(
      request: findProjectsInput
      orderBy: ProjectOrderBy
      after: String
      before: String
      limit: Int
    ): FindProjectsCursorOutput

    # ------- Project Role ------
    findProjectRole(request: findProjectRoleInput): ProjectRole

    findProjectRoles(request: findProjectRolesInput): [ProjectRole]
  }
`;
