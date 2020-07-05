// * objects referenciam a prototypes, prototype podem referenciar outros prototypes até que o último da sequência seja null, isso é uma ascendencia.

const obj1 = {
	person01: {
		name: "Henrique",
		age: 25,
		address: "Rua Tuiuti",
		city: "São Paulo"
	}
}; // {{prototype}} __proto__

// ! __proto__ linked obj1 with obj2

const obj2 = {
	state: "SP"
}; // {{prototype}} __proto__

// ! __proto__ linked obj2 with obj3

const obj3 = {};

console.log(obj1.person01);
// * a engine cria uma linked list entre os object, então ela passa por todos até encontrar o valor ou retorna undefined

// ? constructor functions = maior performance
const customPrototype = {
	greet() {
		return `${this.greeting} guys`;
	}
};

function Greeting(term) {
	this.greeting = term;
}
const proto = (Greeting.prototype = new Greeting("Hi"));
console.log(proto);

// -----------------

const helloGreet = Object.create(customPrototype);
const hello = (helloGreet.greeting = "Hello");
console.log(hello);

// ------------------

const heyGreet = {
	greeting: "hey"
};
const hey = Object.setPrototypeOf(heyGreet, customPrototype);
// customPrototype torna-se __proto__ de heyGreet
console.log(hey);

// ! verificando se um prototype é referenciado por outro prototype:
console.log(customPrototype.isPrototypeOf(heyGreet));
