class f {
    constructor(value) {
        this.prop1 = value
    }
    isThisEqualObj() {
        console.log(this === obj) // true => this referencia o objeto que foi criado a partir dessa class
        setTimeout(() => {
            console.log(this === obj) // true
        }, 1000)
    }
}
const obj = new f('value') // this referencia <= obj
obj.isThisEqualObj() // true
