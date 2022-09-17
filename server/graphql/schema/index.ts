import memberType from "./member";
import serverType from "./server";
import skillType from "./skill";
import skillSubCategoryType from "./skillSubCategory";
import projectType from "./project";
import commonType from "./common";
import skillCategory from "./skillCategory";
import rooms from "./rooms";
import matches from "./matches";

const typeDefs = [
  ...memberType,
  ...serverType,
  ...skillType,
  ...skillSubCategoryType,
  ...projectType,
  ...commonType,
  ...skillCategory,
  ...rooms,
  ...matches,
];

export default typeDefs;
