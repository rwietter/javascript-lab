const a = {
    firstName: 'Will',
}
const b = a
b.firstName = 'Peter'
console.log(a) // Peter => b aponta para a
