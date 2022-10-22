import { Projects } from "../../../../models/projectModel";
import { ProjectRole, DeleteProjectRoleInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const deleteProjectRole = async (
  parent: any,
  args: { request: DeleteProjectRoleInput },
  context: any,
  info: any,
): Promise<ProjectRole> => {
  const { projectID, roleID } = args.request;
  console.log("Mutation > deleteProjectRole > args.request = ", args.request);
  if (!projectID || !roleID) throw new ApolloError("The projectID and roleID are required");
  try {
    let project: Project = await Projects.findOne({ _id: projectID });

    if (!project) throw new ApolloError("The project does not exist");

    const roleToRemove = project.roles?.find((role: any) => role._id == roleID);

    if (!roleToRemove) throw new ApolloError("The roleID does not exist on the project");

    const remainingRoles = project.roles?.filter(role => role?._id !== roleID) as ProjectRole[];

    await Projects.findOneAndUpdate(
      {
        _id: projectID,
      },

      {
        $set: {
          roles: remainingRoles,
        },
      },

      { new: true },
    );
    return roleToRemove;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "deleteProjectRole", {
      component: "ProjectMutation > deleteProjectRole",
    });
  }
};

export default deleteProjectRole;
