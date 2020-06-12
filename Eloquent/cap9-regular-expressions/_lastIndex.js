let pattern = /y/g;
pattern.lastIndex = 3;

let match = pattern.exec("xyzzy");

console.log(match.index); // 4 fim da string
console.log(pattern.lastIndex);

// ------------

let global = /abc/g;
console.log(global.exec("xyz abc"));
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));

// efeitos colaterais de execuções anteriores
let digit = /\d/g;
console.log(digit.exec("Here it is: 1")); // '1'
console.log(digit.exec("and now: 1")); // null

// efeito colateral de match também acontece, evitar uso de regex global
console.log("Banana".match(/an/g)); // an, an
