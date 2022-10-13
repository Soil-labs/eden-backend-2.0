import { Skill, ApproveOrRejectSkillInput, ApprovedSkillEnum } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";

const approveOrRejectSkills = async (
  parent: any,
  args: { request: [ApproveOrRejectSkillInput] },
  context: any,
  info: any,
): Promise<Skill[]> => {
  const skillsData = args.request;
  console.log("Mutation > approveOrRejectSkill > args.request = ", args.request);

  let skillsApproveRejectArray: Skill[] = [];

  try {
    for (let i = 0; i < skillsData.length; i++) {
      const { _id, state } = skillsData[i];
      if (
        (_id && state && state == ApprovedSkillEnum.Approved) ||
        state == ApprovedSkillEnum.Rejected
      ) {
        let skill = await Skills.findOne({ _id: _id });

        if (skill) {
          const updatedSkill = await Skills.findOneAndUpdate(
            { _id: _id },
            {
              $set: {
                state: state,
              },
            },
            { new: true },
          );
          skillsApproveRejectArray.push(updatedSkill);
        }
      }
    }
    return skillsApproveRejectArray;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "approveOrRejectSkills", {
      component: "SkillsMutation > approveOrRejectSkills",
    });
  }
};

export default approveOrRejectSkills;
