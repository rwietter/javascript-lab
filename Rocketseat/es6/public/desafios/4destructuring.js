const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
}
const {
  nome,
  endereco: { cidade, estado },
} = empresa
console.log(nome, cidade, estado)

// ---

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos`
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
