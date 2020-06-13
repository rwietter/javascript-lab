const myself = { firstName: "Matheus", lastName: "lucas" };

function printFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call(myself);
// call method

printFullName.apply(myself);
// apply method

/*
  As funções call e apply nos deixar invocar métodos como se
  estivéssemos no contexto de outro objeto.
  
  O primeiro parâmetro tanto de call quanto de apply é o próprio contexto, ou
  seja: o valor de this será exatamente o que você passar como parâmetro.
  Então qual a diferença entre eles? O segundo parâmetro.

  Enquanto apply aceita um array, call requer parâmetros divididos por vírgulas:
*/

const atSelf = {
  idade: 26
};

// eslint-disable-next-line no-plusplus
function isOlderThan() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(this.idade < arguments[i]);
  }
}

console.log("\n");
isOlderThan.call(atSelf, 30, 40, 15);
console.log("\n");
isOlderThan.apply(atSelf, [30, 40, 50]);
