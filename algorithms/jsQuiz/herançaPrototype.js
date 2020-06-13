function Dog(name) {
    this.name = name
    this.speak = function() {
        return 'woof'
    }
}

const dog = new Dog('Pogo')

Dog.prototype.speak = function() {
    return 'arf'
}

console.log(dog.speak())

/*
  -  Sempre que criamos uma nova Doginstância, configuramos a speakpropriedade
  -  para essa instância como uma função retornando a string woof. Como isso
  -  está sendo definido toda vez que criamos uma nova Doginstância, nunca usamos
  -  a speakpropriedade prototypal Dogque retorna a arfstring.
*/
