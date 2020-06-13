function soma(sum1, sum2) {
    return sum1 + sum2
}

soma(1, 3)
soma(1, 4)
soma(1, 5)
soma(1, 6)
// A função repetida acima pode ser refatorada por curryng quando o elemento se repete

// Curryng na prática
function sum(a) {
    return function(b) {
        return a + b
    }
}
const sumB = sum(1)
sumB(3)
sumB(4)
sumB(5)
sumB(6)
// em suma, a sum(1) passa para a function sum(1) que retorna (a) = 1, assim, sumB é igual a sumB + a(1)

// ---------------------------------------------------------------------------------------------------

function produto(a) {
    return function(b) {
        return a * b
    }
}
const dobro = produto(2)
console.log(dobro(8))
console.log(produto(2)(8))

// ---------------------------------------------------------------------------------------------------

const prod = a => b => a * b

const dobR = prod(2)
console.log(dobro(8))
console.log(prod(2)(8))

/* Currying é o processo de transformar uma função que espera vários argumentos em
uma função que espera um único argumento e retorna outra função curried */
