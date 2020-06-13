// length = return quantidade
const textSize = "Texto".length;
console.log(`Quantidade de letras: ${textSize}`);

// return array quebrando a string por um delimitador
const splittedText = "Texto".split("e");
console.log("\nArray com posições separadas pelo split:", splittedText);

// Busca por um valor e subtitui por outro
const replacedText = "Mauricio".replace("Ma", "cio");
console.log(`\nTroca o primeiro parãmetro com o segundo: ${replacedText}`);

// retorna a 'fatia' de um valor
const lastChar = "texto".slice(-1);
console.log(`\nÚltima letra da string:: ${lastChar}`);
const allWithoutLastChar = "Texto".slice(0, -1);
console.log(`\nFatia de 0, -1: ${allWithoutLastChar}`);
const secondToEnd = "Texto".slice(1);
console.log(`\nFatia da string 1: ${secondToEnd}`);

// retorn N caracteresa partird deuma posição
const twoBeforeFirstPos = "Texto".substr(0, 2);
console.log(`\nAs duas primeiras letras: ${twoBeforeFirstPos}`);
