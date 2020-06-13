let a1 = {
    name: 'Johnny',
    hobby: 'football',
}

let b1 = 'Lisa prefers Johnny'

let c1 = ['Denny', 'Michelle', 'Chris R']

let a2 = a1 // { name: 'Johnny', hobby: 'football', }
let b2 = b1 // 'Lisa prefers Johnny'
let c2 = c1 // ['Denny', 'Michelle', 'Chris R']

a2.hobby = 'roofsitting' // { name: 'Johnny', hobby: 'roofsitting', }
b2 = 'Lisa prefers Mark' // 'Lisa prefers Mark' => não altera b1, não aponta b1
c2[2] = 'Doggy' // ['Denny', 'Michelle', 'Doggy']

console.log(a1.hobby) // roofsitting
console.log(b1) // 'Lisa prefers Johnny'
console.log(c1[2]) // 'Doggy'
