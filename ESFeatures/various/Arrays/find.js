// find
let arr = [
  'End-Game',
  'Infinity War',
  'Capitain Marvel',
  'The New Mutants',
  'Black Widow',
  'Morbius',
  'Venom 2',
  'The Eternals',
];

console.log(arr.find(el => el === 'The Eternals'));
console.log(arr.find(el => el.length < 12)); // returns '4 foot tail'
console.log(arr.find((el, idx) => typeof el === 'string' && idx === 2 )) // return 'Capitain Marvel'


/*
 * The find method doesn’t return a boolean, but instead returns the first matching element. If
 * there isn’t a matching element - as in nothing exists that meets the criteria defined in
 * your function - it will return undefined.
 * 
 * The find method returns an element, the first element that meets the condition
 */