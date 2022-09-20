import { Members } from "../../../../models/memberModel";
import { addSkillInput } from "../types";

const addSkill = async (
  parent: { parent: any },
  args: { args: any; request: addSkillInput },
  context: { context: any },
  info: { info: any },
) => {
  // const { _id, name, avatar } = args.request;
  console.log("Mutation > addSkill > args.fields = ", args);

  // let fields: addSkillInput = <any>{};
  // fields._id = _id;
  // fields.registeredAt = new Date();

  // if (name) fields.name = name;
  // if (avatar) fields.avatar = avatar;

  // console.log("fields = ", fields);

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
