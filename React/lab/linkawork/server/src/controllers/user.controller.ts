import { UserInputError } from "apollo-server";
import db from "@models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import i18next from "i18next";
import axios from "axios";

class User {
  async create(args) {
    let { email, password, type } = args;

    if (password.length < 8)
      throw new UserInputError(i18next.t("user.Invalid password"), {
        invalidArgs: {
          email: i18next.t("user.Invalid password")
        }
      });

    let users = await db.users.findAll({ where: { email } });
    if (users.length > 0)
      throw new UserInputError(i18next.t("user.E-mail already registred"), {
        invalidArgs: {
          email: i18next.t("user.E-mail already registred")
        }
      });

    //gera hash da senha
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    //insere no banco
    return await db.users
      .create({ ...args, password: hash })
      .then(user => {
        if (args.curriculum)
          db.Curriculum.update(
            { user_id: user.id },
            { where: { id: args.curriculum } }
          );

        if (type === "physical") this.setUserPermGroups(user.id, [2, 3, 6]);
        if (type === "legal") this.setUserPermGroups(user.id, [2, 4]);
        return this.login(args);
      })
      .catch(error => {
        throw error;
      });
  }

  async login(args) {
    let { email, password } = args;

    let users = await db.users.findAll({ where: { email } });
    if (users.length < 1)
      throw new UserInputError(i18next.t("user.Email not registred"), {
        invalidArgs: {
          email: i18next.t("user.Email not registred")
        }
      });

    if (!bcrypt.compareSync(password, users[0].password))
      throw new UserInputError(i18next.t("user.Incorrect password"), {
        invalidArgs: {
          password: i18next.t("user.Incorrect password")
        }
      });

    let user = users[0];
    //vamos gerar um id para o token
    let token_id = Math.floor(100000 + Math.random() * 9000000);

    //vamos usar um Json Web Token, para entender como funciona acesse https://jwt.io/
    let token = await jwt.sign(
      { iss: "linkawork", token_id, type: "normal" },
      user.password
    );

    await db.PermAccessControl.create({ user_id: user.id, token: token_id });

    return {
      ...user.dataValues,
      token
    };
  }

  destroyToken = (context: any): Boolean => {
    let { token } = context;
    var decoded = jwt.decode(token);
    if (!decoded) return false;

    let { token_id } = decoded;
    db.PermAccessControl.update({ status: 0 }, { where: { token: token_id } });
    return true;
  };

  languages = _ =>
    db.languages
      .findAll({
        include: {
          required: true,
          model: db.user_languages,
          as: "language_fk",
          where: {
            user_id: _.id
          }
        },
        raw: true
      })
      .map(item => ({ ...item, level: item["language_fk.level"] }));

  auths = id =>
    db.PermObjects.findAll({
      attributes: ["name"],
      where: { status: 1, type: "view" },
      include: {
        required: true,
        model: db.PermGroupHasObjects,
        include: {
          required: true,
          model: db.PermGroups,
          where: { status: 1 },
          include: {
            required: true,
            model: db.PermGroupHasUsers,
            where: { user_id: id }
          }
        }
      }
    }).map(item => item.name);

  setUserPermGroups = (user, groups) =>
    groups.map(item =>
      db.PermGroupHasUsers.create({ user_id: user, group_id: item })
    );

  loginWithLinkedIn = (_, args, context) => {
    let client_id = "7823dlkmz5w2d4";
    let client_secret = "emTVy9N6pbUnaLze";
    let redirect_uri = "http://localhost:3000/linkedin";
    let grant_type = "authorization_code";
    let { code, type } = args;

    return axios
      .get(`https://www.linkedin.com/oauth/v2/accessToken`, {
        params: {
          client_id,
          client_secret,
          redirect_uri,
          grant_type,
          code
        }
      })
      .then(response => {
        let { access_token } = response.data;
        return axios
          .get(
            `https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`,
            {
              headers: { Authorization: "Bearer " + access_token }
            }
          )
          .then(response => {
            let { emailAddress } = response.data.elements[0]["handle~"];
            return db.users
              .findOne({ where: { email: emailAddress } })
              .then(async response => {
                let ret;
                if (!response) {
                  await axios
                    .get(
                      `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,email)`,
                      {
                        headers: { Authorization: "Bearer " + access_token }
                      }
                    )
                    .then(async response => {
                      let id = response.data.id;
                      let firstName = response.data.firstName.localized.pt_BR;
                      let lastName = response.data.lastName.localized.pt_BR;
                      ret = await db.users.create({
                        linkedin_id: id,
                        firstname: firstName,
                        lastname: lastName,
                        email: emailAddress,
                        type: type
                      });
                      if (type === "physical")
                        this.setUserPermGroups(ret.id, [2, 3, 6]);
                      if (type === "legal")
                        this.setUserPermGroups(ret.id, [2, 4]);
                    })
                    .catch(error => {
                      console.log(error);
                      throw new Error("Não foi possível autenticar");
                    });
                } else {
                  ret = response;
                }

                //vamos gerar um id para o token
                let token_id = Math.floor(100000 + Math.random() * 9000000);

                //vamos usar um Json Web Token, para entender como funciona acesse https://jwt.io/
                let token = await jwt.sign(
                  { iss: "linkawork", token_id, type: "linkedin" },
                  code
                );

                await db.PermAccessControl.create({
                  user_id: ret.id,
                  token: token_id,
                  linkedin_code: code
                });

                return { ...ret.dataValues, token: token };
              })
              .catch(error => {
                console.log(error);
                throw new Error("Não foi possível autenticar");
              });
          })
          .catch(error => {
            console.log(error);
            throw new Error("Não foi possível autenticar");
          });
      })
      .catch(error => {
        console.log(error);
        throw new Error("Não foi possível autenticar");
      });
  };
}

export default User;
