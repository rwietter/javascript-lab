// * Generator functions retornam generator objects

// ? Generator functions(objects):
// @ se g é um generator object então: Array.from(g), [...g], for valor of g

// * Uma generator function permite que você declare um tipo especial de iterator que pode suspender sua própria execução enquanto retém o seu próprio contexto.
function* generator() {
	// ? Veja que uma função do tipo generator tem um * depois da sua definição, isto é a sintaxe que define este tipo de construto da linguagem.
	yield "f";
	yield "o";
	yield "o";
}

// ! ---------------------------------------------------------------------------------------------------------------------------------------------------

// * Apresentando, Yield;
// * Sempre que chamamos uma expressão yield , o valor do iterator é emitido como um evento e a execução da função é suspensa. Isso mesmo que você ouviu, podemos “pausar” o código enquanto esperamos um retorno.

function* generator() {
	yield "f";
	console.log("o");
	yield "o";
	console.log("b");
	yield "a";
	console.log("r");
}

console.log("\nFoobar: ");
let gen = generator();
for (let letra of gen) {
	console.log(letra);
	// 'f'
	// 'o'
	// 'o'
	// 'b'
	// 'a'
	// 'r'
}

/*
 * Isso acontece porque estamos iterando por todos os yield de dentro do nosso generator, a cada yield temos uma letra que nos
 * é retornada e, logo em seguida, rodamos um console.log , depois temos outro yield , então mais uma vez a função é suspensa
 * esperando continuação. Esta continuação nos é dada pelo for … of . Mas e se a gente utilizar um spread operator?
 */

console.log("\nObr: ");
var foo = generator();
console.log([...foo]);
// o
// b
// r
// [ 'f', 'o', 'a' ]

/*
 * As coisas ficaram um pouco diferentes aqui não é? Pode ser meio inesperado, mas é assim que eles funcionam, tudo
 * que não está com um yield acaba se tornando um efeito colateral. No momento que a nossa sequência (com yield ) está
 * sendo construída, os console.log que intercalamos entre eles vão sendo executados e printam as letras no console antes
 * que o nosso generator possa ser iterado pelo spread.
 *
 * Isto é diferente do exemplo com for ... of porque, nele, nós estamos printando os caracteres a medida que eles são
 * puxados da sequência, aqui neste caso, o spread operator espera toda a sequencia estar pronta antes de poder printá-la.
 */

console.log("\n");
// !--------------------------------------------------------------------------------------------------------------------------------------------------

// * ------- Os generator objects seguem os protocolos definidos do iterable e iterator, o que significa que podemos fazer isso aqui:
let g = generator(); // ? Um objeto generator chamado de g é construido usando a função generator que definimos antes

console.log(typeof (g[Symbol.iterator] === "function")); // ? É considerado um iterator porque temos um método @@iterator
console.log(typeof (g.next === "function")); // ? Também é um iterator porque temos um método next()
console.log(g[Symbol.iterator]() === g); // ? O iterador do objeto criado pelo generator é o objeto em si, ou seja, ele mesmo é um iterador

console.log([...g]); // ? ['f', 'o', 'o']
console.log(Array.from(g)); // ? ['f', 'o', 'o']
