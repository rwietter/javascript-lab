const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID! # primary key do usuário no dB
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User! # aninhamento de types
  }

  type Query {
    hello: String
    users: [User!]! # users retorna um array do tipo User, com ! informando que pode retornar um array vazio mais não nulo
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: 'Fred',
    email: 'fred@go.com',
    active: true,
  },
  {
    _id: String(Math.random()),
    name: 'Carl',
    email: 'carl@go.com',
    active: false,
  },
  {
    _id: String(Math.random()),
    name: 'John',
    email: 'jhon@go.com',
    active: true,
  },
];

const resolvers = {
  Query: {
    hello: () => 'Hello, world',
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random().toFixed(2)),
        name: args.name,
        email: args.email,
        active: true,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen(5000)
  .then(({ url }) => console.log(`🔥 Server starded at ${url}`));

/*
-> aninhar types: utilizar
query {
  posts {
    title
    author {
      name
    }
  }
}
*/
