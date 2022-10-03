import { Skill, AddRelatedSkillsInput } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";

const addRelatedSkills = async (
  parent: any,
  args: { request: AddRelatedSkillsInput },
  context: any,
  info: any,
): Promise<Skill> => {
  const { skillID, relatedSkillIDs } = args.request;

  console.log("Mutation > relatedSkills > args.request = ", args.request);

  if (!skillID) throw new ApolloError("You need to specify the id of the skill");

  let skillData: Skill;
  let relatedSkillsData: Skill[] = [];

  skillData = await Skills.findOne({ _id: skillID });


  relatedSkillsData = await Skills.find({ _id: relatedSkillIDs });

  console.log("relatedSkilldata", relatedSkillsData);
  let result;

  try {
    for (let i = 0; i < relatedSkillsData.length; i++) {

      const skillsArrayToSaveRelatedSkills = skillData.relatedSkills ? skillData.relatedSkills : [];
      const currentRelatedSkill = relatedSkillsData[i];

      if (!skillsArrayToSaveRelatedSkills.includes(currentRelatedSkill._id as Skill)) {
        skillsArrayToSaveRelatedSkills.push(currentRelatedSkill._id as Skill);
      }

      result = await Skills.findOneAndUpdate(
        { _id: skillData._id },
        {
          $set: {
            relatedSkills: skillsArrayToSaveRelatedSkills,
          },
        },
        { new: true },
      );
      
      const relatedSkilledArray = relatedSkillsData[i].relatedSkills ? relatedSkillsData[i].relatedSkills: <any>[];
      if (!relatedSkilledArray.includes(skillData._id as Skill)) {
         relatedSkilledArray.push(skillData._id);
      }

      await Skills.findOneAndUpdate(
        { _id: relatedSkillsData[i]._id },
        {
          $set: {
            relatedSkills: relatedSkilledArray,
          },
        },
        { new: true },
      );
    }
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tSkillMutation > addRelatedSkills",
    });
  }
  console.log("skillData ", skillData);
  return skillData;
};

export default addRelatedSkills;
