import db from "@models";
import i18next from "i18next";
export default {
  Query: {
    positions: (_, args) => db.positions.findAll(args)
  },
  Mutation: {
    createPosition: (_, args) => db.positions.create({ ...args }),
    deletePosition: (_, args) =>
      db.positions.findOne({ where: args }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("positions.Position not found"));
        response.destroy();
        return response;
      }),
    updatePosition: (_, args) =>
      db.positions.findOne({ where: { id: args.id } }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("positions.Position not found"));
        response.update(args);
        return response;
      })
  }
};
