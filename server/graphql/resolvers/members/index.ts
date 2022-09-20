import skills from "./objectResolvers/skills";
import skillInfo from "./objectResolvers/skillInfo";

export default {
  // Object Resolvers
  Member: {
    skills,
  },
  SkillAndLevel: {
    info: skillInfo,
  },
};
