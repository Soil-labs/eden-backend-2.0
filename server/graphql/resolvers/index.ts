import members from "./members";
import skills from "./skills";

const resolvers = {
  ...skills,
  ...members,
};

export default resolvers;
