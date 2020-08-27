const double = (x) => x * 2;
const getLength = (string) => string.length;

const map = (collection, fn) => collection.map(fn);

const messages = ['Hello', 'Bye'];

const partial = (...fns) => (collection) =>
  fns.reduce((acc, fn) => fn(acc), collection);

const mapToLength = (collection) => map(collection, getLength);
const mapToDouble = (collection) => map(collection, double);

const doubleLengths = partial(mapToLength, mapToDouble)(messages);

console.log(doubleLengths); // [10, 6]
