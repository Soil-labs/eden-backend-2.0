import skillQueries from "./skills/query";
import skillMutations from "./skills/mutation";
import memberQueries from "./members/query";
import memberMutations from "./members/mutation";
import skillCategoryQueries from "./skillCategory/query"
import skillCategoryMutation from "./skillCategory/mutation";
import skillSubCategoryQueries from "./skillSubCategory/query";
import skillSubCategoryMutation from "./skillSubCategory/mutation"
import members from "./members";
import skills from "./skills";
import skillCategory from "./skillCategory";
import skillSubCategory from "./skillSubCategory";

const resolvers = {
  Query: {
    ...skillQueries,
    ...memberQueries,
    ...skillCategoryQueries,
    ...skillSubCategoryQueries
  },
  Mutation: {
    ...skillMutations,
    ...memberMutations,
    ...skillSubCategoryMutation,
    ...skillCategoryMutation
    
  },
  ...members,
  ...skills,
  ...skillCategory,
  ...skillSubCategory
};

export default resolvers;
