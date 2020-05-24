import gql from "graphql-tag";

export const CREATE_TEST = gql`
  mutation CREATE_TEST($name: String!, $description: String!, $type: String!) {
    createTest(name: $name, description: $description, type: $type) {
      id
      name
      description
      type
    }
  }
`;

export const UPDATE_TEST = gql`
  mutation UPDATE_TEST(
    $id: ID!
    $name: String
    $description: String
    $type: String
  ) {
    updateTest(id: $id, name: $name, description: $description, type: $type) {
      id
      name
      description
      type
    }
  }
`;

export const DELETE_TEST = gql`
  mutation DELETE_TEST($id: ID!) {
    deleteTest(id: $id) {
      id
    }
  }
`;

export const CREATE_TEST_VARIABLE = gql`
  mutation CREATE_TEST_VARIABLE(
    $test: ID!
    $name: String!
    $description: String
  ) {
    createTestVariable(test: $test, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_TEST_VARIABLE = gql`
  mutation CREATE_TEST_VARIABLE($id: ID!, $name: String, $description: String) {
    updateTestVariable(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const GET_VARIABLE = gql`
  query GET_VARIABLE($id: ID!) {
    variables(id: $id) {
      id
      name
      description
    }
  }
`;

export const DELETE_TEST_VARIABLE = gql`
  mutation DELETE_TEST_VARIABLE($id: ID!) {
    daleteTestVariable(id: $id) {
      id
    }
  }
`;
