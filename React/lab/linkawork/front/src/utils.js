import moment from "moment";

//valida Cnpj
export const validaCnpj = cnpj => {
  if (!cnpj) return true;
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj === "") return false;

  if (cnpj.length !== 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj === "00000000000000" ||
    cnpj === "11111111111111" ||
    cnpj === "22222222222222" ||
    cnpj === "33333333333333" ||
    cnpj === "44444444444444" ||
    cnpj === "55555555555555" ||
    cnpj === "66666666666666" ||
    cnpj === "77777777777777" ||
    cnpj === "88888888888888" ||
    cnpj === "99999999999999"
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
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) return false;

  return true;
};

//valida Cpf
export const validaCpf = strCPF => {
  if (!strCPF) return true;
  strCPF = strCPF.replace(/[^0-9]/gi, "");
  var Soma;
  var Resto;
  var i;
  Soma = 0;
  if (strCPF === "00000000000") return false;
  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false;
  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
};

//valida data
export const validaData = data => {
  if (!data) return true;
  data = moment(data, "DD/MM/YYYY");
  return data.isValid();
};

//decodifica retorno do graphql
export const decodeGraphQL = response => {
  let { data, errors } = response;
  if (errors) {
    let error_message = errors[0].message;
    let error_fields = errors[0].extensions.exception.invalidArgs;
    return {
      error: {
        message: error_message,
        fields: error_fields
      }
    };
  } else {
    return {
      success: {
        ...data
      }
    };
  }
};

export const wordsLanguage = (words) => {
  let new_words = {};
  words.map(item => {
    new_words[item.key] = item.word;
    return item
  });
  return new_words;
};
