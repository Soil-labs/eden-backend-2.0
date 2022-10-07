import skills from "./objectResolvers/skills";
import skillSubCategories from "./objectResolvers/skillSubCategories";

export default {
  // Object Resolvers
  SkillCategory: {
    skills: skills,
    skillSubCategories: skillSubCategories,
  },
};
