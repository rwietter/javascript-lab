const arr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4]
console.log(arr.reduce((agg, el) => agg + el(agg), 1))
console.log(arr.reduce((acc, curr) => acc + curr(acc), 2))
// console.log(arr.reduce((30, 4) => 30 + 4(30), 1));

const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer))
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5))
// expected output: 15

// - Reduce: acumula o valor do array, pega o indice do array e faz o acumulador vezes o indice por N vezes
/*
    1 + 1 * 1 = 2
    2 + 2 * 2 = 6
    6 + 6 * 3 = 24
    24 + 24 * 4 = 120
*/
