import { Projects } from "../../../../models/projectModel";
import { Members } from "../../../../models/memberModel";
import {
  AddProjectTeamMemberInput,
  Project,
  ProjectTeamMember,
  ProjectRole,
  PhaseProjectTeamMemberEnum,
  Member,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";

const addProjectTeamMember = async (
  parent: any,
  args: { request: AddProjectTeamMemberInput },
  context: any,
  info: any,
): Promise<ProjectTeamMember> => {
  console.log("Mutation > addProjectTeamMember > args.request = ", args.request);
  const { memberID, roleID, projectID } = args.request;

  try {
    if (!memberID && !roleID && !projectID)
      throw new ApolloError("memberId, roleID and projectID are required");
    //get the project and member
    let [project, member] = await Promise.all([
      Projects.findOne({ _id: projectID }) as Project,
      Members.findOne({ _id: memberID }) as Member,
    ]);

    if (!project) throw new ApolloError("The project does not exist");
    if (!member) throw new ApolloError("The member does not exist");

    const projectRoles = project.roles as ProjectRole[];
    //check if the roleID is included🌳
    const role = projectRoles.find(role => role._id === roleID) as ProjectRole;
    if (!role) throw new ApolloError("The role does not exist on the project");

    let teamMembers: any = project.teamMembers;

    let newTeamMember = {
      memberID: memberID,
      roleID: roleID,
      phase: PhaseProjectTeamMemberEnum.Committed,
    };

    if (teamMembers?.length) {
      //add the new team member
      const alreadyExist = teamMembers.find((member: any) => member?.memberID === memberID);
      if (!alreadyExist) teamMembers.push(newTeamMember);
    } else {
      teamMembers = [newTeamMember];
    }

    project = await Projects.findOneAndUpdate(
      { _id: projectID },
      {
        $set: { teamMembers: teamMembers },
      },
      { new: true },
    );

    console.log("project details 🚚 ", project);

    return {
      info: member,
      role: role,
      phase: newTeamMember.phase,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "addProjectTeamMember", {
      component: "ProjectMutation > addProjectTeamMember",
    });
  }
};

export default addProjectTeamMember;
