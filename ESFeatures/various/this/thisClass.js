class Cat {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
const myCat = new Cat('Loki')
console.log(myCat.getName()) // Loki

// => substituindo this com functions
const makeCat = name => ({
    getNameCat: () => name,
})
const myCatFunc = makeCat('Loki')
console.log(myCatFunc.getNameCat()) // Loki
