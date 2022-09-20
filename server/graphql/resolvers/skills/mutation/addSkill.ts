import { AddSkillInput, Skill } from "../../../../generated";

import { Skills } from "../../../../models/skillModel";

const addSkill = async (
  parent: { parent: any },
  args: { args: any; request: AddSkillInput },
  context: { context: any },
  info: { info: any },
) => {
  const { name, state } = args.request;
  console.log("Mutation > addSkill > args.fields = ", args);

  let fields: Skill = <any>{};

  if (name) fields.name = name;
  if (state) fields.state = state;

  fields.registeredAt = new Date();

  const skill = await new Skills(fields).save();

  return skill;
};

export default addSkill;
