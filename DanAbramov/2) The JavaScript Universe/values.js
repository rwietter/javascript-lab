// ------------ Question 1 ------------
console.log(`
    Number: ${typeof 9 || 3.45 || -4}
    String: ${typeof 'JavaScript'}
    Boolean: ${typeof true || false}
    Null: ${typeof null}
    Symbols: ${typeof Symbol('id')}
    BigInts: ${typeof 12n}
    Undefined: ${typeof undefined} 
    Object: ${typeof {}}
    Array: ${typeof []}
    Functions: ${typeof (x => x * 2)}
`)

// ------------ Question 2 ------------
const dateValue = value => {
  /* Return false. Typeof value is number and 'date' is string */
  return typeof value === 'date'
}
dateValue(2020)

// ------------ Question 3 --------------
console.log(typeof null)
/* Null is a value that does not exist, should return 'null'. But in JavaScript, due to
an error in ECMAScript, null points to an object. */

console.log(typeof typeof value) // string
/*
Sabemos que typeof(value)sempre nos dá uma das strings predeterminados: "undefined",
"boolean", "number", e assim por diante. Strings predeterminadas. Então typeof qualquer
um deles é "string". Porque são strings!
*/
