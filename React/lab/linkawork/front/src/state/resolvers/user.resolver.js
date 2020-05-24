export default {
  Mutation: {
    setUser: (_, args, { cache }) => {
      cache.writeData({
        data: {
          user: {
            ...args,
            __typename: "User"
          }
        }
      });
      return true;
    },
    removeUser: (_, args, { cache }) => {
      cache.writeData({
        data: {
          user: null
        }
      });
      return true;
    }
  }
};
