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
import members from "./members";
// import skills from "./skills";

const resolvers = {
  ...members,
  // ...skills,
};

export default resolvers;
