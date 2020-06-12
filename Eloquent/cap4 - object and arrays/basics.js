// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
//  Methods
// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
console.log("------------ Methods ------------ :");
let doh = "Hemsworth";
console.log(doh.toLocaleUpperCase); // Function: toLocaleUpperCase
console.log(doh.toLocaleUpperCase()); // HEMSWORTH
console.log(doh.toLocaleLowerCase()); // hemsworth

// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
//  Arrays
// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞

console.log("\n------------ Arrays ------------ :");
let arr = [1, 2, 3, 4];
console.log(arr); // [ 1, 2, 3, 4 ]
arr.push(5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]

// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
//  Objects
// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞

console.log("\n------------ Objects ------------ :");
let day = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day); // full object
console.log(day.squirrel); // false
console.log(day.events); // full array
console.log(day.events[2]); // pizza
console.log((day.events[0] = "touch")); // touch

// descobrir quais props um object tem
let obj = {
  x: "SpaceX",
  k: "Nasa",
  j: "JPL",
};
console.log(Object.keys(obj)); // 'x', 'k', 'j'

// copiando um object para outro object
let object = {
  movie: "Avengers: infinity war",
  year: 2018,
  actors: "Iron Man",
};
console.log(Object.assign(object, { x: 1, actors: 600 })); // { movie: 'Avengers: infinity war', year: 2018, actors: 600, x: 1 }
