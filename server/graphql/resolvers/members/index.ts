import findMember from "./query/findMember";
import addMember from "./mutation/addMember";
import skills from "./objectResolvers/skills";

export default {
  // Object Resolvers
  // Members: {
  //   skills,
  // },

  // Queries
  Query: {
    findMember,
  },

  // Mutations
  Mutation: {
    addMember,
  },
};
