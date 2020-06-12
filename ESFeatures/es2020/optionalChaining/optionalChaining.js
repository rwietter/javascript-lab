const solarSystem = {
  star: "sun",
  planets: {
    mercury: 1,
    venus: 2,
    earth: 3,
    mars: 4,
  },
};

let sun = solarSystem.planets.jupiter;
let sunRise = solarSystem.juno?.saturn; // if not ?.saturn result in TypeError: Cannot read property 'saturn' of undefined
let sunSystem = solarSystem?.planets?.jupiter;

/* optional chaining + coalescing operator */
let sunPlanet = solarSystem?.planets?.jupiter ?? "Jupiter";

let funcPlanet = solarSystem.getPlanet?.(); // if not ?.() TypeError: solarSystem.getPlanet is not a function

console.log(sun); // undefined
console.log(sunRise); // undefined
console.log(sunSystem); // undefined
console.log(sunPlanet); // Jupiter

/*
 O Operador Optional chaining torna undefined um valor inexistente dentro de uma propriedade iniexistente
*/

let arr = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 3,
    y: 4,
  },
];

console.log(arr.map((item) => item.x?.y)); // [ undefined, undefined ]
