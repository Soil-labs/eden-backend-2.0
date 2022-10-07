import { FindSkillsInput, FindSkillsCursorOutput, SkillOrderBy, ApprovedSkillEnum } from "../../../../generated";
import { Skills } from "../../../../models/skillModel";
import { ApolloError } from "apollo-server-express";
import mongoose from "mongoose";

const DEFAULT_PAGE_LIMIT = 20;
interface SearchOptions {
  [key: string]: any;
}

const findSkills = async (
  parent: any,
  args: {
    request: FindSkillsInput;
    orderBy: SkillOrderBy;
    limit: number;
    after: string;
    before: string;
  },
  context: any,
  info: any,
): Promise<FindSkillsCursorOutput> => {
  const {
    request: { _id, lightcastID, state },
    limit,
    orderBy,
    after,
    before,
  } = args;

  console.log("Query > findSkills > args.fields = ", args);

  let options: SearchOptions = {
    limit: limit || DEFAULT_PAGE_LIMIT,
  };

  if (orderBy) {
    const sortField: any = orderBy.field;
    const sort = { [sortField]: orderBy.direction == "ASC" ? 1 : -1 };
    options.field = orderBy.field || "_id";
    options.sort = sort;
    options.direction = orderBy.direction == "ASC" ? 1 : -1;
  } else {
    options.field = "_id";
    options.sort = {
      _id: 1,
    };
    options.direction = 1;
  }

  let than_key_next = options.direction === 1 ? "$gt" : "$lt";
  let than_key_prev = options.direction === -1 ? "$gt" : "$lt";

  if (after) {
    let after_key: any = after;
    if (options.field === "_id") after_key = mongoose.Types.ObjectId(String(after));
    options.filters = {
      [options.field]: {
        [than_key_next]: after_key,
      },
    };
  } else if (before) {
    let before_key: any = before;
    if (options.field === "_id") before_key = mongoose.Types.ObjectId(String(before));
    options.filters = {
      [options.field]: {
        [than_key_prev]: before_key,
      },
    };
    options.sort[options.field] = -1 * options.sort[options.field];
  }

  let searchQuery = {};

  if (_id) {
    searchQuery = {
      $and: [{ _id: _id }, { state: state ? state : ApprovedSkillEnum.Approved }],
    };
  } else if (lightcastID) {
    searchQuery = {
      $and: [{ lightcastID: lightcastID }, { state: state ? state : ApprovedSkillEnum.Approved }],
    };
  } else {
    searchQuery = {
      $and: [{ state: state ? state : ApprovedSkillEnum.Approved }],
    };
  }

  try {
    let data = await Skills.find({ ...searchQuery, ...options.filters })
      .sort(options.sort)
      .limit(options.limit);

    if (before) data.reverse();

    let hasNextPage =
      data.length > 0
        ? !!(await Skills.findOne({
            ...searchQuery,
            [options.field]: {
              [than_key_next]: data[data.length - 1][options.field],
            },
          }))
        : !!before;

    let hasPrevPage =
      data.length > 0
        ? !!(await Skills.findOne({
            ...searchQuery,
            [options.field]: {
              [than_key_prev]: data[0][options.field],
            },
          }))
        : !!after;

    let pageInfo = {
      hasNextPage,
      hasPrevPage,
      start: data.length > 0 ? data[0][options.field] : after,
      end: data.length > 0 ? data[data.length - 1][options.field] : before,
    };

    console.log(`skillsData: ${data} || pageInfo: ${JSON.stringify(pageInfo)}`);

    return {
      skills: data,
      pageInfo,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findSkills", {
      component: "SkillsQuery > findSkills",
    });
  }
};

export default findSkills;
