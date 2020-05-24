import db from "../models";
import { UserInputError } from "apollo-server";
import i18next from 'i18next'

export default {
  Query: {
    ocupationAreas: (_, args) => db.ocupation_areas.findAll(args)
  },
  Mutation: {
    createOcupationArea: (_, args) => db.ocupation_areas.create({ ...args }),
    updateOcupationArea: (_, args) =>
      db.ocupation_areas.findOne({ where: { id: args.id } }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("ocupation_areas.Ocupation area not fount"));
        response.update(args);
        return response;
      }),
    deleteOcupationArea: (_, args) =>
      db.ocupation_areas.findOne({ where: args }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("ocupation_areas.Ocupation area not fount"));
        response.destroy();
        return response;
      }),
    createUserOcupationArea: (_, args, { user }) =>
      db.ocupation_areas.findOne({ where: args }).then(response => {
        if (!response) throw new UserInputError(i18next.t("ocupation_areas.Ocupation area not fount"));
        db.user_ocupation_areas.create({
          user_id: user.id,
          ocupation_area_id: args.id
        });
        return true;
      }),
    removeUserOcupationArea: (_, args, { user }) =>
      db.user_ocupation_areas
        .findOne({ where: { user_id: user.id, ocupation_area_id: args.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("ocupation_areas.Ocupation area not fount"));
          response.destroy();
          return true;
        })
  }
};
