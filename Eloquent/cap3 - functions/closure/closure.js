// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures

let wrapValue = (num) => {
  let local = num;
  return () => local;
};
let wrapOne = wrapValue(1);
let wrapTwo = wrapValue(2);
console.log(wrapOne(), wrapTwo());

/*
 * Closure => combinado com function as values, as closures são funções que são 'linkadas' com uma função interna de outra função,
 * elas permitem realizar tarefas semelhantes no mesmo código.
 */
let arrowSum = (x) => (y) => x + y;

let sum = (x) => {
  return function (y) {
    return x + y;
  };
};
let sumOne = sum(12);
let sumTwo = sum(5);
console.log(sumOne(6));
console.log(sumTwo(9));

/*
 * Não é sábio criar funções dentro de outras funções se o closure não for necessário para uma tarefa em particular, pois
 * ele afetará a performance do script de forma bem negativa tanto em velocidade de processamento quanto em consumo de memória.
 */
