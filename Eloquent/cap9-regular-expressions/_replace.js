// Os valores com replace têm um método que pode ser usado para substituir parte da sequência por outra.
console.log('papa'.replace('p', 'm'));

let message = 'Sun'.replace(/[un]/g, 'ol'); // with /g replace global characters
console.log(message);

/* --------------- Replace Names --------------- */
/* --------------------------------------------- */
let names = 'Silva, Barbara\nCrazy, Alan\nCulture, Vintage';
let replacementNames = names.replace(/(\w+), (\w+)/g, '$2 $1');
console.log(`\n\nreplacementNames: \n${replacementNames}`);
// O $1 e $2 na cadeia de substituição se referem aos grupos entre parênteses no padrão, até $9

/* --------------- Replace Functions ----------- */
/* --------------------------------------------- */
let police = 'the cia and fbi';
let replacePolice = police.replace(/\b(fbi|cia)\b/g, (str) =>
  str.toUpperCase()
);
console.log(`\n\nreplaceStr\n${replacePolice}`);

/* --------------------- Stock ----------------- */
/* --------------------------------------------- */
let stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(math, amount, unit) {
  amount = Number(amount) - 1;
  if (amount === 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount === 0) {
    amount = 'no';
  }
  return amount + ' ' + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

/* --------------- Replace Comments  ----------- */
/* --------------------------------------------- */
function strip(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}
let comment = 'x += y // sum x = x + y';
console.log(strip(comment));

function test(x, y) {
  return x > y ? x : y;
}
