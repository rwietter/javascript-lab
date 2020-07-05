function logReturn(func, ...args) {
	console.log(func(...args));
}
logReturn(
	function(x, y) {
		return x * y;
	},
	5,
	5
);
/*
 * passa a uma função para outro, como parâmetro, armazena funções em variáveis.
 * Nesse caso, tratamos funções como valores, isso se chama lambda.
 * Usa-se in-line lambdas dentro de invocações de funções em javascript
 */
// ? Refatorando para Arrow-function temos:
function logReturnArrow(funcArrow, ...args) {
	console.log(funcArrow(...args));
}
logReturnArrow((x, y) => x * y, 5, 5);
// @ Arrow function: (x, y) => x * y

// --------------------------------------------------

const double = x => x * 2;
console.log("Arrow function concise: ", double(3));
// * Arrow function de um parâmetro não precisa de parenteses

// ---------------------------------------------------

// * block body - retorna um objeto literal
const getObj1 = (num1, num2) => {
	return {
		firstNumber: num1,
		secondNumber: num2
	};
};
console.log("Block body: ", getObj1(2, 6));

// * concise body
const sum = (num1, num2) => num1 + num2;
console.log("Concise bady: " + sum(4, 6));

// ---------------------------------------------------
// * Se quiser retornar um objeto literal usando concise body, usa-se ({})
const getObj = value => ({
	prop1: value
});
console.log("Concise body, literal object:", getObj(99));

// ---------------------------------------------------
// * Arrow functions não possuem this
