(() => {
    console.log("----------- VAR -----------")
    const mensagemForaDoIf = "JavaScript";
    if (true) {
        var mensagemDentroDoIf = "TypeScript";
        console.log(mensagemDentroDoIf); // TypeScript ;
    }
    console.log(mensagemForaDoIf); // JavaScript

    console.log(mensagemDentroDoIf); // TypeScript
})();

// --------------------------------------------------------------------------

// nesse caso var é aceita, faz hoisting e recebe undefined, ou seja, var não respeita escopo de bloco
void(function() {
    console.log("\n----------- VAR HOISTING -----------")
    console.log(mensagem);
})();
var mensagem = 66;

// --------------------------------------------------------------------------

(() => {
    console.log("\n----------- LET -----------")
    if (true) {
        var escopoFuncao = "JavaScript";
        let escopoBloco = "TypeScript";

        console.log(`Bloco1 ${escopoBloco}`); // TypeScript
    }
    console.log(`Funcao ${escopoFuncao}`); // JavaScript
    // console.log(`Bloco2 ${escopoBloco}`); // ReferenceError: escopoBloco is not defined
})();
/*
> Acessar uma variável que foi declarada através da palavra-chave let fora do seu escopo, o erro...
  Uncaught ReferenceError: escopoBloco is not defined foi apresentado.

> Portanto, podemos usar tranquilamente o let, pois o escopo de bloco estará garantido.
*/


// ---------------------------------------------------------------------------------------------------------

// const
// Ainda assim, existe a possibilidade de declararmos uma variável com let e ela ser undefined. Por exemplo:

(() => {
    console.log("\n----------- LET UNDEFINED -----------")
    let mensagem;
    console.log(mensagem); // Imprime undefined 
})();

// declarar variável sem que recebe undefined ou defaul

(() => {
    console.log("\n----------- CONST -----------")
    if (true) {
        // const mesage = 'olá'; // 3 - ReferenceError: mesage is not defined
    }
    const mesage = 'olá';
    console.log(mesage);
    // const mesage = 'olá'; // 4 - ReferenceError: Cannot access 'mesage' before initialization
    // mesage = 'not hello'; // 1 -  não pode mudar de valor
})();
// const mesage = 'olá'; // 2 - ReferenceError: Cannot access 'mesage' before initialization

// * constantes devem ser inicializadas obrigatoriamente no momento de sua declaração
// * Graças ao hoisting, variáveis declaradas com a palavra-chave var podem ser utilizadas mesmo antes de sua declaração.

console.log("\n----------- CONST+ -----------");

const name = 'Carlos';

// name = 'XXXX'; // TypeError: Assignment to constant variable.

const user = {
    name: "YYY"
};

user.name = 'ZZZZ' // se const for object, podemos trocar suas propriedades

// Mas não podemos fazer o object 'apontar' para outro lugar
// user = {         // TypeError: Assignment to constant variable
//     name: "KKK"
// };

const persons = ['Guilherme', 'pedro', 'pluto'];

persons.push("João");

console.log(persons);
console.log(user);

persons.shift();
persons[1] = "Uma uva";

console.log(persons);
console.log(user);
