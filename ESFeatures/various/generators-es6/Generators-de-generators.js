// * retornar um generator a partir de outro generator delegando a execução de um para o outro.

/*
 * Para isso, usamos yield* , desta forma a execução de um generator vai ser delegada para outro. Se, por exemplo, quisermos um jeito bem chique de
 * quebrar a palavra TrainingCenter em um array, podemos utilizar um generator, já que strings aderem ao mesmo protocolo do iterable:
 */
function* generator() {
	yield* "TrainingCenter";
}

console.log([...generator()]);

// * spread operators conseguem iterar por objetos que implementam a interface iterable numa boa.
console.log([..."TrainingCenter"]);

// ! -------------------------------------------------------------------------------------------------

var foo = {
	// Construimos um iterator
	[Symbol.iterator]: () => ({
		items: ["f", "o", "o"],
		next: function next() {
			return {
				done: this.items.length === 0,
				value: this.items.shift()
			};
		}
	})
};

function* multiplicador(value) {
	// Criamos um multiplicador
	yield value * 2;
	yield value * 3;
	yield value * 4;
	yield value * 5;
}

function* trailmix() {
	// Misturamos tudo
	yield 0; // Vai printar só o 0
	yield* [1, 2]; // Vai iterar pelo array
	yield* [...multiplicador(2)]; // Vai iterar pelo array que é iterado quando retornado
	yield* multiplicador(3); // O mesmo do de cima
	yield* foo; // Itera pelo nosso iterador
}
console.log([...trailmix()]);
// <- [0, 1, 2, 4, 6, 8, 10, 6, 9, 12, 15, 'f', 'o', 'o']
