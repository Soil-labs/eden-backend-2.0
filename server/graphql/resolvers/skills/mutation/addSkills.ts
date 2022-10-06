import { AddSkillInput, Skill, ApprovedSkillEnum } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";

const addSkills = async (
  parent: any,
  args: { request: [AddSkillInput] },
  context: any,
  info: any,
): Promise<Skill[]> => {
  const skillsInputData = args.request;

  if (skillsInputData.length <= 0) throw new ApolloError("No skills data sent");
  console.log("Mutation > addSkills > args = ", args.request);

  try {
    let skillData;

    let allSkills: Skill[] = [];

    let fields: Skill = <any>{};

    for (let i = 0; i < skillsInputData.length; i++) {
      const { name, description, state, lightcastID } = skillsInputData[i];

      if (name) {
        fields = {
          name,
          registeredAt: new Date(),
        };

        if (description) {
          fields = {
            ...fields,
            description,
          };
        }

        if (lightcastID) {
          fields = {
            ...fields,
            lightcastID,
          };
        }

        if (state) {
          fields = {
            ...fields,
            state,
          };
        } else {
          fields = {
            ...fields,
            state: ApprovedSkillEnum.Waiting,
          };
        }

        skillData = await Skills.findOne({ name: name });

        if (!skillData) {
          skillData = await new Skills(fields);

          skillData.save();
        }

        allSkills.push(skillData);
      }
    }
    console.log("saved skills => ", allSkills);

    return allSkills;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "addSkill", {
      component: "SkillsMutation > addSkill",
    });
  }
};

export default addSkills;
