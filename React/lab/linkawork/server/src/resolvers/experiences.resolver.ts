import { UserInputError } from "apollo-server";
import db from "../models";
import i18next from "i18next";

export default {
  Experience: {
    company: _ =>
      db.users.findOne({ where: { id: _.position, type: "legal" } }),
    position: _ => db.positions.findOne({ where: { id: _.position } }),
    skills: _ =>
      db.skills.findAll({
        include: {
          required: true,
          model: db.experience_skills,
          where: { experience_id: _.id }
        }
      })
  },
  Mutation: {
    createExperience: (_, args, { user }) => {
      let { company, company_name, position, position_name } = args;
      if (!company && (!company_name || company_name.lenght < 3))
        throw new UserInputError(i18next.t("experiences.Invalid company"));
      if (!position && (!position_name || position_name.lenght < 3))
        throw new UserInputError(i18next.t("experiences.Invalid position"));
      return db.experiences.create({
        ...args,
        user: user.id
      });
    },
    updateExperience: (_, args, { user }) =>
      db.experiences
        .findOne({ where: { id: args.id, user: user.id } })
        .then(response => {
          let { company, company_name, position, position_name } = response;
          let params = {
            company,
            company_name,
            position,
            position_name,
            ...args
          };
          if (
            !params.company &&
            (!params.company_name || params.company_name.lenght < 3)
          )
            throw new UserInputError(i18next.t("experiences.Invalid company"));
          if (
            !params.position &&
            (!params.position_name || params.position_name.lenght < 3)
          )
            throw new UserInputError(i18next.t("experiences.Invalid position"));

          response.update(params);
          return response;
        })
        .catch(error => {
          console.log(error);
          throw error;
        }),
    deleteExperience: (_, args, { user }) =>
      db.experiences
        .findOne({ where: { id: args.id, user: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(
              i18next.t("experiences.Experience not found")
            );
          response.destroy();
          return true;
        })
        .catch(error => {
          console.log(error);
          throw error;
        }),
    setExperienceSkill: (_, args, { user }) =>
      db.experiences
        .findOne({ where: { id: args.experience, user: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(
              i18next.t("experiences.Experience not found")
            );
          return db.skills
            .findOne({ where: { id: args.skill } })
            .then(response => {
              if (!response)
                throw new UserInputError(i18next.t("skill.Skill not found"));
              let { experience, skill } = args;
              //select experience_skills
              return db.experience_skills
                .findOne({
                  where: { experience_id: experience, skill_id: skill }
                })
                .then(response => {
                  //update experience_skills
                  if (response) {
                    db.experience_skills.update(
                      {
                        ...args,
                        experience_id: experience,
                        skill_id: skill
                      },
                      {
                        where: {
                          experience_id: experience,
                          skill_id: skill
                        }
                      }
                    );
                    return true;
                  }
                  //create experience_skills
                  db.experience_skills.create({
                    ...args,
                    experience_id: experience,
                    skill_id: skill
                  });
                  return true;
                })
                .catch(error => {
                  console.log(error);
                  throw error;
                });
            })
            .catch(error => {
              console.log(error);
              throw error;
            });
        })
        .catch(error => {
          console.log(error);
          throw error;
        }),
    deleteExperienceSkill: (_, args, { user }) =>
      db.experiences
        .findOne({ where: { id: args.experience, user: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(
              i18next.t("experiences.Experience not found")
            );
          return db.experience_skills
            .findOne({
              where: { experience_id: args.experience, skill_id: args.skill }
            })
            .then(response => {
              if (!response)
                throw new UserInputError(i18next.t("skill.Skill not found"));
              db.experience_skills.destroy({
                where: { experience_id: args.experience, skill_id: args.skill }
              });
              return true;
            })
            .catch(error => {
              console.log(error);
              throw error;
            });
        })
        .catch(error => {
          console.log(error);
          throw error;
        })
  }
};
