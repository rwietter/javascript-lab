const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

const obj = { a: 'x', b: 'y', c: 'z' }
const { a, b, c } = obj
console.log(obj)
console.log(a, b, c)

// - destructuring of object
const person = {
    name: 'Prids of Egyps',
    age: 34,
    movies: {
        name: 'Aquaman',
    },
}
const { name, age, movies } = person
console.log(name, age, movies)

// - destructuring of object on new name variable
const planets = {
    earth: 'Terra',
    mars: 'Marte',
    naturalSatelite: {
        earth: 'Lua',
        mars: 'mongoose',
    },
}
const {
    earth: terra,
    mars: marte,
    naturalSatelite: { earth, mars },
    region: orion = false,
} = planets
console.log(terra, marte, earth, mars, orion)
