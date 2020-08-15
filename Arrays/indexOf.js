let marvelMovies = [
  'End-Game',
  'Infinity War',
  'Capitain Marvel',
  'The New Mutants',
  'Black Widow',
  'Morbius',
  'Venom 2',
  'The Eternals',
];
const getIndexOfmarvelMovies = marvelMovies.indexOf('Black Widow');
console.log(getIndexOfmarvelMovies); // return 4

const getIndexStartsMarvelMovies = marvelMovies.indexOf('The Eternals', 3);
console.log(getIndexStartsMarvelMovies);

// find conditional is true of false
const getBooleanMarvelMovies = marvelMovies.indexOf('Aquaman');
console.log(getBooleanMarvelMovies); // return -1 === false

/*
 * This indexOf method returns the index of the search for elements of the array. The search starts at index zero if you do not enter the index number
 * If indexOf (searchElement: T, fromIndex?: Number): number; search starts at fromIndex: number
 */
