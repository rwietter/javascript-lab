import DB from "@models";
import User from "@controllers/user.controller.ts";
const user = new User();
import db from "../models";

export default {
  UserSkill: {
    skill: _ => db.skills.findOne({ where: { id: _.skill } })
  },
  User: {
    educational_background: (_: any) =>
      DB.EducationalBackgrounds.findOne({
        where: { id: _.educational_backgrounds_id }
      }),
    auths: (_: any) => user.auths(_.id),
    skills: _ =>
      db.user_skills.findAll({
        where: { user_id: _.id },
        include: [
          {
            model: db.skills,
            as: "skill_fk",
            required: true,
            where: {
              deletedAt: null
            }
          }
        ]
      }),
    languages: _ => db.user_languages.findAll({ where: { user_id: _.id } }),
    experiences: _ =>
      db.experiences.findAll({
        where: { user: _.id },
        order: [
          ["initial_date", "DESC"],
          ["createdAt", "DESC"]
        ]
      }),
    ocupation_areas: _ =>
      db.ocupation_areas.findAll({
        includes: {
          required: true,
          model: db.user_ocupation_areas,
          where: {
            user_id: _.id
          }
        }
      })
  },
  Query: {
    me: (_: any, args: any, context: any) =>
      DB.users.findOne({ where: { id: context.user.id } }),
    legalUsers: (_, args) =>
      DB.users.findAll({
        ...args,
        where: {
          type: "legal",
          firstname: { $iLike: `%${args.where.search}%` }
        }
      })
  },
  Mutation: {
    createAccount: (_: any, args: any) => user.create(args),
    login: (_: any, args: any) => user.login(args),
    destroyToken: (_: any, args: any, context: any) =>
      user.destroyToken(context),
    loginWithLinkedIn: user.loginWithLinkedIn,
    updateAccount: (_: any, args: any, context: any) =>
      db.users
        .findOne({ where: { id: context.user.id } })
        .then(response => response.update({ ...args }))
        .catch(error => {
          console.log(error);
          throw error;
        })
  }
};
