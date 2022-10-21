import { Projects } from "../../../../models/projectModel";
import { FindProjectInput, Project } from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const findProject = async (
  parent: any,
  args: { request: FindProjectInput },
  context: any,
  info: any,
): Promise<Project> => {
  const { _id } = args.request;
  console.log("Query > findProject > args.request = ", args.request);

  if (!_id) throw new ApolloError("Project id is required");
  try {
    let projectData = await Projects.findOne({ _id: _id });
    if (!projectData) throw new ApolloError("Project not found");

    console.log("projectData ", projectData)

    return projectData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findProject", {
      component: "ProjectQuery > findProject",
    });
  }
};

export default findProject;
