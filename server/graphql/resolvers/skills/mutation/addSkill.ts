import { AddSkillInput, Skill, ApprovedSkillEnum } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";

const addSkill = async (parent: any, args: { request: AddSkillInput }, context: any, info: any) => {
  const { name, state, lightcastID, description } = args.request;
  console.log("Mutation > addSkill > args.fields = ", args);

  let fields: Skill = <any>{};

  if (!name ){
      throw new ApolloError("The skill name is required");
  }

  if ( lightcastID ) fields.lightcastID = lightcastID;
  if ( description ) fields.description = description;
  if (!state){
    fields.state = ApprovedSkillEnum.Waiting;
  } else{
    fields.state = state;
  }

  fields.name = name;
  fields.registeredAt = new Date();

  const skill = await new Skills(fields).save();

  return skill;
};

export default addSkill;
