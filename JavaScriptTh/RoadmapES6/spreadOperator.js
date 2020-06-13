// ----------------------------------------------------
// - 				...spreadOperator
// ----------------------------------------------------

// * spread operator ... são prefixos de um objeto a ser desmebrado.
// * Prega um objeto iteravel e desmambra em objetos individuais.
// * Objeto iterável é qualquer objeto que possa iterar por ele, objeto, array, string.
const spreadOperator = (...args) => {};
// * permite passar vários argumento de uma só vez
const numbers = [71, 42, 56];
console.log(Math.max(numbers)); //! NaN
console.log(Math.max(...numbers)); // - 71

const myTopTwoSeries = [" Westworld", " Vikings"];
const spaceSeries = [
	"Star Trek Discovery",
	...myTopTwoSeries,
	"Perdidos no espaço"
]; // .concat
// * da mesma forma funciona em objetos
console.log(`spaceSeries: ${spaceSeries}`);

// ! o que não funciona com ...spread
/* 
- const willGonnaFail = ...myConst; // 1, 2, 4
*/
const bill = {
	ahe: 21,
	toys: {
		favorite: "Ball",
		lessUsed: "Kangaroo"
	}
};
// * Correção disso:
const apolloOp = {
	...bill,
	toys: {
		...bill.toys
	}
};
const apollo = { ...bill };

bill.toys.favorite = "anything";
console.log(`Bill favorite toy: ${bill.toys.favorite}`);
console.log(`Apollo favorite toy: ${apollo.toys.favorite}`); // ! apollo referência bill, ao mudar bill, apollo muda tbm
console.log(`Apollo favorite toy: ${apolloOp.toys.favorite}`); // * correct
