const squirrel = require("./index.json");

let string = JSON.stringify(squirrel); // converte de javascript para json
console.log(string);

let stringParse = JSON.parse(string).events; // converte de json para javascript
console.log(stringParse);
