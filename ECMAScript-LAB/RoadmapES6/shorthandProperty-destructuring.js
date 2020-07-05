// ================== ATRIBUÍÇÃO AUTOMÁTICA ==================

let furColor = 'brow'
let legs = 4

// No ES6, a engine faz a atríbuíção automática quando os nomes são iguias

let mouse = {
  furColor, // : furColor,
  legs, // : legs,
  tail: 'long, skiny',
  // função anônima
  describe: function describe() {
    return (
      `<p>A mouse with</p>` +
      this.forColor +
      'fur,' +
      this.legs +
      'legs, and a ' +
      this.tail +
      'tail.' +
      '</p>'
    )
  },
}

console.log(mouse.describe())

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const formatUser = (name, avatar) => ({
  name,
  avatar,
})
// Não precisa receber os argumentos, a atribuíção é automática
console.log(formatUser('Carlos', 'carlos.jpg'))

// ===================== DESESTRUTURAÇÃO =====================

let [firstNumber, secondNumber] = [1, 23, 4]
console.log('firstNumber, secondNumber: ', firstNumber, secondNumber)

let [, , treeNumber] = [1, 23, 4]
console.log('treeNumber: ', treeNumber)

const sumFirstandThirdNumber = ([firstNum, , , , fiveNum, sixNum = 0]) => {
  return firstNum + fiveNum + sixNum
}
// sixNum = 0 => default param, previne um erro de undefined
console.log('sumFirstandThirdNumber: ', sumFirstandThirdNumber([1, 2, 3, 4, 5]))

// obj

let person = { name: 'Carlos', secondName: 'reader', age: 5 }
let { name: firstName, secondName, age: yearsOld = 4 } = person
console.log(firstName, secondName, yearsOld)

// desetruturação de objetos aninhados
const movies = {
  marvel: {
    avengersInfinityWar: 2018,
    avengersEndGame: 2019,
  },
  dc: {
    aquaman: 2018,
    coringa: 2019,
  },
}
const {
  dc: { coringa },
} = movies
console.log(coringa)

const getName = ({ name = 'Unknown Name' } = {}) => name
console.log(getName({ name: 'Mauricio' }))
