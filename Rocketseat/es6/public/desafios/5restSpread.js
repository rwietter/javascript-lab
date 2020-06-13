const arr = [1, 2, 3, 4, 5, 6]
const [firstElement, ...rest] = arr
console.log(firstElement)
console.log(rest.reverse())

// ---
const getSumToDestructuring = ([...test]) => {
  const reduce = test.reduce((total, next) => {
    return total + next
  })
  return reduce
}
console.log(getSumToDestructuring([6, 9, 3, 4]))

// ---

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  },
}

console.log(name, res)
