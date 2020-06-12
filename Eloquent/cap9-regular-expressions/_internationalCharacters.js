console.log(/🍎{3}/.test("🍎🍎🍎"));

console.log(/<.>/.test("🌹"));

console.log(/<.>/u.test("<🌹>")); // u => unicode

// -----------------------

console.log(/\p{Script=Greek}/u.test("α")); // → true
console.log(/\p{Script=Arabic}/u.test("α")); // → false
console.log(/\p{Alphabetic}/u.test("α")); // → true
console.log(/\p{Alphabetic}/u.test("!")); // → false

// a notação \p{Property=Value} corresponder a qualquer caractere que tenha o valor fornecido para essa propriedade.
