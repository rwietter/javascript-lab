import db from "../models";
import { UserInputError } from "apollo-server";
import i18next from "i18next";
import { striptags } from "../classes/Utils";
import Order from "@controllers/order.controller.ts";
const order = new Order();
export default {
  Test: {
    creator: _ => db.users.findOne({ where: { id: _.user_id } }),
    variables: _ =>
      db.variables.findAll({
        include: {
          required: true,
          model: db.test_variables,
          key: "variable_id",
          where: { test_id: _.id }
        }
      }),
    questions: _ =>
      db.test_questions.findAll({
        where: { test_id: _.id },
        order: [
          ["order", "ASC"],
          ["id", "ASC"]
        ]
      })
  },
  Question: {
    options: _ =>
      db.test_question_options.findAll({
        include: {
          required: true,
          model: db.test_questions,
          key: "question_id",
          where: { id: _.id }
        }
      })
  },
  Query: {
    operators: (_, args) => db.operators.findAll(args),
    tests: (_, args, { user }) =>
      db.tests.findAll({
        ...args,
        where: { ...args.where, user_id: user.id }
      }),
    variables: (_, args, { user }) =>
      db.variables.findAll({
        ...args,
        where: { ...args.where, user_id: user.id }
      }),
    questions: (_, args, { user }) =>
      db.test_questions.findAll({
        ...args,
        include: {
          required: true,
          model: db.tests,
          key: "test_id",
          where: {
            user_id: user.id
          }
        },
        order: [
          ["order", "ASC"],
          ["id", "ASC"]
        ]
      })
  },
  Mutation: {
    //create a test
    createTest: (_, args, { user }) =>
      db.tests.create({
        ...args,
        description: striptags(args.description),
        user_id: user.id
      }),

    //update a test
    updateTest: (_, args, { user }) =>
      db.tests
        .findOne({ where: { id: args.id, user_id: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Test not found"));

          return response.update({ ...args });
        }),

    //delete a test
    deleteTest: (_, args, { user }) =>
      db.tests
        .findOne({ where: { id: args.id, user_id: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Test not found"));

          return response.destroy();
        }),

    //create a test variable
    createTestVariable: (_, args, { user }) =>
      db.tests.findOne({ where: { id: args.test } }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("tests.Test not found"));

        let { name, description, test } = args;
        return db.variables
          .create({
            name,
            description: striptags(description),
            type: "test",
            user_id: user.id
          })
          .then(response => {
            db.test_variables.create({
              variable_id: response.id,
              test_id: test
            });
            return response;
          });
      }),

    //update a variable
    updateTestVariable: (_, args, { user }) =>
      db.variables
        .findOne({ where: { id: args.id, user_id: user.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Variable not found"));

          return response.update({ ...args });
        }),

    //delete a test variable
    daleteTestVariable: (_, args, { user }) =>
      db.variables
        .findOne({ where: { id: args.id, user_id: user.id } })
        .then(async response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Variable not found"));

          await db.test_variables.destroy({
            where: { variable_id: args.id }
          });
          return response.destroy();
        }),

    //create a test question
    createTestQuestion: (_, args, { user }) =>
      db.tests
        .findOne({ where: { id: args.test, user_id: user.id } })
        .then(async response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Test not found"));

          let current_order = await db.test_questions.max("order", {
            where: { test_id: args.test }
          });
          current_order = current_order ? current_order + 1 : 1;
          return await db.test_questions.create({
            ...args,
            test_id: args.test,
            order: current_order
          });
        }),

    //Update a test question
    updateTestQuestion: (_, args, { user }) =>
      db.test_questions
        .findOne({
          where: { id: args.id },
          include: {
            required: true,
            model: db.tests,
            key: "test_id",
            where: { user_id: user.id }
          }
        })
        .then(async response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Question not found"));

          //reorder questions of test
          if (args.order) {
            await order.reorder(db.test_questions, args.order, args.id);
          }

          return await response.update({ ...args });
        }),

    //delete test question
    deleteTestQuestion: (_, args, { user }) =>
      db.test_questions.findOne({ where: { id: args.id } }).then(response => {
        if (!response)
          throw new UserInputError(i18next.t("tests.Question not found"));

        return response.destroy();
      }),

    //Create a question option
    createQuestionOption: (_, args, { user }) =>
      db.test_questions
        .findOne({ where: { id: args.question } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Question not found"));

          return db.test_question_options.create({
            ...args,
            question_id: args.question
          });
        }),

    //update a question option
    updateQuestionOption: (_, args, { user }) =>
      db.test_question_options
        .findOne({ where: { id: args.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Option not found"));

          return response.update(args);
        }),

    //Delete a question option
    deleteQuestionOption: (_, args, { user }) =>
      db.test_question_options
        .findOne({ where: { id: args.id } })
        .then(response => {
          if (!response)
            throw new UserInputError(i18next.t("tests.Option not found"));

          return response.destroy();
        })
  }
};
