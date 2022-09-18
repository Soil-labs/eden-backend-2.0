import findMember from "./query/findMember";
import addMember from "./mutation/addMember";
import skills from "./objectResolvers/skills";
import projects from "./objectResolvers/projects";
import network from "./objectResolvers/network";
import invitedBy from "./objectResolvers/invitedBy";

export default {
  // Object Resolvers
  Members: {
    skills,
    projects,
    network,
    invitedBy,
    //   gardenUpdate,
  },

  // Queries
  Query: {
    findMember,
  },

  // Mutations
  Mutation: {
    addMember,
  },
};
