// * Escopo léxico: capacidade da função lembrar do ambiente em que foi criada.

// * No ES6, existem 3 tipos de escopo: escopo global, escopo de função e escopo de bloco

function init() {
  const exemple = "Essa variável";
  return function() {
    console.log(`1 - o valor da variável exemple é: ${exemple}`);
    return function() {
      console.log(`1 - o valor da variável exemple é: ${exemple}`);
      return function() {
        console.log(`1 - o valor da variável exemple é: ${exemple}`);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();
initFn3();

// or

init()()()(); // não usar

// ------------------------------------------------------------------------------------------------------

/* A combinação de uma função e a referência ao seu estado externo é uma
closure.Uma aplicação comum de closures são os IIFEs: */
(function() {
  const a = 1;
})();

const b = 2;
console.log(this.a, b); // variável a é privada, pois está em uma função aninhada

// o processo acima é igual a:
function initHello() {
  const x = 5;

  function hello() {
    const y = 3;
    console.log("O número é: ", x);
  }
  hello(); // não consegue pegar pois é privada dentro de outra função
  // console.log("b", y); // não é mais alcançavel
}

initHello();
// hello();

/* A função de dentro (hello) tem acesso ao escopo externo dela (init). Porém, ao sairmos de
init, perdemos a visibilidade da função hello. */

// QUAL A IMPORTÂNCIA?
/* A capacidade de esconder informações também conhecida como: data privacy. Isso é essencial
para que possamos esconder informações que deveriam ser privadas e programar para uma
interface e não para uma implementação. */
