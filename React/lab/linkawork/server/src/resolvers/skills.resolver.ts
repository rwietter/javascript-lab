import db from "../models";
import { UserInputError } from "apollo-server";
import { fileUpload } from "@classes/Utils.ts";
import i18next from "i18next";

export default {
  Skill: {
    image: (_, args, context) =>
      _.image && `${context.url_rest}/images/skills/${_.image}`
  },
  Query: {
    skills: (_, args) => db.skills.findAll(args)
  },
  Mutation: {
    createSkill: async (_, args) => {
      if (!args.image) return await db.skills.create({ ...args });
      let { filename } = await fileUpload(args.image, "./images/skills", [
        "jpg",
        "jpeg",
        "png",
        "gif"
      ]);
      return await db.skills.create({ ...args, image: filename });
    },
    deleteSkill: (_, args) =>
      db.skills.findOne({ where: args }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("skills.Skill not found"));
        response.destroy();
        return response;
      }),
    updateSkill: async (_, args) => {
      if (args.image) {
        let { filename } = await fileUpload(args.image, "./images/skills", [
          "jpg",
          "jpeg",
          "png",
          "gif"
        ]);
        args = { ...args, image: filename };
      }
      if (args.image === null) {
        args = { ...args, image: null };
      }
      return await db.skills
        .findOne({ where: { id: args.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("skills.Skill not found"));
          response.update({ ...args });
          return response;
        });
    },
    setUserSkill: (_, args, context) =>
      db.user_skills
        .findOne({
          where: { skill: args.skill, user_id: context.user.id },
          paranoid: false
        })
        .then(async response => {
          if (!response) {
            //create
            await db.user_skills.create({ ...args, user_id: context.user.id });
          } else {
            //update
            await db.user_skills.update(
              { stars: args.stars, deletedAt: null },
              {
                where: { skill: args.skill, user_id: context.user.id },
                paranoid: false
              }
            );
          }
          let name = await db.skills.findOne({ where: { id: args.skill } });
          name = name.name;
          return { skill: args.skill, stars: args.stars, name };
        })
        .catch(error => {
          console.log(error);
          throw new Error(i18next.t("geral.Unable to register"));
        }),

    deleteUserSkill: (_, args, context) =>
      db.user_skills
        .findOne({ where: { skill: args.skill, user_id: context.user.id } })
        .then(async response => {
          if (!response)
            throw new UserInputError(i18next.t("skills.Skill not found"));

          await response.destroy();
          let name = await db.skills.findOne({ where: { id: response.skill } });
          name = name.name;
          return { skill: response.skill, stars: response.stars, name };
        })
  }
};
