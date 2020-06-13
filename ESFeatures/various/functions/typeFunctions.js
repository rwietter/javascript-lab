// -------------- função literal -------------
function fun1() {}

// -------------- função em variável -------------
const fin2 = function() {}

// -------------- função anônima armazenada em array -------------
const arr = [
    function(a, b) {
        return a + b
    },
    fun1,
    fin2,
]
console.log(arr[0](1, 2))

// -------------- armazenar função em objeto -------------
const obj = {}
obj.falar = function() {
    return 'Opa'
}
console.log(obj.falar())

// ------------- passar função como parametro -------------
function run(fun1) {
    fun1()
}
run(function() {
    console.log('Executando')
})

// -------------- função que retorna função -------------
function sum(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
sum(2, 3)(4)
