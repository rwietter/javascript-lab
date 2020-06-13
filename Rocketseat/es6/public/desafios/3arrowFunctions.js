const arr = [1, 2, 3, 4]
const arrMap = arr.map(item => {
  return item + 10
})
console.log('arrMap: ', arrMap)

// ---

const user = { nome: 'Hulk', idade: 48 }
const mostraIdade = user => user.idade
console.log('mostraIdade: ', mostraIdade(user))

// ---

const nome = 'Thor'
const idade = 36
const mostraUsuario = (nome = 'Hulk', idade = 99) => {
  return {
    nome,
    idade,
  }
}
console.log('mostraUsuario: ', mostraUsuario(nome))

// ---

const promise = () => {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}
console.log('promise: ', promise())
