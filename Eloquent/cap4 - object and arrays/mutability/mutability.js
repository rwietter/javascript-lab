// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
//  Mutability
// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞

/* Números, strings e booleanos são todos imutáveis
 * Objetos funcionam de forma diferente. Você pode alterar suas propriedades */

let str = "cat";
console.log((str[0] = "r"), str); // r, cat

let object1 = { value: 10 };
let object2 = object1; // aponta para o objeto 1
let object3 = { value: 10 };
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false
object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

const score = { visitors: 0, home: 0 }; // This is okay
// score.visitors = 1; // This isn't allowed
// score = { visitors: 1, home: 1 };
