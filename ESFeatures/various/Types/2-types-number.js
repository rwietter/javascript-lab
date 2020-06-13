const oneNumber = 12.408389;

// Convert number to string
const numberAsString = oneNumber.toString();
console.log(`Number as String: ${typeof numberAsString} ${numberAsString}`);

// Retorna número com um número de casas decimais
const fixedTwodecimals = oneNumber.toFixed();
console.log(`\nNúmero com duas casas decimais ${fixedTwodecimals}`);

// Transforma uma string em float
console.log(`\nString parseada para float: ${parseFloat("13.22")}`);

// Transforma uma string em inteiro
console.log(`\nString parseado para inteiro: ${parseInt("13.43")}`);
