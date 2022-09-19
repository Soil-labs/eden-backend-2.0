import { addMemberInput } from "../../schema/members/inputs";

export interface addMemberInput {
  registeredAt: Date;
  _id: String;
  name: String;
  avatar: String;
  discriminator: String;
}
