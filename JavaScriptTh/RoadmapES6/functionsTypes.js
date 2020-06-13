;() => {}

function test() {}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

/* Usada para retornar um objeto in-line ou não */
;() => ({})

function test() {
  return {}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

;() => {}

function test() {}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

let mouse = {
  describe: function describe() {
    return test
  },
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

function test() {}

function test() {}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

test =>
  test(function(test) {
    return test
  })

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Clousure
function addSquares(a, b) {
  function square(x) {
    return x * x
  }
  return square(a) + square(b)
}
a = addSquares(2, 3) // retorna 13
b = addSquares(3, 4) // retorna 25
c = addSquares(4, 5) // retorna 41

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-
// função anônima
function test(x, y) {
  alert(x + y)
}
5, 5 // Função para somar duas variáveis
