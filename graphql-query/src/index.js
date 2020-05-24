import Server from './startedServer.js';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';

Server({ typeDefs, resolvers });
