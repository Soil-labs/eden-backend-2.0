import { Projects } from "../../../../models/projectModel";
import { ProjectRole, AddProjectRoleInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";
import { v4 as uuidv4 } from "uuid";

const addProjectRole = async (
  parent: any,
  args: { request: AddProjectRoleInput },
  context: any,
  info: any,
) => {
  console.log("Mutation > addProjectRole > args.request = ", args.request);

  const { description, title, projectID } = args.request;

  if (!projectID) throw new ApolloError("The projectID is required");

  try {
    let project: Project = await Projects.findOne({ _id: projectID });
    if (!project) throw new ApolloError("The supplied projectID is not associated with a project");

    const role: ProjectRole = {};

    if (title) role.title = title;
    if (description) {
      role.content = {
        description: description,
      };
    }
    role._id = uuidv4();

    //add the new role to the roles array
    let rolesArray: any = [];
    if (project.roles?.length) {
      project.roles.push(role);
      rolesArray = project.roles;
    } else {
      rolesArray.push(role);
    }

    //update the project
    project = await Projects.findOneAndUpdate(
      { _id: projectID },

      {
        $set: { roles: rolesArray },
      },
      { new: true },
    );
    return role;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "addProjectRole", {
      component: "ProjectMutation > addProjectRole",
    });
  }
};

export default addProjectRole;
