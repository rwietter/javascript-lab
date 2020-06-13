// rest parameters
// passando como ...numbers, a função converte em array
// BOA PRÁTICA: EVITAR PASSAR MAIS DE 2 ARGUMENTOS PARA FUNÇÃO

const sum = (...numbers) => {
  return numbers.reduce((accResult, currNumber) => accResult + currNumber);
};

console.log(sum(1, 2, 3, 4));

// FUNÇÃO COM MAIS DE 2 PARÂMETROS, PROVAVELMENTE FAZ MAIS DO QUE DEVIA FAZER
// BOA PRÁTICA: FAZER FUNÇÕES QUE RESOLVEM APENAS UM PROBLEMA ESPECÍFICO
// Rest Parameters podem ser combinados em Destructuring assignments de arrays.
