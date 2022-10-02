import skillQueries from "./skills/query";
import memberQueries from "./members/query";
import skillMutations from "./skills/mutation";
import memberMutations from "./members/mutation";
import skillCategoryQueries from "./skillCategory/query"
import skillSubCategoryQueries from "./skillSubCategory/query";
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
  },
  ...members,
  ...skills,
  ...skillCategory,
  ...skillSubCategory
};

export default resolvers;
