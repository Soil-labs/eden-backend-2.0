import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    #  ------------ Project -----------

    # ------- Project General ------
    addProject(request: addProjectInput!): Project
    updateProject(request: updateProjectInput!): Project
    # ------- Project General ------

    # ------- Project Role ------
    addProjectRole(request: addProjectRoleInput!): ProjectRole
    updateProjectRole(request: updateProjectRoleInput!): ProjectRole
    deleteProjectRole(_id: ID!): ProjectRole
    # ------- Project Role ------

    # ------- Project Team Member ------
    addProjectTeamMember(request: addProjectTeamMemberInput!): ProjectTeamMember
    updateProjectTeamMember(request: updateProjectTeamMemberInput!): ProjectTeamMember
    deleteProjectTeamMember(request: deleteProjectTeamMemberInput): ProjectTeamMember
    # ------- Project Team Member ------

    #  ------------ Project -----------

    #  ------------ Skills -----------
    addSkills(request: [addSkillInput]!): [Skill]
    approveOrRejectSkills(request: [approveOrRejectSkillInput]): [Skill]
    addRelatedSkills(request: addRelatedSkillsInput): [Skill]
    #  ------------ Skills -----------

    #  ---------- Skill Category  -------
    updateSkillCategory(fields: updateSkillCategoryInput): SkillCategory
    #  ---------- Skill Category  -------

    #  ---------- Skill Sub Category -------
    updateSkillSubCategory(fields: updateSkillSubCategoryInput): SkillSubCategory
    #  ---------- Skill Sub Category -------

    #  ---------- Server -------
    updateServer(fields: updateServerInput): Server
    #  ---------- Server -------

    #  ---------- Room -------
    createRoom(fields: createRoomInput!): Room
    enterRoom(fields: enterExitRoomInput!): Room
    exitRoom(fields: enterExitRoomInput!): Room
    updateMemberInRoom(fields: updateMemberInRoomInput): Member
    #  ---------- Room -------
  }
`;
