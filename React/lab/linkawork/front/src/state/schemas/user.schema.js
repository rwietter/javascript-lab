import gql from "graphql-tag";

const user = gql`
  type User {
    firstname: String
    lastname: String
    email: String
    auths: [String]
  }

  extend type Query {
    user: User
  }

  extend type Mutation {
    setUser(
      firstname: String
      lastname: String
      email: String
      auths: [String]
    ): Boolean
    removeUser: Boolean
  }
`;

export default user;
