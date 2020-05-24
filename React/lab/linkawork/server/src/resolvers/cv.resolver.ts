import Cv from "@controllers/cv.controller.ts";
const cv = new Cv();

export default {
  Mutation: {
    uploadCv: (_: any, args: any, context: any) => cv.upload(args, context),
    deleteCv: (_: any, args: any, context: any) => cv.delete(args, context)
  }
};
