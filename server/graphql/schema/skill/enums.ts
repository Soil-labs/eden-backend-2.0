import { gql } from "apollo-server-core";

export default gql`
  enum approvedSkillEnum {
    waiting
    rejected
    approved
  }

  """
  🛠 This is the Level of proficiency for this specific Skill
  """
  enum levelEnum {
    LEARNING
    JUNIOR
    MID
    SENIOR
    OTHER
  }

  enum OrderableSkillField {
    _id
    name
    registeredAt
  }
`;
