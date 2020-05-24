export default {
  Mutation: {
    alert: (_, args, { cache }) => {
      Object.keys(args).map(item => {
        if (args[item] === undefined) args[item] = null;
        return true;
      });
      cache.writeData({
        data: {
          alert: {
            active: true,
            ...args,
            __typename: "Alert"
          }
        }
      });
      return true;
    },
    closeAlert: (_, args, { cache }) => {
      cache.writeData({
        data: {
          alert: {
            active: false,
            message: null,
            variant: null,
            vertical: null,
            horizontal: null,
            duration: null,
            __typename: "Alert"
          }
        }
      });
      return true;
    }
  }
};
