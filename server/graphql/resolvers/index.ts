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

export default resolvers