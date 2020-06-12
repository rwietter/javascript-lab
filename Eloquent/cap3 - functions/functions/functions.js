/*
 * funções são essenciais no JavaScript, elas devem ser representar uma parte específica de uma tarefa, ou seja,
 * devemos criar funções abstratas para criar tarefas limpas e de  fácil entendimento.
 */

const getCalcSquare = (number) => number * number;
console.log(getCalcSquare(5)); // 25

// ---

const makeNoise = function () {
  console.log("Ping!");
};
makeNoise();

const getNumberInBase = (calcNumber, expoent) => {
  let baseResult = 1;
  for (let i = 0; i < expoent; i++) {
    baseResult *= calcNumber;
  }
  return baseResult;
};
console.log(getNumberInBase(2, 10));
