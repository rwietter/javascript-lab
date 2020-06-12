let regExp = /\d{0,1}[0-9]-\d{0,1}[0-9]-\d{0,3}[0-9]$/g;
let str = "19-11-2012";
let iterator = str.matchAll(regExp);
Array.from(iterator, (result) => console.log(result)); // 19-11-2012

// -------------------

regExp = /[a-c]/g;
str = "abc";
iterator = str.matchAll(regExp);
Array.from(iterator, (result) => console.log(result)); // 19-11-2012
