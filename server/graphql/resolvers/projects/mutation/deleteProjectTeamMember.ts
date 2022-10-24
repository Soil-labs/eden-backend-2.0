import { Projects } from "../../../../models/projectModel";
import { Members } from "../../../../models/memberModel";
import {
  Project,
  ProjectTeamMember,
  ProjectRole,
  Member,
  DeleteProjectTeamMemberInput,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const deleteProjectTeamMember = async (
  parent: any,
  args: { request: DeleteProjectTeamMemberInput },
  context: any,
  info: any,
): Promise<ProjectTeamMember> => {
  try {
    const { memberID, projectID, roleID } = args.request;
    console.log("Mutation > deleteProjectTeamMember > args.request = ", args.request);
    //get the project
    let [project, member] = await Promise.all([
      Projects.findOne({ _id: projectID }) as Project,
      Members.findOne({ _id: memberID }) as Member,
    ]);

    if (!project) throw new ApolloError("The project does not exist");
    if (!member) throw new ApolloError("The member does not exist");

    const teamMember: any = project.teamMembers?.find(
      (member: any) => member.memberID === memberID,
    );
    if (!teamMember) throw new ApolloError("Team member does not exist");

    const projectRoles = project.roles as ProjectRole[];

    const role = projectRoles.find(role => role._id === roleID) as ProjectRole;
    if (!role) throw new ApolloError("The role does not exist on the project");
    //remove the team member
    const remainTeamMembers: any = project.teamMembers?.find(
      (member: any) => member.memberID !== memberID,
    );

    project = await Projects.findOneAndUpdate(
      {
        _id: projectID,
      },
      { $set: { teamMembers: remainTeamMembers } },

      { new: true },
    );

    console.log("project", project);
    return {
      info: member,
      role: role,
      phase: teamMember.phase,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "deleteProjectTeamMember", {
      component: "ProjectMutation > deleteProjectTeamMember",
    });
  }
};

export default deleteProjectTeamMember;
