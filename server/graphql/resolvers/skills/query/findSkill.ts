import { FindSkillInput, Skill } from "../../../../generated";
import { ApolloError } from "apollo-server-express";
import { Skills } from "../../../../models/skillModel";

const findSkill = async (
  parent: any,
  args: { request: FindSkillInput },
  context: any,
  info: any,
): Promise<Skill> => {
  const { _id, lightcastID } = args.request;
  console.log("Query > findSkill > args = ", args.request);

  let searchQuery = {};

  if (_id) {
    searchQuery = { _id: _id };
  } else if (lightcastID) {
    searchQuery = { lightcastID: lightcastID };
  } else {
    throw new ApolloError("You need to specify the id of the skill");
  }

  try {
    const skill = await Skills.findOne(searchQuery);
    return skill;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberQuery > findSkill",
    });
  }
};

export default findSkill;
