import { FindSkillInput, Skill } from "../../../../generated";

import { Skills } from "../../../../models/skillModel";

const findSkill = async (
  parent: { parent: any },
  args: { args: any; request: FindSkillInput },
  context: { context: any },
  info: { info: any },
) => {
  const { _id, lightcastID } = args.request;
  console.log("Mutation > findSkill > args.fields = ", args);

  if (_id) {
    const skill = await Skills.findOne({ _id: _id });
    return skill;
  } else {
    const skill = await Skills.findOne({ lightcastID: lightcastID });
    return skill;
  }
};

export default findSkill;
