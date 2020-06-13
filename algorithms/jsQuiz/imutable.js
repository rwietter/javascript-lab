const user = {
    name: 'Joe',
    age: 25,
    pet: {
        type: 'dog',
        name: 'Buttercup',
    },
}

Object.freeze(user) // - deixa user imutável
Object.freeze(user.pet) // - deixa pet imutável, objetos diferentes
user.pet.name = 'Daffodil'
user.name = 'Daffodil'
console.log(user.pet.name)
console.log(user)
