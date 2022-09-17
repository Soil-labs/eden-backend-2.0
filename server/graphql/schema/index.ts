import member from "./member";
import server from "./server";
import skill from "./skill";
import skillSubCategory from "./skillSubCategory";
import project from "./project";
import common from "./common";
import skillCategory from "./skillCategory";
import rooms from "./rooms";
import matches from "./matches";

const typeDefs = [
  ...common,
  ...member,
  ...project,
  ...server,
  ...skill,
  ...rooms,
  ...skillCategory,
  ...skillSubCategory,
  ...matches,
];

export default typeDefs;
