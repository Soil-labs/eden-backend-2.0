import query from "./query";
import memberType from "./member";
import serverType from "./server";
import skillType from "./skill";
import skillSubCategoryType from "./skillSubCategory";
import projectType from "./project";
import commonType from "./common";
import skillCategory from "./skillCategory";
import rooms from "./rooms";

const typeDefs = [
  query,
  ...memberType,
  ...serverType,
  ...skillType,
  ...skillSubCategoryType,
  ...projectType,
  ...commonType,
  ...skillCategory,
  ...rooms,
];

export default typeDefs;
