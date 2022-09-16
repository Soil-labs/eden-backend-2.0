"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServerPluginLandingPageLocalDefault } = require("apollo-server-core");
const express = require("express");
const { createServer } = require("http");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const { execute, subscribe } = require("graphql");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { ApolloError } = require("apollo-server-express");
require("dotenv").config();
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const schema_1 = __importDefault(require("./graphql/schema"));
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    const app = express();
    const httpServer = createServer(app);
    const schema = makeExecutableSchema({
      typeDefs: schema_1.default,
      resolvers: resolvers_1.default,
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
          serverWillStart() {
            return __awaiter(this, void 0, void 0, function* () {
              return {
                drainServer() {
                  return __awaiter(this, void 0, void 0, function* () {
                    serverCleanup.dispose();
                  });
                },
              };
            });
          },
        },
      ],
      context: ({ req }) => {
        if (req.body) {
          req.body.query = req.body.query;
        }
        try {
          req.header["Access-Control-Allow-Origin"] = "*";
          req.header["Access-Control-Allow-Headers"] =
            "Origin, X-Requested-With, Content-Type, Accept";
          if (req.headers.authorization) {
            req.headers.authorization.replace(/[&#,+()$~%.:*?<>]/g, "");
            const payload = jwt.decode(req.headers.authorization.replace("Bearer ", ""));
            const user = { id: payload._id, email: payload.email };
            req.user = user;
          }
        } catch (err) {
          // console.log(err);
        }
        return { req };
      },
      formatError: (err) => {
        // logError(err);
        return err;
      },
    });
    yield server.start();
    server.applyMiddleware({
      app,
      cors: {
        // origin,
      },
    });
    const PORT = process.env.PORT || 5001;
    const DATABASE_MONGO =
      process.env.REACT_APP_MONGO_DATABASE != undefined
        ? process.env.REACT_APP_MONGO_DATABASE
        : "graphQL_harveo";
    mongoose
      .connect(
        `mongodb+srv://milts10:O1eSaOUKmE1xXiEz@cluster0.tilvd.mongodb.net/${DATABASE_MONGO}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
          useCreateIndex: true,
        }
      )
      .then(() => console.log("Connected to db - 2"))
      .catch((err) => console.log(err.message));
    // Data parsing
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    if (process.env.NODE_ENV === "production") {
      app.use(({ req, res, next }) => {
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
    httpServer.listen(PORT, () => {
      console.log(`apolloServer is ready at http://localhost:${PORT}/graphql`);
    });
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
