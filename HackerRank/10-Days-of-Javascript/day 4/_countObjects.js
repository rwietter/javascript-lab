const dataObjects = [
  {
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 3,
  },
  {
    x: 3,
    y: 3,
  },
  {
    x: 3,
    y: 4,
  },
  {
    x: 4,
    y: 5,
  },
];

const getCountEquals = (objects) => {
  let countEquals = 0;
  objects.forEach((obj) => {
    if (obj.x === obj.y) countEquals++;
  });
  return countEquals;
};
console.log(getCountEquals(dataObjects));

/* -------------- Refactoring -------------- */
/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */

const getCount = (objects) => objects.filter(({ x, y }) => x === y).length;
console.log(getCount(dataObjects)); // 2
