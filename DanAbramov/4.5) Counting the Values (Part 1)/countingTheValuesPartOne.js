console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Undefined ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
/*
  Aparece em algumas situações onde o JavaScript não sabem o valor que você queria.a
  undefined: valor involuntariamente faltando.
*/
console.log(`Undefined: ${typeof undefined}`); // undefined: valor involuntariamente faltando.

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Null ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
let mimsy = null;
// console.log(mimsy.mood); // TypeError! mimsy > null
console.log(`Null: ${typeof null}`); // Null

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Booleans ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
console.log(`Boolean: ${typeof true || false}`); // Boolean
let isSad = true;
let isHappy = !isSad; // The opposite
let isFeeling = isSad || isHappy; // Is at least one of them true?
let isConfusing = isSad && isHappy; // Are both true?

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Numbers ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
console.log(`typeof 28: ${typeof 28}`); // "number"
console.log(`typeof 3.14: ${typeof 3.14}`); // "number"
console.log(`typeof -140: ${typeof -140}`); // "number"
console.log(`0.1 + 0.2 === 0.3: ${0.1 + 0.2 === 0.3}`); // false
console.log(`0.1 + 0.2 === 0.300000004: ${0.1 + 0.2 === 0.300000004}`); // true

/*
  A entrada analógica se encaixa nos valores mais próximos a ser armazenados, ou seja, digital
  Ambos 0.1 e 0.2 são arredondados para os números disponíveis mais
  próximos. Os erros de arredondamento se acumulam, portanto, resumindo-os, não
  nos dá exatamente 0.3.
*/

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Special Numbers ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0

/*
  Destes números especiais, NaN é particularmente interessante. NaN, que é o
  resultado de 0 / 0 e outras matemáticas inválidas, significa "não é um número".
*/

console.log(`typeof NaN: ${typeof NaN}`); // "number"

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 BigInts ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
let alot = 9007199254740991n;
console.log(`BigInt: ${alot + 1n}`);
/*
  - Ótimo para cálculos financeiros em que a precisão é especialmente importante.
  - há um número infinito de BigInts - um para cada número inteiro em matemática.
*/

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Strings ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
console.log(typeof 'こんにちは'); // "string"
console.log(typeof 'こんにちは'); // "string"
console.log(typeof `こんにちは`); // "string"
console.log(typeof ''); // "string"
let cat = 'Cheshire';
console.log(`\n\ncat.length: ${cat.length}`); // 8
console.log(`cat[0]: ${cat[0]}`);
console.log(`cat[1]: ${cat[1]}`);
cat[0] = 'HH';
console.log(`cat[0] = 'HH': ${cat[0]}`);
/*
  - Strings são primitivas e imutáveis
*/

// let isStringAnwer = prompt('Your name'); Typeerror
// console.log(isStringAnwer);

/*
  Fora do nosso modelo mental, a resposta depende de uma implementação
  específica. Se uma sequência é representada como um único bloco de memória,
  vários blocos ou uma corda , depende do mecanismo JavaScript
*/

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Symbols ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
let isSymbol = Symbol();
console.log(`\nisSymbol: ${typeof isSymbol}`);

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Objects ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
console.log(`typeof({}) => ${typeof {}}`);
console.log(`typeof([]) => ${typeof []}`);
console.log(`typeof(new Date()) => ${typeof new Date()}`);
console.log(`typeof(/\d+/) => ${typeof /\d+/}`);
console.log(`typeof(Math) => ${typeof Math}`);

/*
  - Objetos incluem arrays, datas, RegExps e outros valores não primitivos.
  - Podemos acessá-los a partir de . e []
*/

let getNameRapper = { name: 'Malicious' };
console.log(`\ngetNameRapper => ${getNameRapper.name}`);

getNameRapper.name = 'Malice';
console.log(`getNameRapper => ${getNameRapper.name}`);

getNameRapper['name'] = 'No Malice';
console.log(`getNameRapper => ${getNameRapper.name}`);

// Criando objetos literais:
let shrek = {};
let donkey = {};

// Sobre destruir objects
const obj = {};
//obj = null; // TypeError: Assignment to constant variable. Não podemos destruir um objeto
delete obj; // {}

// ---
// ---

console.log(`\n◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️ 🚀 Functions ◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️◻️`);
// Função são valores?
for (let i = 0; i < 7; i++) {
  let dwarf = {};
  console.log(dwarf); // {} {} {} {} {} {} {}
}

for (let i = 0; i < 7; i++) {
  let dig = function() {
    // Do nothing
  };
  console.log(dig); // [Function: dig] [Function: dig] [Function: dig] [Function: dig] [Function: dig] [Function: dig] [Function: dig]
}
// O snippet acima contém uma definição de função no código, mas cria sete valores de função
/*
- Objetos: um valor para cada literal de objeto que executamos.
- Função: Um valor para cada definição de função que executamos.
*/
