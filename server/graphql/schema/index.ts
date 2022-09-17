import query from "./query";
import mutation from "./mutation";
import memberType from "./member";
import serverType from "./server";
import skillType from "./skill";
import skillCategoryType from "./skillCategory";
import skillSubCategoryType from "./skillSubCategory";
import projectType from "./project";
import generalType from "./general";

const typeDefs = [
  query,
  mutation,
  memberType,
  serverType,
  skillType,
  skillCategoryType,
  skillSubCategoryType,
  projectType,
  generalType,
];

export default typeDefs;
