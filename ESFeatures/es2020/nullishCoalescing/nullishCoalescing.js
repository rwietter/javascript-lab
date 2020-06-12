/*
 * No JavaScript, são falsos 'strings vazias', 'número 0', 'undefined', 'null', 'false', 'NaN'.
 * Verificar se um valor é nulo
 */

console.log(false ?? "hello"); // false
console.log(undefined ?? "hello"); // hello
console.log(NaN ?? "hello"); // NaN
console.log(null ?? "hello"); // hello

/** More */

let obj = {
  planet: "earth",
  moon: undefined,
};

let isNull = obj.moon ?? "moon";
console.log(isNull); // moon

isNull = obj.moon || "moon";
console.log(isNull); // moon

isNull = NaN ?? "Moon";
console.log(isNull); // NaN

isNull = NaN || "Moon";
console.log(isNull); // Moon

/*
 Nullish Coalescing return a value !== null or undefined
 O operador OR sempre retorna um valor verdadeiro, enquanto o operador nulo retorna um valor não nulo
*/
