import moment, { Moment } from "moment";
import * as fs from "fs";
import uuid, { v4 } from "uuid";
import mime from "mime";
import { UserInputError } from "apollo-server";
import i18next from "i18next";
import striptagsLib from "striptags";

//valida Cnpj
const validaCnpj = (cnpj: string): boolean => {
  if (!cnpj) return true;
  cnpj = cnpj.toString();
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  let resultado;
  var i;
  for (i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != parseInt(digitos.charAt(1))) return false;

  return true;
};

//valida Cpf
const validaCpf = (cpf: string): boolean => {
  if (!cpf) return true;
  cpf = cpf.toString().padStart(11, "0");
  cpf = cpf.replace(/[^0-9]/gi, "");
  var Soma;
  var Resto;
  var i;
  Soma = 0;
  if (cpf == "00000000000") return false;
  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) return false;
  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
};

const cpfMask = (value: string): string => {
  value = value.toString().padStart(11, "0");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

const cnpjMask = (value: string): string => {
  value = value.toString().padStart(14, "0");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

//valida data
const validaData = (data: Date): boolean => {
  if (!data) return true;
  let valid: boolean;
  let momen: Moment = moment(data, "DD/MM/YYYY");
  valid = momen.isValid();
};

//stream to file
const storeUpload = (stream: any, path: any) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(fs.createWriteStream(path))
      .on("finish", () => resolve())
      .on("error", () => reject())
  );

const fileUpload = (file, locale, accept) => {
  return file
    .then(async (file: any) => {
      const { mimetype, filename } = file;
      let verifyType = verifyFileType(mimetype, accept);
      if (!verifyType)
        throw new UserInputError(i18next.t("geral.Invalid file type"));
      const stream = file.createReadStream();
      const random_name = uuid();
      let extension = filename.split(".");
      extension = extension[extension.length - 1];
      let path = `${locale}/${random_name}.${extension}`;
      await storeUpload(stream, path);
      return {
        mimetype: verifyType,
        path,
        filename: `${random_name}.${extension}`
      };
    })
    .catch(error => {
      throw new Error(error);
    });
};

const verifyFileType = (mimetype, accept) => {
  if (Array.isArray(accept)) {
    for (var i = 0; i < accept.length; i++) {
      let mimetype_file = mime.getType(accept[i]);
      if (mimetype == mimetype_file) {
        return mimetype_file;
      }
    }
  } else if (!Array.isArray(accept)) {
    let mimetype_file = mime.getType(accept);
    if (mimetype == mimetype_file) {
      return mimetype_file;
    }
  }
  return false;
};

const formatError = (error: any) => {
  //erro quando é erro de input
  if (
    error.extensions.exception.invalidArgs &&
    error.extensions.code == "BAD_USER_INPUT"
  ) {
    return {
      message: error.message,
      fields: error.extensions.exception.invalidArgs
    };
  }

  if (error.extensions.code == "BAD_USER_INPUT") {
    return {
      message: error.message
    };
  }

  if (error.extensions.code == "UNAUTHENTICATED") {
    return {
      message: error.message
    };
  }

  if (error.message.startsWith("UserInputError: ")) {
    return { message: error.message.replace("UserInputError: ", "") };
  }

  //erro quando é erro de validation no sequelize
  if (
    error.extensions.exception.errors &&
    error.message.startsWith("Validation error: ")
  ) {
    let fields: any = [];
    let errors = error.extensions.exception.errors;
    errors.map((item: any, key: number) => {
      fields[errors[key].path] = errors[key].message;
    });
    return {
      message: error.message.replace("Validation error: ", ""),
      fields
    };
  }

  const errId = v4();
  console.log(`error_id: ${errId}`);
  console.log(error);

  return { message: `Internal error: ${errId}` };
};

const striptags = string =>
  striptagsLib(string, [
    "p",
    "strong",
    "em",
    "ins",
    "del",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "code",
    "span",
    "ul",
    "ol",
    "li",
    "a",
    "img"
  ]);

export {
  validaCpf,
  validaCnpj,
  validaData,
  cpfMask,
  cnpjMask,
  storeUpload,
  fileUpload,
  formatError,
  striptags
};
