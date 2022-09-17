import query from "./query";
import mutation from "./mutation";
import members from "./members";
import serverType from "./server";
import skillType from "./skill";
import skillCategoryType from "./skillCategory";
import skillSubCategoryType from "./skillSubCategory";
import projectType from "./project";
import common from "./common";

const typeDefs = [
  query,
  mutation,
  ...members,
  serverType,
  skillType,
  skillCategoryType,
  skillSubCategoryType,
  projectType,
  common,
];

export default typeDefs;
