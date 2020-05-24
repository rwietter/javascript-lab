//resolvers
import layout from "./layout.resolver";
import alert from "./alert.resolver";
import user from "./user.resolver";

const files = [layout, alert, user];
let resolvers = {
  Query: {},
  Mutation: {}
};

files.forEach(file => {
  if (file.Query) resolvers.Query = { ...resolvers.Query, ...file.Query };
  delete file.Query;
  if (file.Mutation)
    resolvers.Mutation = { ...resolvers.Mutation, ...file.Mutation };
  delete file.Mutation;
  resolvers = { ...resolvers, ...file };
});

export default resolvers;
