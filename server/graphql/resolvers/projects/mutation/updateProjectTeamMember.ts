import { Projects } from "../../../../models/projectModel";
import { Members } from "../../../../models/memberModel";
import {
  Project,
  ProjectTeamMember,
  ProjectRole,
  Member,
  UpdateProjectTeamMemberInput,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const updateProjectTeamMember = async (
  parent: any,
  args: { request: UpdateProjectTeamMemberInput },
  context: any,
  info: any,
): Promise<ProjectTeamMember> => {
  const { memberID, projectID, phase, roleID } = args.request;
  console.log("Mutation > addProjectTeamMember > args.request = ", args.request);

  if (!projectID && !memberID && !roleID)
    throw new ApolloError("The projectID, roleID and memberID is required");

  if (!phase) throw new ApolloError("The phase is required");

  try {
    let [project, member] = await Promise.all([
      Projects.findOne({ _id: projectID }) as Project,
      Members.findOne({ _id: memberID }) as Member,
    ]);

    if (!project) throw new ApolloError("The project does not exist");
    if (!member) throw new ApolloError("The member does not exist");

    const projectRoles = project.roles as ProjectRole[];

    const role = projectRoles.find(role => role._id === roleID) as ProjectRole;
    if (!role) throw new ApolloError("The role does not exist on the project");

    //find the member in the teamMembers array
    let teamMembers: any = project.teamMembers;
    const teamMemberToEdit = teamMembers?.find((member: any) => member.memberID === memberID);

    if (!teamMemberToEdit) throw new ApolloError("The member does not exist in the project team");

    //update the fields
    teamMemberToEdit.roleID = roleID;
    if (phase) {
      teamMemberToEdit.phase = phase;
    }

    const remainTeamMembers = teamMembers.filter((member: any) => member.memberID !== memberID);

    remainTeamMembers.push(teamMemberToEdit);

    //save the edit to the 🇩B

    await Projects.findOneAndUpdate(
      {
        _id: projectID,
      },
      { $set: { teamMembers: remainTeamMembers } },

      { new: true },
    );
    return {
      info: member,
      role: role,
      phase: phase,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "updateProjectTeamMember", {
      component: "ProjectMutation > updateProjectTeamMember",
    });
  }
};

export default updateProjectTeamMember;
