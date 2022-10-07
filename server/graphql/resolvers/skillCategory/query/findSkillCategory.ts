import { SkillCategory } from "../../../../models/skillCategoryModel";
import { ApolloError } from "apollo-server-express";
import {
  FindSkillCategoriesInput,
  SkillCategory as SkillCategoryOutput,
} from "../../../../generated";

const findSkillCategories = async (
  parent: any,
  args: { request: FindSkillCategoriesInput },
  context: any,
  info: any,
): Promise<SkillCategoryOutput[]> => {
  const { _id, lightcastID } = args.request;

  console.log("Query > findSkillCategories > args.request = ", args.request);

  let searchQuery = {};

  if (_id) {
    searchQuery = { _id: _id };
  } else if (lightcastID) {
    searchQuery = { lightcastID: lightcastID };
  } else {
    searchQuery = {}
  }

  try {
    let skillCategoryData = await SkillCategory.find(searchQuery);

    return skillCategoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findSkillCategory", {
      component: "skillCategoryQuery > findSkillCategory",
    });
  }
};

export default findSkillCategories;
