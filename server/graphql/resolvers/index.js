"use strict";
// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
// export default resolvers
const members_1 = __importDefault(require("./members"));
const resolvers = {
    members: members_1.default,
};
exports.default = resolvers;
