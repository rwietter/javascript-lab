import gql from "graphql-tag";

export const ALERT = gql`
  mutation Alert(
    $message: String!
    $variant: String!
    $vertical: String
    $horizontal: String
    $duration: Int
  ) {
    alert(
      message: $message
      variant: $variant
      vertical: $vertical
      horizontal: $horizontal
      duration: $duration
    ) @client
  }
`;
