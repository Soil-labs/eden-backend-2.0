const express = require("express");
const { createServer } = require("http");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const { execute, subscribe } = require("graphql");
const { ApolloServer } = require("apollo-server-express");
import mongoose from "mongoose";
import authRoutes from "./auth";
import cors from "cors";

require("dotenv").config();

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";
import contextResolver from "./auth/contextResolver";

async function main() {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const subscriptionServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
    context: { text: "I am Context" },
  });

  const serverCleanup = useServer({ schema, execute, subscribe }, subscriptionServer);

  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              serverCleanup.dispose();
            },
          };
        },
      },
    ],
    context: contextResolver,
    formatError: (err: { err: any }) => {
      // logError(err);
      return err;
    },
  });
  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      // origin,
    },
  });

  const PORT = process.env.PORT || 5001;

  let DATABASE_MONGO =
    process.env.REACT_APP_MONGO_DATABASE != undefined
      ? process.env.REACT_APP_MONGO_DATABASE
      : "graphQL_harveo";

  // console.log("DATABASE_MONGO = ", DATABASE_MONGO);
  // console.log("process.env.REACT_APP_MONGO_DATABASE = ", process.env.REACT_APP_MONGO_DATABASE);

  // DATABASE_MONGO = "new_schema_with_typescript";

  mongoose
    .connect(
      `mongodb+srv://milts10:O1eSaOUKmE1xXiEz@cluster0.tilvd.mongodb.net/${DATABASE_MONGO}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
      },
    )
    .then(() => console.log("Connected to db - 2"))
    .catch((err: { err: any; message: any }) => console.log(err.message));

  // Data parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  if (process.env.NODE_ENV === "production") {
    app.use(({ req, res, next }: { req: any; res: any; next: any }) => {
      if (req.header("x-forwarded-proto") !== "https")
        res.redirect(`https://${req.header("host")}${req.url}`);
      else next();
    });
    app.use(express.static("client/build"));
  }
  // app.use(morgan("tiny"));

  // app.listen(PORT, function () {
  // // console.log(`apolloServer is ready at http://localhost:${PORT}`);
  // // console.log("DATABASE_MONGO = ", DATABASE_MONGO);
  // });

  app.use(cors());
  app.use("/auth", authRoutes());

  httpServer.listen(PORT, () => {
    console.log(`apolloServer is ready at http://localhost:${PORT}/graphql`);
  });
}

main();

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: true,
//     cache: 'bounded',
//     plugins: [
//       ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//     ],
//   });

//   server.listen().then(({ url } : {url: any}) => {
//     console.log(`🚀  Server ready at ${url}`);
//   });
