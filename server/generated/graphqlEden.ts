export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AddSkillsToMemberInput = {
  memberID: Scalars['ID'];
  skills: Array<InputMaybe<SkillAndLevelInput>>;
};

export type Budget = {
  __typename?: 'Budget';
  perHour?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  totalBudget?: Maybe<Scalars['String']>;
};

/** All the content that the user has created during signup ✍️ */
export type Content = {
  __typename?: 'Content';
  bio?: Maybe<Scalars['String']>;
  interest?: Maybe<Scalars['String']>;
  mostProud?: Maybe<Scalars['String']>;
  showCaseAbility?: Maybe<Scalars['String']>;
};

export type DeleteSkillsFromMemberInput = {
  memberID: Scalars['ID'];
  skills: Array<Scalars['ID']>;
};

export type FindMembersCursorOutput = {
  __typename?: 'FindMembersCursorOutput';
  members?: Maybe<Array<Maybe<Member>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FindOtpicsCursorOputput = {
  __typename?: 'FindOtpicsCursorOputput';
  pageInfo?: Maybe<PageInfo>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type FindProjectsCursorOutput = {
  __typename?: 'FindProjectsCursorOutput';
  pageInfo?: Maybe<PageInfo>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type FindSkillsCursorOutput = {
  __typename?: 'FindSkillsCursorOutput';
  pageInfo?: Maybe<PageInfo>;
  skills?: Maybe<Array<Maybe<Skill>>>;
};

/** This is the Content of the Member 🧑‍💼 */
export type General = {
  __typename?: 'General';
  content?: Maybe<Content>;
  hoursPerWeek?: Maybe<Scalars['Float']>;
  /** The Links that are saved during signup for the user */
  links?: Maybe<Array<Maybe<Link>>>;
  timeZone?: Maybe<Scalars['String']>;
};

/** 💡 You can either use the handle or the url of the link */
export type Link = {
  __typename?: 'Link';
  /** If the name is Other you can save your image on the FrontEnd */
  imgCustom?: Maybe<Scalars['String']>;
  name?: Maybe<NameEnum>;
  /** If the name is Other you can choose the name */
  nameCustom?: Maybe<Scalars['String']>;
  /** The url need to be constracted at the Front, even if only the handle is used, the backEnd need to take the whole url */
  url?: Maybe<Scalars['String']>;
};

export type MatchProjectInfo = {
  __typename?: 'MatchProjectInfo';
  matchPercentage?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  relatedSkills?: Maybe<Array<Maybe<Skill>>>;
};

export type MatchProjectRole = {
  __typename?: 'MatchProjectRole';
  matchPercentage?: Maybe<Scalars['Int']>;
  relatedSkills?: Maybe<Array<Maybe<Skill>>>;
  role?: Maybe<ProjectRole>;
};

/** This is the Member of Eden 🌳 */
export type Member = {
  __typename?: 'Member';
  _id?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  discordID?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
  general?: Maybe<General>;
  name?: Maybe<Scalars['String']>;
  onbording?: Maybe<Onboarding>;
  projects?: Maybe<Array<Maybe<ProjectOfMember>>>;
  registeredAt?: Maybe<Scalars['Date']>;
  servers?: Maybe<Array<Maybe<Server>>>;
  skills?: Maybe<Array<Maybe<SkillAndLevel>>>;
};

export type MemberMatch = {
  __typename?: 'MemberMatch';
  matchPercentage?: Maybe<Scalars['Int']>;
  member?: Maybe<Member>;
  relatedSkills?: Maybe<Array<Maybe<Skill>>>;
};

export type MemberOrderBy = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<OrderableMemberField>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMember?: Maybe<Member>;
  addProject?: Maybe<Project>;
  addProjectRole?: Maybe<ProjectRole>;
  addProjectTeamMember?: Maybe<ProjectTeamMember>;
  addRelatedSkills?: Maybe<Array<Maybe<Skill>>>;
  addSkill?: Maybe<Skill>;
  addSkills?: Maybe<Array<Maybe<Skill>>>;
  addSkillsToMember?: Maybe<Member>;
  approveOrRejectSkills?: Maybe<Array<Maybe<Skill>>>;
  createRoom?: Maybe<Room>;
  deleteProjectRole?: Maybe<ProjectRole>;
  deleteProjectTeamMember?: Maybe<ProjectTeamMember>;
  deleteSkillsFromMember?: Maybe<Member>;
  enterRoom?: Maybe<Room>;
  exitRoom?: Maybe<Room>;
  updateMember?: Maybe<Member>;
  updateMemberInRoom?: Maybe<Member>;
  updateNote?: Maybe<Note>;
  updateProject?: Maybe<Project>;
  updateProjectRole?: Maybe<ProjectRole>;
  updateProjectTeamMember?: Maybe<ProjectTeamMember>;
  updateRoleTemplate?: Maybe<RoleTemplate>;
  updateServer?: Maybe<Server>;
  updateSkillCategory?: Maybe<SkillCategory>;
  updateSkillSubCategory?: Maybe<SkillSubCategory>;
  updateTopic?: Maybe<Topic>;
};


export type MutationAddMemberArgs = {
  request: AddMemberInput;
};


export type MutationAddProjectArgs = {
  request: AddProjectInput;
};


export type MutationAddProjectRoleArgs = {
  request: AddProjectRoleInput;
};


export type MutationAddProjectTeamMemberArgs = {
  request: AddProjectTeamMemberInput;
};


export type MutationAddRelatedSkillsArgs = {
  request?: InputMaybe<AddRelatedSkillsInput>;
};


export type MutationAddSkillArgs = {
  request: AddSkillInput;
};


export type MutationAddSkillsArgs = {
  request: Array<InputMaybe<AddSkillInput>>;
};


export type MutationAddSkillsToMemberArgs = {
  request: AddSkillsToMemberInput;
};


export type MutationApproveOrRejectSkillsArgs = {
  request?: InputMaybe<Array<InputMaybe<ApproveOrRejectSkillInput>>>;
};


export type MutationCreateRoomArgs = {
  request: CreateRoomInput;
};


export type MutationDeleteProjectRoleArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteProjectTeamMemberArgs = {
  request?: InputMaybe<DeleteProjectTeamMemberInput>;
};


export type MutationDeleteSkillsFromMemberArgs = {
  request?: InputMaybe<DeleteSkillsFromMemberInput>;
};


export type MutationEnterRoomArgs = {
  request: EnterExitRoomInput;
};


export type MutationExitRoomArgs = {
  request: EnterExitRoomInput;
};


export type MutationUpdateMemberArgs = {
  request: UpdateMemberInput;
};


export type MutationUpdateMemberInRoomArgs = {
  request?: InputMaybe<UpdateMemberInRoomInput>;
};


export type MutationUpdateNoteArgs = {
  request: UpdateNoteInput;
};


export type MutationUpdateProjectArgs = {
  request: UpdateProjectInput;
};


export type MutationUpdateProjectRoleArgs = {
  request: UpdateProjectRoleInput;
};


export type MutationUpdateProjectTeamMemberArgs = {
  request: UpdateProjectTeamMemberInput;
};


export type MutationUpdateRoleTemplateArgs = {
  request: UpdateRoleTemplateInput;
};


export type MutationUpdateServerArgs = {
  request?: InputMaybe<UpdateServerInput>;
};


export type MutationUpdateSkillCategoryArgs = {
  request?: InputMaybe<UpdateSkillCategoryInput>;
};


export type MutationUpdateSkillSubCategoryArgs = {
  request?: InputMaybe<UpdateSkillSubCategoryInput>;
};


export type MutationUpdateTopicArgs = {
  request: UpdateTopicInput;
};

export type Note = {
  __typename?: 'Note';
  _id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** All the information about onboarding */
export type Onboarding = {
  __typename?: 'Onboarding';
  /** 📝 Here you can see the progress of the signup for this user */
  percentage?: Maybe<Scalars['Int']>;
  /** 💡 If someone finish the basic signup, this variable will be true */
  signup?: Maybe<Scalars['Boolean']>;
};

export type OrderBy = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<OrderField>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderField {
  PublishedAt = 'PUBLISHED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export enum OrderableMemberField {
  Id = '_id',
  Name = 'name',
  RegisteredAt = 'registeredAt'
}

export enum OrderableProjectField {
  Id = '_id',
  Title = 'title'
}

export enum OrderableSkillField {
  Id = '_id',
  Name = 'name',
  RegisteredAt = 'registeredAt'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  end?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
};

export enum PhaseNote {
  Archive = 'ARCHIVE',
  Open = 'OPEN'
}

/** Keep track of the phase of Role 🎨 for a project 👩‍🍳 */
export enum PhaseProjectRoleEnum {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

/** Keep track of the phase of application 👦 for a project 👩‍🍳 */
export enum PhaseProjectTeamMemberEnum {
  Committed = 'COMMITTED',
  Engaged = 'ENGAGED',
  Invited = 'INVITED',
  Rejected = 'REJECTED',
  Shortlisted = 'SHORTLISTED'
}

export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['ID']>;
  gardenServerID?: Maybe<Scalars['String']>;
  /** Available Roles of the Project */
  roles?: Maybe<Array<Maybe<ProjectRole>>>;
  serverID?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Team Members of the Project */
  teamMembers?: Maybe<Array<Maybe<ProjectTeamMember>>>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectContent = {
  __typename?: 'ProjectContent';
  budget?: Maybe<Budget>;
  color?: Maybe<Scalars['String']>;
  dates?: Maybe<DatesType>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Link>>>;
};

export type ProjectMatch = {
  __typename?: 'ProjectMatch';
  matchProject?: Maybe<MatchProjectInfo>;
  matchProjectRoles?: Maybe<Array<Maybe<MatchProjectRole>>>;
};

/** Automatically gets update by ProjectTeamMember */
export type ProjectOfMember = {
  __typename?: 'ProjectOfMember';
  info?: Maybe<Project>;
  phase?: Maybe<PhaseProjectRoleEnum>;
  role?: Maybe<ProjectRole>;
};

export type ProjectOrderBy = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<OrderableProjectField>;
};

/** This is the Roles of the Project */
export type ProjectRole = {
  __typename?: 'ProjectRole';
  _id?: Maybe<Scalars['ID']>;
  content?: Maybe<ProjectRoleContent>;
  phase?: Maybe<PhaseProjectRoleEnum>;
  skills?: Maybe<Array<Maybe<SkillAndLevel>>>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectRoleContent = {
  __typename?: 'ProjectRoleContent';
  budget?: Maybe<Budget>;
  dateRangeEnd?: Maybe<Scalars['String']>;
  dateRangeStart?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hoursPerWeek?: Maybe<Scalars['Int']>;
};

export type ProjectTeamMember = {
  __typename?: 'ProjectTeamMember';
  /** Information of this Team Member 👬 */
  info?: Maybe<Member>;
  /** Phase of the application for this member */
  phase?: Maybe<PhaseProjectTeamMemberEnum>;
  /** The Role of this Member in the Project */
  role?: Maybe<ProjectRole>;
};

export type Query = {
  __typename?: 'Query';
  findMember?: Maybe<Member>;
  findMembers?: Maybe<FindMembersCursorOutput>;
  findNotes?: Maybe<FindNotesCursorOutput>;
  findProject?: Maybe<Project>;
  findProjectRole?: Maybe<ProjectRole>;
  findProjectRoles?: Maybe<Array<Maybe<ProjectRole>>>;
  findProjects?: Maybe<FindProjectsCursorOutput>;
  findRoleTemplates?: Maybe<RoleTemplate>;
  findRoom?: Maybe<Room>;
  findServers?: Maybe<Array<Maybe<Server>>>;
  findSkill?: Maybe<Skill>;
  findSkillCategories?: Maybe<Array<Maybe<SkillCategory>>>;
  findSkillSubCategories?: Maybe<Array<Maybe<SkillSubCategory>>>;
  findSkills?: Maybe<FindSkillsCursorOutput>;
  findTopics?: Maybe<FindOtpicsCursorOputput>;
  /** For a Specific Project find -> 1) all the Members that match 2) the persentage of match 3) related Skills */
  matchMembersToProject?: Maybe<MatchMembersCursorOutput>;
  /** For a Specific Project Role find -> 1) all the Members that match 2) the persentage of match 3) related Skills */
  matchMembersToProjectRole?: Maybe<MatchMembersCursorOutput>;
  /** For Specific Skills find -> 1) all the Members that match 2) the persentage of match 3) related skills */
  matchMembersToSkills?: Maybe<MatchMembersCursorOutput>;
  /** For Specific User find -> 1) all the Members that match 2) the persentage of match 3) related skills */
  matchMembersToUser?: Maybe<MatchMembersCursorOutput>;
  /** For a Specific Member find -> 1) all the Projects that match 2) the persentage of Project match 3) all the Roles that match 4) the percentage of ProjectRole */
  matchProjectsToMember?: Maybe<MatchProjectsCursorOutput>;
  searchMembersAutocomplete?: Maybe<FindMembersCursorOutput>;
  searchSkillsAutocomplete?: Maybe<Array<Maybe<Skill>>>;
  waitingToAproveSkills?: Maybe<Array<Maybe<Skill>>>;
};


export type QueryFindMemberArgs = {
  request?: InputMaybe<FindMemberInput>;
};


export type QueryFindMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberOrderBy>;
  request?: InputMaybe<FindMembersInput>;
};


export type QueryFindNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SkillOrderBy>;
  request?: InputMaybe<FindNotesInput>;
};


export type QueryFindProjectArgs = {
  request?: InputMaybe<FindProjectInput>;
};


export type QueryFindProjectRoleArgs = {
  request?: InputMaybe<FindProjectRoleInput>;
};


export type QueryFindProjectRolesArgs = {
  request?: InputMaybe<FindProjectRolesInput>;
};


export type QueryFindProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectOrderBy>;
  request?: InputMaybe<FindProjectsInput>;
};


export type QueryFindRoleTemplatesArgs = {
  request: FindRoleTemplatesInput;
};


export type QueryFindRoomArgs = {
  request?: InputMaybe<FindRoomInput>;
};


export type QueryFindServersArgs = {
  request?: InputMaybe<FindServerInput>;
};


export type QueryFindSkillArgs = {
  request?: InputMaybe<FindSkillInput>;
};


export type QueryFindSkillCategoriesArgs = {
  request?: InputMaybe<FindSkillCategoriesInput>;
};


export type QueryFindSkillSubCategoriesArgs = {
  request?: InputMaybe<FindSkillSubCategoriesInput>;
};


export type QueryFindSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SkillOrderBy>;
  request?: InputMaybe<FindSkillsInput>;
};


export type QueryFindTopicsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SkillOrderBy>;
  request?: InputMaybe<FindTopicsInput>;
};


export type QueryMatchMembersToProjectArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
  request?: InputMaybe<MatchMembersToProjectInput>;
};


export type QueryMatchMembersToProjectRoleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
  request?: InputMaybe<MatchMembersToProjectRoleInput>;
};


export type QueryMatchMembersToSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
  request?: InputMaybe<MatchMembersToSkillsInput>;
};


export type QueryMatchMembersToUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
  request?: InputMaybe<MatchMembersToUserInput>;
};


export type QueryMatchProjectsToMemberArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
  request?: InputMaybe<MatchProjectsToMemberInput>;
};


export type QuerySearchMembersAutocompleteArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberOrderBy>;
  request?: InputMaybe<SearchMembersAutocompleteInput>;
};


export type QuerySearchSkillsAutocompleteArgs = {
  request?: InputMaybe<SkillsAutocompleteInput>;
};


export type QueryWaitingToAproveSkillsArgs = {
  request?: InputMaybe<FindSkillsInput>;
};

export type RoleTemplate = {
  __typename?: 'RoleTemplate';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  title?: Maybe<Scalars['String']>;
};

export type Room = {
  __typename?: 'Room';
  _id?: Maybe<Scalars['ID']>;
  members?: Maybe<Array<Maybe<Member>>>;
  name?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['String']>;
};

export type Server = {
  __typename?: 'Server';
  _id?: Maybe<Scalars['ID']>;
  adminCommands?: Maybe<Array<Maybe<Scalars['String']>>>;
  adminID?: Maybe<Array<Maybe<Scalars['String']>>>;
  adminRoles?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type Skill = {
  __typename?: 'Skill';
  _id?: Maybe<Scalars['ID']>;
  categorySkills?: Maybe<Array<Maybe<SkillCategory>>>;
  description?: Maybe<Scalars['String']>;
  lightcastID?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['Date']>;
  relatedSkills?: Maybe<Array<Maybe<Skill>>>;
  state?: Maybe<ApprovedSkillEnum>;
  subCategorySkill?: Maybe<Array<Maybe<SkillSubCategory>>>;
};

/** 💡 Every Skill have the information and the level */
export type SkillAndLevel = {
  __typename?: 'SkillAndLevel';
  info?: Maybe<Skill>;
  level?: Maybe<LevelEnum>;
};

/** 💡 Every Skill have the skillID and the level */
export type SkillAndLevelInput = {
  level: LevelEnum;
  skillID: Scalars['ID'];
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  lightcastID?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skillSubCategories?: Maybe<Array<Maybe<SkillCategory>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
};

export type SkillOrderBy = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<OrderableSkillField>;
};

export type SkillSubCategory = {
  __typename?: 'SkillSubCategory';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  lightcastID?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skillCategories?: Maybe<Array<Maybe<SkillCategory>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
};

export type Topic = {
  __typename?: 'Topic';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type AddMemberInput = {
  avatar?: InputMaybe<Scalars['String']>;
  discordID?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AddProjectInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type AddProjectRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AddProjectTeamMemberInput = {
  memberID: Scalars['ID'];
  projectID: Scalars['ID'];
  roleID: Scalars['ID'];
};

export type AddRelatedSkillsInput = {
  relatedSkillIDs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** This is the main skill that will be connected with the related skills 🛠 */
  skillID?: InputMaybe<Scalars['ID']>;
};

export type AddSkillInput = {
  categorySkillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  lightcastID?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  relatedSkillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  state?: InputMaybe<ApprovedSkillEnum>;
  subCategorySkillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ApproveOrRejectSkillInput = {
  _id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<ApprovedSkillEnum>;
};

export enum ApprovedSkillEnum {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Waiting = 'WAITING'
}

export type CreateRoomInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DatesType = {
  __typename?: 'datesType';
  complition?: Maybe<Scalars['String']>;
  kickOff?: Maybe<Scalars['String']>;
};

export type DeleteProjectTeamMemberInput = {
  memberID: Scalars['ID'];
  projectID: Scalars['ID'];
  roleID: Scalars['ID'];
};

export type EnterExitRoomInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  roomID?: InputMaybe<Scalars['ID']>;
};

export type FindMemberInput = {
  discordID?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type FindMembersInput = {
  discordID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindNotesCursorOutput = {
  __typename?: 'findNotesCursorOutput';
  notes?: Maybe<Array<Maybe<Note>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FindNotesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindProjectInput = {
  _id: Scalars['ID'];
};

export type FindProjectRoleInput = {
  _id: Scalars['ID'];
};

export type FindProjectRolesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindProjectsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  gardenServerID?: InputMaybe<Scalars['String']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FindRoleTemplatesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindRoomInput = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type FindServerInput = {
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindSkillCategoriesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lightcastID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindSkillInput = {
  _id?: InputMaybe<Scalars['ID']>;
  lightcastID?: InputMaybe<Scalars['String']>;
};

export type FindSkillSubCategoriesInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lightcastID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FindSkillsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lightcastID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<ApprovedSkillEnum>;
};

export type FindTopicsInput = {
  _id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** 🛠 This is the Level of proficiency for this specific Skill */
export enum LevelEnum {
  Junior = 'JUNIOR',
  Learning = 'LEARNING',
  Mid = 'MID',
  Other = 'OTHER',
  Senior = 'SENIOR'
}

export type MatchMembersCursorOutput = {
  __typename?: 'matchMembersCursorOutput';
  matches?: Maybe<Array<Maybe<MemberMatch>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type MatchMembersToProjectInput = {
  projectID: Scalars['ID'];
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MatchMembersToProjectRoleInput = {
  projectRoleID: Scalars['ID'];
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MatchMembersToSkillsInput = {
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  skillIDs: Array<InputMaybe<Scalars['ID']>>;
};

export type MatchMembersToUserInput = {
  memberID: Scalars['ID'];
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MatchProjectsCursorOutput = {
  __typename?: 'matchProjectsCursorOutput';
  matches?: Maybe<Array<Maybe<ProjectMatch>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type MatchProjectsToMemberInput = {
  memberID: Scalars['ID'];
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Choose the website that you want to save for this link */
export enum NameEnum {
  Dework = 'DEWORK',
  Github = 'GITHUB',
  Instagram = 'INSTAGRAM',
  Lens = 'LENS',
  Linkedin = 'LINKEDIN',
  Other = 'OTHER',
  Twitter = 'TWITTER',
  Youtube = 'YOUTUBE'
}

export type SearchMembersAutocompleteInput = {
  search?: InputMaybe<Scalars['String']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type SkillsAutocompleteInput = {
  search?: InputMaybe<Scalars['String']>;
};

export type UpdateMemberInRoomInput = {
  memberID?: InputMaybe<Scalars['ID']>;
  roomID?: InputMaybe<Scalars['ID']>;
  updateMember?: InputMaybe<UpdateMemberInput>;
};

export type UpdateMemberInput = {
  _id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  discordID?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  _id?: InputMaybe<Scalars['ID']>;
  authorID?: InputMaybe<Scalars['String']>;
  championID?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  memberID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notifyUserID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phase?: InputMaybe<PhaseNote>;
  projectID?: InputMaybe<Scalars['ID']>;
  roleID?: InputMaybe<Scalars['ID']>;
  serverID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamID?: InputMaybe<Scalars['ID']>;
  threadIDiscordID?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  topicID?: InputMaybe<Scalars['ID']>;
};

export type UpdateProjectInput = {
  _id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectRoleInput = {
  /** The ID of the Role */
  _id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectTeamMemberInput = {
  memberID: Scalars['ID'];
  phase?: InputMaybe<PhaseProjectTeamMemberEnum>;
  projectID: Scalars['ID'];
  roleID: Scalars['ID'];
};

export type UpdateRoleTemplateInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  skillsID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateServerInput = {
  _id?: InputMaybe<Scalars['ID']>;
  adminCommandsID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  adminID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  adminRolesID?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSkillCategoryInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  lightcastID?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  skillsID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  subCategoriesSkillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UpdateSkillSubCategoryInput = {
  _id?: InputMaybe<Scalars['ID']>;
  categoriesSkillID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  lightcastID?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skillsID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UpdateTopicInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notesID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    