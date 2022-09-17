"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server");
const query = require("./query.graphql");
const mutation = require("./mutation.graphql");
const memberType = require("./member.graphql");
const serverType = require("./server.graphql");
const skillType = require("./skill.graphql");
const skillCategoryType = require("./skillCategory.graphql");
const skillSubCategoryType = require("./skillSubCategory.graphql");
const projectType = require("./project.graphql");
const generalType = require("./general.graphql");
const typeDefs = gql `
  ${query}
  ${mutation}
  ${memberType}
  ${serverType}
  ${skillType}
  ${skillCategoryType}
  ${skillSubCategoryType}
  ${projectType}
  ${generalType}
`;
exports.default = typeDefs;
