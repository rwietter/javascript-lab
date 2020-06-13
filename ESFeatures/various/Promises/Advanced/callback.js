const fs = require('fs')

console.log(1)

// --------------- Callback --------------------------------------
/*
 - Callback é um operação assíncrona de I/O => entra e saída
 - callback === chama de volta
 - callback é uma função que tem um erro no primeiro parâmetro, e o segundo o resolver
 - quando fazer uma requisição, o Js vai empilhar a requisição.
 - quando a leitura do arquivo estiver pronta, o Js vai retornar um callback
 - Callbacks criam problemas para manutenções futuras.
 */

const callReadFile = (err, contents) => {
    console.log(err, contents)
}

fs.readFile('../../CleanCode-and-ES6/SpreadOperator.js', callReadFile)

console.log(2)
console.log(3)
console.log(4)
