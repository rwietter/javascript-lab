import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";
import defaults from "state/defaults";
import resolvers from "../state/resolvers";
import schemas from "../state/schemas";

const cache = new InMemoryCache();
const uploadLink = createUploadLink({
  uri: `http://127.0.0.1:8080/`,
  headers: {
    "keep-alive": "true"
  }
});

const contextLink = setContext((_, { headers }) => {
  const language = localStorage.getItem("lang");
  const token =
    "Bearer " +
    (localStorage.getItem("token") || sessionStorage.getItem("token"));
  return {
    headers: {
      ...headers,
      language: language ? language : "pt_br",
      Authorization: token
    }
  };
});

cache.writeData({
  data: defaults
});

const client = new ApolloClient({
  cache,
  link: from([contextLink, uploadLink]),
  resolvers,
  typeDefs: schemas,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "all",
      errorPolicy: "all"
    },
    mutate: {
      errorPolicy: "all"
    }
  }
});

export default client;
