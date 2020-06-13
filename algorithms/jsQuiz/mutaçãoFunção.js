const person = { firstName: 'David123' }

const getPerson = person => {
    person.valid = person.firstName.length > 5
    return person.valid
}
getPerson(person)
console.log(person.valid) // true => person = { firstName: "David123", valid: true }
console.log(person) // { firstName: 'David123', valid: true }
