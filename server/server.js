const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// requiring db connenction
const db = require("./config/connection");
// importing ApolloServer
const { ApolloServer } = require("apollo-server-express");

// importing typeDefs, resolves, and middleware
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
// creating new Apollo server and passing in typeDefs, resolvers, and authMiddleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// new instance of Apollo server using GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      // console logs kept here so command line logs were we can access GraphQL testing
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// starting server by calling function
startApolloServer(typeDefs, resolvers);
