import { Projects } from "../../../../models/projectModel";
import { FindProjectRolesInput, ProjectRole, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findProjectRoles = async (
  parent: any,
  args: {
    request: FindProjectRolesInput;
  },
  context: any,
  info: any,
) => {
  try {
    const { projectID, roleID } = args.request;
    console.log("Query > findProjectRole > args.request = ", args.request);

    if (!projectID || !roleID) throw new ApolloError("The projectID and the roleID is required");

    const projects: Project = await Projects.findOne({ _id: projectID });

    if (!projects) throw new ApolloError("The project with the supplied projectID does not exist");

    const roles = projects?.roles as ProjectRole[];

    if (roles?.length) {
      //find the role.
      let rolesArray: ProjectRole[] = [];
      roles.forEach((role: any) => {
        if (roleID.includes(role._id)) {
          rolesArray.push(role);
        }
      });

      if (rolesArray.length) {
        console.log("roles array 🔥 ", rolesArray);
        return rolesArray;
      } else {
        throw new ApolloError("The roleID does not exist on the project");
      }
    } else {
      throw new ApolloError("No roles exist on the project yet");
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findProjectRoles", {
      component: "ProjectQuery > findProjectRoles",
    });
  }
};

export default findProjectRoles;
