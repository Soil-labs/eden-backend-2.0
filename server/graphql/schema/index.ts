import query from "./query";
import mutation from "./mutation";
import memberType from "./member";
import serverType from "./server";
import skillType from "./skill";
import skillSubCategoryType from "./skillSubCategory";
import projectType from "./project";
import commonType from "./common";
import skillCategory from "./skillCategory";

const typeDefs = [
  query,
  mutation,
  ...memberType,
  ...serverType,
  ...skillType,
  ...skillSubCategoryType,
  ...projectType,
  ...commonType,
  ...skillCategory,
];

export default typeDefs;
