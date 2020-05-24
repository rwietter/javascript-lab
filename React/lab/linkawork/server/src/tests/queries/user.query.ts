import gql from "graphql-tag";
export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
      firstname
      lastname
      email
      auths
    }
  }
`;

export const REGISTER = gql`
  mutation REGISTER(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $type: String!
    $phone: String
    $zipcode: String
    $birthday: String
    $curriculum: ID
  ) {
    createAccount(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      type: $type
      phone: $phone
      zipcode: $zipcode
      birthday: $birthday
      curriculum: $curriculum
    ) {
      id
      firstname
      lastname
      email
      type
      token
    }
  }
`;

export const DESTROY_TOKEN = gql`
  mutation DESTROY_TOKEN {
    destroyToken
  }
`;

export const ME = gql`
  query ME {
    me {
      id
      firstname
      lastname
      email
      phone
      auths
      educational_background {
        id
        description
      }
    }
  }
`;
