export interface addSkillInput {
  name: String;
  // state: approvedSkillEnum

  subCategorySkillID: [String];
  categorySkillID: [String];

  relatedSkillID: [String];

  lightcastID: String;
}
