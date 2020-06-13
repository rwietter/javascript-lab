const user = {
  nome: 'rmwitterc',
  idade: 22,
  empresa: 'None',
}

const { nome, ...rest } = user
console.log(nome, rest)

function restParam({ idade, ...rest }) {
  return rest
}
console.log('Rest param function: ', restParam(user))

function sumRest(...rest) {
  return rest.reduce((total, next) => {
    return total + next
  })
}
console.log(sumRest(1, 2, 3, 4, 5))
/* SERVE PARA PPEGAR O RESTO DOS OBJETOS */
