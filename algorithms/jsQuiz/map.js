const a = ['a', 'b', 'c']
const b = { a: 1, b: 2, c: 3 }

const result = a.map(index => b[index])
console.log(result) // [1,2,3]
// map só mapeia array

/*
    O map método criará uma nova matriz a partir de uma matriz existente,
    executando uma transformação especificada em cada item da matriz. Neste
    exemplo, cada letra é substituída pelo valor de um objeto correspondente.
*/
