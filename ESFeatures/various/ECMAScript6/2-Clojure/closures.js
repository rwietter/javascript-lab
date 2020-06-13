/* A combinação de uma função e a referência ao seu estado externo é uma
closure.Uma aplicação comum de closures são os IIFEs: */
(function() {
  const a = 1;
})();

const b = 2;
console.log(this.a, b); // variável a é privada, pois está em uma função aninhada

// o processo acima é igual a:
function init() {
  const x = 5;
  function hello() {
    const y = 3;
    console.log("O número é: ", x);
  }
  hello(); // não consegue pegar pois é privada dentro de outra função
  // console.log("b", y); // não é mais alcançavel
}

init();
// hello();

/* A função de dentro (hello) tem acesso ao escopo externo dela (init). Porém, ao sairmos de
init, perdemos a visibilidade da função hello. */

// QUAL A IMPORTÂNCIA?
/* A capacidade de esconder informações também conhecida como: data privacy. Isso é essencial
para que possamos esconder informações que deveriam ser privadas e programar para uma
interface e não para uma implementação. */
