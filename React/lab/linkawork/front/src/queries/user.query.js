import gql from "graphql-tag";

export const SET_USER = gql`
  mutation SetUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $auths: [String]
  ) {
    setUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      auths: $auths
    ) @client
  }
`;

export const GET_USER = gql`
  query User {
    user @client {
      firstname
      lastname
      email
      auths
    }
  }
`;

export const GET_ME = gql`
  query User {
    me {
      id
      firstname
      lastname
      email
      auths
    }
  }
`;

export const REMOVE_USER = gql`
  mutation REMOVE_USER {
    removeUser @client
  }
`;
