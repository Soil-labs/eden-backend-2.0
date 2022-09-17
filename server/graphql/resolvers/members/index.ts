import findMember from "./query/findMember";
import addMember from "./mutation/addMember";

export default {
  // Queries
  Query: {
    findMember,
  },
  // Mutations
  Mutation: {
    addMember,
  },
};
