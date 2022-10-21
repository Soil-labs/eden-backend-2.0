import { Projects } from "../../../../models/projectModel";
import { ProjectRole, UpdateProjectRoleInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const updateProjectRole = async (
  parent: any,
  args: { request: UpdateProjectRoleInput },
  context: any,
  info: any,
): Promise<ProjectRole> => {
  const { projectID, roleID, title, description } = args.request;
  console.log("Mutation > updateProjectRole > args.request = ", args.request);
  if (!projectID || !roleID) throw new ApolloError("The projectID and roleID are required");

  try {
    let project: Project = await Projects.findOne({ _id: projectID });
    if (!project) throw new ApolloError("The project does not exist");
    //find the role
    let roleToEdit = project.roles?.find(role => role?._id === roleID);
    if (!roleToEdit) throw new ApolloError("The role does not exist on the project roles");

    //edit the role content

    if (title) {
      roleToEdit.title = title;
    }

    if (description) {
      if (roleToEdit.content) {
        roleToEdit.content.description = description;
      } else {
        roleToEdit.content = {
          description: description,
        };
      }
    }
    //remove the edited role from the initial project roles
    let newRoles = project.roles?.filter(role => role?._id != roleID);
    //add the edited role
    newRoles?.push(roleToEdit);
    //update the 🇩B
    await Projects.findOneAndUpdate(
      { _id: projectID },

      {
        $set: { roles: newRoles },
      },

      { new: true },
    );
    console.log("edited role ", roleToEdit);
    return roleToEdit;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateProjectRole", {
      component: "ProjectMutation > updateProjectRole",
    });
  }
};

export default updateProjectRole;
