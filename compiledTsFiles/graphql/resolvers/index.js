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
Object.defineProperty(exports, "__esModule", { value: true });
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
// export default resolvers
const { Query } = require('./query');
const { Mutation } = require('./mutation');
const resolvers = {
    Query,
    Mutation,
};
exports.default = resolvers;
