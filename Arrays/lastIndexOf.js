const marvel = ['Avengers: Infinity War', 2018, 'Avengers: End-Game', 2019];

const getlastIndexOfMovies = marvel.lastIndexOf(2018, 2);
console.log(getlastIndexOfMovies); // returns 1

/**
 * This method starts in last element.
 * returns 1 if the element exists and -1 if it does not exist
 */

 // Syntax
lastIndexOf(searchElement: T, fromIndex ?: number): number;
