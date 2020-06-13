const jungle = [
  { name: 'frog', threat: 0 },
  { name: 'monkey', threat: 5 },
  { name: 'gorilla', threat: 8 },
  { name: 'lion', threat: 10 },
];

const getJungle = jungle.filter(el => el.threat > 5);
console.log(getJungle); // returns [ { name: 'gorilla', threat: 8 }, { name: 'lion', threat: 10 } ]

const movies = ['Infinity War', 'EndGame', 'Venom', 'Capitain Marvel'];
console.log(movies.filter(el => el === 'EndGame')); // return [ 'EndGame' ]

/*
 * This method filters the search on the matrix or object and returns the values ​​that fit the conditional.
 * filter() always returns an array, even if there is only one matching element.
 */

// Syntax
filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
