import db from "../models";
import { fileUpload } from "@classes/Utils.ts";
export default {
  File: {
    url: (_, args, context) => _.url && `${context.url_rest}/${_.url}`
  },
  Mutation: {
    imageUpload: (_, args, context) =>
      fileUpload(args.image, `./images/${args.type || "geral"}`, [
        "jpg",
        "jpeg",
        "png",
        "gif"
      ])
        .then(response =>
          db.images.create({
            url: `images/${args.type || "geral"}/${response.filename}`,
            alt: args.alt
          })
        )
        .catch(error => {
          console.log(error);
          throw new Error("Não foi possível fazer o upload");
        })
  }
};
