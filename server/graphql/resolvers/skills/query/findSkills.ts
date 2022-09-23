import { FindSkillsInput, Skill, FindSkillsCursorOutput } from "../../../../generated";

import { Skills } from "../../../../models/skillModel";

const findSkills = async (
  parent: any,
  args: { request: FindSkillsInput; limit: number; after: string },
  context: any,
  info: any,
) => {
  const { _id, lightcastID, state } = args.request;
  const { limit, after } = args;
  console.log("Mutation > findSkills > args.fields = ", args);

  let fields: Skill = <any>{};

  let searchQuery: any = {};
  let searchQuery_and: any = [];

  if (state) searchQuery_and = [{ state: state }];
  else searchQuery_and = [{ state: "APPROVED" }];

  if (_id) {
    searchQuery_and.push({ _id: _id });
  } else if (lightcastID) {
    searchQuery_and.push({ lightcastID: lightcastID });
  }

  searchQuery = {
    $and: searchQuery_and,
  };

  let skillDataAll = await Skills.find(searchQuery);

  let skillData: FindSkillsCursorOutput;

  skillData = {
    pageInfo: {
      hasNextPage: true,
      hasPreviousPage: false,
      start: "0",
    },
    skills: skillDataAll.slice(0, limit),
  };

  return skillData;
};

export default findSkills;
