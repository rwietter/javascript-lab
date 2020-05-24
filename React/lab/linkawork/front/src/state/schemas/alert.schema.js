import gql from "graphql-tag";

const alert = gql`
  type Alert {
    active: Boolean
    message: String
    variant: String
    vertical: String
    horizontal: String
    duration: Int
  }

  extend type Query {
    alert: Alert
  }

  extend type Mutation {
    alert(
      message: String!
      variant: String!
      vertical: String
      horizontal: String
      duration: Int
    ): Boolean
    closeAlert: Boolean
  }
`;

export default alert;
