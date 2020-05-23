let arr = [1,2,3,4,5,6,7,8,9]

const forEachMultiply = (arr) => {
  arr.forEach(el => console.log(el * 2));
}
forEachMultiply(arr);

console.log('\n\n');	

const forEachIndex = (arr) => {
		arr.forEach(function (el, i) {
		console.log(el, i);
	})
}
forEachIndex(arr);

/*
 * forEach itera sobre objetos e array e retorna uma função com o valor e o índex
 */
