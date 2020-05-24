import DB from "@models";
export default {
  Query: {
    educational_backgrounds: (_: any, args: any) =>
      DB.EducationalBackgrounds.findAll(args)
  }
};
