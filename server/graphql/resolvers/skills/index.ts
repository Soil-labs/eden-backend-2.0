import findSkills from "./query/findSkills";
import findSkill from "./query/findSkill";
import createSkill from "./mutation/createSkill";
import createSkills from "./mutation/createSkills";

export default {
  // Queries
  Query: { findSkills, findSkill },
  // Mutations
  Mutation: { createSkill, createSkills },
};
