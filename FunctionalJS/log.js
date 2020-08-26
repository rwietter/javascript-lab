const isEven = (x) => x % 2 === 0;
const filterOutOdd = (collection) => collection.filter(isEven);

const add = (x, y) => x + y;
const sum = (collection) => collection.reduce(add);

const compose = (f, g) => (collection) => f(g(collection));
const sumEven = (collection) => compose(sum, filterOutOdd)(collection);

const data = sumEven([1, 2, 3, 4]);

console.log('data => ', data);

// ------------------ Using rest operator ---------------------------
const composition = (...fns) => (input) =>
  fns.reduceRight((mem, fn) => fn(mem), input);

const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const result = composition(addOne, double, square)(2);
console.log(result);
