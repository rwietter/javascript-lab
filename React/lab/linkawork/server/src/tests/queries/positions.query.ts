import gql from "graphql-tag";
export const CREATE_POSITION = gql`
  mutation CREATE_POSITION($name: String!, $description: String) {
    createPosition(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_POSITION = gql`
  mutation UPDATE_POSITION($id: ID!, $name: String, $description: String) {
    updatePosition(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_POSITION = gql`
  mutation DELETE_POSITION($id: ID!) {
    deletePosition(id: $id) {
      id
      name
      description
    }
  }
`;

export const GET_POSITION = gql`
  query GET_POSITION($id: ID!) {
    positions(id: $id) {
      id
      name
      description
    }
  }
`;
