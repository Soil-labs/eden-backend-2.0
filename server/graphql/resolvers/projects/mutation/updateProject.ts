import { Projects } from "../../../../models/projectModel";
import { UpdateProjectInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const addProject = async (
  parent: any,
  args: { request: UpdateProjectInput },
  context: any,
  info: any,
): Promise<Project> => {
  const { _id, title, description } = args.request;
  console.log("Mutation > updateProject > args.request = ", args.request);

  if (!_id) throw new ApolloError("The _id is required");

  let fields: Project = {};

  if (description) fields.description = description;
  if (title) fields.title = title;

  try {
    let project = await Projects.findOne({ _id: _id });
    if (!project) throw new ApolloError("The supplied _id is not associated with any project");
    project = await Projects.findOneAndUpdate(
      { _id: _id },
      
      fields,

      { new: true },
    );
    return project;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateProject", {
      component: "ProjectMutation > updateProject",
    });
  }
};

export default addProject;
