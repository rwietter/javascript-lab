import gql from "graphql-tag";

export const CREATE_OCUPATION_AREA = gql`
  mutation CREATE_OCUPATION_AREA($name: String!, $description: String) {
    createOcupationArea(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_OCUPATION_AREA = gql`
  mutation UPDATE_OCUPATION_AREA(
    $id: ID!
    $name: String
    $description: String
  ) {
    updateOcupationArea(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_OCUPATION_AREA = gql`
  mutation DELETE_OCUPATION_AREA($id: ID!) {
    deleteOcupationArea(id: $id) {
      id
      name
      description
    }
  }
`;

export const GET_OCUPATION_AREAS = gql`
  query GET_OCUPATION_AREAS($id: ID, $limit: Int, $offset: Int) {
    ocupationAreas(id: $id, limit: $limit, offset: $offset) {
      id
      name
      description
    }
  }
`;
