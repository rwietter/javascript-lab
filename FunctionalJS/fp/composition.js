// --------------------- Basic composition ---------------------
const increment = (x) => x + x;
const double = (k) => k * k;

const data = increment(double(2));
console.log(data);

// --------------------- composition ---------------------
const isEven = (x) => x % 2 === 0;
const filterOutOdd = (collection) => collection.filter(isEven);

const add = (x, y) => x + y;
const sum = (collection) => collection.reduce(add);

const compose = (f, g) => (collection) => f(g(collection));
const sumEven = (collection) => compose(sum, filterOutOdd)(collection);

const data = sumEven([1, 2, 3, 4]);

console.log('data => ', data);
