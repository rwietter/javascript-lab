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


// Compose + Partial Application
const multiplyBy = (value) => value * 2;
const add = (value) => value + 1;

const compose = (...fns) => (data) => fns.reduce((mem, fn) => fn(mem), data)

const calculate2 = compose(add, multiplyBy);
console.log(calculate2(2)); // 6


// Normal
const calculate1 = (x) => (x + 1) * 2;
console.log(calculate1(2)); // 6



// pipe
// Traditional way, no composition
const activeProjectsDetails1 = projects => {
  const active = projects.filter(project => project.isActive)
  const detailsOnly = projects.map(project => pickProjectDetails(project))
  return orderBy(detailsOnly, ['updatedAt'])
}

// Composition
const activeProjectsDetails2 = projects => pipe(
  filter(isActive),
  map(pickProjectDetails)
  orderBy(['updatedAt']),
)(projects)
