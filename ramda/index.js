
// Example from https://github.com/loop-recur/FPJS-Class/blob/master/part1_exercises/exercises/compose/compose_exercises.js

// We can use ramda to avoid writing all helpers ourselves
const R = require('ramda')

var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

const fastestCar = cars => {
  const sorted = R.sortBy(car => car.horsepower, cars)
  const fastest = R.last(sorted)
  return fastest.name
}

// Let's make this point-free using `compose` and `prop` that we discussed earlier:
const fastestCarPF = R.pipe(
  R.sortBy(R.prop('horsepower')),
  R.last,
  R.prop('name')
)

console.log(fastestCarPF(CARS))
