import { Projects } from "../../../../models/projectModel";
import {
  FindProjectsInput,
  ProjectOrderBy,
  FindProjectsCursorOutput,
} from "../../../../generated";
import { ApolloError } from "apollo-server-express";
import mongoose from "mongoose";

const DEFAULT_PAGE_LIMIT = 20;
interface SearchOptions {
  [key: string]: any;
}

const findProjects = async (
  parent: any,
  args: {
    request: FindProjectsInput;
    orderBy: ProjectOrderBy;
    after: String;
    before: String;
    limit: Number;
  },
  context: any,
  info: any,
): Promise<FindProjectsCursorOutput> => {
  const {
    request: { _id, serverID, gardenServerID },
    limit,
    orderBy,
    after,
    before,
  } = args;

  console.log("Query > findProjects > args.fields = ", args);

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

  let queryServerID: any = [];
  if (serverID) {
    serverID.forEach(id => {
      queryServerID.push({ serverID: id });
    });
  }

  if (_id) {
    if (queryServerID.length > 0) {
      searchQuery = { $and: [{ _id: _id }, { $or: queryServerID }] };
    } else if (gardenServerID) {
      searchQuery = { $and: [{ _id: _id }, { gardenServerID: gardenServerID }] };
    } else {
      searchQuery = { _id: _id };
    }
  } else {
    if (queryServerID.length > 0) {
      searchQuery = { $or: queryServerID };
    } else if (gardenServerID) {
      searchQuery = { gardenServerID: gardenServerID };
    } else {
      searchQuery = {};
    }
  }

  try {
    let projectsData = await Projects.find({ ...searchQuery, ...options.filters })
      .sort(options.sort)
      .limit(options.limit);

    if (before) projectsData.reverse();

    let hasNextPage =
      projectsData.length > 0
        ? !!(await Projects.findOne({
            ...searchQuery,
            [options.field]: {
              [than_key_next]: projectsData[projectsData.length - 1][options.field],
            },
          }))
        : !!before;

    let hasPrevPage =
      projectsData.length > 0
        ? !!(await Projects.findOne({
            ...searchQuery,
            [options.field]: {
              [than_key_prev]: Projects[0][options.field],
            },
          }))
        : !!after;
    let pageInfo = {
      hasNextPage,
      hasPrevPage,
      start: projectsData.length > 0 ? projectsData[0][options.field] : after,
      end: projectsData.length > 0 ? projectsData[projectsData.length - 1][options.field] : before,
    };

    console.log(`projectsData: ${projectsData} || pageInfo: ${JSON.stringify(pageInfo)}`);

    return {
      projects: projectsData,
      pageInfo,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "findProjects", {
      component: "ProjectQuery > findProjects",
    });
  }
};

export default findProjects;
