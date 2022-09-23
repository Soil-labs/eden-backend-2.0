import skillQueries from "./skills/query";
import memberQueries from "./members/query";
import skillMutations from "./skills/mutation";
import memberMutations from "./members/mutation";
import members from "./members";
import skills from "./skills";

const resolvers = {
  Query: {
    ...skillQueries,
    ...memberQueries,
  },
  Mutation: {
    ...skillMutations,
    ...memberMutations,
  },
  ...members,
  ...skills,
};

export default resolvers;
