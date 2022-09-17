const { gql } = require("apollo-server");
const query = require("./query");
const mutation = require("./mutation");
const memberType = require("./member");
const serverType = require("./server");
const skillType = require("./skill");
const skillCategoryType = require("./skillCategory");
const skillSubCategoryType = require("./skillSubCategory");
const projectType = require("./project");
const generalType = require("./general");

const typeDefs = gql`
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

export default typeDefs;
