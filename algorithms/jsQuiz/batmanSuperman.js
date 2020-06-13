const superheroMaker = a => {
    console.log(a instanceof Function)
    return a instanceof Function ? a() : a
}

console.log(superheroMaker(() => 'Batman')) // Batman
console.log(superheroMaker('Superman')) // Superman

/*
	Ao passar () => 'Batman'para superheroMaker, aé uma instância de Function.
	Portanto, a função é chamada, retornando a string Batman. Ao passar
	'Superman'para superheroMaker, anão é uma instância de Functione, portanto,
	a string 'Superman'é retornada. Portanto, a saída é Batmane Superman.
*/
