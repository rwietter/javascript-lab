let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eightnetteen\+/;

// ------------ Testando matches ------------ //
// ----------------------------------------- //
console.log(/abc/.test("abcde")); // true
console.log(/abc/.test("abxde")); // false

// --------- Procurando por dígitos --------- //
// ----------------------------------------- //
console.log(/[0123456789]/.test("in 1996")); // true
console.log(/[0-9]/.test("in 1992")); // true
console.log(/\d/.test("in 1992")); // true
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("19-05-2020 12:02")); // true

// ----- Correspondência de caracteres ------ //
// ----------------------------------------- //
let isBinary = /[^01]/;
console.log(isBinary.test("0101010121010101111011")); // true => não é binário
console.log(isBinary.test("100101101010")); // false => é binário

// ----- Repetindo partes de um padrão ------ //
// ----------------------------------------- //
let plus = /'\d+'/;
let multiply = /'\d*'/;
console.log(plus.test("'123'")); // true
console.log(plus.test("''")); // false
console.log(multiply.test("'123'")); // true
console.log(multiply.test("''")); // false

// ----------------- Opcional --------------- //
// ----------------------------------------- //
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); //true
console.log(neighbor.test("neighbor")); // true

// ----------------- Intervals -------------- //
// ----------------------------------------- //
let pattern = /\d{1}-\d{2}-\d{4} \d{2}:\d{2}/;
console.log(pattern.test("1-30-2020 19:30"));

console.log(/\d{4,}/.test("123")); // false | intervalo aberto de 4 dígitos pra cima
console.log(/\d{1,4}/.test("1236")); // true

// ------------------ Groups ---------------- //
// ----------------------------------------- //
let group = /boo+(hoo+)+/i;
console.log(group.test("hooboo")); // false
console.log(group.test("BoOhoOhoo")); // true

// ---------- Matches exec groups ----------- //
// ----------------------------------------- //
let match = /\d+/.exec("one two 100");
console.log(match); // [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index); // 8
console.log(/\d:\d+/.exec("1:45")); // [ '1:45', index: 0, input: '1:45', groups: undefined ]
console.log(/\d+/.exec("hello")); // null
console.log(match[0]); // 100

let quotedText = /'([^']*)'/i;
console.log(quotedText.exec("She said 'hello'")); // [ "'hello'", 'hello', index: 9, input: "She said 'hello'", groups: undefined ]
console.log(/bad(ly)?/.exec("bad")); // [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
console.log(/(\d)+/.exec("123")); // [ '123', '3', index: 0, input: '123', groups: undefined ]

/* -----------------------------------------
- A barra invertida finaliza a instrução;
- Sinais de adição significam algo e devem ter uma barra invertida se pretendem representar algo;
- test retorna um booleano, caso encontrar a expressão na string true, caso não, false;
- O array indica se há qualquer digito dentro de um string qualquer;

----------------------------------------- */
