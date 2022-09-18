import { gql } from "apollo-server-core";

export default gql`
  input findNotesInput {
    _id: [ID]
  }

  input updateNoteInput {
    _id: ID

    title: String
    content: String

    #  --- Garden Location ---
    projectID: ID
    teamID: ID
    roleID: ID
    topicID: ID

    threadIDiscordID: String
    serverID: [String]
    #  --- Garden Location ---

    #  --- Member Info ---
    championID: String
    memberID: [String]
    authorID: String
    notifyUserID: [String]
    #  --- Member Info ---

    phase: PhaseNote
  }
`;
