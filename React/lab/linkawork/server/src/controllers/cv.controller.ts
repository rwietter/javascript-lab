import * as fs from "fs";
import moment = require("moment");
import { UserInputError } from "apollo-server";
import { fileUpload } from "@classes/Utils.ts";
import extract from "@classes/ExtractText.ts";
import DB from "@models";
import i18next from "i18next";

class Cv {
  async upload(args: any) {
    let { file } = args;
    let { mimetype, path, filename } = await fileUpload(file, "./curriculums", [
      "pdf",
      "docx"
    ]);

    let text;
    switch (mimetype) {
      case "application/pdf":
        text = await extract.pdf(path);
        break;
      case "application/msword":
        text = await extract.doc(path);
        break;
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        text = await extract.docx(path);
        break;
      default:
        throw new UserInputError(i18next.t("geral.Invalid file type"));
    }

    return extract
      .extractInfos(text)
      .then((data: any) =>
        DB.curriculums
          .create({
            filename: `${filename}`,
            ...data,
            birthday: data.birthday
              ? moment(data.birthday, "DD/MM/YYYY")
              : null,
            zipcode: data.zipcode
              ? parseInt(data.zipcode.replace(/[^0-9]/g, ""))
              : null
          })
          .then((curriculum: any) => {
            let { id } = curriculum.dataValues;
            return { id, ...data };
          })
          .catch((error: any) => {
            throw new Error(error);
          })
      )
      .catch((error: any) => {
        fs.unlinkSync(path);
        throw new Error(error);
      });
  }

  async delete(args: any) {
    let { id } = args;
    return DB.curriculums
      .findByPk(id)
      .then((curriculum: any) => {
        if (!curriculum)
          throw new UserInputError(i18next.t("cv.Curriculum not found"));

        return curriculum
          .destroy()
          .then(() => {
            fs.unlinkSync("curriculums/" + curriculum.filename);
            return curriculum;
          })
          .catch((error: any) => {
            throw new Error(error);
          });
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }
}

export default Cv;
