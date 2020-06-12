import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

export default async function startServer({ typeDefs, resolvers }) {
  const uri =
    "mongodb+srv://euiciowr:mo5rU2sHgZV6yNc0@cluster0-yjhux.mongodb.net/week10?retryWrites=true&w=majority";
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e.message);
  }

  const server = new ApolloServer({ typeDefs, resolvers });
  server
    .listen()
    .then(({ url }) => console.log(`\u1F525 server starded at ${url}`));
}
