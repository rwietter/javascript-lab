const maxNumber = ([...numbers]) => {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
};

console.log(maxNumber([2, 8, 3, 1, 77, 34, 1, 2])); // 77

let solarSystem = [
  "Mars, ",
  "Saturn, ",
  "Jupiter, ",
  "Netuno, ",
  "Urano, ",
  "Pluto,",
];
console.log(`Sun, Mercury, Vênus, Earth, `, ...solarSystem); // Sun, Mercury, Vênus, Earth,  Mars,  Saturn,  Jupiter,  Netuno,  Urano,  Pluto,
