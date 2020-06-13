const a = c => c
const b = c => c

console.log(typeof a, a == b, typeof b) // false
console.log(a(7) === b(7)) // true

/*
    No primeiro teste, ae bsão diferentes objetos na memória; não importa
    que os parâmetros e valores de retorno em cada definição de função
    sejam idênticos. Portanto, anão é igual a b. No segundo teste, a(7)retorna
    o número 7e b(7)retorna o número 7. Esses tipos primitivos são
    estritamente iguais um ao outro.
*/
