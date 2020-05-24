import fs from "fs";
//i18n
import i18next from "i18next";

class Language {
  //laod languages
  async loadLanguages(folder) {
    let result = {};
    await fs
      .readdirSync(`./src/translation/${folder}`)
      .forEach((filename: string) => {
        let file = require(`./${folder}/${filename}`);
        result[filename.replace(".json", "")] = file;
      });
    return result;
  }

  async initialize() {
    const conf = {
      lng: "pt_br",
      debug: false,
      resources: {
        pt_br: {
          translation: await this.loadLanguages("pt_br")
        },
        en_us: {
          translation: await this.loadLanguages("en_us")
        }
      }
    };

    return await i18next.init(conf);
  }
}

export default Language;
