const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello, world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen(5000)
  .then(({ url }) => console.log(`🔥 Server starded at ${url}`));

/**
 * Toda request é POST
 * Toda request bate no mesmo endpoint (/graphql)
 *
 * Query -> obter, listar informação (GET)
 * Mutation -> manipular dados (POST/PU/PATH/DELETE)
 *
 * Scalar Types -> String, Integer, Boolean, Float e ID
 *
 * Query solicita um dado, o resolver faz o mapeamento da query
 */
