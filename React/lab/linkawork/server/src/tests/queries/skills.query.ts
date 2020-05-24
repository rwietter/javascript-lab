import gql from "graphql-tag";
export const CREATE_SKILL = gql`
  mutation CREATE_SKILL($name: String!, $description: String, $image: Upload) {
    createSkill(name: $name, description: $description, image: $image) {
      id
      name
      description
      image
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation UPDATE_SKILL(
    $id: ID!
    $name: String
    $description: String
    $image: Upload
  ) {
    updateSkill(
      id: $id
      name: $name
      description: $description
      image: $image
    ) {
      id
      name
      description
      image
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation DELETE_SKILL($id: ID!) {
    deleteSkill(id: $id) {
      id
      name
      description
      image
    }
  }
`;

export const GET_SKILL = gql`
  query GET_SKILL($id: ID!) {
    skills(id: $id) {
      id
      name
      description
      image
    }
  }
`;

export const SET_USER_SKILL = gql`
  mutation SET_USER_SKILL($skill: ID!, $stars: Int!) {
    setUserSkill(skill: $skill, stars: $stars) {
      skill {
        id
        name
      }
      stars
    }
  }
`;

export const DELETE_USER_SKILL = gql`
  mutation DELETE_USER_SKILL($skill: ID!) {
    deleteUserSkill(skill: $skill) {
      skill {
        id
        name
      }
    }
  }
`;
