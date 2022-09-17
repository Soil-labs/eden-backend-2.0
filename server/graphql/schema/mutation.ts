import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    # ------- Project Team Member ------

    #  ------------ Project -----------

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
