//configs
import "module-alias/register";
import configs from "./config/configs";
//rest
import express = require("express");
//graphql
import { ApolloServer } from "apollo-server";
import context from "@classes/Middleware.ts";
import { formatError } from "@classes/Utils.ts";
import directives from "@classes/Directives.ts";
import resolvers from "@resolvers";
import schema from "@schemas";
import Translation from "./translation";
const translation = new Translation();
translation.initialize();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context,
  formatError,
  schemaDirectives: directives,
  tracing: true,
  playground: true
});

server.listen({ port: configs.ghraphQLPort }).then(({ url }) => {
  console.log(`🚀  Server GraphQL inicialized in ${url}`);
});

//REST API
var app = express();

//Definir Repositórios estáticos
app.use("/curriculums", express.static(__dirname + "/curriculums"));
app.use("/images", express.static(__dirname + "/../images"));

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(configs.restPort, () => {
  console.log(
    `🚀  Server Rest inicialized in http://localhost:${configs.restPort}/`
  );
});
