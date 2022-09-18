import common from "./common";
import member from "./member";
import project from "./project";
import roleTemplate from "./roleTemplate";
import skill from "./skill";
import skillSubCategory from "./skillSubCategory";
import skillCategory from "./skillCategory";
import server from "./server";
import rooms from "./rooms";
import topic from "./topic";
import note from "./note";
import matches from "./matches";

const typeDefs = [
  ...common,
  ...member,
  ...project,
  ...roleTemplate,
  ...skill,
  ...skillCategory,
  ...skillSubCategory,
  ...server,
  ...rooms,
  ...topic,
  ...note,
  ...matches,
];

export default typeDefs;
