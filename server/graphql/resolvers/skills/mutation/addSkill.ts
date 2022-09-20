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

  // let membersData = await Members.findOne({ _id: fields._id });

  // console.log("membersData = ", membersData);

  // if (!membersData) {
  //   membersData = await new Members(fields);
  //   console.log("membersData = ", membersData);
  //   await membersData.save();

  //   return membersData;
  // } else {
  //   return membersData;
  // }
};

export default addSkill;
