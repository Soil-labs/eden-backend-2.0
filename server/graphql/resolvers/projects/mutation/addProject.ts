import { Projects } from "../../../../models/projectModel";
import { AddProjectInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const addProject = async (
  parent: any,
  args: { request: AddProjectInput },
  context: any,
  info: any,
): Promise<Project> => {
  const { title } = args.request;
  console.log("Mutation > addProject > args.request = ", args.request);

  if (!title) throw new ApolloError("Project title is required");
  try {
    let newProject = new Projects({ title: title });
    await newProject.save();

    return newProject;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "addProject", {
      component: "ProjectMutation > addProject",
    });
  }
};

export default addProject;
