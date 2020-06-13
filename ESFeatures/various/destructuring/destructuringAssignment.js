const arr = ['one!', 'two!', 'three!', 'four!']
let [one, two, ...rest] = arr

const obj = { a: 'x', b: 'y', c: 'z' }
const { a, b, c } = obj
console.log(obj) // { a: 'x', b: 'y', c: 'z' }
console.log(a, b, c) // x y z

// - destructuring of object
const person = {
    name: 'Prids of Egyps',
    age: 34,
    movies: {
        name: 'Aquaman',
    },
}
const { name, age, movies } = person
console.log(name, age, movies) // Prids of Egyps 34 { name: 'Aquaman' }

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
console.log(terra, marte, earth, mars, orion) // Terra Marte Lua mongoose false

// mozilla
console.log(`\n=============================`)
console.log(`DESTRUCTURING MOZILLA`)
console.log(`=============================\n`)

let k, z, resto
;[k, z] = [1, 2]
console.log('Array: ', k, z) // Array:  1 2
//--
;[k, z, ...rest] = [1, 2, 3, 4, 5]
console.log('Array k, z: ', k, z) // Array k, z:  1 2
console.log('Array rest: ', rest) // Array rest:  [ 3, 4, 5 ]
//--
;({ k, z } = { k: 77, z: 43 })
console.log('Object k, z: ', k, z) // Object k, z:  77 43
//--
;({ k, z, ...rest } = { k: 1, b: 2, c: 3, z: 4 })
console.log('object k, z, rest: ', k, z, rest) // object k, z, rest:  1 4 { b: 2, c: 3 }

// mozilla description
console.log(`\n=============================`)
console.log(`DESTRUCTURING MOZILLA DESCRIPTION`)
console.log(`=============================\n`)

let arr1 = [1, 2, 3, 4, 5]
let [a1, a2] = arr1
console.log(arr1) // [ 1, 2, 3, 4, 5 ]
console.log('desestruturação  array: ', a1, a2) // 1 2
//--

function f() {
    return [1, 2, 3]
}
const [r, ,] = f() // ignorando valores
console.log(r)
//--
var [m, ...n] = [1, 2, 3] // n recebe o resto
//--
let key = 'z'
let { [key]: foo } = { z: 'bar' }

console.log(foo) // "bar"
