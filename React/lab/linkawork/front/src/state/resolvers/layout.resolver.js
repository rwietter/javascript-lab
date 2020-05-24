import gql from "graphql-tag";
export default {
  Mutation: {
    toggleDrawer: (_, args, { cache }) => {
      const GET_DRAWER_OPEN = gql`
        query DrawerOpen {
          drawerIsOpen @client
        }
      `;
      let { drawerIsOpen } = cache.readQuery({ query: GET_DRAWER_OPEN });
      cache.writeData({
        data: {
          drawerIsOpen: !drawerIsOpen
        }
      });
      return true;
    },
    setLoader: (_, args, { cache }) => {
      cache.writeData({
        data: {
          loader: args.active
        }
      });
      return true;
    }
  }
};
