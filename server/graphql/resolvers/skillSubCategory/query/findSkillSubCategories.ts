import { SkillSubCategory } from "../../../../models/skillSubCategoryModel";
import { ApolloError } from "apollo-server-express";
import {
  FindSkillSubCategoriesInput,
  SkillSubCategory as SkillSubCategoryOutput,
} from "../../../../generated";

const findSkillSubCategories = async (
  parent: any,
  args: { request: FindSkillSubCategoriesInput },
  context: any,
  info: any,
): Promise<SkillSubCategoryOutput[]> => {
  const { _id, lightcastID } = args.request;
  console.log("Query > findSkillSubCategories > args.request = ", args.request);

  let searchQuery = {};

  if (_id) {
    searchQuery = { _id: _id };
  } else if (lightcastID) {
    searchQuery = { lightcastID: lightcastID };
  } else {
    searchQuery = {};
  }

  try {
    let skillSubCategoryData;
    skillSubCategoryData = await SkillSubCategory.find(searchQuery);
    return skillSubCategoryData;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_FIND_TWEET_ERROR", {
      component: "tmemberQuery > findSkillSubCategories",
    });
  }
};

export default findSkillSubCategories;
