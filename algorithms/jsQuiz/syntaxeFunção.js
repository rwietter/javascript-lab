//myF(val1)(val2) // Função de ordem superior

/*
    Esse é um padrão comum para uma função de ordem superior.
    Se myFunc(val1)retornar uma função, essa função será
    chamada val2como argumento. Aqui está um exemplo disso
    em ação que você pode experimentar:
*/
const mySum = hi => {
    return she => {
        return he => {
            return she * hi * he
        }
    }
}
console.log(mySum(2)(4)(5)) // 40
