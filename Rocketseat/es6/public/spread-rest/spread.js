const arr = [9, 7, 5, 4]
const arrn = [6, 2, 6, 2]

const concat = [...arr, ...arrn]
console.log(concat)

const user = {
  nome: 'Mauricio',
  idade: 22,
  like: 'Marvel',
}

const getUser = { ...user, nome: 'rmwitterc' } // sobrepor um valor da cópia
console.log(getUser)
