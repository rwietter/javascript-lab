import * as jwt from "jsonwebtoken";
import DB from "@models";
import db from "../models";
//i18n
import i18next from "i18next";
const env = process.env.NODE_ENV || "development";
let config = require(__dirname + "/../config/config.json")[env];

export default async ({ req }: any) => {
  const { language, authorization } = req.headers;
  if (language) i18next.changeLanguage(language);
  else i18next.changeLanguage("pt_br");

  let urls = {
    url_rest: config.urlRest,
    url_graphql: config.urlGraphql
  };

  if (!authorization) return { ...urls };

  //decodifica token
  let token = authorization.replace("Bearer ", "");
  var decoded = jwt.decode(token);
  if (!decoded) return { ...urls };
  let { type, token_id } = decoded;

  let user = await DB.users.findOne({
    raw: true,
    include: {
      required: true,
      model: DB.PermAccessControl,
      where: { token: token_id, status: 1 }
    }
  });

  if (!user) return { ...urls };

  return jwt.verify(
    token,
    type === "linkedin"
      ? user["PermAccessControls.linkedin_code"]
      : user.password,
    async (err: any) => {
      if (err) return { ...urls };

      let perms = await db.PermObjects.findAll({
        attributes: ["name"],
        where: { status: 1, type: "graphql" },
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
              where: { user_id: user.id }
            }
          }
        }
      });
      perms = perms.map(item => item.name);
      user = { ...user, permissions: perms };
      return { user, token, ...urls };
    }
  );
};
