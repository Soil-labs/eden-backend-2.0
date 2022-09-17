import { gql } from "apollo-server-core";

export default gql`
  type Query {
    # Find one Member
    findMember(request: findMemberInput): Member

    # Find Members list
    findMembers(
      request: findMembersInput
      orderBy: MemberOrderBy
      after: String
      before: String
      limit: Int
    ): FindMembersCursorOutput

    # Find Members list
    # TODO: Can this be merged into findMembers?
    searchMembersAutocomplete(
      request: searchMembersAutocompleteInput
      orderBy: MemberOrderBy
      cursor: String
      limit: Int
    ): FindMembersCursorOutput
  }
`;
