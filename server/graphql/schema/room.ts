import { gql } from "apollo-server-core";
export default gql`
  # type Room {
  #     _id: ID,
  #     name: String,
  #     members: [Member],
  #     registeredAt: String,
  # }

  # input findRoomsInput {
  #     _id: ID
  # }

  # input createRoomInput {
  #     _id: String,
  #     name: String,
  # }

  # input enterExitRoomInput {
  #     roomID: ID
  #     memberID: ID
  # }

  # # input updateMemberInRoomInput {
  # #     roomID: ID
  # #     memberID: ID
  # #     discordName: String
  # #     discordAvatar: String
  # #     discriminator: String
  # #     bio: String

  # #     onbording: onboardingInput

  # #     content: contentInput
  # #     interest: String
  # #     timeZone: String
  # #     serverID: String,
  # #     skills: [skillInput_member]
  # #     memberRole: findRoleTemplateInput

  # #     hoursPerWeek: Float,

  # #     previusProjects: [previusProjectsInput],

  # #     links: [linkInput],
  # # }
`;
