// ! Ignorando valores
function f() {
    return [1, 2, 3]
}

var [a, , b] = f()
console.log(a) // 1
console.log(b) // 3

const ignore = ([, ,] = f())
console.log(ignore)

// ? Atribuir o resto do valor pra uma variável com ..rest
var [a, ...b] = [1, 2, 3]
console.log(a) // 1
console.log(b) // [2, 3]
