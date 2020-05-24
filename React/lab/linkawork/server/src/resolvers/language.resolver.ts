import i18next from "i18next";
import db from "../models";

export default {
  LanguageLevel: {
    name: _ => i18next.t(`languages.${_.name}`)
  },
  Language: {
    image: (_, args, context) =>
      _.image && `${context.url_rest}/images/countrys/${_.image}`
  },
  UserLanguage: {
    language: _ => db.languages.findOne({ where: { id: _.language } }),
    level: _ => db.language_levels.findOne({ where: { id: _.level } })
  },
  Query: {
    languages: (_, args) => db.languages.findAll(args),
    languageLevels: () => db.language_levels.findAll()
  },
  Mutation: {
    deleteUserLanguage: (_, args, context) =>
      db.user_languages
        .findOne({
          where: { language: args.language, user_id: context.user.id }
        })
        .then(async response => {
          if (!response)
            throw new UserInputError(i18next.t("languages.Language not found"));

          await response.destroy();
          return true;
        }),
    setUserLanguage: (_, args, context) =>
      db.user_languages
        .findOne({
          where: { language: args.language, user_id: context.user.id },
          paranoid: false
        })
        .then(async response => {
          if (!response) {
            //create
            await db.user_languages.create({
              ...args,
              user_id: context.user.id
            });
          } else {
            //update
            await db.user_languages.update(
              { level: args.level, deletedAt: null },
              {
                where: { language: args.language, user_id: context.user.id },
                paranoid: false
              }
            );
          }
          return true;
        })
        .catch(error => {
          console.log(error);
          throw new Error(i18next.t("geral.Unable to register"));
        })
  }
};
