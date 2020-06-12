// - são funções que operam sobre outras funções. seja tomando-as como argumentos ou devolvendo-as, são chamadas de funções de ordem superior.

const greatFunction = (number) => {
  return (greatThan) => greatThan * number;
};
const greatThan = greatFunction(2);
console.log(greatThan(6));

// -----------------------------------

function noisy(fun) {
  return function (...args) {
    console.log(`calling with ${args}`);
    let result = fun(...args);
    console.log(`called with ${args}, returned ${result}`);
    return result;
  };
}
const great = noisy(Math.max);
console.log(great(3, 2, 1));

// -----------------------------------

["A", "B"].forEach((l) => console.log(l));
