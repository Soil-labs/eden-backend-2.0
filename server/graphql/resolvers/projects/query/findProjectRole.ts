import { Projects } from "../../../../models/projectModel";
import { FindProjectRoleInput, ProjectRole, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findProjectRole = async (
  parent: any,
  args: {
    request: FindProjectRoleInput;
  },
  context: any,
  info: any,
): Promise<ProjectRole> => {
  try {
    const { projectID, roleID } = args.request;
    console.log("Query > findProjectRole > args.request = ", args.request);

    if (!projectID || !roleID) throw new ApolloError("The projectID and the roleID is required");

    const projects: Project = await Projects.findOne({ _id: projectID });

    if (!projects) throw new ApolloError("The project with the supplied projectID does not exist");

    const roles = projects?.roles as ProjectRole[];

    if (roles?.length) {
      //find the role.
      const role = roles.find(role => role?._id === roleID) as ProjectRole;
      if (role) {
        console.log("role data ", role);
        return role;
      } else {
        throw new ApolloError("The role does not exist");
      }
    } else {
      throw new ApolloError("No role exist on the project");
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findProjectRole", {
      component: "ProjectQuery > findProjectRole",
    });
  }
};

export default findProjectRole;
