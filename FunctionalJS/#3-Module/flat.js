const array = [
  [1, 2, 3],
  [3, 2, 1],
]; // [ [ 1, 2, 3 ], [ 3, 2, 1 ] ]

// 'flatten the object'
const flattened = array
  .flat(Infinity); // [ 1, 2, 3, 3, 2, 1 ]

// flatMap => map the object and after flatten the object.
const arr = [1, 2, 3, 3, 2, 1];
const flattenedMapped = arr
  .flatMap((item) => [item * 12]); // [ 12, 24, 36, 36, 24, 12 ]
