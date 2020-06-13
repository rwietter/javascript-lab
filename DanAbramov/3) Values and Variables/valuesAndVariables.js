let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); // 'yikes'

// Não posso mudar valores primitivos.

let arr = [212, 8, 506];
let str = 'hello';

console.log(arr[0]); // 212
console.log(str[0]); // "h"


arr[0] = 420;
console.log(arr); // [420, 8, 506]

str[0] = 'j';
console.log(str); // hello

/* Todos os valores primitivos são imutáveis. "Imutável" é uma maneira
latina sofisticada de dizer "imutável". Somente leitura. Você não pode
mexer com valores primitivos. Em absoluto. */

let fifty = 50;
fifty.shades = 'gray'; // No! não se pode mudar o tipo
// Como qualquer número, 50é um valor primitivo e você não pode definir propriedades nele.

// Contradição
let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // ?

// Para função se passa valor e não variável:
function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money); // 10


// * Variáveis ​​sempre apontam para valores
// * Para função se passa valor e não variável
// * Valores primitivos são imutáveis ( String, Numbers, Bools )

// =========================================================== //
// EXERCÍCIOS
console.log(`================================`);
let imutableValues = 10
console.log(typeof(imutableValues));
imutableValues = "eight"

console.log('================================');
let answer = true
answer.opposite = false
console.log(answer.opposite);

console.log('================================');
// null = 10
console.log(null);
console.log(`Null é um valor literal, já 10 é um number (valor primitivo),
logo não pode receber uma atribuição, pois null aponta para um objeto inexistente.
Null só pode ser comparado, mas não recebe atribuição`);

console.log('================================');
let pets = 'Tom and Jerry'
// feed(pets)
console.log(pets[1]);
console.log(`It can't because string is a primitive value, and writing is immutable.`);

let petsArray = ['Tom', 'Jery']
// feed(petsArray)
console.log(petsArray[0]);
console.log(`It may, because an array is not a primitive type, an array is mutable.`);
