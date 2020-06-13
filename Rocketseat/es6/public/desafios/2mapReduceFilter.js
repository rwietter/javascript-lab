const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

/**
 * @param 2.1 Utilizando o map
 * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30] */
const getAgeUser = usuarios.map((item, index) => {
  return item.idade
})
console.log(getAgeUser)

/**
 * @param 2.2 Utilizando o filter
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }] */
const getBusinessAge18 = usuarios.filter((item, next) => {
  return item.idade > 18
})
console.log(getBusinessAge18)

/**
 * @param 2.3 Utilizando o find
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined */
const getBusinessWork = usuarios.find(item => {
  return item.empresa == 'Google'
})
console.log(getBusinessWork)

/**
 * @param 2.4 Unindo operações
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos: */
const setMultiplyAge = usuarios
  .map(item => {
    return {
      nome: item.nome,
      idade: item.idade * 2,
      empresa: item.empresa,
    }
  })
  .filter(item => {
    return item.idade < 50
  })
console.log('Age: ', setMultiplyAge)
