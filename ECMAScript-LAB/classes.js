// ? classes: criar objetos,

class MyClass {
	// @ Methods
	/*
	 * constructor cria e inicializa um objeto gerado à partir
	 * de uma classe, onde pode ser declarado as coisas principais
	 * que o objeto vai ter
	 */
	constructor() {}
	methodName = params => {};
	methodName(params) {}
}

// ! or

const myConst = class MyClass {};

// ! or

function MakeClass() {
	return class {};
}

// -----------------------------------------------------------

class Reptile {
	constructor(firstAppearence) {
		this.firstAppearence = firstAppearence;
		// * this === obj.firstAppearence = firstAppearence;
	}
	// * method
	getFirstAppearence() {
		return this.firstAppearence;
	}
	// * guetter: só retorna um value
	get firstTimeAppearance() {
		return this.firstAppearence;
	}
	// * set - shorthand: usado para setar um novo valor - mutação de dados (má prática)
	set newFirstAppearance(firstAppearence) {
		return this.firstAppearence;
	}
}
// * criando um class object e inicializando com "The Hobbit"
const smaug = new Reptile("The Hobbit"); // @ create a object {}
console.log(smaug);

// * method guetter:  podemos chamar o metodo como uma props
console.log(smaug.firstTimeAppearance);

// * set: seta um novo valor, aceita props como chamada
const newAppearance = (smaug.newFirstAppearance = "New appearance value");
console.log(newAppearance);

// -----------------------------------------------------------------
// ! 					Class com método estático
// -----------------------------------------------------------------

// Class com método estático
class Title {
	constructor(firstTitle) {
		this.firstTitle = firstTitle;
	}
	static classTitle() {
		return this.name;
	}
}
const title = Title.classTitle;
console.log(`Title: ${title}`);
/*
 * invocar nome da class, e então invocar seu método
 * Métodos estáticos são usado para implementar funções
 * que pertencem a classe, mas não pertecem aos objetos que ela cria
 */

// @ Métodos estáticos de sort, ordenção
// ? const sortedArticles = [...articles].sort(Articles.compare);
/*
 * Article { title: "CSS", date: 2019-01-01 }
 * Article { title: "HTML", date: 2019-01-01 }
 * Article { title: "JavaScript", date: 2019-01-01 }
 */

// -----------------------------------------------------------------
// ! 					Herança utilizando classes
// -----------------------------------------------------------------

class Dog {
	constructor(firstDog) {
		this.firstDog = firstDog;
	}
	getFirstDog() {
		return this.firstDog;
	}
}

// * Extends: cria subclasses ou classes derivadas, a subclasse herda as propriedas e métodos da classe pai
class Dragon extends Dog {
	constructor(firstDog) {
		super(firstDog);
	}
}

const dragonDog = new Dragon("A Dragon and Dog");
const resultDragonDog = dragonDog.getFirstDog();
console.log(resultDragonDog);

// -----------------------------------------------------------------
// ! 					Problems to use class
// -----------------------------------------------------------------
/*
 * classes não existem em javascript, elas são syntax sugar, isto é, uma
 * maneira mais "confortável" de se trabalhar com hernaça prototipal
 */
// ? X : não é possível ter metodos privados
// class Private {
// 	constructor(privateTess) {
// 		private this.privateTess = privateTess;
// }
// getFirstTess() {
// 	return this.privateTess
// 	}
// }
// * contorno: underscore
class Private {
	constructor(privateTess) {
		this._privateTess = privateTess;
	}
	getFirstTess() {
		return this._privateTess;
	}
}

// -----------------------------------------------------

// * Tight Coupling: Acoplamento e dependência entre classes
class MyClassTight {
	method1() {
		return "String from method1";
	}
	dontWant() {
		throw new Error("Nooooooo");
	}
}
class MyClassTightSub extends MyClassTight {
	method2() {
		return "String from method2";
	}
}
// ! Quero MyClassTight e MyClassTightSub, mas não quero dontWant
const instance = new MyClassTightSub();
const instanceTight = instance.dontWant();
console.log(instanceTight);
// ! aqui há um acoplamento, o que é indesejável. donstWant() não deveria ser possível de acessar
// ! Acoplamento e dependência são o problema da Orientação a Objetos

// @ RESOLVENDO O PROBLEMA
const MyClassTight = {
	method1() {
		return "String from method1";
	}
};
const dontWant = {
	dontWant() {
		throw new Error("Nooooooo");
	}
};
const method2 = {
	method2() {
		return "String from method2";
	}
};
const instanceResolution = { ...method1, ...method2 };
instanceResolution.method1();
instanceResolution.method2();

// * RESUMO USE COMPOSIÇÃO EM VEZ DE HERANÇA
