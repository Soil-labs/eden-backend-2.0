import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";
import { Skill } from "../../../../generated";

const waitingToAproveSkills = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<Skill[]> => {
  console.log("Query > waitingToAproveSkills > args.fields = ");

  try {
    let skills = await Skills.find({ state: "WAITING" });
    return skills;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "waitingToAproveSkills", {
      component: "skillQuery > waitingToAproveSkills",
    });
  }
};

export default waitingToAproveSkills;
