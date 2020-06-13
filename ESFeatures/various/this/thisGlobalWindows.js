console.log(global === this) // false
console.log(module.exports === this) // true

var a = 345

console.log(this.a) // undefined, no browser, this equivale a window || global
console.log(global.a) // undefined, this/window

const obj = {
    nome: 'Ana',
    falar: function() {
        return `Meu nome é ${this.nome}`
    },
}
console.log(obj.falar()) // Meu nome é Ana

// ! RESUMO
/*
! O node trabalha diferente do browser, ele é moldularizado e, por isso,
! this e global se comportam diferente no node do que no browser. 
! No browser, this equivale a windowss, no node equivale a module.exports
*/

// ------------ this referencia window ---------------------
function f() {
    // console.log(this) // window
}
f() // window

// ------------ this referencia o objeto ---------------------

const person = {
    firstName: 'Walker',
    lastName: 'Alan',
    nickName: 'W',
    getFullName() {
        const { firstName, lastName, nickName } = this // destructuring => this referência o objeto
        console.log(firstName) // Walker

        console.log(this.lastName + ' ' + this.firstName, this) // Alan Walker, this === objeto
        return `${firstName} ${lastName} ${nickName}`
    },
    printBio() {
        console.log(this)
        // const fullName = this.getFullName() // this.getFullName is not a function
        // console.log(`${fullName}`) // fullName is not defined
    },
    // => this com arrow function
    laugh: () => {
        console.log(this)
        console.log(`${this.nickName}`)
    },
}
person.getFullName() // Alan Walker
person.printBio() // Alan Walker

const printBio = person.printBio // Não use atribuição de method
printBio() // TypeError: this.getFullName is not a function

person.laugh() // windows => não usar this em arrow function
/* Ao usar Arrow function, o this referencia o escopo no qual é inserido,
ou seja, person está declarado no escopo global, logo, this referencia person que é global. */

// --------- O this depende do contexto de invocação -------------
