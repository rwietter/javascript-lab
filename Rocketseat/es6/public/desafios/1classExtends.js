class Usuario {
  constructor(email, senha) {
    this.email = email
    this.pass = senha
  }
  isAdmin() {
    if (Usuario === Adm1.admin) {
      return true
    } else {
      return false
    }
  }
}

class Admin extends Usuario {
  constructor() {
    super()
    this.admin = true
  }
}

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')

console.log('user: ', User1.isAdmin())
console.log('adm: ', Adm1.isAdmin())
