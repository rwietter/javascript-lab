/* --------------- Replace Names --------------- */
/* --------------------------------------------- */
let names = "Silva, Barbara\nCrazy, Alan\nCulture, Vintage";
let replacementNames = names.replace(/(\w+), (\w+)/g, "$2 $1");
console.log(`\n\nreplacementNames: \n${replacementNames}`);
// O $1 e $2 na cadeia de substituição se referem aos grupos entre parênteses no padrão, até $9

/* --------------- Replace Functions ----------- */
/* --------------------------------------------- */
let police = "the cia and fbi";
let replacePolice = police.replace(/\b(fbi|cia)\b/g, (str) =>
  str.toUpperCase()
);
console.log(`\n\nreplaceStr\n${replacePolice}`);
