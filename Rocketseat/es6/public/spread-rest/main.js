import { soma } from './spread-rest/funcoes'
class List {
  // constructor é o primeiro método executado toda vez que instânciar um objeto da classe
  constructor() {
    console.log(soma(1, 2))
    this.data = []
  }
  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}
class TodoList extends List {
  constructor() {
    super() // chama o construtor da classe pai
    this.user = 'Mauricio'
  }
  mostraUser() {
    console.log(this.user)
  }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
  MinhaLista.mostraUser()
}

// Métodos estáticos não precisa estânciar a classe, retornam um valor
class Math {
  static soma(a, b) {
    return a + b
  }
}
console.log(Math.soma(1, 6))

/**
 * Dependências:
 * @summary
 * - pnpm add @babel/cli
 * - pnpm add @babel/preset-env
 * - create .babelrc
 */
