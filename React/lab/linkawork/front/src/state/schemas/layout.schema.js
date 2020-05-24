import gql from "graphql-tag";

const layout = gql`
  extend type Query {
    drawerIsOpen: Boolean!
    loader: Boolean!
  }

  extend type Mutation {
    toggleDrawer: Boolean!
    setLoader(active: Boolean): Boolean
  }
`;

export default layout;
