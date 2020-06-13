// ------------------------------------------------------------------------------------------------------------
// FUNÇÕES
const square = function(x) {
  return x * x;
};
console.log(square(99));

// nenhum parâmetro
const makeNoise = function() {
  console.log("Pling!");
};
makeNoise();

// série de parâmetros, binário 1111111111
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

// ------------------------------------------------------------------------------------------------------------
/*
VARIÁVEIS LOCAIS E GLOBAIS: 
- Uma propriedade importante das funções é que variáveis definidas dentro do "corpo" delas, incluindo seus
parâmetros, são locais à própria função.
- Variáveis declaradas fora do contexto de alguma função são chamadas de globais (não locais), pois elas
são visíveis em qualquer parte da aplicação.
*/
let x = "outside";
const f1 = function() {
  const x = "inside f1";
};
console.log(x);
// → outside

const f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
// → inside

// ------------------------------------------------------------------------------------------------------------
/*
ESCOPO ANINHADO: 
- O JavaScript não se distingue apenas pela diferenciação entre variáveis locais e globais. Funções também podem
ser criadas dentro de outras funções, criando vários níveis de “localidades".
*/

const landscape = function() {
  let result = "";
  const flat = function(size) {
    for (let index = 0; index < size; index++) {
      result += "_";
    }
  };
  const mountain = function(size) {
    result += "/";
    for (let index = 0; index < size; index++) {
      result += "'";
    }
    result += "\\";
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  return result;
};

console.log(landscape());

// ------------------------------------------------------------------------------------------------------------
/*
FUNÇÕES COMO VALORES:
- É possível armazenar um valor de função em um novo local, passá-lo como argumento para
outra função e assim por diante.
*/
const valueLaunch = 1;

let launchMissiles = function(valueLaunch) {
  valueLaunch.launch("now");
};
if (valueLaunch === 1) {
  launchMissiles = function(valueLaunch) {};
}
launchMissiles(valueLaunch);

// ------------------------------------------------------------------------------------------------------------
/*
  RESUMO GERAL
*/
function getName() {
  // função simples que retorna valor
  return "Maurício Witter";
}

function logFn(Fn) {
  // logFn recebe uma função por parãmetro e executa o log dela
  console.log(Fn());
}

// Função atribuída a uma variável pode ser logFn ou logFn();
const logFnResult = logFn;

logFnResult(getName);
