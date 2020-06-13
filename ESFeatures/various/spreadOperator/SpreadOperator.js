// Funções não devem ter efeito colateral
// Funções devem ser imutáveis para não causar bugs

// Evite
var numbers = [7, 8, 9];
const addNumberToArray = (...number) => {
  numbers = numbers.concat(number);
  return numbers;
};
console.log(addNumberToArray(1, 2, 3));
// Neste caso uma reatribuição global, sobreescrevendo o array, e gera um side effect

// Prefira Spread Operator
// Resolução: retornar um novo array cópia
var numbers = [1, 2, 3];
const addNumberToArraySpreadOperator = number => [...numbers, number];
console.log(addNumberToArraySpreadOperator(5, 6));

/*
concat cria um novo array unindo todos os elementos que
foram passados como parâmetro, na ordem dada, para cada
argumento e seus elementos (se o elemento passado for um array).

- Para concatenar um novo elemento para o array, use number
- Para concatenar um novo array de elementos passados por parâmetro, use ...number
*/
