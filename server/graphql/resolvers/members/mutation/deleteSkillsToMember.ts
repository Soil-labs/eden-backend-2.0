import { Members } from "../../../../models/memberModel";
import { DeleteSkillsFromMemberInput, Member } from "../../../../generated";
const { ApolloError } = require("apollo-server-express");

const deleteSkillsFromMember = async (
  parent: any,
  args: { request: DeleteSkillsFromMemberInput },
  context: any,
  info: any,
) => {
  try {
    const { memberID, skills } = args.request;
    console.log("Mutation > DeleteSkillsFromMember > args.fields = ", args.request);

    if (!memberID) throw new Error("memberID (from mongoDB _id) is required to update member");

    const member = await Members.findOne({ discordID: memberID });

    if (!member) {
      throw new Error("Member not found");
    }

    let memberSkillsID = member?.skills.map((skill: any) => skill.skillID);
    let tempSkills = member.skills;
    for (let i = 0; i < skills.length; i++) {
      if (memberSkillsID.includes(skills[i])) {
        tempSkills = tempSkills.filter((skill: any) => {
          return skill.skillID !== skills[i];
        });
      }
    }
    console.log("Newww member Skills ", tempSkills);
    const newMemeber = await Members.findOneAndUpdate(
      { _id: memberID },
      {
        skills: tempSkills,
      },
      { new: true },
    );

    return newMemeber;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberMutation > deleteSkillsFromMember",
    });
  }
};

export default deleteSkillsFromMember;
