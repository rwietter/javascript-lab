let jupiter = `jupiter`;

console.log(
  `${jupiter.slice(0, 4)}
${jupiter.indexOf(`e`)}
${jupiter.trim(`i`)}
${jupiter.charAt(5)}
${jupiter.concat(` - Gas Giant`)}
${jupiter.includes(`ter`)}
${jupiter.localeCompare(`jupiter`)}
${jupiter.padStart(17, `Gas Giant `)}`
);
/*
 jupi
 5
 jupiter
 e
 jupiter - Gas Giant
 true
 0
 Gas Giant jupiter
*/

// Trim => remove os caracteres em branco à esquerda e à direita e os terminadores de linha de uma sequência.
// IndexOf => retorna o index de um valor, se não econtrar retorna -1
// Slice => corta uma string em um valor especificado
// CharAt => retorna o caracter de um index especificado
// Includes => retorna um boleano true para caso um caracter ou string esteja na expressão ou false caso não esteja
// LocaleCompare => retorna um valor de uma comparação com duas strings
// padStart => adciona um padding no ínicio com qualquer outro valor

let cite = `Você por acaso já questionou a natureza da sua realidade?`;
let citeSplit = cite.split(" ");
console.log(citeSplit);
let citeJoin = citeSplit.join(" ");
console.log(citeJoin);

// Split => corta a string em pedaços definidos e retorna um array de strings
// Join => junta pedaços de strings em um só, podendo definir um parâmetro de formatação

let k = `k`;
let repeatK = k.repeat(10);
console.log(repeatK);

// Repeat => repete caracteres definidos por um parâmetro
