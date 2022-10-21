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
import server from "./server";
import serverMutation from "./server/mutation"
import serverQueries from "./server/query"
import room from "./room";
import roomMutation from "./room/mutation";
import projects from "./projects"
import projectQueries from "./projects/query";


const resolvers = {
  Query: {
    ...skillQueries,
    ...memberQueries,
    ...skillCategoryQueries,
    ...skillSubCategoryQueries,
    ...projectQueries,
    ...serverQueries
  },
  Mutation: {
    ...skillMutations,
    ...memberMutations,
    ...skillSubCategoryMutation,
    ...skillCategoryMutation,
    ...serverMutation,
    ...roomMutation
    
  },
  ...members,
  ...skills,
  ...skillCategory,
  ...skillSubCategory,
  ...server,
  ...room,
  ...projects
};

export default resolvers;
